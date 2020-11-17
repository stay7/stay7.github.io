import React from "react";
import Link from "./link";
import styled from "styled-components";

interface Props {
  menuTitle: string;
  link?: string;
}

export default function HeaderMenu({ menuTitle, link }: Props) {
  return <Button>{link && <Link to={link}>{menuTitle}</Link>}</Button>;
}

const Button = styled.button`
  background-color: transparent;
  border-width: 0;
`;
