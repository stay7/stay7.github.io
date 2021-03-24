import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

export default function PostTitle({ title }: Props): ReactElement {
  return <Container>{title}</Container>;
}

const Container = styled.h1`
  text-align: center;
`;
