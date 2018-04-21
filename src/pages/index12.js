import React from 'react'
import Link from 'gatsby-link'
import bg from '../images/bg.jpg'
import './test.css'
const IndexPage = () => (
 <div>
  <div className="video-stream container">
  <div className="video-wrap">
<img src={bg} alt="" />
  </div>
  <div className="header-overlay"></div>
  <div className="header-content">
      <h1>Video Paging Welcomes you !!</h1>
      <p>
      When we talk about a university ,there we have students and if there are students then their should be a talk on their <br/>mutual understandings also but the current scenario  where the student is so busy with his/her schedule that they don’t have proper interactions poses a problem to that mutual relation.
</p>
    <a href="#" className="btn">Read More</a>
  </div>
  </div></div>

)

export default IndexPage
