import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../organisms/header";


export default function TemplatePost({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data;
  const { date, path, title } = frontmatter;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}



export const pageQuery = graphql`
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
