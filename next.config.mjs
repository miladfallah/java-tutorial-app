/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output in Docker/Linux containers where symlinks are permitted
  output:
    process.env.BUILD_STANDALONE === "true" || process.platform !== "win32"
      ? "standalone"
      : undefined,
  reactStrictMode: true,
};

export default nextConfig;
