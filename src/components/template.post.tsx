import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import { IProps } from "../constants/types";
import PostDate from "./post-date";
import PostTitle from "./post-title";

export default function TemplatePost({ data }: IProps) {
  const {
    html,
    frontmatter: { title, date, path },
  } = data.markdownRemark;

  return (
    <Layout>
      <PostTitle title={title} />
      <PostDate>{date}</PostDate>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        path
        subtitle
        title
      }
    }
  }
`;
