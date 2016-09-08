(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var collapsed = true
var barIcon = document.getElementsByClassName('fa-bars')[0]
var timesIcon = document.getElementsByClassName('fa-times')[0]
var ul = document.getElementsByClassName('navUl')[0]
//console.log(ul, 'ul')
var prevWidth = window.innerWidth
//console.log('prev', prevWidth)

barIcon.onclick = function() {
	barIcon.setAttribute('style', 'display: none')
	timesIcon.setAttribute('style', 'display: inline')
    ul.style.display = 'block'
    ul.style.marginTop = '0'
	//ul.setAttribute('style', 'display: block')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJicm93c2VyL21pbi1jb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBjb2xsYXBzZWQgPSB0cnVlXG52YXIgYmFySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLWJhcnMnKVswXVxudmFyIHRpbWVzSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZhLXRpbWVzJylbMF1cbnZhciB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdlVsJylbMF1cbi8vY29uc29sZS5sb2codWwsICd1bCcpXG52YXIgcHJldldpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbi8vY29uc29sZS5sb2coJ3ByZXYnLCBwcmV2V2lkdGgpXG5cbmJhckljb24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRiYXJJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG5cdHRpbWVzSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGlubGluZScpXG4gICAgdWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB1bC5zdHlsZS5tYXJnaW5Ub3AgPSAnMCdcblx0Ly91bC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrJylcbn1cbnRpbWVzSWNvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdGJhckljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBpbmxpbmUnKVxuXHR0aW1lc0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcblx0dWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcbn1cbi8vY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcblx0Ly9jb25zb2xlLmxvZygncCcsIHByZXZXaWR0aClcblx0Ly9jb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aClcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAwMCl7XG5cdFx0YmFySWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGlubGluZScpXG5cdFx0dGltZXNJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG5cdFx0dWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpXG5cdH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDAwICYmIHByZXZXaWR0aCA+PSAxMDAwKXtcblx0XHR1bC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuXHRcdGNvbnNvbGUubG9nKCd0ZXN0Jylcblx0XHRjb25zb2xlLmxvZygnYm90dG9tJywgcHJldldpZHRoKVxuXHR9XG5cdHByZXZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG59XG4iXX0=
