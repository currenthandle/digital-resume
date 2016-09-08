(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function (e) {

}

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
//document.getElementsByClassName('navUl')[0].style.marginTop = '0'
var navUl = document.getElementsByClassName('navUl')[0]

var mq = window.matchMedia( "(min-width: 1000px)" )

console.log(navUl.style.marginTop, 'first')
if(mq.matches) {
    navUl.style.marginTop = '6rem'    
    console.log('at least')
    console.log(navUl.style.marginTop)
} else {
    navUl.style.marginTop = '0'
    console.log('less')
    console.log(navUl.style.marginTop)
}


},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJicm93c2VyL2FjdGl2YXRvci5qcyIsImJyb3dzZXIvbWluLWNvbnRlbnQuanMiLCJicm93c2VyL25hdk1hcmdpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuXG59XG4iLCJ2YXIgY29sbGFwc2VkID0gdHJ1ZVxudmFyIGJhckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS1iYXJzJylbMF1cbnZhciB0aW1lc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYS10aW1lcycpWzBdXG52YXIgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZVbCcpWzBdXG4vL2NvbnNvbGUubG9nKHVsLCAndWwnKVxudmFyIHByZXZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4vL2NvbnNvbGUubG9nKCdwcmV2JywgcHJldldpZHRoKVxuXG5iYXJJY29uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0YmFySWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuXHR0aW1lc0ljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBpbmxpbmUnKVxuICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdWwuc3R5bGUubWFyZ2luVG9wID0gJzAnXG5cdC8vdWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpXG59XG50aW1lc0ljb24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRiYXJJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogaW5saW5lJylcblx0dGltZXNJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG5cdHVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpXG59XG4vL2NvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdC8vY29uc29sZS5sb2coJ3AnLCBwcmV2V2lkdGgpXG5cdC8vY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMDApe1xuXHRcdGJhckljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBpbmxpbmUnKVxuXHRcdHRpbWVzSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKVxuXHRcdHVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2snKVxuXHR9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwMCAmJiBwcmV2V2lkdGggPj0gMTAwMCl7XG5cdFx0dWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJylcblx0XHRjb25zb2xlLmxvZygndGVzdCcpXG5cdFx0Y29uc29sZS5sb2coJ2JvdHRvbScsIHByZXZXaWR0aClcblx0fVxuXHRwcmV2V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxufVxuIiwiLy9kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZVbCcpWzBdLnN0eWxlLm1hcmdpblRvcCA9ICcwJ1xudmFyIG5hdlVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2VWwnKVswXVxuXG52YXIgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSggXCIobWluLXdpZHRoOiAxMDAwcHgpXCIgKVxuXG5jb25zb2xlLmxvZyhuYXZVbC5zdHlsZS5tYXJnaW5Ub3AsICdmaXJzdCcpXG5pZihtcS5tYXRjaGVzKSB7XG4gICAgbmF2VWwuc3R5bGUubWFyZ2luVG9wID0gJzZyZW0nICAgIFxuICAgIGNvbnNvbGUubG9nKCdhdCBsZWFzdCcpXG4gICAgY29uc29sZS5sb2cobmF2VWwuc3R5bGUubWFyZ2luVG9wKVxufSBlbHNlIHtcbiAgICBuYXZVbC5zdHlsZS5tYXJnaW5Ub3AgPSAnMCdcbiAgICBjb25zb2xlLmxvZygnbGVzcycpXG4gICAgY29uc29sZS5sb2cobmF2VWwuc3R5bGUubWFyZ2luVG9wKVxufVxuXG4iXX0=
