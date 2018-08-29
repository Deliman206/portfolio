import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/main.scss';

class Layout extends React.Component {
  render () {
    const {children, data} = this.props;
    console.log(this.props)
    return(
      <div className='app'>
        <Helmet
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle='longtime' headerImage={data.headerImage}/>
        <div className='content'>
          {children()}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
// export const imageQuery = graphql`
// query images {
//   allFile {
//     edges {
//       node {
//         publicURL
//         absolutePath
//       }
//     }
//   }
// }
// `
