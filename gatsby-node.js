/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              date
              path
              title
            }
          }
        }
      }
    }
  `);

  if (errors) throw errors;

  const blogPostTemplate = path.resolve(
    __dirname,
    "./src/components/templatePost.tsx"
  );

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `posts/` + node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        title: node.frontmatter.title,
      },
    });
  });
};
