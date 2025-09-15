import { Metadata } from "next"
import SolutionsContent from "./solutions-content"

export const metadata: Metadata = {
  title: "AI解决方案 | LetoAI - 电商营销、教育评估、海外工具专业AI技术",
  description: "LetoAI为不同行业提供专业的AI技术解决方案，涵盖电商行业智能营销、教育行业综合素养评价、海外工具产品开发三大核心领域，助力企业数字化转型。",
  keywords: "AI解决方案, 电商AI营销, AI教育评估, 海外AI工具, 人工智能技术, 数字化转型",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/solutions",
  },
  openGraph: {
    title: "AI解决方案 | LetoAI - 电商营销、教育评估、海外工具专业AI技术",
    description: "LetoAI为不同行业提供专业的AI技术解决方案，涵盖电商行业智能营销、教育行业综合素养评价、海外工具产品开发三大核心领域，助力企业数字化转型。",
    url: "https://www.letoai.tech/solutions",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI AI解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI解决方案 | LetoAI - 电商营销、教育评估、海外工具专业AI技术",
    description: "LetoAI为不同行业提供专业的AI技术解决方案，涵盖电商行业智能营销、教育行业综合素养评价、海外工具产品开发三大核心领域，助力企业数字化转型。",
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

export default function SolutionsPage() {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LetoAI解决方案",
    "description": "LetoAI为不同行业提供专业的AI技术解决方案，涵盖电商行业智能营销、教育行业综合素养评价、海外工具产品开发三大核心领域",
    "url": "https://www.letoai.tech/solutions",
    "provider": {
      "@type": "Organization",
      "name": "LetoAI",
      "url": "https://www.letoai.tech"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI解决方案目录",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "电商AI营销解决方案",
            "description": "智能推荐系统、转化率优化、用户行为分析等电商AI服务",
            "url": "https://www.letoai.tech/solutions/ecommerce"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "教育AI评估系统",
            "description": "智能评测、学习分析、个性化推荐等教育AI服务",
            "url": "https://www.letoai.tech/solutions/education"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "海外AI工具开发",
            "description": "全球化产品设计、本地化优化、市场分析等海外工具服务",
            "url": "https://www.letoai.tech/solutions/global-tools"
          }
        }
      ]
    },
    "areaServed": "CN",
    "audience": {
      "@type": "Audience",
      "audienceType": "企业客户"
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
        "name": "解决方案",
        "item": "https://www.letoai.tech/solutions"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <SolutionsContent />
    </>
  )
}
