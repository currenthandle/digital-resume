var h = require('virtual-dom/h')

// externals refers to extenal links (eg linkedIn, gitHub, etc)
var externalList = require('./externals')
var externalsDiv = h('div', { id: 'external-links' }, h('div', externalList ))

// This is a function for generating the navigation menus
// it returns a nav-container vDOM node
module.exports = function navGenerator(route) {
    // minContent is the nav menu users will see on a mobile device or narrow window
	var minContent = h('div', { class: 'min-content' }, [
		h('div', { class: 'copy' }, 
			h('a', { href: '/' } , [
				h('span', { class: 'name' }, 'Casey Siebel'),
				h('span', { class: 'title' }, 'Web Developer')
			])
		),
		h('i', { class: 'fa fa-bars', 'aria-hidden': 'true' }),
		h('i', { class: 'fa fa-times', 'aria-hidden': 'true' }),
	])
    // The home route features my picture in the middle of the screen and thus shouldn't have this picture in the navigation menu
	if (route === '/'){
		return h('div', { class: 'nav-container nav-home ' },  [
			minContent,
			generateNavUl(),
			externalsDiv	
		])
	} else {
		return h('div', { class: 'nav-container' }, [ 
			minContent,
			h('a', { class: 'home-link', href: '/' }, h('img', { src: 'img/profile-img.jpg' })),
			generateNavUl(),
			externalsDiv 
		])
	}
	function generateNavUl () {
		if (route === '/') return h('ul', { class: 'homeNav navUl' }, liGenerator() )
		else return h('ul', { class: 'navUl' }, liGenerator() )
		
        // this function returns an array of vDOM LI nodes 
		function liGenerator() {
            // nav-routes.js returns an array contain the information for our routes
            var navContent = require('./data/nav-routes.js')
			return navContent.map(function(navItem) {
				if (route === navItem.uri) {
					return h('li', { class: 'active' }, h('a', { href:  navItem.uri },  [
						h('i', { class: 'fa ' + navItem.icon }),
						h('span', navItem.tabName),
					]))
				}
				else {
					return h('li', h('a', { href:  navItem.uri },  [
						h('i', { class: 'fa ' + navItem.icon }),
						h('span', navItem.tabName),
					]))
				}
			})
		}	
	}
}
