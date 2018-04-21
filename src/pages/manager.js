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

const Manager = ({data}) => (
    <div>
<div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
<br/> <br/>
<h1 style={{textAlign:'center'}}>We have some of the brilliant  minds from IITs ,IIMs and reputed institutes in our team working to make world a better place by challenging there own ideas every day!!</h1>
<h2>Our Management Team</h2>
</div>
<div className="row">
<div className="left">
        <img src={avi} className="round" />
</div>
<div className="right">
&#xbb; Full Stack Web Developer.<br/>
&#xbb; UI Designer<br/>
&#xbb; Graduated from VIT University,Batch- ( 2016-18 )<br/>
&#xbb; facebook-id: avi.victory93@yahoo.com<br/>
&#xbb; email-id :avinashs735@gmail.com<br/>
&#xbb; contact : 8576810694<br/>
</div>
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

export default Manager
