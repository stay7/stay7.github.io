import React from "react";
import "./layout.css";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import "fontsource-roboto";
import "fontsource-muli";
import Header from "./header";

const Container = styled.div`
  display: block;
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 48px;
`;

const Main = styled.div`
  max-width: 820px;
  max-width: 1160px;
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
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

      <Body>
        <Header />
        <Main>{children}</Main>
      </Body>
    </Container>
  );
};

export default Layout;
