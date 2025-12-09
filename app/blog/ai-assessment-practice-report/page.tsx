import { Metadata } from "next"
import BlogArticleContent from "./blog-article-content"

export const metadata: Metadata = {
  title: "AI赋能中小学生综合素质评价的实践探索 | LetoAI技术博客",
  description: "LetoAI首席科学家龙迪教授受邀出席成都教育学会2025年学术年会,深度剖析AI技术如何助力中小学生综合素质评价,通过多维素养模型和个性化成长画像,解决传统评价体系的三大痛点,开启教育评价改革新篇章。",
  keywords: "AI综合素质评价, 教育评价改革, 龙迪教授, 成都教育学会, LetoAI, 中小学生评价, 个性化成长画像, 多维素养模型, 教育数字化, AI教育解决方案",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/blog/ai-assessment-practice-report",
  },
  openGraph: {
    title: "AI赋能中小学生综合素质评价的实践探索 | LetoAI技术博客",
    description: "LetoAI首席科学家龙迪教授受邀出席成都教育学会2025年学术年会,深度剖析AI技术如何助力中小学生综合素质评价,通过多维素养模型和个性化成长画像,解决传统评价体系的三大痛点。",
    url: "https://www.letoai.tech/blog/ai-assessment-practice-report",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "https://www.letoai.tech/images/blog/ai-assessment-report/cover-hero.png",
        width: 1200,
        height: 630,
        alt: "龙迪教授成都教育学会报告",
      },
    ],
    article: {
      publishedTime: "2025-12-09T10:00:00+08:00",
      modifiedTime: "2025-12-09T10:00:00+08:00",
      authors: ["龙迪", "LetoAI"],
      section: "AI教育",
      tags: ["AI教育", "实践案例", "会议报告", "综合素质评价"],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "AI赋能中小学生综合素质评价的实践探索 | LetoAI",
    description: "LetoAI首席科学家龙迪教授深度剖析AI技术如何突破传统评价局限,通过多维素养模型和个性化成长画像,让教育评价更科学、更有温度。",
    images: ["https://www.letoai.tech/images/blog/ai-assessment-report/cover-hero.png"],
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
    "headline": "龙迪教授受邀成都教育学会2025学术年会:AI赋能综合素质评价实践探索",
    "description": "LetoAI首席科学家龙迪教授受邀出席成都教育学会2025年学术年会,深度剖析AI技术如何助力中小学生综合素质评价。",
    "image": "https://www.letoai.tech/images/blog/ai-assessment-report/cover-hero.png",
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
    "datePublished": "2025-12-09T10:00:00+08:00",
    "dateModified": "2025-12-09T10:00:00+08:00",
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
    "wordCount": 3500,
    "articleBody": "龙迪教授在成都教育学会2025年学术年会上深度剖析AI技术如何突破传统教育评价的局限,通过多维素养模型和个性化成长画像,解决数据采集难、评价主观性强、结果反馈滞后等三大痛点,为教育评价改革指明方向。"
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
