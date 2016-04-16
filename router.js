var router = require('routes')()
var h = require('virtual-dom/h')
var skills = require('./skills')
var jobs = require('./expirence')
var projects = require('./projects')

module.exports = router

router.addRoute('/', function(m) {
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
			// TOOLS
			h('div', { id: 'tools' }, [
				h('h2', 'Tools'),
				h('ul', skills.map(function(skill) {
					return h('li', [
						h('span', { class: 'skill-name' }, skill.name),
						h('span', { class: 'skill-score' }, function(){
							var starsLeft = skill.score
							var stars = []
							for(var i = 1; i <= 5; i++){
								if(starsLeft > 0) { 
									stars.push(h('span', '*')) 
									starsLeft--
								}
								else { stars.push(h('span', 'o')) }
							}
							return stars
						}())
					])
				}))
			]),
			// Education
			h('div', { id: 'education' }, [
				h('h2', 'Education'),
				h('h3', 'University of California, Berkeley'),
				h('p', 'B.A. in Physics, December 2015')
			]),
			// Project
			h('div', { id: 'project' }, projects.map(function(project){
				return h('div', { class: 'project' }, [
					h('div', { class: 'name' }, project.name),
					h('a', { href: project.link, class: 'project-link' }, project.link.substring(8)),
					h('div', { class: 'role'}, project.role),
					h('ul', { class: 'description' }, project.description.map(function(bulletPoint){
						return h('li', bulletPoint)
					
					}))
				])
			})),
			// Experience
			h('div', { id: 'experience' }, jobs.map(function(job){
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
		])
	])
})
