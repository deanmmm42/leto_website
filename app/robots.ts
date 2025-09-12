import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.letoai.tech'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/button-examples', // 开发示例页面，不需要被搜索引擎索引
          '/api/',
          '/_next/',
          '/favicon.ico',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}