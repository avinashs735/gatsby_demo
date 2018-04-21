import React from "react"
import Link from  'gatsby-link'
import { withPrefix } from "gatsby-link"



const LOCATION = ({contact,data }) => {
 

     return(
        <div className="home-content">
           
              
        

<div class="breadcrumb-banner-area ptb-100">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="breadcrumb-text text-center">
								<div class="breadcrumb-menu">
									<h2 class="page-title">contact us</h2>
									<ul>
										<li><Link to="/">home</Link></li>
										<li><span>contact us</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="contact-area pt-100 pb-70">
				<div class="container-fulid">
					<div class="row">
						<div class="col-md-7">
							<div class="contact-wrapper mb-30">
								<div class="contact-form-area">
									<form id="contact-form" action="assets/mail.php">
										<input type="text" placeholder="name"/>
										<input type="email" placeholder="email"/>
										<textarea name="message" cols="30" rows="10" placeholder="Your message" id="message"></textarea>
										<button type="submit" class="submit">Send Massage</button>
									</form>
								</div>
								<p class="form-message"></p>
							</div>
						</div>
						<div class="col-lg-5 col-md-5 col-sm-12">
                            <div class="communication mb-30">
                                <div class="single-communication">
                                    <div class="communication-icon">
                                        <i aria-hidden="true" class="fa fa-home"></i>
                                    </div>
                                    <div class="communication-text">
                                        <h3>Address:</h3>
                                        <p>{data.allContactYaml.edges[4].node.address}</p>
                                    </div>
                                </div>
                                <div class="single-communication">
                                    <div class="communication-icon">
                                        <i aria-hidden="true" class="fa fa-phone"></i>
                                    </div>
                                    <div class="communication-text">
                                        <h3>Phone:</h3>
                                        <p>{data.allContactYaml.edges[2].node.phone}</p>
                                    </div>
                                </div>
                                
                                <div class="single-communication">
                                    <div class="communication-icon">
                                        <i aria-hidden="true" class="fa fa-envelope-o"></i>
                                    </div>
                                    <div class="communication-text">
                                        <h3>Email:</h3>
                                        <p><a href={data.allContactYaml.edges[3].node.email}>{data.allContactYaml.edges[3].node.email}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
			
			<div class="map-area mb-100">
				<div class="container-fulid">
					<div id="map">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.400973705731!2d77.15875641507954!3d28.497581482471162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ffd4f33264e1752!2sRedCarpet+Tech+Pvt+Ltd%2C+Second+Floor%2C+Plot+A%2C+Khasra+%23360%2C+Near+Indian+Bank%2C+Behind+Centrum+Mall%2C+Sultanpur+Metro+Station+-110030!5e0!3m2!1sen!2s!4v1480838827175" width="100%" height="500px" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
  
                    </div>
				</div>
			</div>
			
<br/>

        </div>


     )
    }
export default LOCATION


export const pagequery = graphql`
query ContactQuery {
    allContactYaml{
        edges{
            node{
            phone
            email
            address
             heading
             content{
                 phone
                 email
                 address
             }
             }
            }
          }

    }
   ` 
