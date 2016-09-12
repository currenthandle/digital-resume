// this file return an array of vDOM nodes containing all the informaiton for my external links

var h = require('virtual-dom/h')

var externalLinks = require('./data/external-links')
var externalList = externalLinks.map((link) => h('a', { href: link.uri }, h('i', { class: link.class, 'aria-hidden': 'true'})))

module.exports = externalList
