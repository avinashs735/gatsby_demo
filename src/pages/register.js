import React from 'react'
import Link from 'gatsby-link'

const Register = () => (
    <div className="info" style={{width:'500px',height:'auto',alignContent:'center',
    marginTop:'6%',marginLeft:'500px',boxShadow:'0 15px 20px rgba(0, 0, 0, 0.3)'}}>
    <div className="loginBox">
<img src="http://lofrev.net/wp-content/photos/2017/05/user_logo.png" 
 style={{width:'150px',height:'150px',marginBottom:'50px',marginTop:'-15%',marginLeft:'170px'}}class="user"/>
<h2>Log In Here</h2>
<form role="form"  className="aviform" method="POST" enctype="multipart/form-data">
            <div className="form-group" style={{marginLeft:'100px',alignContent:'center'}}>
                <label  >Email Id</label>
                <input className="form-control" name="id" placeholder="Enter Email Id" required 
                style={{marginRight:'10px'}}/>
            </div>
            <div className="form-group" style={{marginLeft:'100px',alignContent:'center'}}>
                <label>Password</label>
                <input type="password" class="form-control" name="pwd" placeholder="Password" required
                style={{marginRight:'10px'}}/>
            </div>
            <div className="form-group" style={{marginLeft:'100px',alignContent:'center'}}>
                <label>UserID</label>
                <input  class="form-control" name="uid" placeholder="userID" required
                style={{marginRight:'10px'}}/>
            </div>
            <div className="form-group" style={{marginLeft:'100px',alignContent:'center'}}>
                <label>CollegeID</label>
                <input  class="form-control" name="pwd" placeholder="CollegeID" required/>
            </div>
            <div className="form-group" style={{marginLeft:'100px',alignContent:'center'}}>
                <label>Image</label>
                <input type="file" class="form-control" name="pwd" placeholder="image" required/>
            </div>
          
            <input type="hidden" name="action" value="LOGIN"/><br/>
            <button type="submit" style={{marginBottom:'50px',marginLeft:'220px',alignContent:'center'}}class="btn btn-primary">Submit</button>
        </form>
</div>
</div>


)

export default Register
