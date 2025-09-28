export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  publishDate: string
  readTime: string
  featured?: boolean
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-comprehensive-assessment-dimensions",
    title: "告别唯分数论：AI综合素养评价五大核心维度深度解析",
    excerpt:
      "深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。",
    category: "AI教育",
    publishDate: "2025-09-17",
    readTime: "15分钟阅读",
    featured: true,
    tags: ["AI综合素养评价", "五育并举", "学生成长画像", "智能语音交互", "教育评价改革"]
  },
  {
    id: "ai-marketing-conversion-optimization",
    title: "AI营销如何提升电商转化率",
    excerpt:
      "深入解析AI技术在电商营销中的应用，通过数据驱动的个性化策略，帮助企业实现营销ROI提升300%以上。",
    category: "AI营销",
    publishDate: "2025-09-02",
    readTime: "8分钟阅读",
    featured: true,
    tags: ["AI营销", "电商转化", "数据分析", "个性化推荐"]
  }
]

export function getLatestPosts(limit = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit)
}
