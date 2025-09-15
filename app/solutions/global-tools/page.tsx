import { Metadata } from "next"
import GlobalToolsContent from "./global-tools-content"

export const metadata: Metadata = {
  title: "海外AI工具产品 | LetoAI - AI驱动的海外移动应用开发",
  description: "LetoAI基于基础设施级AI技术，专业打造海外移动应用产品，累计下载量1000万+，为全球用户提供智能化工具体验，涵盖智能相册清理、健康监测等领域。",
  keywords: "海外AI工具,移动应用开发,AI工具产品,智能相册清理,健康监测,LetoAI,海外市场,全球应用,AI技术,工具应用",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/solutions/global-tools",
  },
  openGraph: {
    title: "海外AI工具产品 | LetoAI - AI驱动的海外移动应用开发",
    description: "LetoAI基于基础设施级AI技术，专业打造海外移动应用产品，累计下载量1000万+，为全球用户提供智能化工具体验，涵盖智能相册清理、健康监测等领域。",
    url: "https://www.letoai.tech/solutions/global-tools",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI 海外AI工具产品",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "海外AI工具产品 | LetoAI - AI驱动的海外移动应用开发",
    description: "LetoAI基于基础设施级AI技术，专业打造海外移动应用产品，累计下载量1000万+，为全球用户提供智能化工具体验，涵盖智能相册清理、健康监测等领域。",
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

const globalToolsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "海外AI工具产品",
  "description": "LetoAI基于基础设施级AI技术，专业打造海外移动应用产品，累计下载量1000万+，为全球用户提供智能化工具体验，涵盖智能相册清理、健康监测等领域。",
  "url": "https://www.letoai.tech/solutions/global-tools",
  "mainEntity": {
    "@type": "Service",
    "name": "海外AI工具产品",
    "description": "AI驱动的海外移动应用开发，为全球用户提供智能化工具体验",
    "provider": {
      "@type": "Organization",
      "name": "LetoAI",
      "url": "https://www.letoai.tech"
    },
    "areaServed": "全球",
    "serviceType": "海外AI工具产品开发",
    "offers": {
      "@type": "Offer",
      "description": "基于AI技术的海外移动应用产品开发服务",
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
        "name": "海外AI工具",
        "item": "https://www.letoai.tech/solutions/global-tools"
      }
    ]
  }
}

export default function GlobalToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(globalToolsPageSchema)
        }}
      />
      <GlobalToolsContent />
    </>
  )
}