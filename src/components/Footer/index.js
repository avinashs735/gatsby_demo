import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: 'red',
      
      opacity:0.80,
      'z-index':20000,
      'box-shadow': '0 20px 100px black',
      border:'2px Solid black'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        background: 'green',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/404.js"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

export default Footer
