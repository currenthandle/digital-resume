var collapsed = true
var barIcon = document.getElementsByClassName('fa-bars')[0]
var timesIcon = document.getElementsByClassName('fa-times')[0]
var ul = document.getElementsByClassName('nav-container')[0].getElementsByTagName('ul')[0]
console.log(ul, 'ul')

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
window.onresize = function() {
	console.log(window.innerWidth)
	if (window.innerWidth > 1000){
		barIcon.setAttribute('style', 'display: inline')
		ul.setAttribute('style', 'display: block')
		timesIcon.setAttribute('style', 'display: none')
	} else {
		ul.setAttribute('style', 'display: none')
	}
}
