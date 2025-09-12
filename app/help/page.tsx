import { Metadata } from "next"
import HelpContent from "./help-content"

export const metadata: Metadata = {
  title: "帮助中心 | LetoAI - AI解决方案使用指南与技术支持",
  description: "LetoAI帮助中心为您提供AI营销、教育AI、海外工具开发等解决方案的使用指南、常见问题解答和技术支持服务。",
  keywords: "AI技术支持, LetoAI帮助中心, AI解决方案指南, 技术文档, 客户服务, AI工具使用教程",
}

export default function HelpPage() {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "LetoAI帮助中心",
    "description": "LetoAI帮助中心为您提供AI解决方案使用指南、常见问题解答和技术支持服务",
    "url": "https://www.letoai.tech/help",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "LetoAI主要提供哪些AI解决方案？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LetoAI专注于三大核心业务领域：电商行业的AI营销解决方案、教育行业的AI评估系统，以及面向全球市场的AI工具产品开发。我们为头部企业提供定制化的AI技术服务。"
        }
      },
      {
        "@type": "Question",
        "name": "如何开始使用LetoAI的服务？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "您可以通过我们的联系表单提交需求，我们的专业团队会在24小时内与您联系，为您提供详细的解决方案介绍和定制化服务建议。"
        }
      },
      {
        "@type": "Question",
        "name": "AI解决方案的部署周期是多长？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "根据项目复杂度不同，部署周期从2-8周不等。我们会提供详细的项目时间规划，确保按时交付高质量的解决方案。"
        }
      }
    ]
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
        "name": "帮助中心",
        "item": "https://www.letoai.tech/help"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <HelpContent />
    </>
  )
}
