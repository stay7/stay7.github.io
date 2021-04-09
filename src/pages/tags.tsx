import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
interface Props extends PageProps {
  data: any;
}

const Tags = ({ data }: Props) => {
  console.log(data);
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {edges.map((edge) => (
        <div>{edge.node.frontmatter.tags}</div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;

export default Tags;
