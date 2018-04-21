module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/css_file`,
      name: "posts",
    },
  },
  {
			resolve: 'gatsby-source-filesystem',
			options : {
				path: `${__dirname}/src/content`,
				name : "pages"
			}
		},
    {
			resolve: 'gatsby-source-filesystem',
			options : {
				path: `${__dirname}/src/data`,
				name : "yamldata"
			}
		},
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },`gatsby-transformer-yaml`,
          `gatsby-transformer-json`,
          `gatsby-plugin-react-helmet`,
         `gatsby-plugin-catch-links`,
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  
  pathPrefix: `/gatsbydemo`



};
