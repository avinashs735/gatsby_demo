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
import food from '../Images/food.png'
import cinema from '../Images/cinema.png'
import airticket from '../Images/airticket.png'
import medical from '../Images/medical.png'
import events from '../Images/events.jpg'
import transportation from '../Images/transportation.png'
import card from '../Images/card.svg'
import shop from '../Images/shop.png'
import sd from '../Images/sd.png'
import sc from '../Images/sc.png'
import Amazon from '../Images/Amazon.jpg'
import ebay from '../Images/ebay.jpg'
import fk from '../Images/fk.jpg'
import myntra from '../Images/myntra.png'
import jabong from '../Images/jabong.png'
import DataRecharge from '../Images/DataRecharge.png'
import bigbyte from '../Images/bigbyte.png'
import FoodPanda from '../Images/FoodPanda.jpg'
import justeat from '../Images/justeat.png'
import mmt from '../Images/mmt.png'
import yatra from '../Images/yatra.jpg'
import redbus from '../Images/redbus.jpg'
import bms from '../Images/bms.jpeg'
const Services = ({data}) => (
    <div>
<div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
<br/> <br/>
<h1 style={{textAlign:'center'}}>Our Services include..!!</h1>
</div>
<div className="column-section" style={{width:'85%',height:'280px',marginLeft:'7.5%',paddingTop:'20px',borderTop:'1.5px solid  #3498db ',
}}>
    <div className="column-section-1"><h3>Cinema</h3>
    <img src={cinema} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn></div>
    <div className="column-section-2"><h3>Phone recharge</h3>
    <img src={DataRecharge} alt="Developer" align ="center"style={{width:'100px',height:'100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn></div>
    
    <div className="column-section-3"><h3>Food</h3>
    <img src={food} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn> </div>

</div>
<div className="column-section" style={{width:'85%',height:'250px',marginLeft:'7.5%',paddingTop:'20px',
}}>
    <div className="column-section-1"><h3>Medical</h3>
    <img src={medical} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn></div>
    <div className="column-section-2"><h3>Air ticket</h3>
    <img src={airticket} alt="Developer" align ="center"style={{width:'100px',height:'100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn></div>
    
    <div className="column-section-3"><h3>Events</h3>
    <img src={events} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn> </div>

</div>
<div className="column-section" style={{width:'85%',height:'280px',marginLeft:'7.5%',paddingTop:'20px',
borderBottom:'1.5px solid  #3498db ',paddingBottom:'20px'}}>
    <div className="column-section-1"><h3>Transport</h3>
    <img src={transportation} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn></div>
    <div className="column-section-2"><h3>Bill payment</h3>
    <img src={card} alt="Developer" align ="center"style={{width:'100px',height:'100px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn></div>
    
    <div className="column-section-3"><h3>Events</h3>
    <img  src={shop} alt="Developer" align ="center"style={{width:'100px',height:'100px',
     display: 'block',
     marginLeft: 'auto',
     marginRight: 'auto',borderRadius:'10%'}}/><br/>
   
    <btn style={{marginLeft:'100px'}}><Link to="##">View info &#xbb;</Link></btn> </div>

</div>
<div className="mid-section" style={{textAlign:'center',paddingTop:'20px',paddingBottom:'50px'}}>
<h3>Our trusted partners</h3>
<ul class="contact partner" style={{}}>
        <li><img src={sd} className="partner-icon"/></li>
        <li><img src={sc} className="partner-icon"/></li>
        <li><img src={Amazon}className="partner-icon"/></li>
        <li><img src={ebay}className="partner-icon"/></li>
        <li><img src={jabong}className="partner-icon"/></li>
        <li><img src={myntra}className="partner-icon"/></li>
        <li><img src={fk}className="partner-icon"/></li>
        <li><img src={FoodPanda}className="partner-icon"/></li>
        <li><img src={bigbyte}className="partner-icon"/></li>
        <li><img src={justeat}className="partner-icon"/></li>
        <li><img src={mmt}className="partner-icon"/></li>
        <li><img src={redbus}className="partner-icon"/></li>
        <li><img src={yatra}className="partner-icon"/></li>
        <li><img src={bms}className="partner-icon"/></li>

    </ul>
    Get various aoupons and price offers on shopping products online through us...... </div>

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

export default Services
