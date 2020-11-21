import Link from "../atom/link";
import React from "react";
import HeaderMenu from "../atom/headerMenu";
import styled from "styled-components";

// https://www.gatesnotes.com/

//나중에 darkmode 도 넣고싶음
const headers = [
  { title: "Post", link: "post" },
  { title: "About me", link: "me" },
];

const Header = () => (
  <Container>
    <Logo>
      <Link to="/" style={{ fontSize: "30px" }}>
        logo
      </Link>
    </Logo>
    <Menu>
      {headers.map((header) => (
        <HeaderMenu menuTitle={header.title} link={header.link} />
      ))}
    </Menu>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 66px;
  display: inline-flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
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

export default Header;
