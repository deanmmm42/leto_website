"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import BreadcrumbLayout from "@/components/breadcrumb-layout"

export default function BlogArticleContent() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#030314]">
      <Header />

      {/* Breadcrumb */}
      <BreadcrumbLayout />

      {/* Article Header */}
      <section className="relative pt-8 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回博客
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-slate-500 dark:text-white/60">
              <span>AI教育</span>
              <span>•</span>
              <span>会议报告</span>
              <span>•</span>
              <span>实践案例</span>
              <span>•</span>
              <span>2025年12月9日</span>
              <span>•</span>
              <span>12分钟阅读</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
              AI赋能中小学生综合素质评价的实践探索
            </h1>

            <div>
              <DescriptionText size="large" className="text-xl leading-relaxed text-slate-700 dark:text-white/80 mb-8">
                清华大学计算机系博士龙迪教授在成都教育学会2025年学术年会上的重磅报告,深度剖析AI技术如何突破传统教育评价的局限,通过多维素养模型和个性化成长画像,开启教育评价改革新篇章。
              </DescriptionText>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">

            {/* 活动背景章节 */}
            <section id="background" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">学术盛会：成都教育学会2025年学术年会</h2>
              <div className="space-y-4 text-slate-700 dark:text-white/80 leading-relaxed mb-6">
                  <p>
                    岁末蓉城，研韵正浓。在推动教育数字化转型迈入深水区的关键阶段，<strong className="text-letoOrange dark:text-letoTurquoise">成都市教育学会2025年学术年会</strong>之"<strong>人工智能+典型应用场景案例分享</strong>"分会场在<strong>成都七中初中附属小学</strong>隆重举行。
                  </p>
                  <p>
                    本次活动围绕"<strong className="text-letoOrange dark:text-letoTurquoise">技术赋能教育，人文守护本质</strong>"这一主题，凝聚了市内外教育行政部门代表、专家学者及一线骨干教师等多方智慧，通过案例剖析、专题讲座、成果展示等多样化环节，深入探讨"<strong>人工智能+教育</strong>"的实施路径，为区域教育提质增效贡献了新的思路与动力。
                  </p>
                </div>

              <div className="relative w-full h-72 md:h-96 lg:h-[480px] mb-6">
                  <Image
                    src="/images/blog/ai-assessment-report/cover-hero.png"
                    alt="成都教育学会2025年学术年会现场"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
            </section>

            {/* 特邀嘉宾章节 */}
            <section id="speaker" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">特邀嘉宾：龙迪教授</h2>
              <div className="space-y-4 text-slate-700 dark:text-white/80">
                  <p>
                    <strong className="text-letoOrange dark:text-letoTurquoise">清华大学计算机系博士、四川省"千人计划"特聘专家、LetoAI首席科学家龙迪教授</strong>受邀出席<strong className="text-letoOrange dark:text-letoTurquoise">2025成都教育学会学术年会</strong>，深度剖析<strong>AI技术</strong>如何助力<strong>中小学生综合素质评价</strong>，开启教育评价新篇章！
                  </p>
                </div>

                <div className="relative w-full h-80 md:h-96 mb-6">
                  <Image
                    src="/images/blog/ai-assessment-report/longdi-speaking.jpeg"
                    alt="龙迪教授在成都教育学会学术年会演讲"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>

                <p className="text-slate-700 dark:text-white/80">
                  清华大学计算机系博士 | 四川省"千人计划"特聘专家 | LetoAI首席科学家
                </p>
            </section>

            {/* 报告主题章节 */}
            <section id="topic" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">报告主题：AI赋能中小学综合素养评价</h2>
              <div className="space-y-4 text-slate-700 dark:text-white/80 mb-6">
                  <p>
                    龙迪教授的报告深入浅出，聚焦于当前教育评价体系中的痛点——如何<strong className="text-letoOrange dark:text-letoTurquoise">科学、全面、公正</strong>地评价中小学生的<strong>综合素养</strong>。
                  </p>
                  <p>
                    传统的纸笔测试难以有效衡量学生的<strong className="text-letoOrange dark:text-letoTurquoise">创新能力、合作精神、审美情趣</strong>等综合素养。而<strong>LetoAI</strong>正在做的，正是通过<strong className="text-letoOrange dark:text-letoTurquoise">领先的人工智能、大数据分析及教育心理学模型</strong>，构建一套<strong>多维度、伴随式的综合素质评价体系</strong>。
                  </p>
                </div>

                <div className="relative w-full h-80 md:h-96 mb-6">
                  <Image
                    src="/images/blog/ai-assessment-report/report-content.jpeg"
                    alt="龙迪教授报告主题演讲现场"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>

                <div className="space-y-3 mb-6">
                  <p><strong>数据采集难</strong> - 难以全面、实时收集学生综合表现数据</p>
                  <p><strong>评价主观性强</strong> - 教师评价缺乏客观标准和数据支撑</p>
                  <p><strong>反馈滞后</strong> - 评价结果难以及时反馈给学生和家长</p>
                </div>
            </section>

            {/* 核心观点章节 */}
            <section id="insights" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">核心观点："评价不是为了贴标签"</h2>

                <div className="relative w-full h-80 md:h-96 mb-6">
                  <Image
                    src="/images/blog/ai-assessment-report/longdi-presenting.jpeg"
                    alt="龙迪教授核心观点演讲"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>

                <blockquote className="border-l-4 border-slate-300 dark:border-white/20 pl-6 py-3 my-6 italic text-slate-700 dark:text-white/80">
                  <p>"评价不是为了给学生贴标签，而是为了<strong className="text-letoOrange dark:text-letoTurquoise">发现潜能</strong>。"</p>
                  <cite className="text-sm text-slate-600 dark:text-white/60 not-italic">—— 龙迪教授</cite>
                </blockquote>

                <div className="space-y-4 text-slate-700 dark:text-white/80">
                  <p>
                    传统的综合素质评价常面临"<strong className="text-letoOrange dark:text-letoTurquoise">数据采集难、评价主观性强、结果反馈滞后</strong>"三大痛点。而<strong>LetoAI</strong>致力于利用<strong className="text-letoOrange dark:text-letoTurquoise">多模态人工智能技术</strong>，将"评价"无感地融入到学生的日常学习与活动中。
                  </p>

                  <p>
                    这样做的目的是帮助教育工作者更准确地认识每个学生，发现他们的独特优势和发展潜力，为<strong>个性化教育</strong>和<strong>因材施教</strong>提供有力支撑。
                  </p>
                </div>
            </section>

            {/* LetoAI实践章节 */}
            <section id="practice" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">LetoAI的突破性实践</h2>

                <div className="space-y-6 text-slate-700 dark:text-white/80">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">1. 多维素养模型构建</h3>
                    <p>
                      依托<strong className="text-letoOrange dark:text-letoTurquoise">LetoAI的大模型算法</strong>，将散落的行为数据转化为<strong>可视化的素养雷达图</strong>，精准分析学生的<strong className="text-letoOrange dark:text-letoTurquoise">创新思维、协作能力与审美情趣</strong>。
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                      通过系统化的数据收集和分析，为每个学生的成长画像提供多个维度的评估数据。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">2. 个性化成长画像</h3>
                    <p>
                      为每个学生生成独一无二的"<strong className="text-letoOrange dark:text-letoTurquoise">成长数字档案</strong>"，帮助教师<strong>因材施教</strong>，让家长看到孩子<strong className="text-letoOrange dark:text-letoTurquoise">分数之外</strong>的闪光点。
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-white/70">
                      突破传统"分数论"的局限，展现学生在创新、合作、审美、实践等方面的多元发展。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">实现效果</h4>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-white/80">
                      <li>✓ <strong>200+所学校</strong>成功部署系统</li>
                      <li>✓ <strong>10亿+教育数据</strong>支撑算法训练</li>
                      <li>✓ 教师<strong>评价效率提升300%</strong></li>
                      <li>✓ <strong>95%以上</strong>的家长满意度</li>
                    </ul>
                  </div>
                </div>
            </section>

            {/* 报告成果与展望章节 */}
            <section id="impact-outlook" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">报告成果与未来展望</h2>

                <div className="relative w-full h-80 md:h-96 mb-6">
                  <Image
                    src="/images/blog/ai-assessment-report/report-success.jpeg"
                    alt="龙迪教授报告成功 掌声认可"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>

                <div className="space-y-6 text-slate-700 dark:text-white/80">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">报告现场反响</h3>
                    <p>
                      龙教授的报告<strong className="text-letoOrange dark:text-letoTurquoise">数据详实、案例生动</strong>，展示了技术如何让教育评价<strong>更有温度、更科学</strong>，赢得了在场<strong className="text-letoOrange dark:text-letoTurquoise">专家与同行</strong>的<strong>热烈掌声与高度评价</strong>！
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">学术界与教育界的双重认可</h3>
                    <p className="mb-4">
                      此次<strong>龙迪教授</strong>受邀出席<strong className="text-letoOrange dark:text-letoTurquoise">成都教育学会2025学术年会</strong>，标志着<strong className="text-letoOrange dark:text-letoTurquoise">LetoAI</strong>在教育评价领域的探索成果得到了<strong>学术界与教育界的双重认可</strong>！
                    </p>
                    <p>
                      未来，<strong>LetoAI</strong>将继续深耕<strong className="text-letoOrange dark:text-letoTurquoise">"AI+教育"</strong>场景，携手更多学校与区域，共同探索<strong>智能时代的教育评价新范式</strong>，为培养适应未来的创新人才贡献科技力量！
                    </p>
                  </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                了解更多
              </h2>
              <p className="text-slate-700 dark:text-white/80 mb-6">
                联系LetoAI，获取基于综合素质评价的专属教育数字化解决方案
              </p>
              <Button asChild className="bg-slate-900 dark:bg-white text-white dark:text-slate-900">
                <Link href="/contact?from=/blog/ai-assessment-practice-report">
                  免费咨询方案
                </Link>
              </Button>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
