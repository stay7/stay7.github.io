import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import styled, { CSSProperties } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FiGithub } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import {
  FcAbout,
  FcAddressBook,
  FcGraduationCap,
  FcGlobe,
} from "react-icons/fc";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { VscDebugBreakpointData } from "react-icons/vsc";

import { Link } from "gatsby";
import Project from "../components/project";

const Profile = () => (
  <StaticImage
    src="../images/profile.jpeg"
    alt="profile"
    width={500}
    height={300}
  />
);

const TagColor = {
  frontEnd: "#900020",
  backEnd: "#274472",
  language: "#59981A",
  etc: "black",
};

const Me = () => (
  <Layout>
    <SEO title="me" />
    <Container>
      <Title>🙋🏻 ME</Title>
      <Paragraph>
        <Row>
          <Profile />
          <div>
            <BlockItem icon={<FcAbout size={25} />}>
              저는 ㅇㅇㅇ 사람입니다
            </BlockItem>
            <BlockItem style={{ paddingLeft: 25 }}>
              현실에서는 안정을 추구하지만, 컴퓨터 세상에서는 도전적인
            </BlockItem>
            <BlockItem style={{ paddingLeft: 25 }}>
              단순 반복되는 동작을 자동화시키는 것을 좋아하는
            </BlockItem>
            <BlockItem style={{ paddingLeft: 25 }}>
              직접 만들어보면서 배우는
            </BlockItem>

            <BlockItem icon={<FcGraduationCap />}>
              경북대학교 컴퓨터학부 (2014.02 ~ 2021.02)
            </BlockItem>
            <BlockItem icon={<FcAddressBook size={25} />}>
              <span>sangmin95@gmail.com</span>
            </BlockItem>
            <BlockItem icon={<FiGithub size={25} />}>
              <a href="https://github.com/stay7" target="_blank">
                stay7
              </a>
            </BlockItem>
          </div>
        </Row>
      </Paragraph>

      <Title>🧑🏻‍💻 Projects</Title>
      <Paragraph>
        <Project
          title="Wegram"
          links={[
            {
              link: "https://wegram.co.kr/#Home",
              icon: <FcGlobe size={25} />,
            },
            {
              link:
                "https://play.google.com/store/apps/details?id=com.cleco.wegram.android",
              icon: <AiFillAndroid size={25} />,
            },
            {
              link: "https://apps.apple.com/kr/app/wegram/id1503457468",
              icon: <AiFillApple size={25} />,
            },
          ]}
          duration="2020.02 ~ 2021.06 (1년 4개월)"
          tags={[
            { tag: "React Native", color: TagColor.frontEnd },
            { tag: "Express.js", color: TagColor.backEnd },
            { tag: "MongoDB", color: TagColor.backEnd },
            { tag: "Elasticsearch", color: TagColor.backEnd },
          ]}
          contents={[
            "간헐적 단식을 통해 다이어트 솔루션을 제공하는 어플리케이션",
            "창업한 스타트업에서 진행한 프로젝트입니다",
            "MAU: 2500, DAU: 300",
            "출시부터 서비스 운영까지 경험해 볼 수 있었습니다.",
          ]}
        >
          <StaticImage
            src="../images/wegram.png"
            alt="wegram"
            layout="constrained"
            width={300}
            height={300}
          />
        </Project>

        <Project
          title="One Way"
          duration="2021.05.26 ~ 2021.07.24 (2개월)"
          links={[
            {
              link: "https://github.com/stay7/oneway-server",
              icon: <FiGithub size={25} />,
            },
          ]}
          tags={[
            { tag: "Toy Project", color: TagColor.etc },
            { tag: "Flutter", color: TagColor.frontEnd },
            { tag: "NestJS", color: TagColor.backEnd },
            { tag: "PostgreSQL", color: TagColor.backEnd },
          ]}
          contents={[
            "Flutter, NestJS, PostgreSQL을 경험해보고 싶어서 진행한 프로젝트",
            "직접 유저가 될 서비스를 만들어야한다는 생각을 가지고 있어 영어 단어장 어플을 만들었습니다.",
            "앱 컨셉이 마음에 들지 않아서 아직 출시는 하지 않았습니다.",
          ]}
        >
          <StaticImage
            src="../images/one_way_logo.png"
            alt="one_way_logo"
            layout="constrained"
            width={300}
            height={300}
            aspectRatio={1}
          />
        </Project>

        <Project
          title="BOJ-CLI Python"
          links={[
            {
              link: "https://github.com/stay7/boj-cli-python",
              icon: <FiGithub size={25} />,
            },
          ]}
          duration="2021.08.11 ~ 2021.08.15 (4일)"
          tags={[{ tag: "RUST", color: TagColor.language }]}
          contents={[
            "백준 온라인 저지의 샘플 테스트 케이스를 받아와 실행 결과를 보여주는 CLI 입니다.",
            "매번 input을 입력하고 output을 비교하는 과정이 번거로워 만들었습니다.",
          ]}
        >
          <StaticImage
            src="../images/boj_cli.png"
            alt="wegram"
            layout="constrained"
            width={300}
            height={300}
          />
        </Project>
      </Paragraph>
    </Container>
  </Layout>
);

const Title = styled.h2``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto;
`;
const Paragraph = styled.p`
  padding: 0px 20px;
`;

const Container = styled.div`
  /* background-color: red; */
`;

interface BlockProp {
  icon?: ReactElement<IconType>;
  style?: CSSProperties;
  children: ReactElement | string;
}

const BlockItem = ({ icon, style, children }: BlockProp) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "10px 50px",
        ...style,
      }}
    >
      {icon || <VscDebugBreakpointData />}
      <span style={{ marginLeft: "10px" }}>{children}</span>
    </div>
  );
};

export default Me;
