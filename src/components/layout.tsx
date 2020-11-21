/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
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
      <Header />

      <Body>
        <SideBar />
        <Main>{children}</Main>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  flex: 1;
  padding: 10px 10px;
`;

export default Layout;
