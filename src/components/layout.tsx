/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import "fontsource-roboto";

import Header from "./organisms/header";
import "./layout.css";

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1160,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
