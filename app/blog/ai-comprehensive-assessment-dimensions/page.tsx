import { Metadata } from "next"
import BlogArticleContent from "./blog-article-content"

export const metadata: Metadata = {
  title: "告别唯分数论：AI综合素养评价五大核心维度深度解析 | LetoAI技术博客",
  description: "深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。",
  keywords: "AI综合素养评价, 五育并举, 学生成长画像, 教育评价改革, 智能语音交互, 德智体美劳评价, 教育数字化, AI教育解决方案",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/blog/ai-comprehensive-assessment-dimensions",
  },
  openGraph: {
    title: "告别唯分数论：AI综合素养评价五大核心维度深度解析 | LetoAI技术博客",
    description: "深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。",
    url: "https://www.letoai.tech/blog/ai-comprehensive-assessment-dimensions",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AI综合素养评价五大核心维度",
      },
    ],
    article: {
      publishedTime: "2025-09-17T10:00:00+08:00",
      modifiedTime: "2025-09-17T10:00:00+08:00",
      authors: ["LetoAI"],
      section: "AI教育",
      tags: ["AI综合素养评价", "五育并举", "学生成长画像", "教育评价改革", "智能语音交互"],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "告别唯分数论：AI综合素养评价五大核心维度深度解析 | LetoAI技术博客",
    description: "深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。",
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
    "headline": "告别唯分数论：AI综合素养评价五大核心维度深度解析",
    "description": "深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。",
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
    "datePublished": "2025-09-17T10:00:00+08:00",
    "dateModified": "2025-09-17T10:00:00+08:00",
    "url": "https://www.letoai.tech/blog/ai-comprehensive-assessment-dimensions",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.letoai.tech/blog/ai-comprehensive-assessment-dimensions"
    },
    "articleSection": "AI教育",
    "keywords": ["AI综合素养评价", "五育并举", "学生成长画像", "教育评价改革", "智能语音交互"],
    "about": [
      {
        "@type": "Thing",
        "name": "AI教育评价解决方案"
      },
      {
        "@type": "Thing",
        "name": "综合素养评价系统"
      },
      {
        "@type": "Thing",
        "name": "五育并举教育理念"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "LetoAI技术博客",
      "url": "https://www.letoai.tech/blog"
    },
    "wordCount": 4500,
    "articleBody": "本文深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨如何通过智能语音交互技术构建学生360°成长画像，为教育评价改革提供科学化、数字化的解决方案。"
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
        "name": "AI综合素养评价五大核心维度",
        "item": "https://www.letoai.tech/blog/ai-comprehensive-assessment-dimensions"
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