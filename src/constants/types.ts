export type IMarkdownFrontmatter = {
  frontmatter: {
    title?: string;
    date?: string;
    path?: string;
  };
};

export interface IProps {
  data: IMarkdownRemark;
}

export type IMarkdownRemark = {
  markdownRemark: {
    html: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
};
