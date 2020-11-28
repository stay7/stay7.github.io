import React from "react";
import styled from "styled-components";
import PostModel from "../../model/postModel";
import Link from "../atom/link";
import Color from "../../constants/color";
interface Props {
  post: PostModel;
}

//TODO : title, content, todo, thumbnail?
const PostItem = ({ post }: Props) => {
  const { title, path, date, subtitle } = post;

  return (
    <Container>
      <Link to={path}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Link>
      <MetaContainer>
        <DateText>{date}</DateText>
      </MetaContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Color.white};
  border: 1px solid;
  margin-bottom: 20px;
  padding: 10px 20px 10px 20px;
`;
const Title = styled.h2``;
const Subtitle = styled.span`
  display: block;
  font-size: 16px;
  color: ${Color.gray75};
`;
const DateText = styled.span`
  color: ${Color.gray75};
  font-size: 13px;
`;

const MetaContainer = styled.div`
  margin-top: 8px;
`;

export default PostItem;
