module.exports = {
	siteMetadata: {
		title: "school-site",
	},
	plugins: [
		{
			resolve: "gatsby-source-contentful",
			options: {
				accessToken: "3cQBJJc2QT8VvHarNueCbXvJhbp-DqsjaxLcCz-0QKI",
				spaceId: "yg43le062xey",
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				footnotes: true,
				gfm: true,
				plugins: [],
			},
		},
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-postcss",
	],
};
