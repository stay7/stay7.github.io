import React from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

interface Props extends Omit<GatsbyLinkProps<{}>, "ref"> {}

export default function Link(props: Props) {
  return (
    <GatsbyLink
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "1rem",
        ...props.style,
      }}
      {...props}
    >
      {props.children}
    </GatsbyLink>
  );
}
