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
