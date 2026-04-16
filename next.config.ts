import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone'
  // output: "export",
  // images: {
  //   unoptimized: true, // next/image won’t break static hosting
  // },
  /* config options here */
};

export default nextConfig;
