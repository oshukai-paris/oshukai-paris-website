module.exports = {
	siteMetadata: {
		title: 'Oshukai Paris',
		author: 'Oshukai Paris',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Club de Karaté et Kobudo Oshukai Paris',
		keywords: `Karate, Kobudo, Arts Martiaux, Shorin Ryu, Oshukai, Paris, Okinawa`,
		siteUrl: `localhost:8000`,
		twitter: `https://twitter.com/Oshukai_Paris`,
		instagram: `https://www.instagram.com/oshukai_paris/`,
		facebook: `https://www.facebook.com/OshukaiFrance/`,
		google: `https://www.google.com/maps/place/Oshuka%C3%AF+Paris+-+Karat%C3%A9+et+Kobudo/@48.828663,2.328805,15z/data=!4m5!3m4!1s0x0:0x4f5574ddd1354051!8m2!3d48.828663!4d2.3288051?hl=fr-FR`,

	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  path: `${__dirname}/src/posts`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `src`,
			  path: `${__dirname}/src/`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
