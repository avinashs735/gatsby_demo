import React from 'react'
import Link from 'gatsby-link'
import '../css_file/content.css'
import product from '../Images/product.jpg'
import fb from '../Images/fb.png'
import link from '../Images/link.png'
import twi from '../Images/twi.png'
import inst1 from '../Images/inst1.png'
import msg from '../Images/msg.png'
import gplus from '../Images/gplus.png'
import ph from '../Images/ph.png'
import avi from '../Images/avi.jpg'
const About = ({data}) => (
    <div>
<div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
Red carpet is a company founded by the team conssisting of several graduate students from IIts and IIMs .This small startup 
has now grown fat in size due to the enormous efforts of its employees.The team is divided into three particular groups HR, Marketing and the developers 
who takes complete care of the applications and responsible for assured testing with help of other authorities. <br/>
By building better credit & lending infrastructure, we want to enable more people to access credit. 
Our job starts BEFORE you start using a payment gateway or a wallet - we believe the basic problem in the trillion
 dollar Indian economy is access to liquidity. Our aim is to expand the credit economy — simply replacing the legacy 
 credit providers/banks would probably be a great business success, but it’s not all that interesting as a goal.<br/> <br/>
<h1 style={{textAlign:'center'}}>Our working team..!!</h1>
</div>
<div className="column-section" style={{width:'85%',height:'470px',marginLeft:'7.5%',paddingTop:'20px',borderTop:'1.5px solid  #3498db ',
borderBottom:'1.5px solid  #3498db ',}}>
    <div className="column-section-1" style={{background:'#BDBDBD',height:'420px',boxShadow:'0 15px 20px rgba(0, 0, 0, 0.3)'}}><h3>HR Team</h3>
    <img src={avi} alt="Developer" align ="center"style={{width:'150px',height:'150px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'50%'}}/>
   <ul style={{
           fontStyle: 'normal',
           color: '#4c4b58',
           textAalign: 'initial',
           boxSizing: 'border-box',
           fontSize: '.88235rem',
           lineHeight: '1.41176rem'
   }}>
           <li style={{color:'#4c4b58'}}>&#xbb; 2 Senior HR memebers</li> 
           <li style={{color:'#4c4b58'}}>&#xbb; Deals with employee resources</li>
           <li style={{color:'#4c4b58'}}>&#xbb; Handle the working environment</li>  </ul>
    <btn style={{marginLeft:'30px'}}><Link to="hr">View members &#xbb;</Link></btn></div>
    <div className="column-section-2" style={{background:'#BDBDBD',height:'420px',boxShadow:'0 15px 20px rgba(0, 0, 0, 0.3)'}}><h3>Management Team</h3>
    <img src={avi} alt="Developer" align ="center"style={{width:'150px',height:'150px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',borderRadius:'50%'}}/>
   <ul style={{
           fontStyle: 'normal',
           color: '#4c4b58',
           textAalign: 'initial',
           boxSizing: 'border-box',
           fontSize: '.88235rem',
           lineHeight: '1.41176rem'
   }}>
           <li style={{color:'#4c4b58'}}>&#xbb; Day to day briefing</li> 
           <li style={{color:'#4c4b58'}}>&#xbb; Project evaluation</li>
           <li style={{color:'#4c4b58'}}>&#xbb; Client management</li>  </ul>
    <btn style={{marginLeft:'30px'}}><Link to="manager">View members &#xbb;</Link></btn></div>
    <div className="column-section-3" style={{background:'#BDBDBD',height:'420px',boxShadow:'0 15px 20px rgba(0, 0, 0, 0.3)'}}><h3>Developer Team</h3>
    <img src={avi} alt="Developer" align ="center"style={{width:'150px',height:'150px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'50%'}}/>
   <ul style={{
           fontStyle: 'normal',
           color: '#4c4b58',
           textAalign: 'initial',
           boxSizing: 'border-box',
           fontSize: '.88235rem',
           lineHeight: '1.41176rem'
   }}>
           <li style={{color:'#4c4b58'}}>&#xbb; Full Stack Developer</li> 
           <li style={{color:'#4c4b58'}}>&#xbb; Backend Keeper</li>
           <li style={{color:'#4c4b58'}}>&#xbb; UI/UX Developer</li>  </ul>
    <btn style={{marginLeft:'30px'}}><Link to="developer">View members &#xbb;</Link></btn> </div>

</div>
<div className="footer" style={{textAlign:'center'}}>
<h2>Connect with us</h2>
<ul class="contact" style={{}}>
        <li><img src={msg}/></li>
        <li><img src={gplus}/></li>
        <li><img src={inst1}/></li>
        <li><img src={link}/></li>
        <li><img src={ph}/></li>
        <li><img src={twi}/></li>
        <li><img src={fb}/></li>
    </ul>

</div>


</div>
)

export default About
