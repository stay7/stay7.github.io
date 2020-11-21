import React from "react";
import Link from "./link";
import styled from "styled-components";

interface Props {
  menuTitle: string;
  link?: string;
}

export default function HeaderMenu({ menuTitle, link }: Props) {
  return (
    <Button>
      {link && (
        <Link to={link}>
          <Span>{menuTitle}</Span>
        </Link>
      )}
    </Button>
  );
}

const Button = styled.button`
  width: 100px;
  height: 100%;
  background-color: transparent;
  border-width: 0;
`;

const Span = styled.span`
  font-family: Roboto;
`;
