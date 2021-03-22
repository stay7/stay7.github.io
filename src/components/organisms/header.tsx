import Link from "../atom/link";
import React from "react";
import HeaderMenu from "../atom/headerMenu";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import { graphql, useStaticQuery } from "gatsby";

// https://www.gatesnotes.com/

//나중에 darkmode 도 넣고싶음

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
      }
    }
  `);

  const postCount = data.allMarkdownRemark.totalCount;

  return (
    <Container>
      <Logo>
        <Link to="/" style={{ fontSize: "30px" }}>
          <img src={logo} />
        </Link>
      </Logo>
      <Menu>
        <HeaderMenu menuTitle="Post" link="/posts" count={postCount} />
        <HeaderMenu menuTitle="About me" link="/me" />
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right: solid 1px black;
`;

const Menu = styled.div`
  display: flex;
  height: 100%;
  margin-left: auto;
  padding-right: 3rem;
`;
