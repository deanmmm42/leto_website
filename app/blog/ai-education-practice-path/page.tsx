import { Metadata } from "next"
import BlogArticleContent from "./blog-article-content"

const articleUrl = "https://www.letoai.tech/blog/ai-education-practice-path"
const imageUrl = "https://www.letoai.tech/images/blog/ai-education-practice-path/speech-scene.jpg"
const title = "四川乐途智学的“AI+教育”实践路径：全栈AI驱动 全场景育人"
const description = "中新网四川报道四川乐途智学以自主可控的AI能力，构建覆盖“教、学、管、评、育”的全场景智慧教育解决方案。"

export const metadata: Metadata = {
  title: `${title} | LetoAI技术博客`,
  description,
  keywords: "四川乐途智学, LetoAI, AI教育, 人工智能+教育, 教育数字人, 综合素质评价, 全栈AI, 智慧教育解决方案, 教育装备展示会, 中新网四川",
  authors: [{ name: "中新网四川" }, { name: "LetoAI" }],
  creator: "中新网四川",
  publisher: "LetoAI",
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title,
    description,
    url: articleUrl,
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: imageUrl,
        width: 699,
        height: 524,
        alt: "四川乐途智学演讲现场",
      },
    ],
    publishedTime: "2026-04-24T11:56:44+08:00",
    modifiedTime: "2026-04-24T11:56:44+08:00",
    authors: ["中新网四川", "LetoAI"],
    section: "AI教育",
    tags: ["媒体报道", "AI教育", "全栈AI", "教育数字人", "综合素质评价"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
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
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": [
      {
        "@type": "Organization",
        "name": "中新网四川"
      },
      {
        "@type": "Organization",
        "name": "LetoAI",
        "url": "https://www.letoai.tech"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "LetoAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.letoai.tech/images/logo.png"
      }
    },
    "datePublished": "2026-04-24T11:56:44+08:00",
    "dateModified": "2026-04-24T11:56:44+08:00",
    "url": articleUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": "AI教育",
    "keywords": ["媒体报道", "AI教育", "全栈AI", "教育数字人", "综合素质评价"],
    "about": [
      {
        "@type": "Thing",
        "name": "AI+教育"
      },
      {
        "@type": "Thing",
        "name": "智慧教育解决方案"
      },
      {
        "@type": "Organization",
        "name": "四川乐途智学科技有限公司"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "LetoAI技术博客",
      "url": "https://www.letoai.tech/blog"
    },
    "wordCount": 1800,
    "articleBody": "中新网四川新闻4月24日电 第87届中国教育装备展示会24日在成都拉开帷幕。四川乐途智学科技有限公司正以自主可控的AI能力，构建覆盖教、学、管、评、育的全场景智慧教育解决方案。"
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
        "name": title,
        "item": articleUrl
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
