var xhr = require('xhr')
var uris = require('../data/uris')  

var navList = document.getElementById('#nav-container').getElementsByTagName('LI')

navList.forEach(function(li, i){ li.onclick = xhr('/' + uris[i], function (err, resp, body) {
	if (err) console.log(err)
	else {
		console.log('resp', resp)
		console.log('body', body)
		
	}
})})
