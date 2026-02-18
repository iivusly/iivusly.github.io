interface PostMetadata {
  title: string;
  date: string;
  published: boolean;
}

declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  export const metadata: PostMetadata;
}
