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
      postRemark: allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              date
              path
              title
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (errors) throw errors;

  /**
   * Post 페이지 생성
   */
  const blogPostTemplate = path.resolve(
    __dirname,
    "./src/components/template.post.tsx"
  );
  const posts = data.postRemark.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: `posts/ + ${node.frontmatter.path}`,
      component: blogPostTemplate,
      context: {
        title: node.frontmatter.title,
      },
    });
  });

  /**
   * Tag 페이지 생성
   */
  const tagTemplate = path.resolve(
    __dirname,
    "./src/components/template.tag.tsx"
  );

  const tags = data.tagsGroup.group;
  tags.forEach((tag) => {
    createPage({
      path: `tags/${tag.fieldValue}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
