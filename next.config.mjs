/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  experimental: {
    optimizeCss: true,
    mdxRs: true
  },
  output: "export",
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
