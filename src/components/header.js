import React from 'react'
import Link, { withPrefix } from 'gatsby-link'

class Header extends React.Component {
  render(){
    return(
      <div className='header'>
        <div className='sizing'>
          <Link className='logo-link' to="/">
            <img src={this.props.logo}/>
          </Link>
          <div className='header-links'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/projects-page/">Projects</Link>
            <Link className='link' to="/contact-page/">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
