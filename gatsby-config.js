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
        name: 'img',
        path: `${__dirname}/src/img/`
      }
    },
],
  pathPrefix: '/public',
}
