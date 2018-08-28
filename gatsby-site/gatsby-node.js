/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

//  const createPaginatedPages = require("gatsby-paginate");

//  exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
//   return new Promise((resolve, reject) => {
//     graphql(`
//       //graphql query
//     `).then(result => {
//       createPaginatedPages({
//         edges: result.data.posts.edges,
//         createPage: createPage,
//         pageTemplate: "src/templates/index.js",
//         pageLength: 5, // This is optional and defaults to 10 if not used
//         pathPrefix: "", // This is optional and defaults to an empty string if not used
//         context: {} // This is optional and defaults to an empty object if not used
//       });
//       result.data.posts.edges.map(({ node }) => {
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve("./src/pages/index.js"),
//           context: {
//             slug: node.fields.slug
//           }
//         });
//       });
//       resolve();
//     });
//   });
// };