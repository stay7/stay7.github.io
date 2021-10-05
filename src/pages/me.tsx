import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Octocat = () => <StaticImage src="../images/octocat.png" alt="octocat" />;

const Me = () => (
  <Layout>
    <SEO title="me" />
    <Octocat />
    <h1>404 bio not found</h1>
  </Layout>
);

export default Me;
