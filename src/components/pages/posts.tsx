import React from "react";
import Layout from "../layout";
import SEO from "../seo";
import { graphql } from "gatsby";
import PostModel from "../../model/PostModel";
import PostItem from "../postItem";

const Post = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const posts: Array<any> = edges.map(({ node }) => {
    return new PostModel(node);
  });

  return (
    <Layout>
      <SEO title="post" />
      {posts.map((post) => {
        return <PostItem post={post} />;
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            subtitle
          }
        }
      }
    }
  }
`;

export default Post;
