/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 注释掉以启用Next.js图片优化，减少logo.png 84KB传输量，改善LCP性能
    // unoptimized: true,
  },
}

export default nextConfig
