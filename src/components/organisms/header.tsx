import Link from "../atom/link";
import React from "react";
import HeaderMenu from "../atom/headerMenu";
import styled from "styled-components";

// https://www.gatesnotes.com/

const headers = [
  { title: "BOOK1", link: "asdf" },
  { title: "BOOK2", link: "asdf" },
  { title: "BOOK3", link: "asdf" },
];

const Header = () => (
  <Container>
    <Link to="/" style={{ fontSize: "30px" }}>
      logo
    </Link>
    <div style={{ display: "flex", flexDirection: "row" }}>
      {headers.map((header) => (
        <HeaderMenu menuTitle={header.title} link={header.link} />
      ))}
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
