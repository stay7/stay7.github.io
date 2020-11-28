import React, { useState, CSSProperties } from "react";
import styled from "styled-components";
import PostModel from "../../model/postModel";
import Link from "../atom/link";
import Color from "../../constants/color";

interface Props {
  post: PostModel;
}

const PostItem = ({ post }: Props) => {
  const { title, path, date, subtitle, thumbnail } = post;
  const [over, setOver] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
      style={thumbnail && { paddingLeft: 10 }}
    >
      <Link to={path} style={thumbnail && imageStyle}>
        {thumbnail && <ImgBox src={thumbnail} />}
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
      </Link>
    </Container>
  );
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const Container = styled.div`
  height: 150px;
  border: 1px solid;
  padding: 10px 20px 10px 20px;
  margin: 10px 0px 10px 0px;
  background-color: ${Color.white};
`;
const ImgBox = styled.img`
  width: 130px;
  height: 130px;
  margin-right: 10px;
`;
const ContentBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h2`
  padding: 0;
  margin-bottom: 0;
`;
const SubtitleBox = styled.div`
  flex-grow: auto;
`;
const Subtitle = styled.span`
  font-size: 16px;
  color: ${Color.gray75};
`;
const DateText = styled.span`
  color: ${Color.gray75};
  font-size: 13px;
`;
const MetaContainer = styled.div``;

const ReadMore = styled.div`
  height: 30px;
  float: right;
`;

export default PostItem;
