import React from "react";
import { graphql } from "gatsby";

export default function TemplatePost({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data;
  const {date, path, title} = frontmatter

  console.log(data)

  return (
    <div>
      <h1>{frontmatter.title}</h1> 
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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

`