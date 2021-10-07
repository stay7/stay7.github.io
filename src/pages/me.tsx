import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BsGithub } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { IconType } from "react-icons/lib";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "gatsby";
import Project from "../components/project";

const Octocat = () => (
  <StaticImage
    src="../images/octocat.png"
    alt="octocat"
    width={300}
    height={300}
  />
);

const Me = () => (
  <Layout>
    <SEO title="me" />
    <Container>
      <Title>🙋🏻 ME</Title>
      <Paragraph>
        <Row>
          <Octocat />
          <div>
            <BlockItem>서상민</BlockItem>
            <BlockItem>경북대학교 컴퓨터학부 (2014.02 ~ 2021.02)</BlockItem>

            <BlockItem icon={<ImMail4 size={25} />}>
              <span>sangmin95@gmail.com</span>
            </BlockItem>
            <BlockItem icon={<BsGithub size={25} />}>
              <Link to="https://github.com/stay7" target="_blank">
                stay7
              </Link>
            </BlockItem>
          </div>
        </Row>
      </Paragraph>

      <Title>🧑🏻‍💻 Projects</Title>
      <Project
        title="Wegram"
        links={[
          {
            link: "https://wegram.co.kr/#Home",
            icon: <IoHomeOutline size={25} />,
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
        tags={[{ tag: "React Native", color: "blue" }]}
        contents={[
          "간헐적 단식을 통해 다이어트 솔루션을 제공하는 어플리케이션",
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
          aspectRatio={1}
        />
      </Project>

      <Project
        title="One Way"
        duration="2021.05.26 ~ 2021.07.24 (2개월)"
        links={[
          {
            link: "https://github.com/stay7/oneway-server",
            icon: <BsGithub size={25} />,
          },
        ]}
        tags={[
          { tag: "Toy Project", color: "blue" },
          { tag: "NestJS", color: "blue" },
          { tag: "Flutter", color: "blue" },
        ]}
        contents={[
          "직접 사용하기 위한 용도로 개발한 영어 단어장 어플리케이션",
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
            icon: <BsGithub size={25} />,
          },
        ]}
        duration="2021.08.11 ~ 2021.08.15 (4일)"
        tags={[{ tag: "RUST", color: "blue" }]}
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
          aspectRatio={1}
        />
      </Project>
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
  children: ReactElement | string;
}

const BlockItem = ({ icon, children }: BlockProp) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "10px 50px",
      }}
    >
      {icon || <VscDebugBreakpointData />}
      <span style={{ marginLeft: "10px" }}>{children}</span>
    </div>
  );
};

export default Me;
