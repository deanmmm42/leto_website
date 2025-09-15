import { Metadata } from "next"
import BlogContent from "./blog-content"

export const metadata: Metadata = {
  title: "AI技术博客 | LetoAI - 专业AI营销、教育、工具开发技术分享",
  description: "LetoAI技术博客分享AI营销策略、教育AI应用、海外工具开发等前沿技术内容，助力企业数字化转型和AI技术应用。",
  keywords: "AI博客, AI营销技术, AI教育应用, 海外AI工具开发, 数字化转型, 人工智能技术分享",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/blog",
  },
  openGraph: {
    title: "AI技术博客 | LetoAI - 专业AI营销、教育、工具开发技术分享",
    description: "LetoAI技术博客分享AI营销策略、教育AI应用、海外工具开发等前沿技术内容，助力企业数字化转型和AI技术应用。",
    url: "https://www.letoai.tech/blog",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI AI技术博客",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI技术博客 | LetoAI - 专业AI营销、教育、工具开发技术分享",
    description: "LetoAI技术博客分享AI营销策略、教育AI应用、海外工具开发等前沿技术内容，助力企业数字化转型和AI技术应用。",
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

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "LetoAI技术博客",
    "description": "LetoAI技术博客分享AI营销策略、教育AI应用、海外工具开发等前沿技术内容",
    "url": "https://www.letoai.tech/blog",
    "publisher": {
      "@type": "Organization",
      "name": "LetoAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.letoai.tech/images/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "BlogPosting",
          "headline": "AI驱动的电商转化率优化：从数据洞察到实际行动",
          "description": "深入探讨如何运用AI技术提升电商转化率，基于真实项目经验分享实用策略。",
          "url": "https://www.letoai.tech/blog/ai-marketing-conversion-optimization",
          "author": {
            "@type": "Organization",
            "name": "LetoAI"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "LetoAI"
          },
          "datePublished": "2025-01-15",
          "dateModified": "2025-01-15"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema)
        }}
      />
      <BlogContent />
    </>
  )
}
