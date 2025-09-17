"use client"

import { ArrowLeft, Clock, Tag, Calendar, Users, BookOpen, TrendingUp, BarChart3, Shield, Brain, Star, CheckCircle, Mic, Smartphone, Lightbulb, Target, Zap } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-20 pb-2">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Article Header */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-letoOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回博客
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-letoOrange/10 dark:bg-letoTurquoise/10 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                <Tag className="h-3 w-3" />
                AI教育
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                <Calendar className="h-3 w-3" />
                2025年9月17日
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                <Clock className="h-3 w-3" />
                15分钟阅读
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoWarmEnd to-letoPink">
                告别唯分数论：
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoPink via-letoPurple to-letoCoolEnd">
                AI综合素养评价五大核心维度深度解析
              </span>
            </h1>

            <div>
              <DescriptionText size="large" className="text-xl leading-relaxed text-slate-700 dark:text-white/80 mb-8">
                深入解析AI综合素养评价系统的德智体美劳五大核心维度，探讨智能语音交互技术如何构建学生360°成长画像，助力教育评价改革走向科学化、数字化。
              </DescriptionText>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

            {/* 文章目录 */}
            <section className="mb-16">
              <div className="bg-blue-50/80 dark:bg-white/[0.05] backdrop-blur-md border border-blue-200/30 dark:border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">文章目录</h2>
                </div>

                <nav className="grid grid-cols-1 gap-3">
                  <a href="#introduction" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    1. 告别"唯分数论"的教育评价变革
                  </a>
                  <a href="#core-concept" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    2. AI综合素养评价的核心理念
                  </a>
                  <a href="#five-dimensions" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    3. 五大核心维度深度解析
                  </a>
                  <a href="#voice-interaction" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    4. 智能语音交互技术
                  </a>
                  <a href="#technical-implementation" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    5. 技术实现架构
                  </a>
                  <a href="#success-cases" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    6. 成功实践案例
                  </a>
                  <a href="#future-outlook" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    7. 未来发展展望
                  </a>
                </nav>
              </div>
            </section>

            {/* 引言：告别"唯分数论"的教育评价变革 */}
            <section
              id="introduction"
              className="mb-16 scroll-mt-8"
            >
              <div className="bg-slate-50/90 dark:bg-white/[0.05] backdrop-blur-md border border-slate-200/40 dark:border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">告别"唯分数论"的教育评价变革</h2>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-white/80 leading-relaxed">
                  <p>
                    长期以来，中国教育系统深受"唯分数论"困扰。一张试卷、一个分数，成为评判学生优劣的唯一标准。然而，这种单一化的评价方式越来越无法适应新时代的教育需求。<strong className="text-letoOrange dark:text-letoTurquoise">2020年中共中央、国务院印发的《深化新时代教育评价改革总体方案》</strong>明确指出，要"改进结果评价，强化过程评价，探索增值评价，健全综合评价"。
                  </p>
                  <p>
                    传统分数评价体系的局限性日益凸显：<strong>无法全面反映学生的综合素质</strong>，缺乏对学习过程的关注，忽视了学生的个性化发展需求。据教育部统计，超过<strong className="text-letoOrange dark:text-letoTurquoise">85%的教师</strong>认为现有评价体系过于单一，<strong className="text-letoOrange dark:text-letoTurquoise">90%的家长</strong>希望看到孩子更全面的成长记录。
                  </p>
                  <p>
                    在这一背景下，人工智能技术为教育评价改革带来了前所未有的机遇。通过AI驱动的综合素养评价系统，我们可以<strong>构建学生360°成长画像</strong>，真正实现"五育并举"的教育目标。LetoAI基于10亿+教育数据训练的AI评价系统，已在全国超过<strong className="text-letoOrange dark:text-letoTurquoise">200所学校</strong>成功部署，评价效率提升300%以上。
                  </p>
                </div>
              </div>
            </section>

            {/* 核心理念：AI综合素养评价的创新思路 */}
            <section
              id="core-concept"
              className="mb-16 scroll-mt-8"
            >
              <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-md border border-blue-200/30 dark:border-blue-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">AI综合素养评价的核心理念</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4 text-slate-700 dark:text-white/80 leading-relaxed">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">360°成长画像：从单维度到多维度的评价转变</h3>
                    <p>
                      传统教育评价如同"盲人摸象"，仅凭一次考试成绩就下定论。而AI综合素养评价系统则像"全景摄像头"，<strong>从德、智、体、美、劳五个维度</strong>全方位记录学生成长轨迹。通过多源异构数据融合，包括学习行为数据、社交互动记录、创作作品分析、体育运动数据等，构建立体化的学生成长档案。
                    </p>
                    <p>
                      这种360°成长画像不仅关注<strong>"学生现在是什么样"</strong>，更重要的是预测<strong>"学生将来能成为什么样"</strong>。通过AI算法分析学生的学习模式、兴趣倾向和潜能特质，为个性化教育提供科学依据。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold text-slate-900 dark:text-white">数据驱动评价</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-white/70">基于10亿+真实教育场景数据训练，涵盖不同年龄段、学科领域和学习风格，确保评价的科学性和准确性。</p>
                    </div>

                    <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        <h4 className="font-semibold text-slate-900 dark:text-white">过程性评价</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-white/70">不同于传统的结果性评价，AI系统实时追踪学生学习过程，记录每一次进步和突破，真正关注成长轨迹。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 五大核心维度深度解析 */}
            <section
              id="five-dimensions"
              className="mb-16 scroll-mt-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoPink to-letoPurple">
                    五大核心维度深度解析
                  </span>
                </h2>
                <DescriptionText className="text-lg">
                  德智体美劳全方位评价体系，构建学生完整成长画像
                </DescriptionText>
              </div>

              <div className="space-y-12">
                {/* 德育维度 */}
                <div id="moral-education" className="bg-gradient-to-r from-red-50/50 to-orange-50/30 dark:from-red-900/10 dark:to-orange-900/10 backdrop-blur-md border border-red-200/30 dark:border-red-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">德育维度：品格成长的智能识别</h3>
                      <p className="text-slate-600 dark:text-white/70">构建品德素养的数字化评价体系</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-500 mb-1">诚信度</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">行为一致性分析</div>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-500 mb-1">责任感</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">任务完成度评估</div>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-400 mb-1">团队协作</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">协作行为识别</div>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">社会公德</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">公德行为记录</div>
                      </div>
                    </div>

                    <div className="space-y-4 text-slate-700 dark:text-white/80">
                      <p><strong>AI技术应用：</strong>通过行为模式识别、语义情感分析和社交网络分析，系统能够智能识别学生在日常学习生活中的品德表现。例如，通过分析学生的作业提交习惯识别责任感，通过小组合作中的发言频次和质量评估协作能力。</p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/50">
                        <p><strong className="text-green-700 dark:text-green-400">案例效果：</strong>某中学部署德育评价系统后，学生诚信考试比例提升至98.5%，班级团队协作效率提升45%，校园文明行为显著改善。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 智育维度 */}
                <div id="intellectual-education" className="bg-gradient-to-r from-blue-50/50 to-indigo-50/30 dark:from-blue-900/10 dark:to-indigo-900/10 backdrop-blur-md border border-blue-200/30 dark:border-blue-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">智育维度：学习能力的精准画像</h3>
                      <p className="text-slate-600 dark:text-white/70">科学评估认知能力与学习效果</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-500 mb-1">知识掌握</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">知识点掌握度</div>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-indigo-500 mb-1">思维能力</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">逻辑推理分析</div>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">创新思维</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">创意表达能力</div>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-indigo-400 mb-1">学习方法</div>
                        <div className="text-sm text-slate-600 dark:text-white/60">学习策略优化</div>
                      </div>
                    </div>

                    <div className="space-y-4 text-slate-700 dark:text-white/80">
                      <p><strong>AI技术应用：</strong>采用学习轨迹分析、认知诊断模型和个性化推荐算法，系统能够精准识别学生的认知特点和学习模式。通过分析答题过程、错误模式和学习时间分布，为每个学生生成专属的学习能力画像。</p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/50">
                        <p><strong className="text-blue-700 dark:text-blue-400">数据支撑：</strong>AI智能诊断帮助学生学习效率平均提升50%，知识点掌握率从72%提升至85%以上，学习时间减少30%而效果显著改善。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 体育维度 */}
                <div id="physical-education" className="bg-gradient-to-r from-green-50/50 to-emerald-50/30 dark:from-green-900/10 dark:to-emerald-900/10 backdrop-blur-md border border-green-200/30 dark:border-green-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">体育维度：身心健康的全面监测</h3>
                      <p className="text-slate-600 dark:text-white/70">智能化体质健康与运动能力评估</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700 dark:text-white/80">
                    <p><strong>AI技术应用：</strong>结合运动传感器、视频分析和健康数据监测，系统能够实时记录学生的体育运动表现。通过动作识别技术评估运动技能，通过生理数据分析判断体质状况，为学生制定个性化的运动方案。</p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/50">
                      <p><strong className="text-green-700 dark:text-green-400">实践效果：</strong>实施AI体育评价后，学生体质健康合格率从78%提升至92%，学生运动兴趣和参与度显著提高。</p>
                    </div>
                  </div>
                </div>

                {/* 美育维度 */}
                <div id="aesthetic-education" className="bg-gradient-to-r from-purple-50/50 to-pink-50/30 dark:from-purple-900/10 dark:to-pink-900/10 backdrop-blur-md border border-purple-200/30 dark:border-purple-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">美育维度：审美素养的多元评估</h3>
                      <p className="text-slate-600 dark:text-white/70">艺术创作与审美能力的智能分析</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700 dark:text-white/80">
                    <p><strong>创新应用：</strong>AI系统能够分析学生的艺术作品，从构图、色彩、创意等多个维度进行评价。通过深度学习模型识别作品中的情感表达和文化内涵，客观评估学生的审美能力和艺术素养。</p>
                  </div>
                </div>

                {/* 劳育维度 */}
                <div id="labor-education" className="bg-gradient-to-r from-yellow-50/50 to-amber-50/30 dark:from-yellow-900/10 dark:to-amber-900/10 backdrop-blur-md border border-yellow-200/30 dark:border-yellow-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">劳育维度：实践能力的综合考量</h3>
                      <p className="text-slate-600 dark:text-white/70">劳动技能与实践创新的智能评估</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700 dark:text-white/80">
                    <p><strong>社会价值：</strong>通过AI技术客观评估学生的劳动态度、实践能力和创新思维，培养新时代具有劳动精神和实践能力的优秀人才，为社会发展输送高素质劳动者。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 智能语音交互技术 */}
            <section
              id="voice-interaction"
              className="mb-16 scroll-mt-8"
            >
              <div className="bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-900/10 dark:to-blue-900/10 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">智能语音交互：让评价更便捷高效</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <Smartphone className="w-5 h-5 text-cyan-500" />
                        核心技术组件
                      </h3>
                      <ul className="space-y-2 text-slate-700 dark:text-white/80">
                        <li><strong>语音识别(ASR)：</strong>支持多方言、多场景的高精度语音转文字</li>
                        <li><strong>自然语言理解(NLU)：</strong>精准的意图识别和实体抽取</li>
                        <li><strong>对话管理：</strong>上下文理解和多轮对话支持</li>
                        <li><strong>语音合成(TTS)：</strong>自然流畅的语音反馈</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">操作简化效果</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/60 dark:bg-white/[0.05] p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-cyan-500">80%</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">录入效率提升</div>
                        </div>
                        <div className="bg-white/60 dark:bg-white/[0.05] p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-blue-500">1天</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">老师上手时间</div>
                        </div>
                        <div className="bg-white/60 dark:bg-white/[0.05] p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-cyan-400">95%+</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">识别准确率</div>
                        </div>
                        <div className="bg-white/60 dark:bg-white/[0.05] p-3 rounded-lg text-center">
                          <div className="text-xl font-bold text-blue-400">全方言</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">语言支持</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">语音操作示例</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-white/80">
                      <div>
                        <p><strong>德育评价：</strong></p>
                        <p className="text-slate-600 dark:text-white/60">"记录李明今天主动帮助同学的表现"</p>
                      </div>
                      <div>
                        <p><strong>智育评价：</strong></p>
                        <p className="text-slate-600 dark:text-white/60">"更新王小华数学单元测试成绩"</p>
                      </div>
                      <div>
                        <p><strong>体育评价：</strong></p>
                        <p className="text-slate-600 dark:text-white/60">"记录全班50米跑步成绩"</p>
                      </div>
                      <div>
                        <p><strong>美育评价：</strong></p>
                        <p className="text-slate-600 dark:text-white/60">"评价今天美术作品创作情况"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 技术实现：AI算法如何构建成长画像 */}
            <section
              id="technical-implementation"
              className="mb-16 scroll-mt-8"
            >
              <div className="bg-gradient-to-br from-slate-50/80 to-gray-50/60 dark:bg-white/[0.05] backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">技术实现：AI算法如何构建成长画像</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">数据采集</h3>
                      <p className="text-sm text-slate-700 dark:text-white/80">多源异构数据的智能融合，包括行为数据、学习记录、作品分析等</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">模型算法</h3>
                      <p className="text-sm text-slate-700 dark:text-white/80">深度学习在教育评价中的创新应用，精准识别学习模式</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 p-6 rounded-xl">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">可视化展示</h3>
                      <p className="text-sm text-slate-700 dark:text-white/80">雷达图、成长曲线、发展轨迹等直观展现学生成长过程</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-slate-900 dark:text-white">隐私保护</h3>
                    </div>
                    <p className="text-slate-700 dark:text-white/80">
                      严格遵循《数据安全法》和《个人信息保护法》，采用数据脱敏、联邦学习等技术，确保学生隐私安全的同时实现智能评价。所有数据处理均在安全可控的环境中进行，建立完善的数据治理体系。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 成功实践：量化效果与案例分析 */}
            <section
              id="success-cases"
              className="mb-16 scroll-mt-8"
            >
              <div className="bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-900/10 dark:to-green-900/10 backdrop-blur-md border border-emerald-200/30 dark:border-emerald-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">成功实践：量化效果与案例分析</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">成都某重点中学案例</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-white/80">评价维度从1个扩展至25个指标</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-white/80">教师评价工作效率提升300%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-white/80">家长满意度达95%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-white/80">学生综合素质发展更均衡</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">用户反馈</h4>
                    <blockquote className="text-slate-700 dark:text-white/80 italic">
                      "系统帮助我们真正实现了'五育并举'，学生的全面发展有了科学的衡量标准。通过AI分析，我们能够及时发现每个孩子的闪光点，因材施教不再是空话。"
                    </blockquote>
                    <cite className="text-sm text-slate-600 dark:text-white/60 block mt-2">—— 成都某重点中学教务主任</cite>
                  </div>
                </div>
              </div>
            </section>

            {/* 未来展望 */}
            <section
              id="future-outlook"
              className="mb-16 scroll-mt-8"
            >
              <div className="bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-900/10 dark:to-gray-900/10 backdrop-blur-md border border-slate-200/30 dark:border-slate-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-gray-500 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">未来展望：综合素养评价的发展趋势</h2>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-white/80 leading-relaxed">
                  <p>
                    随着人工智能技术的不断发展，<strong>多模态AI、联邦学习</strong>等前沿技术将在教育评价中发挥更重要作用。未来的综合素养评价系统将更加智能化、个性化，能够实现<strong>学校-家庭-社会一体化</strong>的评价生态。
                  </p>
                  <p>
                    在国家教育数字化战略的支持下，AI综合素养评价将成为教育现代化的重要组成部分，<strong>真正实现"让每个孩子都能闪闪发光"</strong>的教育理想，为培养德智体美劳全面发展的社会主义建设者和接班人提供科学保障。
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-br from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoOrange/20 dark:to-letoCoolEnd/20 backdrop-blur-md border border-letoOrange/20 dark:border-letoCoolEnd/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  准备开启AI综合素养评价新时代？
                </h2>
                <p className="text-slate-700 dark:text-white/80 mb-6">
                  联系LetoAI，获取专属的教育评价解决方案
                </p>
                <Button asChild className="leto-gradient-bg hover:opacity-90 text-white px-8 py-3">
                  <Link href="/contact?from=/blog/ai-comprehensive-assessment-dimensions">
                    免费咨询方案
                  </Link>
                </Button>
              </div>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}