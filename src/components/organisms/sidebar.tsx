import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <span>asdf</span>
      <span>asdf</span>
      <span>asdf</span>
      <span>asdf</span>
    </Container>
  );
};

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  left: 0;
  width: 250px;
  height: 100%;
  /* margin-right: auto; */
  border-right: 1px solid black;
`;

export default SideBar;
