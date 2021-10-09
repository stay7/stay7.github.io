import React, { ReactComponentElement } from "react";
import styled from "styled-components";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { IconType } from "react-icons/lib";
import { Link } from "gatsby";

const ImgBox = styled.div`
  margin: auto 0px;
`;

const Paragraph = styled.p`
  padding: 0px 20px;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`;

const ProjectTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 5px 0px;
`;

const Tag = styled.span<{ color: string }>`
  height: 28px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.color};
  margin: 6px;
  padding: 4px 12px;
  border-radius: 5px;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const BulletContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px 0px;
`;

interface ProjectProp {
  title: string;
  children: ReactComponentElement<any>;
  duration: string;
  links: Array<LinkProp>;
  tags: Array<TagProp>;
  contents: Array<string>;
}
interface LinkProp {
  link: string;
  icon: ReactComponentElement<IconType>;
}

interface TagProp {
  tag: string;
  color: string;
}

const Project = ({
  title,
  children,
  tags,
  duration,
  links,
  contents,
}: ProjectProp) => {
  return (
    <ProjectBox>
      <ImgBox>{children}</ImgBox>
      <Paragraph>
        <ProjectTitle>{title}</ProjectTitle>
        <RowBox>
          {tags.map((tag) => (
            <Tag color={tag.color}>{tag.tag}</Tag>
          ))}
        </RowBox>
        <RowBox>
          {links.map(({ link, icon }) => (
            <Link style={{ margin: "6px" }} to={link}>
              {icon}
            </Link>
          ))}
        </RowBox>

        <ProjectBullet>{duration}</ProjectBullet>
        {contents.map((content) => (
          <ProjectBullet>{content}</ProjectBullet>
        ))}
      </Paragraph>
    </ProjectBox>
  );
};

interface BulletProp {
  children: string;
}
const ProjectBullet = ({ children }: BulletProp) => {
  return (
    <BulletContainer>
      <VscDebugBreakpointData />
      {children}
    </BulletContainer>
  );
};

export default Project;
