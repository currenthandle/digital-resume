var router = require('routes')()
var h = require('virtual-dom/h')

// externalList is an array of vDOM nodes containing the external links (github, linkedin, etc)
var externalList = require('./externals')
// minExternals is a vDOM node containing the extenal links to be shown whent the site is viewed on mobile
var minExternals = h('div', { id: 'min-externals' }, h('div', externalList ))

module.exports = router

var navGenerator = require('./navGenerator.js')
var tagGenerator = require('./tagGenerator.js')

router.addRoute('/', function(m) {
	var info = require('./data/home.js')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content' , id: 'home'}, [
			h('div', { class: 'content-box' }, [
				h('img', { src: info.img }),
				h('h1', { class: 'name' }, info.name),
				h('span', { class: 'local' }, info.local),
				h('p', { class: 'blurb' }, info.blurb)
			])
		]),
		minExternals
	])
})
router.addRoute('/education', function(m) {
	var education = require('./data/education.js')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'education' }, [
			h('div', { class: 'content-box' }, [
				h('img', { id: 'seal', src: education.seal }),
				h('h2', { id: 'school-name' },  h('span', education.name)),
				h('h3', [ h('span', education.degree + ', ' + education.gradDate)]),
				h('div', { class: 'quote' }, education.quote),
				h('div', { class: 'author' }, education.author),
				h('div', { class: 'blurb' }, education.blurb)
			])
		]),
		minExternals

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
		]),
		minExternals

	])
})
router.addRoute('/projects', function(m) {
	var projects = require('./data/projects')
	return h('div', { id: 'index' }, [
		navGenerator(m.route),
		h('div', { class: 'page-content', id: 'projects' }, projects.map(function(project){
			return h('div', { class: 'project content-box' }, [
				h('div', { class: 'img-wrapper' },  (h('img', { src: project.img }))),
				h('div', { class: 'name sub-heading' }, project.name),
				h('p', { class: 'description' }, project.description),
				tagGenerator(project)
			])
		})),
		minExternals

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
		})),
		minExternals

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

