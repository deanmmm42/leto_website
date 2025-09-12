import { Metadata } from "next"
import CaseStudiesContent from "./case-studies-content"

export const metadata: Metadata = {
  title: "成功案例研究 | LetoAI - 抖音、平安、美团等头部企业AI解决方案案例",
  description: "LetoAI成功为抖音极速版、平安好车主、美团等头部企业提供AI营销、风控、教育解决方案，实现营销ROI提升300%+，用户增长5000万+。",
  keywords: "AI成功案例, 抖音AI营销, 平安AI风控, 美团AI解决方案, 教育AI应用案例, 企业AI转型案例",
}

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "LetoAI成功案例",
    "description": "LetoAI为头部企业提供AI解决方案的成功案例集合，展示在电商营销、教育评估、海外工具等领域的应用成果",
    "url": "https://www.letoai.tech/case-studies",
    "mainEntity": {
      "@type": "ItemList",
      "name": "AI解决方案成功案例",
      "itemListElement": [
        {
          "@type": "CaseStudy",
          "name": "抖音极速版AI营销优化案例",
          "description": "通过AI技术优化用户推荐算法，实现营销ROI提升300%以上",
          "about": {
            "@type": "Service",
            "name": "电商AI营销解决方案"
          }
        },
        {
          "@type": "CaseStudy", 
          "name": "平安好车主AI风控系统案例",
          "description": "基于AI技术构建智能风控系统，显著提升风险识别准确率",
          "about": {
            "@type": "Service",
            "name": "AI风控解决方案"
          }
        },
        {
          "@type": "CaseStudy",
          "name": "美团AI智能推荐系统案例", 
          "description": "通过AI算法优化推荐系统，提升用户体验和转化率",
          "about": {
            "@type": "Service",
            "name": "AI推荐系统"
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
