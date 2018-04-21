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
const Jobs = ({data}) => (
    <div>
<div className="big-container" style={{width:'100%',height: '630px',}}>
<div className="banner-img" style={{width:'100%',background:'red',overflow:'hidden',paddingBottom:'10px'}}>
<div style={{width: '100%',  
  height: '580px',
position:'absolute',
paddingLleft:'0'}}>
    <img src={product} alt="banner" align="bottom" /></div>
<div style={{overflow: 'hidden',
    width: '100%',
    height: '616.5px',
    position:'absolute',
background:'#ced6e0',
opacity:0.60}}></div>
<div style={{content:'',position:'absolute',width:10,height:'50px',left:'650px',top:'719px',border:'25px solid',borderColor:'#bdc3c7 transparent transparent transparent '}}>

</div>
</div>


</div>
<div className="column-section" style={{width:'85%',height:'300px',marginLeft:'7.5%',paddingTop:'18px',borderTop:'1.5px solid  #3498db ',
borderBottom:'1.5px solid  #3498db ',}}>
    <div className="column-section-1"><h3>Flexible Payments</h3>No need to kill your expectation nor depend on others to shop for you.Bill can be cleared monthly or at instant.Close your balance whenever you want .
    <br/><br/><btn><Link to="##">learn more about it</Link></btn></div>
    <div className="column-section-2"><h3>Buy now ,Pay later</h3>We understand you ,your requirements.So we at red carpet ensure special bonding must be created.You can shop instantly whether you have money or not and repay it later in instalments.
    <br/><br/><btn><Link to="##">learn more about it</Link></btn></div>
    <div className="column-section-3"><h3>Use Any where</h3>Yes,we are everywhere just one click away.Choose the item you wanna buy send us details or snapshot and we will buy it for you.Believe us its cool thing .... 
    <br/><br/><btn><Link to="##">learn more about it</Link></btn> </div>

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

export default Jobs
