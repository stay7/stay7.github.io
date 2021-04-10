import React, { ReactChild } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  height: 70%;
  min-width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  margin: auto 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;
const Title = styled.span`
  margin: auto 0;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

interface Props {
  url: string;
  title: string;
  children?: ReactChild | ReactChild[];
}

/**
 * 헤더의 메뉴 버튼
 */
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
