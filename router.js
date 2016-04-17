var router = require('routes')()
var h = require('virtual-dom/h')
var skills = require('./data/skills')
var jobs = require('./data/expirence')
var projects = require('./data/projects')
var education = require('./data/education.js')

var skillsKeys = Object.keys(skills)

module.exports = router

var tempString = "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and more. As the saying goes: 'two heads are better than one"
function navGenerator(first) {
	if (first){
		return h('div', { class: 'nav-container' },  h('ul', [
			h('li', h('a', { href: 'about' }, 'About Me')),
			h('li', h('a', { href: 'education' }, 'Education')),
			h('li', h('a', { href: 'skills' }, 'Skills')),
			h('li', h('a', { href: 'projects' }, 'Projects')),
			h('li', h('a', { href: 'experience' }, 'Work Experience')),
		]))
	} else {
		return h('div', { class: 'nav-container' },  h('ul', [
			h('a', { href: '/' }, h('img', { src: 'img/profile-img.jpg' })),
			h('li', h('a', { href: 'about' }, 'About Me')),
			h('li', h('a', { href: 'education' }, 'Education')),
			h('li', h('a', { href: 'skills' }, 'Skills')),
			h('li', h('a', { href: 'projects' }, 'Projects')),
			h('li', h('a', { href: 'experience' }, 'Work Experience')),
		]))
	}
}
router.addRoute('/', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(true),
		h('div', { class: 'page-content' , id: 'home'}, [
			h('img', { src: 'img/profile-img.jpg' }),
			h('h1', 'Casey Siebel'),
			h('div', 'Oakland, CA'),
			h('h3', 'About Me'),
			h('p', tempString)
		])
	])
})
router.addRoute('/education', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(false),
		h('div', { class: 'page-content', id: 'education' }, 
		[
			h('h2', { class: 'section-heading' }, h('span', 'Education')),
			h('img', { id: 'seal', src: education.seal }),
			h('h2', { id: 'school-name' },  h('span', education.name)),
			h('h3', [ h('span', education.degree + ', ' + education.gradDate)]),
			h('p', education.blurb )
		])
	])
})
router.addRoute('/skills', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(false),
		h('div', { class: 'page-content', id: 'skills'  }, [
			[h('h2', { class: 'section-heading' },  'Skills')].concat(skillsKeys.map(function(key) {
				return h('div', { class: 'skill-type', id: key }, [
					h('h2', key ),
					h('table', skills[key].map(function(skill) {
						return h('tr', [
							h('td', { class: 'skill-name' }, skill.name),
							h('td', { class: 'skill-score' }, function(){
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
		])
	])
})
router.addRoute('/projects', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(false),
		h('div', { class: 'page-content', id: 'projects' }, [ h('h2', { class: 'section-heading' },  'Projects')]
			.concat(projects.map(function(project){
				return h('div', { class: 'project' }, [
					h('div', { class: 'name' }, project.name),
					h('a', { href: project.link, class: 'project-link' }, project.link.substring(8)),
					h('div', { class: 'role'}, project.role),
					h('ul', { class: 'description' }, project.description.map(function(bulletPoint){
						return h('li', bulletPoint)
					
					}))
				])
			}))
		)
	])
})
router.addRoute('/experience', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(false),
		h('div', { class: 'page-content', id: 'experience' }, [h('h2', { class: 'section-heading' },  'Work Expirence')]
			.concat(jobs.map(function(job){
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
			}))
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
				h('h3', 'University of California, Berkeley'),
				h('p', 'B.A. in Physics, December 2015')
			]),
			// Project
			h('div', { id: 'projects' }, [h('h2', { class: 'section-heading' },  'Projects')].concat(projects.map(function(project){
				return h('div', { class: 'project' }, [
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
