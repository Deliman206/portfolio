import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'

class Header extends React.Component {
  render(){
    return(
      <div className='header'>
        <div className='sizing'>
          <Link className='logo-link' to="/">
            {/* <img src={withPrefix('/static/logo.png')} alt='logo'/> */}
            {/* <Img resolutions={data.allFile.edges[0].node.path}/> */}
            <Img
              title="logo"
              alt="logo"
              sizes={this.props.headerImage.sizes}
            />
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