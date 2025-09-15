import { Metadata } from "next"
import EcommerceContent from "./ecommerce-content"

export const metadata: Metadata = {
  title: "AI营销解决方案 | LetoAI - 数字权益智能营销驱动GMV百亿级增长",
  description: "LetoAI基于私有化AI大模型，为电商企业提供安全高效的智能营销解决方案，实现营销ROI提升300%+，风控准确率99.7%，助力企业数字化转型。",
  keywords: "AI营销,数字营销,电商AI,智能营销,风控系统,用户增长,LetoAI,数字权益营销,拉新促活,用户留存,私有化AI大模型",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/solutions/ecommerce",
  },
  openGraph: {
    title: "AI营销解决方案 | LetoAI - 数字权益智能营销驱动GMV百亿级增长",
    description: "LetoAI基于私有化AI大模型，为电商企业提供安全高效的智能营销解决方案，实现营销ROI提升300%+，风控准确率99.7%，助力企业数字化转型。",
    url: "https://www.letoai.tech/solutions/ecommerce",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI AI营销解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI营销解决方案 | LetoAI - 数字权益智能营销驱动GMV百亿级增长",
    description: "LetoAI基于私有化AI大模型，为电商企业提供安全高效的智能营销解决方案，实现营销ROI提升300%+，风控准确率99.7%，助力企业数字化转型。",
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

const ecommercePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI营销解决方案",
  "description": "LetoAI基于私有化AI大模型，为电商企业提供安全高效的智能营销解决方案，实现营销ROI提升300%+，风控准确率99.7%，助力企业数字化转型。",
  "url": "https://www.letoai.tech/solutions/ecommerce",
  "mainEntity": {
    "@type": "Service",
    "name": "AI营销解决方案",
    "description": "数字权益智能营销解决方案，驱动GMV百亿级增长",
    "provider": {
      "@type": "Organization",
      "name": "LetoAI",
      "url": "https://www.letoai.tech"
    },
    "areaServed": "中国",
    "serviceType": "AI营销解决方案",
    "offers": {
      "@type": "Offer",
      "description": "基于私有化AI大模型的智能营销解决方案",
      "seller": {
        "@type": "Organization",
        "name": "LetoAI"
      }
    }
  },
  "breadcrumb": {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI营销",
        "item": "https://www.letoai.tech/solutions/ecommerce"
      }
    ]
  }
}

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecommercePageSchema)
        }}
      />
      <EcommerceContent />
    </>
  )
}