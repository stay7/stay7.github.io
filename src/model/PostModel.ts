import { INode, IPost } from "../constants/types";

export default class PostModel implements IPost {
  title;
  path;
  date;
  subtitle?;
  thumbnail?;
  primate?;

  constructor(node: any) {
    const { frontmatter } = node;
    Object.assign(this, frontmatter);
    // this.thumbnail = require(`${this.thumbnail}`);
    // console.log(this.thumbnail);
  }
}
