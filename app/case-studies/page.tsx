import { Metadata } from "next"
import CaseStudiesContent from "./case-studies-content"

export const metadata: Metadata = {
  title: "成功案例研究 | LetoAI - 电商营销、教育评估、全球工具AI解决方案案例",
  description: "LetoAI为电商营销、教育评估、全球工具三大领域提供专业AI解决方案，包括平安好车主权益服务平台、教育机构综合素养评价系统等成功案例，实现营销ROI提升300%+，评价效率提升300%+。",
  keywords: "AI成功案例, 电商营销AI, 教育评估AI, 全球工具AI, 权益营销AI, 综合素养评价, 企业AI转型案例",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/case-studies",
  },
  openGraph: {
    title: "成功案例研究 | LetoAI - 电商营销、教育评估、全球工具AI解决方案案例",
    description: "LetoAI为电商营销、教育评估、全球工具三大领域提供专业AI解决方案，包括平安好车主权益服务平台、教育机构综合素养评价系统等成功案例，实现营销ROI提升300%+，评价效率提升300%+。",
    url: "https://www.letoai.tech/case-studies",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI AI成功案例研究",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "成功案例研究 | LetoAI - 电商营销、教育评估、全球工具AI解决方案案例",
    description: "LetoAI为电商营销、教育评估、全球工具三大领域提供专业AI解决方案，包括平安好车主权益服务平台、教育机构综合素养评价系统等成功案例，实现营销ROI提升300%+，评价效率提升300%+。",
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

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "LetoAI成功案例",
    "description": "LetoAI为客户提供AI解决方案的成功案例集合，展示在电商营销、教育评估、全球工具等领域的应用成果",
    "url": "https://www.letoai.tech/case-studies",
    "mainEntity": {
      "@type": "ItemList",
      "name": "AI解决方案成功案例",
      "itemListElement": [
        {
          "@type": "CaseStudy",
          "name": "平安好车主权益服务平台案例",
          "description": "为车主权益服务平台打造数字权益管理系统，覆盖全国300+城市，8大类200+项权益",
          "about": {
            "@type": "Service",
            "name": "电商营销AI解决方案"
          }
        },
        {
          "@type": "CaseStudy",
          "name": "综合素养评价系统应用案例",
          "description": "为教育机构部署AI综合素养评价系统，评价效率提升300%+，教师满意度95%+",
          "about": {
            "@type": "Service",
            "name": "教育评估AI解决方案"
          }
        },
        {
          "@type": "CaseStudy",
          "name": "个性化教辅系统应用案例",
          "description": "通过AI智能题库与个性化辅导系统，学习效果平均提升50%+",
          "about": {
            "@type": "Service",
            "name": "教育评估AI解决方案"
          }
        }
      ]
    },
    "provider": {
      "@type": "Organization",
      "name": "LetoAI"
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
        "name": "成功案例",
        "item": "https://www.letoai.tech/case-studies"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudiesSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <CaseStudiesContent />
    </>
  )
}
