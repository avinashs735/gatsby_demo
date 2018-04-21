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
const Shopping = ({data}) => (
    <div>

<div className="column-section" style={{width:'85%',height:'500px',marginLeft:'7.5%',paddingTop:'20px',borderTop:'1.5px solid  #3498db ',
borderBottom:'1.5px solid  #3498db ',}}>
    <div className="column-section-1"><h3>HR Team</h3>
    <img src={avi} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'50%'}}/><br/>
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
    <btn style={{marginLeft:'30px'}}><Link to="##">View members &#xbb;</Link></btn></div>
    <div className="column-section-2"><h3>Management Team</h3>
    <img src={avi} alt="Developer" align ="center"style={{width:'100px',height:'100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',borderRadius:'50%'}}/><br/>
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
    <btn style={{marginLeft:'30px'}}><Link to="##">View members &#xbb;</Link></btn></div>
    <div className="column-section-3"><h3>Developer Team</h3>
    <img src={avi} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'50%'}}/><br/>
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
    <btn style={{marginLeft:'30px'}}><Link to="##">View members &#xbb;</Link></btn> </div>

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

export default Shopping
