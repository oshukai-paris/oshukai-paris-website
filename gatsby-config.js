module.exports = {
	siteMetadata: {
		title: 'Oshukai Paris',
		author: 'Oshukai Paris',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Club de Karaté et Kobudo Oshukai Paris',
		keywords: `Karate, Kobudo, Arts Martiaux, Shorin Ryu, Oshukai, Paris, Okinawa`,
		siteUrl: `localhost:8000`,
		twitter: ``,
		instagram: ``,
		facebook: ``,
		google: ``,

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
