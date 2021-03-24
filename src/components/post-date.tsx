import React, { ReactElement } from "react";
import styled from "styled-components";
import Color from "../constants/color";

interface Props {
  children: string;
}

export default function PostDate({ children }: Props): ReactElement {
  return <DateText>{children}</DateText>;
}

const DateText = styled.div`
  text-align: right;
  font-size: 14px;
  color: ${Color.gray};
`;
