module.exports = {
  siteMetadata: {
    title: 'Sean Miller Portfolio',
  },
  plugins: ['gatsby-plugin-react-helmet', 
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
],
  pathPrefix: '/public',
}
