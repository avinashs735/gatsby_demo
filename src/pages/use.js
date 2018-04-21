import React from 'react'
import Link from 'gatsby-link'
import rcapp from '../Images/rcapp.png'
import googleplay from '../Images/googleplay.png'
import itune from '../Images/itune.png'
import windows from '../Images/windows.png'
import rc1 from '../Images/rc1.png'
import rc2 from '../Images/rc2.png'
import rc3 from '../Images/rc3.png'
import fb from '../Images/fb.png'
import link from '../Images/link.png'
import twi from '../Images/twi.png'
import inst1 from '../Images/inst1.png'
import msg from '../Images/msg.png'
import gplus from '../Images/gplus.png'
import ph from '../Images/ph.png'

const Use = () => (
    <div className="Container" style={{width:'100%',height:'auto',maxWidth:'1149px',
    marginTop:'6%',marginRight:0,marginLeft:'200px'}}>
    <h2>Why to wait when red carpet is in your hand.... </h2> 
    <div style={{width:'100%',height :'auto'}}>
        <div style={{width:'100%',height :'auto'}}>
                <div style={{width:'68%',
   fontFamily: '"Gotham Narrow A","Gotham Narrow B",Helvetica,Arial,sans-serif',
fontStyle: 'normal',
fontSize:'1.5rem',
color: '#4c4b58',
textAlign: 'initial',float:'left',height :'auto',paddingLeft:'50px'}}>
                <br/>
                <br/>
                <br/>
                <br/>
                
                We here as a team make sure that the user get the very best experience.The app 
                can be downloaded from any platform...<br/>
                <br/><br/>
                <img src={windows} alt="window" width="180px" height="70px"/>
                <img src={googleplay} width="180px" height="70px" alt="googleplay"/>
                <img src={itune} width="180px" height="70px" alt="itunes"/>
                </div>
                <div style={{height :'auto'}}>
                <img src={rcapp} style={{marginRight:0,marginLeft:'116px',borderRadius:'10%'}} alt="rcapp"/>
                </div>

        </div>
    </div>

    <div style={{width:'100%',height :'380px',}}>
        <div style={{width:'100%',height :'380px'}}>
        <div style={{height :'380px',float:'left'}}>
                <img src={rc1} style={{marginRight:0,marginLeft:'10px',borderRadius:'10%',width:'250px'}} alt="rcapp"/>
                </div>
                <div style={{width:'68%',
   fontFamily: '"Gotham Narrow A","Gotham Narrow B",Helvetica,Arial,sans-serif',
fontStyle: 'normal',
fontSize:'1.5rem',
color: '#4c4b58',
textAlign: 'initial',float:'left',height :'380px',paddingLeft:'50px'}}>
                <br/>
                <br/>
                <br/>
                <br/>
It is very simple to order the product here.Just fill in the product link details or click a photo and upload .<br/>Congratulations your order has been added                <br/><br/>
                <img src={windows} alt="window" width="180px" height="70px"/>
                <img src={googleplay} width="180px" height="70px" alt="googleplay"/>
                <img src={itune} width="180px" height="70px" alt="itunes"/>
                </div>
                

        </div>
    </div>



    
    <div style={{width:'100%',height :'390px'}}>
        <div style={{width:'70%',height :'390px',float:'left', fontFamily:' "Roboto", sans-serif',
fontStyle: 'normal',
fontSize:'1.2rem',
color: '#4c4b58',
textAlign: 'initial',paddingLeft:'20px'}}>
 <br/>
                <br/>
                <br/>
                <br/>
        Its simple you can place order via chatting just tell us the product ,the shopping site ,your EMI options and its done..! 
        <br/>
        easy payment easy exchange guaranteed quality delivery.</div>
        <div style={{height :'390px',}}>
        <img src={rc2} style={{marginRight:0,marginLeft:'94.5px',borderRadius:'10%',width:'250px'}} alt="rcapp"/>

        </div>
    </div>

    <div style={{width:'100%',height :'350px'}}>
    <div style={{height :'350px',float:'left'}}>
        <img src={rc3} style={{marginRight:0,marginRight:'50px',borderRadius:'10%',width:'200px'}} alt="rcapp"/>

        </div>
        <div style={{width:'70%',height :'390px', fontFamily:' "Roboto", sans-serif',
fontStyle: 'normal',
fontSize:'1.2rem',
color: '#4c4b58',
textAlign: 'initial',paddingLeft:'20px'}}>
 <br/>
                <br/>
                <br/>
                <br/>
        Signing up to the application is way simple.Enter your selfie,your college ID and yor government ID and click register</div>
        
    </div>
    
    <div className="footer" style={{textAlign:'center',marginTop:'10px',borderTop:'1px solid #4c4b58',marginRight:'150px'}}>
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

export default Use
