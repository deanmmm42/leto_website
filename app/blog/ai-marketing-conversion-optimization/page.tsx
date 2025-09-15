import { Metadata } from "next"
import BlogArticleContent from "./blog-article-content"

export const metadata: Metadata = {
  title: "AI营销如何提升电商转化率 | LetoAI技术博客",
  description: "深入解析AI技术在电商营销中的应用，通过数据驱动的个性化策略和智能风控系统，帮助企业实现营销ROI提升300%以上。",
  keywords: "AI营销, 电商转化率, 个性化推荐, 数据驱动营销, 智能风控, 营销ROI, 电商AI解决方案",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/blog/ai-marketing-conversion-optimization",
  },
  openGraph: {
    title: "AI营销如何提升电商转化率 | LetoAI技术博客",
    description: "深入解析AI技术在电商营销中的应用，通过数据驱动的个性化策略和智能风控系统，帮助企业实现营销ROI提升300%以上。",
    url: "https://www.letoai.tech/blog/ai-marketing-conversion-optimization",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AI营销如何提升电商转化率",
      },
    ],
    article: {
      publishedTime: "2025-01-15T09:00:00+08:00",
      modifiedTime: "2025-01-15T09:00:00+08:00",
      authors: ["LetoAI"],
      section: "AI营销",
      tags: ["AI营销", "电商转化率", "个性化推荐", "数据驱动营销", "智能风控"],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "AI营销如何提升电商转化率 | LetoAI技术博客",
    description: "深入解析AI技术在电商营销中的应用，通过数据驱动的个性化策略和智能风控系统，帮助企业实现营销ROI提升300%以上。",
    images: ["https://www.letoai.tech/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "AI营销如何提升电商转化率",
    "description": "深入解析AI技术在电商营销中的应用，通过数据驱动的个性化策略和智能风控系统，帮助企业实现营销ROI提升300%以上。",
    "image": "https://www.letoai.tech/images/logo.png",
    "author": {
      "@type": "Organization",
      "name": "LetoAI",
      "url": "https://www.letoai.tech"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LetoAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.letoai.tech/images/logo.png"
      }
    },
    "datePublished": "2025-01-15T09:00:00+08:00",
    "dateModified": "2025-01-15T09:00:00+08:00",
    "url": "https://www.letoai.tech/blog/ai-marketing-conversion-optimization",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.letoai.tech/blog/ai-marketing-conversion-optimization"
    },
    "articleSection": "AI营销",
    "keywords": ["AI营销", "电商转化率", "个性化推荐", "数据驱动营销", "智能风控"],
    "about": [
      {
        "@type": "Thing",
        "name": "AI营销解决方案"
      },
      {
        "@type": "Thing", 
        "name": "电商转化率优化"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "LetoAI技术博客",
      "url": "https://www.letoai.tech/blog"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://www.letoai.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "博客",
        "item": "https://www.letoai.tech/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI营销如何提升电商转化率",
        "item": "https://www.letoai.tech/blog/ai-marketing-conversion-optimization"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <BlogArticleContent />
    </>
  )
}
