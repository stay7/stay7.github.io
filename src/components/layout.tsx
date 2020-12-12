/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import "./layout.css";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import "fontsource-roboto";
import Header from "./organisms/header";
import SideBar from "./organisms/sidebar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

      <Body>
        <Header />
        <Main>{children}</Main>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: block;
`;

const Body = styled.div`
  height: 100%;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 48px;
`;

const Main = styled.div`
  flex: 1;
  max-width: 820px;
  margin: 15px auto 0 auto;
`;

export default Layout;
