/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  // remove: output: 'export',
};

export default nextConfig;
