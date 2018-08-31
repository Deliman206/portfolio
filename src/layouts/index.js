import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Header from '../components/header'
import '../styles/main.scss';

class Layout extends React.Component {
  render () {
    const {allFile} = this.props.data
    return(
      <div className='app' style={{backgroundImage: `url(${allFile.edges[1].node.publicURL})`}}>
        <Helmet
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle='longtime' logo={allFile.edges[0].node.publicURL}/>
        <div className='content'>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const imageQuery = graphql`
  query imageQuery {
    allFile {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
