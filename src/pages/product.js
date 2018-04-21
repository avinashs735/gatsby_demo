import React from 'react'
import Link from 'gatsby-link'
import { zIndex } from 'react-z-index'
import '../css_file/content.css'
import product from '../Images/product.jpg'
import './test.css'
import fb from '../Images/fb.png'
import link from '../Images/link.png'
import twi from '../Images/twi.png'
import inst1 from '../Images/inst1.png'
import msg from '../Images/msg.png'
import gplus from '../Images/gplus.png'
import ph from '../Images/ph.png'

const Jobs = ({data}) => (
        
<div className="containers">

  
        <div className="banner">
        <div className="image-wrapper">
        <img src={product} alt="banner" align="bottom"/>
        </div>
        <div className="image-overlay">
        
        </div>
        <div className="image-content" style={{
            zIndex:10  ,
            color:'red'  
        }}>
        <h1>my name is avinash
        uguuyukgygyugjhhjgjf
        hddyd</h1>
        
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

export default Jobs