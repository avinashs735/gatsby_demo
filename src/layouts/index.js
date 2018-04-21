import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Middle from '../components/mid'
import Footer from '../components/footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div  style={{
    margin: '0 auto',
    background: '',
    
  }}>
    <Helmet
      title="Red carpet demo site"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header  style={{
        
        position:'fixed',
        zIndex:119090
      }}/>
  
    <div
      style={{
        
        Width: '100 %',
        padding: '0px ',
        paddingTop: 102,
      }}
    >
      {children()}
    </div>
    
  </div>
  
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
