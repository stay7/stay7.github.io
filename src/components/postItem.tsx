import React, { useState, CSSProperties } from "react";
import styled, { css } from "styled-components";
import color from "../constants/constants";
import PostModel from "../model/PostModel";
import Link from "./link";

const Container = styled.div`
  display: flex;
  height: 170px;
  border: 1px solid;
  padding: 10px;
  margin: 10px 0px 10px 0px;
  background-color: ${color.white};
`;

const BorderBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 10px;
  ${(props) =>
    props.color &&
    css`
      border: 1px solid ${props.color};
    `}
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
const Title = styled.h2`
  padding: 0;
  margin-bottom: 0;
  border-bottom-width: 0;
`;
const SubtitleBox = styled.div`
  flex-grow: auto;
`;
const Subtitle = styled.span`
  font-size: 16px;
  color: ${color.gray75};
`;
const DateText = styled.span`
  color: ${color.gray75};
  font-size: 13px;
`;
const MetaContainer = styled.div``;

const ReadMore = styled.div`
  height: 30px;
  float: right;
  color: ${color.blue};
`;

interface Props {
  post: PostModel;
}

const PostItem = ({ post }: Props) => {
  const { title, path, date, subtitle } = post;
  const [over, setOver] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
    >
      <Link to={path}>
        <BorderBox color={over ? color.blue : color.white}>
          <ContentBox>
            <Title>{title}</Title>
            <SubtitleBox>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </SubtitleBox>
            <MetaContainer>
              <DateText>{date}</DateText>
              <ReadMore>{over && <span>Read More</span>}</ReadMore>
            </MetaContainer>
          </ContentBox>
        </BorderBox>
      </Link>
    </Container>
  );
};

export default PostItem;
