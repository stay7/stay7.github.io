import { INode } from "../constants/types";

export default class PostModel {
  title: string;
  path: string;
  date: string;

  constructor(node: any) {
    const { frontmatter } = node;
    Object.assign(this, frontmatter);
  }
}
