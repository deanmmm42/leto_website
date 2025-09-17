"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"

// 博客文章数据（后续可以迁移到CMS或数据库）
const blogPosts = [
  {
    id: "ai-comprehensive-assessment-dimensions",
    title: "告别唯分数论：AI综合素养评价五大核心维度深度解析",
    excerpt: "深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。",
    category: "AI教育",
    publishDate: "2025-09-17",
    readTime: "15分钟阅读",
    featured: true,
    tags: ["AI综合素养评价", "五育并举", "学生成长画像", "智能语音交互", "教育评价改革"]
  },
  {
    id: "ai-marketing-conversion-optimization",
    title: "AI营销如何提升电商转化率",
    excerpt: "深入解析AI技术在电商营销中的应用，通过数据驱动的个性化策略，帮助企业实现营销ROI提升300%以上。",
    category: "AI营销",
    publishDate: "2025-09-15",
    readTime: "8分钟阅读",
    featured: true,
    tags: ["AI营销", "电商转化", "数据分析", "个性化推荐"]
  }
]

const categories = [
  { name: "全部", value: "all", count: 2 },
  { name: "AI营销", value: "ai-marketing", count: 1 },
  { name: "AI教育", value: "ai-education", count: 1 },
  { name: "海外工具", value: "global-tools", count: 0 },
  { name: "技术趋势", value: "tech-trends", count: 0 },
]

export default function BlogContent() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: "easeOut" as const,
      },
    }),
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-letoOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8">
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {common.backToHome}
                </Link>
              </Button>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
                AI技术博客
              </span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <DescriptionText
                size="medium"
                className="text-lg text-slate-600 dark:text-white/60 text-center max-w-2xl mx-auto"
              >
                分享AI营销、教育、工具开发等前沿技术内容，助力企业数字化转型
              </DescriptionText>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Categories */}
            <aside className="lg:w-1/4">
              <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 sticky top-8">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">分类</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div
                      key={category.value}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer",
                        index === 0
                          ? "bg-letoOrange/10 text-letoOrange dark:bg-letoTurquoise/10 dark:text-letoTurquoise border border-letoOrange/20 dark:border-letoTurquoise/20"
                          : "hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-white/70"
                      )}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm opacity-60">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
              {blogPosts.length > 0 ? (
                <div className="space-y-8">
                  {blogPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-letoOrange/10 dark:hover:bg-white/[0.08] transition-all duration-500 group hover:-translate-y-1"
                    >
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-letoOrange/10 dark:bg-letoTurquoise/10 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                          <Calendar className="h-3 w-3" />
                          {post.publishDate}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-letoOrange dark:group-hover:text-letoTurquoise transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <DescriptionText className="mb-6" size="small">
                        {post.excerpt}
                      </DescriptionText>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-white/60 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Button asChild variant="ghost" className="text-letoOrange dark:text-letoTurquoise hover:text-letoOrange dark:hover:text-letoTurquoise">
                          <Link href={`/blog/${post.id}`}>
                            阅读全文 →
                          </Link>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-12">
                    <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">即将发布更多精彩内容</h3>
                    <DescriptionText className="mb-8">我们正在准备高质量的AI技术文章，敬请期待</DescriptionText>
                    <Button asChild className="leto-gradient-bg hover:opacity-90 text-white">
                      <Link href="/#contact">订阅更新通知</Link>
                    </Button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}