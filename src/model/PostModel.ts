import { INode, IPost } from "../constants/types";

export default class PostModel implements IPost {
  title;
  path;
  date;
  subtitle?;

  constructor(node: any) {
    const { frontmatter } = node;
    Object.assign(this, frontmatter);
  }
}
