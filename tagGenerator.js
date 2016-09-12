var h = require('virtual-dom/h')

// a function for generation tags
// this function resturns a vDOM node containing a list of vDOM nodes that are the tags

module.exports = function tagGenerator (content) {
	return  h('div', { class: 'tag-wrapper' }, content.tags.map((tag) => h('span', {class: 'tag' },  tag)))
}
