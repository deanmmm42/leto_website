import { BreadcrumbItem } from "@/components/breadcrumb"

export interface BreadcrumbConfig {
  [path: string]: BreadcrumbItem[]
}

export const breadcrumbConfig: BreadcrumbConfig = {
  '/solutions/ecommerce': [
    { name: '首页', href: '/' },
    { name: '解决方案', href: '/solutions' },
    { name: 'AI营销', href: '/solutions/ecommerce', isCurrentPage: true }
  ],
  '/solutions/education': [
    { name: '首页', href: '/' },
    { name: '解决方案', href: '/solutions' },
    { name: 'AI教育', href: '/solutions/education', isCurrentPage: true }
  ],
  '/solutions/global-tools': [
    { name: '首页', href: '/' },
    { name: '解决方案', href: '/solutions' },
    { name: 'AI工具', href: '/solutions/global-tools', isCurrentPage: true }
  ],
  '/blog': [
    { name: '首页', href: '/' },
    { name: '博客', href: '/blog', isCurrentPage: true }
  ],
  '/blog/ai-comprehensive-assessment-dimensions': [
    { name: '首页', href: '/' },
    { name: '博客', href: '/blog' },
    { name: 'AI综合素养评价五大核心维度深度解析', href: '/blog/ai-comprehensive-assessment-dimensions', isCurrentPage: true }
  ],
  '/blog/ai-marketing-conversion-optimization': [
    { name: '首页', href: '/' },
    { name: '博客', href: '/blog' },
    { name: 'AI营销如何提升电商转化率', href: '/blog/ai-marketing-conversion-optimization', isCurrentPage: true }
  ],
  '/whitepapers': [
    { name: '首页', href: '/' },
    { name: '白皮书', href: '/whitepapers', isCurrentPage: true }
  ],
  '/help': [
    { name: '首页', href: '/' },
    { name: '帮助中心', href: '/help', isCurrentPage: true }
  ],
  '/case-studies': [
    { name: '首页', href: '/' },
    { name: '案例研究', href: '/case-studies', isCurrentPage: true }
  ],
  '/contact': [
    { name: '首页', href: '/' },
    { name: '联系我们', href: '/contact', isCurrentPage: true }
  ],
  '/privacy-policy': [
    { name: '首页', href: '/' },
    { name: '隐私政策', href: '/privacy-policy', isCurrentPage: true }
  ]
}

/**
 * 根据路径获取面包屑导航项
 * @param pathname 当前页面路径
 * @returns 面包屑导航项数组
 */
export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  return breadcrumbConfig[pathname] || [
    { name: '首页', href: '/' },
    { name: '当前页面', href: pathname, isCurrentPage: true }
  ]
}