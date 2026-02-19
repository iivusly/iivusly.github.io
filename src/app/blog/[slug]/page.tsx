import fs from "fs/promises";
import { Metadata } from "next";
import path from "path";

const POST_DIR = "src/blog";

export async function generateStaticParams() {
  const files = await fs.readdir(POST_DIR);
  const posts = files
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      return { slug: path.parse(file).name };
    })
    .filter((post) => post !== null);
  return posts;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/blog/${slug}.mdx`);
  return {
    title: `iivusly's blog: ${metadata.title}`,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post } = await import(`@/blog/${slug}.mdx`);

  return (
    <>
      <Post />
    </>
  );
}
