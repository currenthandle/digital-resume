module.exports = function() {
	return [
		{ 
			name: 'Rheo Ingestor',
			link: 'https://blue-goji.herokuapp.com',
			role: 'Front End Developer',
			img: 'img/Rheo.png',
			description: 'Rheo is an AppleTV application that is best described as "Pandora for Video content."  Before I built the Rheo Ingestor, the work flow for video curators to add new videos to the Rheo database was inelegant and required the curators to wait up to an hour to see the change in the Rheo environment. I designed and developed a Chrome Extension that allows curators to easily and immediately add new videos to the Rheo database.',
			tags: [
                'Chrome Extension',
                'CORS',
				'Javascript',
				'HTML',
				'CSS'
			]
		},
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
