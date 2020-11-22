export default class PostModel {
  title: string;
  path: string;
  date: string;

  constructor(node) {
    const { frontmatter } = node;
    Object.assign(this, frontmatter);
  }
}
