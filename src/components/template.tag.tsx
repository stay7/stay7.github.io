import { graphql, PageProps } from "gatsby";
import React from "react";
import { IAllMarkdownRemark } from "../constants/types";
import Layout from "./layout";
interface Props extends PageProps {
  data: IAllMarkdownRemark;
  pageContext: { tag: string };
}

const TemplateTag = ({ data, pageContext }: Props) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  const tag = pageContext.tag;

  return (
    <Layout>
      {`${tag} (${totalCount})`}
      {edges.map((edge) => edge.node.frontmatter.title)}
    </Layout>
  );
};

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default TemplateTag;
