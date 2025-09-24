import { Metadata } from "next"
import WhitepapersContent from "./whitepapers-content"

export const metadata: Metadata = {
  title: "AI技术白皮书 | LetoAI - 人工智能行业深度分析与技术指南",
  description: "LetoAI发布的AI技术白皮书合集，涵盖AI营销、教育AI、全球工具开发等领域的深度技术分析和行业趋势报告。",
  keywords: "AI白皮书, 人工智能技术报告, AI营销指南, 教育AI研究, 海外AI工具开发, 技术分析报告",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/whitepapers",
  },
  openGraph: {
    title: "AI技术白皮书 | LetoAI - 人工智能行业深度分析与技术指南",
    description: "LetoAI发布的AI技术白皮书合集，涵盖AI营销、教育AI、全球工具开发等领域的深度技术分析和行业趋势报告。",
    url: "https://www.letoai.tech/whitepapers",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI AI技术白皮书",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI技术白皮书 | LetoAI - 人工智能行业深度分析与技术指南",
    description: "LetoAI发布的AI技术白皮书合集，涵盖AI营销、教育AI、全球工具开发等领域的深度技术分析和行业趋势报告。",
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

export default function WhitepapersPage() {
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
      }
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
      <WhitepapersContent />
    </>
  )
}