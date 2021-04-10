import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import color from "../constants/constants";

const GatsbyLink = styled(Link)`
  width: 100%;
  color: ${color.black};
  text-decoration: none;
`;

interface Props {
  to: string;
}

const GastbyLink = ({ to, ...props }: Props) => {
  return <GatsbyLink to={to} {...props}></GatsbyLink>;
};

export default GastbyLink;
