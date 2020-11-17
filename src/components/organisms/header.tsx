import Link from "../atom/link";
import React from "react";
import HeaderMenu from "../atom/headerMenu";
import styled from "styled-components";

// https://www.gatesnotes.com/

const Header = () => (
  <Container>
    <Link to="/" style={{ fontSize: "30px" }}>
      logo
    </Link>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <HeaderMenu menuTitle="BOOK" link="asdf" />
      <HeaderMenu menuTitle="BOOK" link="123" />
      <HeaderMenu menuTitle="BOOK" link="twer" />
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: "center";
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid black;
  padding: 1em 1em;
`;

export default Header;
