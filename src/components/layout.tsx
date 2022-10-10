import React from "react";
import "../styles/layout.css";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
  display: block;
`;

const Body = styled.div`
  height: 100%;
  margin: 0 20px;
  padding-bottom: 48px;
`;

const Main = styled.div`
  max-width: 1024px;
  /* max-width: 820px; */
  /* max-width: 1160px; */
  margin: 15px auto 0 auto;
`;

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
      <Body>
        <Header />
        <Main>{children}</Main>
      </Body>
    </Container>
  );
};

export default Layout;
