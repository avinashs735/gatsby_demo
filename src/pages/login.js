import React from 'react'
import Link from 'gatsby-link'
import '../css_file/content.css'
const Register = () => (
    <div className="info" style={{color:'red',width:'500px',height:'auto',alignContent:'center',
    marginTop:'6%',marginLeft:'500px',marginBottom:'10px',boxShadow:'0 15px 20px rgba(0, 0, 0, 0.3)'}}>
    <div className="loginBox">
<img src="http://lofrev.net/wp-content/photos/2017/05/user_logo.png" 
 style={{width:'150px',height:'150px',marginTop:'-15%',marginLeft:'170px'}}class="user"/>
<h2>Log In Here</h2>
<form role="form"  className="aviform" method="POST" enctype="multipart/form-data">
            <div className="form-group" >
                <label className="label">Email Id</label>
                <input className="form-control" name="id" placeholder="Enter Email Id" required/>
            </div>
            <div className="form-group" >
                <label className="label">Password</label>
                <input type="password" class="form-control" name="pwd" placeholder="Password" required/>
            </div>
          
            <input type="hidden" name="action" value="LOGIN"/>
            <button type="submit" className="btn" style={{marginLeft:'200px',padding:'10px',cursor:'pointer'}}>Submit</button>
        </form>
</div>
</div>


)

export default Register
