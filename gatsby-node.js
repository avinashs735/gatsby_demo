const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;
	const aboutTemplate = path.resolve('src/templates/aboutTemplate.js');

	return graphql(`{
		allMarkdownRemark(sort:{order: DESC, fields: [frontmatter___date]}limit: 1000){
			edges {
				node {
					frontmatter {
						path
                        type
					}
				}
			}
		}
	}`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}
		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.frontmatter.type == "about"){
                createPage({
                    path: node.frontmatter.path,
                    component: aboutTemplate
                });
            }
		});
	});
};
