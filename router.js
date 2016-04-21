var router = require('routes')()
var h = require('virtual-dom/h')

module.exports = router

var tempString = "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and more. As the saying goes: 'two heads are better than one"

//navContent.map((navItem) => h('li', h('a', { href: '/' + navItem.uri }, navItem.tabName)))

function navGenerator(route) {
	var navContent = require('./data/nav-routes.js')
	var externalLinks = require('./data/external-links')
	/*
	function tabsGenerator(active) {
		navContent.map((navItem) => {
			if(route === navItem.uri) {
				return h('li', { class: 'active' }, h('a', {  href: navItem.uri }, navItem.tabName))
			} else {
				return h('li', h('a', { href: navItem.uri }, h('div', navItem.tabName)))
			}
		})

	}
	*/
	var externalList = externalLinks.map((link) => h('a', { href: link.uri }, h('i', { class: link.class, 'aria-hidden': 'true'})))
	var externalsDiv = h('div', { id: 'external-links' }, externalList )
	if (route === '/'){
		return h('div', { class: 'nav-container nav-home ' },  [
			h('ul', navContent.map((navItem) => h('li', h('a', { href:  navItem.uri }, h('div', navItem.tabName))))),
			externalsDiv	
		])
	} else {
		return h('div', { class: 'nav-container' }, [ 
			h('ul', [h('a', { href: '/' }, h('img', { src: 'img/profile-img.jpg' }))]
				.concat(
					navContent.map((navItem) => {
						if(route === navItem.uri) {
							return h('li', { class: 'active' }, h('a', {  href: navItem.uri }, navItem.tabName))
						 }else {
							return h('li', { class: 'in-active' }, h('a', {  href: navItem.uri }, navItem.tabName))
						}
					})
				)
			),
			externalsDiv 
		])
	}
}
router.addRoute('/', function(m) {
	var info = require('./data/home.js')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content' , id: 'home'}, [
			h('div', { class: 'content-box' }, [
				h('img', { src: info.img }),
				h('p', { class: 'quote' }, info.quote),
				h('h1', { class: 'name' }, info.name),
				h('span', { class: 'local' }, info.local),
				h('p', { class: 'blurb' }, info.blurb)
			])
		])
	])
})
/*
router.addRoute('/about', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'about' }, 'ABOUT')
	])
})
*/
router.addRoute('/education', function(m) {
	var education = require('./data/education.js')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'education' }, 
		[
			h('div', { class: 'content-box' }, [
				h('img', { id: 'seal', src: education.seal }),
				h('h2', { id: 'school-name' },  h('span', education.name)),
				h('h3', [ h('span', education.degree + ', ' + education.gradDate)]),
				h('div', { class: 'quote' }, education.quote),
				h('div', { class: 'author' }, education.author),
				h('div', { class: 'blurb' }, education.blurb)
			])
		])
	])
})
router.addRoute('/skills', function(m) {
	var skills = require('./data/skills')
	var skillsKeys = Object.keys(skills)
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'skills'  }, [
			skillsKeys.map(function(key) {
				return h('div', { class: 'skill-type content-box', id: key }, [
					h('h2', { class: 'sub-heading' }, key ),
					h('table', skills[key].map(function(skill) {
						return h('tr', [
							h('td', { class: 'skill-name' }, skill.name),
							h('td', { class: 'skill-score' }, function(){
								var starsLeft = skill.score
								var stars = []
								for(var i = 1; i <= 5; i++){
									if(starsLeft > 0) { 
										stars.push(h('i', { class: 'fa fa-star', 'aria-hidden': 'true'})) 
										starsLeft--
									}
									else { stars.push(h('i', { class: 'fa fa-star-o', 'aria-hidden': 'true' })) }
								}
								return stars
							}())
						])
					}))
				])
			})
		])
	])
})
function tagGenerator (content) {
	return  h('div', { class: 'tag-wrapper' }, content.tags.map((tag) => h('span', {class: 'tag' },  tag)))
}
router.addRoute('/projects', function(m) {
	var projects = require('./data/projects')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'projects' }, projects.map(function(project){
			return h('div', { class: 'project content-box' }, [
				h('div', { class: 'img-wrapper' }, h('a', { href: project.link }, (h('img', { src: project.img })))),
				h('div', { class: 'name sub-heading' }, project.name),
				h('p', { class: 'description' }, project.description),
				tagGenerator(project)
			])
		}))
	])
})
router.addRoute('/experience', function(m) {
	var jobs = require('./data/experience')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'experience' }, jobs.map(function(job){
			return h('div', { class: 'job content-box' }, [
				h('div', { class: 'employer' }, job.employer),
				h('div', { class: 'position' }, job.position),
				h('div', { class: 'postion' }, job.postion),
				h('div', { class: 'local' }, job.local),
				h('div', { class: 'start' }, job.start),
				h('span', { class: 'dash' }, '\u2014'),
				h('div', { class: 'end' }, job.end),
				h('p', { class: 'description' }, job.description),
				tagGenerator(job)
			])
		}))
	])
})

router.addRoute('/contact', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'contact' },
			h('div', { class: 'content-box' }, 
				h('form', [
					h('div', { class: 'name' }, [
						h('span', 'Name'),
						h('input', { type: 'text',  name: 'name' }),
					]),
					h('div', { class: 'email' }, [
						h('span', 'E-mail'),
						h('input', { type: 'text',  name: 'email' }),
					]),
					h('div', { class: 'message' }, [
						h('span', 'message'),
						h('input', { type: 'text',  name: 'message' }),
					])
				])
			)
		)	
	])
})
router.addRoute('/resume', function(m) {
	return h('div', { id: 'resume' }, [
		h('div', { id: 'resume-heading' }, [
			h('h1', 'Casey'),
			h('span', 'Oakland, CA'),
			h('a', { href: 'http://github.com/leptone' }, [
				h('img', { src: 'img/octocat.png', id: 'git-img' })
			])
		]),
		h('div', { id: 'resume-body' }, [
			h('form', h('input', { type: 'text', name: 'query' })),
			// SKILLS
			h('div', { id: 'skills' }, 
				[h('h2', { class: 'section-heading' },  'Skills')].concat(skillsKeys.map(function(key) {
					return h('div', { class: 'skill-type', id: key }, [
						h('h2', key ),
						h('ul', skills[key].map(function(skill) {
							return h('li', [
								h('span', { class: 'skill-name' }, skill.name),
								h('span', { class: 'skill-score' }, function(){
									var starsLeft = skill.score
									var stars = []
									for(var i = 1; i <= 5; i++){
										if(starsLeft > 0) { 
											stars.push(h('span', '# ')) 
											starsLeft--
										}
										else { stars.push(h('span', '. ')) }
									}
									return stars
								}())
							])
						}))
					])
				}))
			),
			// Education
			h('div', { id: 'education' }, [
				h('h2', { class: 'section-heading' },  'Education'),
				h('h3', { class: 'sub-heading' },  'University of California, Berkeley'),
				h('p', 'B.A. in Physics, December 2015')
			]),
			// Project
			h('div', { id: 'projects' }, [h('h2', { class: 'section-heading' },  'Projects')].concat(projects.map(function(project){
				return h('div', { class: 'project content-box' }, [
					h('div', { class: 'name' }, project.name),
					h('a', { href: project.link, class: 'project-link' }, project.link.substring(8)),
					h('div', { class: 'role'}, project.role),
					h('ul', { class: 'description' }, project.description.map(function(bulletPoint){
						return h('li', bulletPoint)
					
					}))
				])
			}))),
			// Experience
			h('div', { id: 'experience' }, [h('h2', { class: 'section-heading' },  'Work Expirence')].concat(jobs.map(function(job){
				return h('div', { class: 'job' }, [
					h('div', { class: 'employer' }, job.employer),
					h('div', { class: 'local' }, job.local),
					h('div', { class: 'postion' }, job.postion),
					h('div', { class: 'start' }, job.start),
					h('div', { class: 'end' }, job.end),
					h('ul', { class: 'description' }, job.description.map(function(bulletPoint){
						return h('li', bulletPoint)
					
					}))
				])
			})))
		])
	])
})

