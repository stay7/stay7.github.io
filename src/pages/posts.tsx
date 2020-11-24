import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PostModel from "../model/postModel";
import PostItem from "../components/organisms/postItem";

const Post = ({ data }) => {
  console.log("data", data);

  const {
    allMarkdownRemark: { edges },
  } = data;

  const posts: Array<any> = edges.map((node: any) => new PostModel(node));

  return (
    <Layout>
      <SEO title="post" />
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           ...MarkdownFrontmatterFragment
//         }
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
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
`;

export default Post;
