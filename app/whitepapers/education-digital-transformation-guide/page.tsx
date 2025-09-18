import { Metadata } from "next"
import WhitepaperContent from "./whitepaper-content"

export const metadata: Metadata = {
  title: "教育行业数字化转型实践指南2025 | AI驱动智慧教育变革白皮书 - LetoAI",
  description: "LetoAI发布《教育行业数字化转型实践指南2025》，基于四维一体转型框架，提供从战略规划到技术实施的完整路线图。涵盖成熟度评估、实施路径、案例分析，助力教育机构实现智慧教育转型。",
  keywords: "教育数字化转型, 智慧教育解决方案, 教育行业AI应用, 数字化转型实践指南, 教育评估系统, 智慧校园建设, AI教育评价, 教育数据治理, 教育技术白皮书, LetoAI",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/whitepapers/education-digital-transformation-guide",
  },
  openGraph: {
    title: "教育行业数字化转型实践指南2025 | AI驱动智慧教育变革白皮书 - LetoAI",
    description: "基于四维一体转型框架的教育数字化转型完整指南，涵盖战略规划、技术架构、实施路径与成功案例。",
    url: "https://www.letoai.tech/whitepapers/education-digital-transformation-guide",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI 教育行业数字化转型实践指南",
      },
    ],
    publishedTime: "2025-09-18T00:00:00.000Z",
    modifiedTime: "2025-09-18T00:00:00.000Z",
    section: "Technology",
    tags: ["教育数字化转型", "智慧教育", "AI教育", "数字化转型", "教育技术"],
  },
  twitter: {
    card: "summary_large_image",
    title: "教育行业数字化转型实践指南2025 | AI驱动智慧教育变革白皮书 - LetoAI",
    description: "基于四维一体转型框架的教育数字化转型完整指南，涵盖战略规划、技术架构、实施路径与成功案例。",
    images: ["https://www.letoai.tech/images/logo.png"],
    creator: "@LetoAI",
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
  other: {
    "article:author": "LetoAI",
    "article:section": "Education Technology",
    "article:tag": "教育数字化转型,智慧教育,AI教育",
  },
}

export default function EducationDigitalTransformationGuidePage() {
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
        "name": "白皮书",
        "item": "https://www.letoai.tech/whitepapers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "教育行业数字化转型实践指南",
        "item": "https://www.letoai.tech/whitepapers/education-digital-transformation-guide"
      }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "教育行业数字化转型实践指南2025：AI驱动智慧教育变革白皮书",
    "description": "LetoAI发布《教育行业数字化转型实践指南2025》，基于四维一体转型框架，提供从战略规划到技术实施的完整路线图。",
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
    "datePublished": "2025-09-18T00:00:00.000Z",
    "dateModified": "2025-09-18T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.letoai.tech/whitepapers/education-digital-transformation-guide"
    },
    "articleSection": "Education Technology",
    "keywords": "教育数字化转型, 智慧教育解决方案, 教育行业AI应用, 数字化转型实践指南",
    "wordCount": 12000,
    "inLanguage": "zh-CN",
    "about": {
      "@type": "Thing",
      "name": "教育数字化转型",
      "description": "利用AI和数字技术推动教育行业的全面升级改造"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LetoAI",
    "alternateName": "四川省乐途智行科技有限公司",
    "url": "https://www.letoai.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.letoai.tech/images/logo.png"
    },
    "sameAs": [
      "https://www.letoai.tech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-028-xxxx-xxxx",
      "contactType": "customer service",
      "areaServed": "CN",
      "availableLanguage": "Chinese"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "天府二街领地环球金融中心A808",
      "addressLocality": "成都市",
      "addressRegion": "四川省",
      "addressCountry": "CN"
    },
    "knowsAbout": [
      "AI营销解决方案",
      "教育AI评估系统",
      "海外AI工具开发",
      "教育数字化转型"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <WhitepaperContent />
    </>
  )
}