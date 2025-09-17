"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Tag, Calendar, Share, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"
import Breadcrumb from "@/components/breadcrumb"
import { getBreadcrumbItems } from "@/lib/breadcrumb-config"
import { usePathname } from "next/navigation"

export default function BlogArticleContent() {
  const pathname = usePathname()
  const breadcrumbItems = getBreadcrumbItems(pathname)

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

      {/* Breadcrumb */}
      <div className="pt-20 pb-2">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Article Header */}
      <article className="relative pt-8 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 mb-8"
            >
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回博客
                </Link>
              </Button>
            </motion.div>

            {/* Article Meta */}
            <motion.div
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-letoOrange/10 dark:bg-letoTurquoise/10 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                <Tag className="h-3 w-3" />
                AI营销
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                <Calendar className="h-3 w-3" />
                2025年9月15日
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                <Clock className="h-3 w-3" />
                8分钟阅读
              </span>
            </motion.div>

            {/* Article Title */}
            <motion.h1
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight"
            >
              AI营销如何提升电商转化率
            </motion.h1>

            {/* Article Summary */}
            <motion.div
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="bg-letoOrange/5 dark:bg-letoTurquoise/5 border border-letoOrange/20 dark:border-letoTurquoise/20 rounded-2xl p-6 mb-10"
            >
              <DescriptionText size="medium" className="text-slate-700 dark:text-white/80 font-medium">
                在流量红利消失的时代，AI技术正在重新定义电商营销。本文将深入解析如何通过AI驱动的个性化策略、智能风控系统和数据分析，帮助电商企业实现营销ROI提升300%以上。
              </DescriptionText>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 md:p-12 prose prose-lg dark:prose-invert max-w-none">
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">电商营销的AI革命已经到来</h2>
              
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                在传统电商营销模式下，企业面临着获客成本高、用户留存率低、营销效率下降等挑战。随着流量红利的消失和竞争的加剧，电商行业平均获客成本持续上升，而转化率却面临瓶颈。在这种背景下，AI技术的应用成为电商企业突破增长瓶颈的关键。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-10">AI营销的核心优势</h2>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">1. 精准用户画像与个性化推荐</h3>
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                AI技术通过深度学习算法分析用户行为数据、购买历史、浏览偏好等多维度信息，构建精准的用户画像。基于这些画像，系统可以实现千人千面的个性化商品推荐，显著提升用户购买意愿。
              </p>

              <div className="bg-slate-50 dark:bg-white/[0.02] rounded-xl p-6 mb-6 border border-slate-200 dark:border-white/10">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">AI个性化推荐效果：</h4>
                <ul className="space-y-2 text-slate-700 dark:text-white/80">
                  <li>• 通过深度学习算法分析用户行为模式，实现精准商品推荐</li>
                  <li>• 基于实时数据动态调整推荐策略，提升用户购买意愿</li>
                  <li>• 多维度用户画像构建，支持千人千面个性化体验</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">2. 智能定价与动态优化</h3>
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                AI算法能够实时分析市场竞争、库存状况、用户需求等因素，自动调整商品定价策略。这种动态定价机制不仅能够最大化利润，还能提升市场竞争力。
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">3. 智能风控与反欺诈</h3>
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                通过机器学习模型识别异常用户行为，AI风控系统能够有效防范"羊毛党"、虚假交易等欺诈行为，保护营销预算不被恶意用户消耗。LetoAI凭借先进的AI风控技术，已成功服务多家头部企业，在营销反欺诈领域积累了丰富经验。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-10">AI营销实施策略</h2>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">第一阶段：数据收集与整合</h3>
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-4">
                建立完善的数据收集体系，整合用户行为数据、交易数据、外部数据源等多维度信息。确保数据质量和数据安全合规性。
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">第二阶段：AI模型训练与优化</h3>
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-4">
                基于历史数据训练个性化推荐模型、用户价值预测模型、反欺诈模型等核心AI算法。持续优化模型性能，确保预测准确性。
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">第三阶段：营销自动化部署</h3>
              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                将AI模型集成到营销系统中，实现用户分群、个性化内容推送、智能客服、动态定价等功能的自动化运行。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-10">成功案例分析</h2>

              <div className="bg-gradient-to-r from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoTurquoise/10 dark:to-letoCoolEnd/10 rounded-xl p-6 mb-6 border border-letoOrange/20 dark:border-letoTurquoise/20">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">头部企业营销转型案例</h4>
                <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-4">
                  某知名互联网企业通过部署LetoAI的数字权益营销平台，实现了精准的用户拉新和促活策略。通过AI算法识别高价值用户，优化营销资源分配，显著提升了营销效果和用户体验。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-letoOrange dark:text-letoTurquoise">5000万+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">日活跃用户规模</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-letoOrange dark:text-letoTurquoise">300%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">营销ROI提升</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-letoOrange dark:text-letoTurquoise">99.7%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">风控准确率</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-500 dark:text-white/50">
                  * 数据来源于LetoAI服务的头部客户实际应用效果
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-10">未来发展趋势</h2>

              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                随着大语言模型和多模态AI技术的发展，未来的AI营销将更加智能化和人性化。预计到2026年，AI驱动的营销将成为电商行业的标准配置，不再是可选项而是必需品。
              </p>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">关键发展方向：</h3>
              <ul className="space-y-3 text-slate-700 dark:text-white/80 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-letoOrange dark:bg-letoTurquoise rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>对话式营销：</strong>基于大语言模型的智能客服和营销助手</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-letoOrange dark:bg-letoTurquoise rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>视觉AI营销：</strong>图像识别和视频内容自动生成</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-letoOrange dark:bg-letoTurquoise rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>预测性营销：</strong>提前预测用户需求和行为变化</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-letoOrange dark:bg-letoTurquoise rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>全链路智能化：</strong>从获客到留存的全流程AI优化</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-10">结语</h2>

              <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                AI营销不再是未来概念，而是当下电商企业提升竞争力的必要手段。通过合理运用AI技术，企业可以在降低成本的同时显著提升营销效果。LetoAI专注于数字权益智能营销领域，已成功服务抖音、平安、美团等50+头部客户，在行业中确立了领导者地位。
              </p>

              <div className="bg-letoOrange/5 dark:bg-letoTurquoise/5 border border-letoOrange/20 dark:border-letoTurquoise/20 rounded-xl p-6 text-center">
                <p className="text-slate-700 dark:text-white/80 mb-4">
                  想了解更多AI营销解决方案？
                </p>
                <Button asChild className="leto-gradient-bg hover:opacity-90 text-white">
                  <Link href="/contact?from=/blog/ai-marketing-conversion-optimization">立即咨询专家</Link>
                </Button>
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-8 bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-slate-600 dark:text-white/60">分享这篇文章：</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Share className="h-4 w-4" />
                      分享
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      点赞
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AI营销", "电商转化", "数据分析", "个性化推荐"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-white/60 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">相关文章推荐</h3>
              <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center">
                <p className="text-slate-600 dark:text-white/60 mb-4">更多精彩内容即将发布</p>
                <Button asChild variant="outline">
                  <Link href="/blog">查看所有文章</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}