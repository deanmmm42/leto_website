import { Metadata } from "next"
import BlogArticleContent from "./blog-article-content"

export const metadata: Metadata = {
  title: "LetoAI首席科学家龙迪教授重磅报告：AI赋能中小学生综合素质评价的实践探索 | LetoAI技术博客",
  description: "成都市教育学会2025年学术年会“人工智能+典型应用场景案例分享”上，龙迪教授分享LetoAI在综合素质评价的实践：多维素养模型、成长数字档案与AI+评价的落地路径。",
  keywords: "AI综合素质评价, 教育评价改革, 龙迪教授, 成都教育学会, LetoAI, 中小学生评价, 个性化成长画像, 多维素养模型, 教育数字化, AI教育解决方案, 人工智能+典型应用场景案例分享",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/blog/ai-assessment-practice-report",
  },
  openGraph: {
    title: "LetoAI首席科学家龙迪教授重磅报告：AI赋能中小学生综合素质评价的实践探索",
    description: "成都市教育学会2025年学术年会分享LetoAI在综合素质评价的实践路径。",
    url: "https://www.letoai.tech/blog/ai-assessment-practice-report",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "https://www.letoai.tech/images/blog/ai-assessment-report/hero-poster.png",
        width: 1280,
        height: 720,
        alt: "“人工智能+”典型应用场景案例分享海报",
      },
    ],
    article: {
      publishedTime: "2025-12-06T10:00:00+08:00",
      modifiedTime: "2025-12-06T10:00:00+08:00",
      authors: ["龙迪", "LetoAI"],
      section: "AI教育",
      tags: ["AI教育", "实践案例", "会议报告", "综合素质评价"],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "LetoAI首席科学家龙迪教授重磅报告：AI赋能中小学生综合素质评价的实践探索",
    description: "在成都教育学会2025年学术年会上，LetoAI展示AI+评价的实践路径。",
    images: ["https://www.letoai.tech/images/blog/ai-assessment-report/hero-poster.png"],
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
    "headline": "LetoAI首席科学家龙迪教授重磅报告：AI赋能中小学生综合素质评价的实践探索",
    "description": "成都市教育学会2025年学术年会上，龙迪教授分享LetoAI在综合素质评价的实践：多维素养模型与成长数字档案。",
    "image": "https://www.letoai.tech/images/blog/ai-assessment-report/hero-poster.png",
    "author": [
      {
        "@type": "Person",
        "name": "龙迪",
        "affiliation": {
          "@type": "Organization",
          "name": "LetoAI"
        }
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
    "datePublished": "2025-12-06T10:00:00+08:00",
    "dateModified": "2025-12-06T10:00:00+08:00",
    "url": "https://www.letoai.tech/blog/ai-assessment-practice-report",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.letoai.tech/blog/ai-assessment-practice-report"
    },
    "articleSection": "AI教育",
    "keywords": ["AI综合素质评价", "教育评价改革", "龙迪教授", "成都教育学会"],
    "about": [
      {
        "@type": "Thing",
        "name": "AI教育评价解决方案"
      },
      {
        "@type": "Thing",
        "name": "综合素质评价系统"
      },
      {
        "@type": "Event",
        "name": "成都教育学会2025年学术年会"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "LetoAI技术博客",
      "url": "https://www.letoai.tech/blog"
    },
    "wordCount": 2200,
    "articleBody": "成都市教育学会2025年学术年会“人工智能+典型应用场景案例分享”上，龙迪教授分享LetoAI在综合素质评价的实践：多维素养模型、成长数字档案与AI+评价的落地路径。"
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
        "name": "龙迪教授AI赋能综合素质评价实践探索",
        "item": "https://www.letoai.tech/blog/ai-assessment-practice-report"
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
