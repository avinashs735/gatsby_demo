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

const Developer = ({data}) => (
    <div>
<div className="container" style={{paddingLeft:'150px',paddingRight:'150px'}}>
<br/> <br/>
<h1 style={{textAlign:'center'}}>Most frequently asked question.</h1>

</div>
<div className="row">
<h3>
   <big> Q.</big>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; What is the use of credit points earned ?</h3>

</div>
<div className="row">

<h3>    <big> Q.</big>&nbsp;&nbsp;&nbsp;&nbsp; What is return payment policy involved ?
</h3>
</div>
<div className="row">

<h3>    <big> Q.</big> &nbsp;&nbsp;&nbsp;&nbsp;What is the minimum delivary time ?
</h3>
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

export default Developer
