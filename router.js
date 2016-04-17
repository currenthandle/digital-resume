var router = require('routes')()
var h = require('virtual-dom/h')
var skills = require('./data/skills')
var jobs = require('./data/expirence')
var projects = require('./data/projects')

var skillsKeys = Object.keys(skills)

module.exports = router

var tempString = "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and more. As the saying goes: 'two heads are better than one"
function navGenerator(first) {
	if (first){
		return h('div', { class: 'nav-container' },  h('ul', [
			h('li', 'About Me'),
			h('li', 'Education'),
			h('li', 'Skills'),
			h('li', 'Projects'),
			h('li', 'Work Experience'),
		]))
	} else {
		return h('div', { class: 'nav-container' },  h('ul', [
			h('img', { src: 'img/profile-img.jpg' }),
			h('li', 'About Me'),
			h('li', 'Education'),
			h('li', 'Skills'),
			h('li', 'Projects'),
			h('li', 'Work Experience'),
		]))
	}
}
router.addRoute('/', function(m) {
	return h('div', { id: 'index' }, [
		navGenerator(true),
		h('div', { class: 'page-content' }, [
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
		h('div', { class: 'page-content' }, [
			h('img', { src: 'img/profile-img.jpg' }),
			h('h1', 'Casey Siebel'),
			h('div', 'Oakland, CA'),
			h('h3', 'About Me'),
			h('p', tempString)
		])
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
