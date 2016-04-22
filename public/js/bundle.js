(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var collapsed = true
var barIcon = document.getElementsByClassName('fa-bars')[0]
var timesIcon = document.getElementsByClassName('fa-times')[0]
var ul = document.getElementsByClassName('nav-container')[0].getElementsByTagName('ul')[0]
//console.log(ul, 'ul')
var prevWidth = window.innerWidth
//console.log('prev', prevWidth)

barIcon.onclick = function() {
	barIcon.setAttribute('style', 'display: none')
	timesIcon.setAttribute('style', 'display: inline')
	ul.setAttribute('style', 'display: block')
}
timesIcon.onclick = function() {
	barIcon.setAttribute('style', 'display: inline')
	timesIcon.setAttribute('style', 'display: none')
	ul.setAttribute('style', 'display: none')
}
//console.log(window.innerWidth)
window.onresize = function() {
	//console.log('p', prevWidth)
	//console.log(window.innerWidth)
	if (window.innerWidth > 1000){
		barIcon.setAttribute('style', 'display: inline')
		timesIcon.setAttribute('style', 'display: none')
		ul.setAttribute('style', 'display: block')
	} else if (window.innerWidth < 1000 && prevWidth >= 1000){
		ul.setAttribute('style', 'display: none')
		console.log('test')
		console.log('bottom', prevWidth)
	}
	prevWidth = window.innerWidth
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJicm93c2VyL21pbi1jb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNvbGxhcHNlZCA9IHRydWVcbnZhciBiYXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtYmFycycpWzBdXG52YXIgdGltZXNJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmEtdGltZXMnKVswXVxudmFyIHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWNvbnRhaW5lcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdXG4vL2NvbnNvbGUubG9nKHVsLCAndWwnKVxudmFyIHByZXZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4vL2NvbnNvbGUubG9nKCdwcmV2JywgcHJldldpZHRoKVxuXG5iYXJJY29uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0YmFySWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuXHR0aW1lc0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBpbmxpbmUnKVxuXHR1bC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJylcbn1cbnRpbWVzSWNvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdGJhckljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBpbmxpbmUnKVxuXHR0aW1lc0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcblx0dWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcbn1cbi8vY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcblx0Ly9jb25zb2xlLmxvZygncCcsIHByZXZXaWR0aClcblx0Ly9jb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aClcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAwMCl7XG5cdFx0YmFySWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGlubGluZScpXG5cdFx0dGltZXNJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG5cdFx0dWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpXG5cdH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDAwICYmIHByZXZXaWR0aCA+PSAxMDAwKXtcblx0XHR1bC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuXHRcdGNvbnNvbGUubG9nKCd0ZXN0Jylcblx0XHRjb25zb2xlLmxvZygnYm90dG9tJywgcHJldldpZHRoKVxuXHR9XG5cdHByZXZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG59XG4iXX0=
