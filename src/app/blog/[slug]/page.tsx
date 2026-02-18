import fs from "fs/promises";
import Head from "next/head";
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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post, metadata } = await import(`@/blog/${slug}.mdx`);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <p>{metadata.title}</p>
      <Post />
    </>
  );
}
