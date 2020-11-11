import React from "react";
import { graphql } from "gatsby";

export default function TemplatePost({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data;
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const pageQuery = graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`);
