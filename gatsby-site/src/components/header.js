import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className='sizing'
    >
      <h1>
        <Link className='link' to="/">{siteTitle}</Link>
      </h1>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/projects-page/">Projects</Link>
        <Link className='link' to="/contact-page/">Contact</Link>
    </div>
  </div>
)

export default Header
