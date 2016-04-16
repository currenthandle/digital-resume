var fs = require('fs')
var http = require('http')
var ecstatic = require('ecstatic')
var st = ecstatic('public')
var router = require('./router.js')
var hyperstream = require('hyperstream')
var createElement = require('virtual-dom/create-element')

var server = http.createServer(function(req, res) {
	var m = router.match(req.url)
	if (m) {
		var html = createElement(m.fn(m)).toString()
		fs.createReadStream('public/index.html')
			.pipe(hyperstream({
				'#content': html
			}))
			.pipe(res)
	} else st(req, res)
})

server.listen(process.env.PORT || 5000)
console.log('Server running on port 5000')
