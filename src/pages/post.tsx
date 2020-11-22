import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";
import PostModel from "../model/postModel";
import PostItem from "../components/organisms/postItem";

const Post = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;
  const posts: Array<IPost> = edges.map(({ node }) => new PostModel(node));

  return (
    <Layout>
      <SEO title="post" />
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            path
          }
          id
        }
      }
    }
  }
`;

export default Post;
