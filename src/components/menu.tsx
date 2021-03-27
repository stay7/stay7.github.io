import React, { ReactChild } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  min-width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Title = styled.span`
  margin: auto 0;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
`;

interface Props {
  url: string;
  title: string;
  children?: ReactChild | ReactChild[];
}

const Menu = ({ url, title, children }: Props) => {
  return (
    <Container
      onClick={() => {
        navigate(url);
      }}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default Menu;
