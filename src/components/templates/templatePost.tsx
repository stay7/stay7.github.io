import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { IProps } from "../../constants/types";

export default function TemplatePost({ data }: IProps) {
  const {
    html,
    frontmatter: { title, date, path },
  } = data.markdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
