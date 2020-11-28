import React from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";

interface Props extends Omit<GatsbyLinkProps<{}>, "ref"> {}

export default function Link({ style, children, ...props }: Props) {
  return (
    <GatsbyLink
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "1rem",
        ...style,
      }}
      {...props}
    >
      {children}
    </GatsbyLink>
  );
}
