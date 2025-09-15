import { Metadata } from "next"
import ContactContent from "./contact-content"

export const metadata: Metadata = {
  title: "联系我们 | LetoAI - AI营销、AI教育、海外工具专业咨询",
  description: "联系LetoAI获得专业AI解决方案咨询服务，涵盖电商营销、教育评估、海外工具三大领域。我们期待与您合作，共创AI智能化未来。联系电话、邮箱及详细地址信息。",
  keywords: "联系LetoAI,AI咨询服务,专业咨询,电商营销咨询,教育AI咨询,海外工具咨询,成都AI公司,LetoAI联系方式",
  authors: [{ name: "LetoAI" }],
  creator: "LetoAI",
  publisher: "LetoAI",
  alternates: {
    canonical: "https://www.letoai.tech/contact",
  },
  openGraph: {
    title: "联系我们 | LetoAI - AI营销、AI教育、海外工具专业咨询",
    description: "联系LetoAI获得专业AI解决方案咨询服务，涵盖电商营销、教育评估、海外工具三大领域。我们期待与您合作，共创AI智能化未来。",
    url: "https://www.letoai.tech/contact",
    siteName: "LetoAI",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "https://www.letoai.tech/images/logo.png",
        width: 1200,
        height: 630,
        alt: "联系LetoAI - 专业AI解决方案咨询",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "联系我们 | LetoAI - AI营销、AI教育、海外工具专业咨询",
    description: "联系LetoAI获得专业AI解决方案咨询服务，涵盖电商营销、教育评估、海外工具三大领域。我们期待与您合作，共创AI智能化未来。",
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

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "联系我们",
  "description": "联系LetoAI获得专业AI解决方案咨询服务，涵盖电商营销、教育评估、海外工具三大领域。",
  "url": "https://www.letoai.tech/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "LetoAI",
    "legalName": "四川省乐途智行科技有限公司",
    "url": "https://www.letoai.tech",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-028-12345678",
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
    "email": "contact@letoai.tech"
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
        "name": "联系我们",
        "item": "https://www.letoai.tech/contact"
      }
    ]
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema)
        }}
      />
      <ContactContent />
    </>
  )
}