import { Metadata } from "next"
import EducationContent from "./education-content"

export const metadata: Metadata = {
  title: "AI教育解决方案 - LetoAI智能评估系统 | 综合素养评价",
  description: "LetoAI为教育机构提供AI驱动的学生综合素养评价与个性化辅导解决方案，评价效率提升300%+，教师满意度95%+，助力教育行业数字化转型。",
  keywords: "AI教育,智慧教育,教育评估,综合素养评价,个性化辅导,学生评价系统,教育AI,LetoAI,因材施教,教育数字化",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/solutions/education",
  },
  openGraph: {
    title: "AI教育解决方案 - LetoAI智能评估系统 | 综合素养评价",
    description: "LetoAI为教育机构提供AI驱动的学生综合素养评价与个性化辅导解决方案，评价效率提升300%+，教师满意度95%+，助力教育行业数字化转型。",
    url: "https://www.letoai.tech/solutions/education",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "LetoAI AI教育评估解决方案",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI教育解决方案 - LetoAI智能评估系统 | 综合素养评价",
    description: "LetoAI为教育机构提供AI驱动的学生综合素养评价与个性化辅导解决方案，评价效率提升300%+，教师满意度95%+，助力教育行业数字化转型。",
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

const educationPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI教育评估解决方案",
  "description": "LetoAI为教育机构提供AI驱动的学生综合素养评价与个性化辅导解决方案，评价效率提升300%+，教师满意度95%+，助力教育行业数字化转型。",
  "url": "https://www.letoai.tech/solutions/education",
  "mainEntity": {
    "@type": "Service",
    "name": "AI教育评估解决方案",
    "description": "智慧教育AI评估系统，提供综合素养评价与个性化辅导",
    "provider": {
      "@type": "Organization",
      "name": "LetoAI",
      "url": "https://www.letoai.tech"
    },
    "areaServed": "中国",
    "serviceType": "AI教育评估解决方案",
    "offers": {
      "@type": "Offer",
      "description": "AI驱动的学生综合素养评价与个性化辅导解决方案",
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
        "name": "AI教育",
        "item": "https://www.letoai.tech/solutions/education"
      }
    ]
  }
}

export default function EducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationPageSchema)
        }}
      />
      <EducationContent />
    </>
  )
}