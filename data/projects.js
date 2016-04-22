module.exports = function() {
	return [
		{ 
			name: 'Blue Goji',
			link: 'https://blue-goji.herokuapp.com',
			role: 'Developer',
			img: 'img/blue-goji.png',
			description: 'Bluegoji is a gaming system ment to be played while exercising. The agency who was hired to produce the content for the website was unhappy with the landing page and hired me to make a new one for their portfolio. This page is fully responsive and features a swipe enabled carousel. The app makes heavy use of Bootstap and Javascript.',
			tags: [
				'Javascript',
				'HTML',
				'CSS',
				'Bootsrap',
				'Responsive Design'
			]
		},
		{ 
			name: 'Hot Spot Rank',
			link: 'https://hot-spot-rank.herokuapp.com',
			role: 'Developer',
			img: 'img/hot-spot.png',
			description: 'Hot Spot Rank is an application similar to Yelp.com but for public WiFi hot spots. However, instead of using reviews to rank the hot spots this app uses empirical speedtest data. The backend is build using the Express.js framework and the data persists in a MongoDB. The UI is limited but incorporates some Bootstrap.',
			tags: [
				'Express.js',
				'MongoDB',
				'EJS',
				'Bootsrap',
			]
		}
	]	
}()
