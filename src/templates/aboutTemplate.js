import React from "react";



export default function Template({data}) {
	const { markdownRemark, allMarkdownRemark} = data;
	const { frontmatter, html } = markdownRemark;


	return (
		<div className="wrapper-top">
			
			<div className="about-section-area ptb-20">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="about-wrapper">
								<div className="about-content">
									<h1>{frontmatter.title}</h1>
									<div dangerouslySetInnerHTML={{ __html: html }}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>




			<div className="team-area pb-100">
				<div className="container-fluid">
					<div className="row">
						<div className="section-title text-center">
							<h2>Meet Our team</h2>
							<p>There are many variations of passages Ipvaiable, but the majority <br /> have suffered alteration isome forijected humour,</p>
						</div>
						<div className="team-active">
							{
								allMarkdownRemark.edges.map((edge, index)=>(
									<div className="col-md-2 col-sm-3 col-xs-6" style={{paddingRight:0, paddingLeft:0}} key={index}>
										<div className="team-wrapper">
											<div className="team-img">
												<a href="javascript:void(0)">
													
												</a>
											</div>
											<div className="team-content text-center">
												<h4>{edge.node.frontmatter.name}</h4>
												<span>{edge.node.frontmatter.position}</span>
											</div>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>


			
		</div>
	);
}


export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
		allMarkdownRemark(
			filter : {
				frontmatter: {
					type: {
						eq: "people"
					}
				}
			}
		){
			edges {
				node {
					frontmatter {
						path
						name
						position
					}
				}
			}
		}
	}
`;
