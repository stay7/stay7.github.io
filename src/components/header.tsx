import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import Menu from "./menu";

const Container = styled.div`
  height: 66px;
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid black;
  margin: 0 auto;
`;

const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
`;
const MenuBox = styled.div`
  display: flex;
  margin-left: auto;
`;

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
      <LogoBox to="/posts">
        <img src={logo} />
      </LogoBox>
      <MenuBox>
        <Menu url="/posts" title={`Post`}></Menu>
        <Menu url="/me" title={`Me`}></Menu>
      </MenuBox>
    </Container>
  );
};

export default Header;
