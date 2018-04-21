import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = () => (
 
  <div className='heading' style={{
  height:'100px',
  paddingTop:'10px ',
  paddingLeft:'20px',
  paddingRight:'20px',
  paddingBottom:'10px',
  opacity:0.8,
  width:'100%',
  position:'fixed',
  zIndex:'initial',
  background:'#2f3542'
  }}>
	
 <div class="row" style={{height:'80px', paddingTop:'5px ',
  paddingLeft:'5px',paddingRight:'5px',
  paddingBottom:'5px'}}>
  
      <div class="logo" style={{height:'70px',background:'blue',float:'left',maxWidth:'150px' }}>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
      <div class="main-nav"style={{height:'70px'}}>
      
          <div class="nav-bar" style={{height:'70px',paddingTop:'15px',float:'left',marginLeft:'100px',width:'auto',}}>
      

          <ul class="main-navigation" >
      <li class="active"><Link to="/">Home</Link></li>
      <li  > <Link to="about">Our Team</Link></li>
      <li  ><Link to="services">Services</Link></li>
      <li  ><Link to="jobs">About Us</Link></li>
      <li  ><Link to="faqs" >FAQ'S</Link></li>
      <li  ><Link to="product" >Product</Link></li>
      <li  ><Link to="login" >Sign In</Link></li>
      
   </ul>

          </div>
      </div>
  </div>

		</div>

)

export default Header
