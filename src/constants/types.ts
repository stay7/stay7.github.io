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

export interface IPost {
  title: string | undefined;
  path: string | undefined;
  date: string | undefined;
  subtitle?: string | undefined;
}

export interface IAllMarkdownRemark {
  allMarkdownRemark: {
    totalCount: number;
    edges: [
      {
        node: IMarkdownFrontmatter;
      }
    ];
  };
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
