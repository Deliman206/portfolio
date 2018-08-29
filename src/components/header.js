import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'

const Header = ({ siteTitle, data }) => (
  <div className='header'>
  {
    console.log(data)
  }
    <div className='sizing'>
      <Link className='logo-link' to="/">
        <img src={withPrefix('/static/logo.png')} alt='logo'/>
        {/* <Img resolutions={data.allFile.edges[0].node.path}/> */}
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

export const query = graphql`
  query logoImage{
    allFile(filter: { extension: { eq: "png" } }) {
      edges {
        node {
          publicURL
          path
        }
      }
    }
  }
`;