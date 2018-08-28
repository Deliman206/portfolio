import React from 'react'
import Link, { withPrefix } from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className='sizing'>
      <Link className='logo-link' to="/">
        <img src={withPrefix('/static/logo.png')} alt='logo'/>
      </Link>
      <div className='header-links'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/projects-page/">Projects</Link>
        <Link className='link' to="/contact-page/">Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
