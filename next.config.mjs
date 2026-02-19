import createMDX from "@next/mdx";
import { execSync } from "node:child_process";

const gitHash = execSync("git rev-parse HEAD").toString().trim();
const commitYear = execSync("git log -1 --format=%ad --date=format:%Y")
  .toString()
  .trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
  env: {
    GIT_HASH: gitHash,
    COMMIT_YEAR: commitYear,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
