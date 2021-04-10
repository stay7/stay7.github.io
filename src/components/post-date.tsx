import React, { ReactElement } from "react";
import styled from "styled-components";
import color from "../constants/constants";

interface Props {
  children: string;
}

export default function PostDate({ children }: Props): ReactElement {
  return <DateText>{children}</DateText>;
}

const DateText = styled.div`
  text-align: right;
  font-size: 14px;
  color: ${color.gray};
`;
