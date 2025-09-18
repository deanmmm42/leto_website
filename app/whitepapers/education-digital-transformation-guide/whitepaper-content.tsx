"use client"

import { useState } from "react"
import { ArrowLeft, Clock, Tag, Calendar, Users, BookOpen, TrendingUp, BarChart3, Shield, Brain, Star, CheckCircle, Lightbulb, Target, Zap, Share, FileText, Globe, Cpu, Database, Network, Settings, Layers, Activity, PieChart, LineChart, Map, School, GraduationCap, Smartphone, Award, ChevronRight, Copy, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"
import BreadcrumbLayout from "@/components/breadcrumb-layout"

export default function WhitepaperContent() {
  const [shareStatus, setShareStatus] = useState<'idle' | 'success' | 'copied'>('idle')

  const handleShare = async () => {
    const shareData = {
      title: '教育行业数字化转型实践指南2025 | AI驱动智慧教育变革白皮书 - LetoAI',
      text: 'LetoAI发布《教育行业数字化转型实践指南2025》，基于四维一体转型框架，提供从战略规划到技术实施的完整路线图。',
      url: window.location.href
    }

    try {
      // 检查是否支持 Web Share API
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
        setShareStatus('success')
        setTimeout(() => setShareStatus('idle'), 3000)
        return
      }

      // 备用方案：复制链接到剪贴板
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href)
        setShareStatus('copied')
        setTimeout(() => setShareStatus('idle'), 3000)
        return
      }

      // 最后备用方案：使用 textarea 方法
      const textArea = document.createElement('textarea')
      textArea.value = window.location.href
      textArea.style.position = 'fixed'
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (successful) {
        setShareStatus('copied')
        setTimeout(() => setShareStatus('idle'), 3000)
      } else {
        console.error('复制失败')
      }
    } catch (error) {
      // 检查是否为用户取消分享（这是正常行为，不应该记录为错误）
      if (error instanceof DOMException &&
          (error.name === 'AbortError' ||
           error.message.toLowerCase().includes('cancel') ||
           error.message.toLowerCase().includes('abort'))) {
        // 用户取消分享是正常操作，静默处理
        return
      }

      // 只记录真正的技术错误
      console.error('分享失败:', error)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Breadcrumb */}
      <BreadcrumbLayout />

      {/* Article Header */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-letoOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/whitepapers" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  返回白皮书
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-letoOrange/10 dark:bg-letoTurquoise/10 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                <Tag className="h-3 w-3" />
                教育数字化转型
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                <Star className="h-3 w-3" />
                重点推荐
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                <Calendar className="h-3 w-3" />
                2025年9月18日
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
                <Clock className="h-3 w-3" />
                30分钟阅读
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoWarmEnd to-letoPink">
                教育行业数字化转型实践指南
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoPink via-letoPurple to-letoCoolEnd">
                融合顶层设计、数据驱动与场景创新的四维一体实施框架
              </span>
            </h1>

            <div>
              <DescriptionText size="large" className="text-xl leading-relaxed text-slate-700 dark:text-white/80 mb-8">
                本指南旨在为教育决策者、信息化负责人及一线教育工作者提供一个清晰、可落地的数字化转型路线图，通过战略与治理、数字底座、数据要素、智慧应用四个维度的系统性框架，助力教育机构实现从基础设施建设到深度融合创新的全面转型。
              </DescriptionText>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mb-8">
              <Button
                variant="outline"
                onClick={handleShare}
                className="transition-colors hover:bg-letoOrange/10 hover:border-letoOrange dark:hover:bg-letoTurquoise/10 dark:hover:border-letoTurquoise"
              >
                {shareStatus === 'success' ? (
                  <>
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    分享成功
                  </>
                ) : shareStatus === 'copied' ? (
                  <>
                    <Copy className="h-4 w-4 mr-2 text-blue-600" />
                    链接已复制
                  </>
                ) : (
                  <>
                    <Share className="h-4 w-4 mr-2" />
                    分享文章
                  </>
                )}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "2+", label: "合作机构", icon: School },
                { number: "7000+", label: "学生受益", icon: GraduationCap },
                { number: "85%", label: "效率提升", icon: TrendingUp },
                { number: "12000+", label: "文章字数", icon: FileText }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/60 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-4">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-letoOrange dark:text-letoTurquoise" />
                  <div className="text-2xl font-bold text-letoOrange dark:text-letoTurquoise mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">目录</h2>
                </div>

                <nav className="grid grid-cols-1 gap-3">
                  <a href="#executive-summary" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    1. 执行摘要：数字化转型的核心价值与战略意义
                  </a>
                  <a href="#background-challenges" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    2. 时代背景与核心挑战：为何现在必须转型？
                  </a>
                  <a href="#four-dimension-framework" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    3. 四维一体数字化转型框架
                  </a>
                  <a href="#implementation-roadmap" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    4. 分阶段实施路径图（12-24个月）
                  </a>
                  <a href="#success-cases" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    5. 成功案例深度剖析
                  </a>
                  <a href="#maturity-assessment" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    6. 数字化成熟度评估模型
                  </a>
                  <a href="#future-trends" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    7. 未来技术趋势与展望
                  </a>
                  <a href="#letoai-solutions" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    8. LetoAI解决方案与服务体系
                  </a>
                  <a href="#appendix" className="block p-3 text-sm text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise hover:bg-letoOrange/5 dark:hover:bg-letoTurquoise/5 rounded-lg transition-all duration-200">
                    附录
                  </a>
                </nav>
              </div>
            </section>

            {/* 1. 执行摘要 */}
            <section id="executive-summary" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-900/10 dark:to-red-900/10 backdrop-blur-md border border-orange-200/30 dark:border-orange-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">执行摘要：数字化转型的核心价值与战略意义</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4 text-slate-700 dark:text-white/80 leading-relaxed">
                    <p>
                      当前教育数字化已从"基础设施建设"迈向"深度融合创新"的新阶段。本白皮书基于<strong className="text-letoOrange dark:text-letoTurquoise">LetoAI服务多家重点教育机构</strong>的实践经验，提出<strong>"四维一体"数字化转型框架</strong>，为教育决策者提供系统性、可落地的转型路径。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <BarChart3 className="w-5 h-5 text-orange-500" />
                          <h3 className="font-semibold text-slate-900 dark:text-white">核心价值主张</h3>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-white/70 space-y-1">
                          <li>• 实现规模化因材施教（个性化学习路径）</li>
                          <li>• 驱动管理决策科学化（数据驱动决策）</li>
                          <li>• 促进教育资源公平化（优质资源共享）</li>
                          <li>• 创新人才培养新模式（能力导向评价）</li>
                        </ul>
                      </div>

                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingUp className="w-5 h-5 text-red-500" />
                          <h3 className="font-semibold text-slate-900 dark:text-white">转型成效</h3>
                        </div>
                        <ul className="text-sm text-slate-600 dark:text-white/70 space-y-1">
                          <li>• 教学效率提升 <strong>80%+</strong></li>
                          <li>• 评价维度扩展至 <strong>25+</strong> 指标</li>
                          <li>• 学生满意度达到 <strong>95%+</strong></li>
                          <li>• 管理成本降低 <strong>35%+</strong></li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-100/80 to-red-100/60 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800/50">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-orange-500" />
                        关键洞察
                      </h3>
                      <p className="text-slate-700 dark:text-white/80">
                        成功的教育数字化转型需要一个系统性框架，将<strong>战略与治理、数字底座、数据要素、智慧应用</strong>四个维度有机融合。单纯的技术堆砌无法实现真正的转型，必须从顶层设计出发，以数据为驱动，以应用场景为抓手，构建可持续发展的数字化教育生态。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. 时代背景与核心挑战 */}
            <section id="background-challenges" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-900/10 dark:to-indigo-900/10 backdrop-blur-md border border-blue-200/30 dark:border-blue-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">时代背景与核心挑战：为何现在必须转型？</h2>
                </div>

                <div className="space-y-8">
                  {/* 全球趋势与国家战略 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-500" />
                      全球趋势与国家战略解读
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900 dark:text-white">国际视野</h4>
                        <ul className="text-slate-700 dark:text-white/80 space-y-2 text-sm">
                          <li>• <strong>UNESCO AI与教育融合政策</strong>：强调伦理、公平与治理原则</li>
                          <li>• <strong>全球数字教育趋势</strong>：个性化学习、智能评估成为主流</li>
                          <li>• <strong>OECD教育未来报告</strong>：AI驱动的教育变革不可逆转</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900 dark:text-white">国家顶层设计</h4>
                        <ul className="text-slate-700 dark:text-white/80 space-y-2 text-sm">
                          <li>• <strong>教育数字化战略行动</strong>：教育强国建设核心组成部分</li>
                          <li>• <strong>智慧教育平台体系</strong>：国家级基础设施建设</li>
                          <li>• <strong>教育评价改革方案</strong>：破除"五唯"，构建多元评价</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 核心挑战 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">五大核心挑战</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          title: "顶层设计缺失",
                          description: "缺乏系统性规划，各部门协同困难，资源配置不合理",
                          impact: "导致重复建设、数据孤岛、效率低下",
                          color: "red"
                        },
                        {
                          title: "数据孤岛严重",
                          description: "教、学、评、研、管数据割裂，无法形成决策闭环",
                          impact: "信息流不畅，决策缺乏科学依据",
                          color: "orange"
                        },
                        {
                          title: "技术与教学'两张皮'",
                          description: "技术应用未能深度融入核心教学环节",
                          impact: "投入大、产出小，师生体验不佳",
                          color: "yellow"
                        },
                        {
                          title: "数据安全与伦理风险",
                          description: "学生隐私、数据安全和算法公平性问题凸显",
                          impact: "合规风险高，社会信任度下降",
                          color: "green"
                        },
                        {
                          title: "发展不均衡",
                          description: "区域、校际、城乡间的数字化水平差距显著",
                          impact: "教育公平受到冲击，数字鸿沟扩大",
                          color: "blue"
                        }
                      ].map((challenge, index) => (
                        <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                          <div className="flex items-start gap-4">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                              challenge.color === 'red' ? 'bg-red-500' :
                              challenge.color === 'orange' ? 'bg-orange-500' :
                              challenge.color === 'yellow' ? 'bg-yellow-500' :
                              challenge.color === 'green' ? 'bg-green-500' :
                              challenge.color === 'blue' ? 'bg-blue-500' : 'bg-gray-500'
                            }`}>
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{challenge.title}</h4>
                              <p className="text-slate-700 dark:text-white/80 text-sm mb-2">{challenge.description}</p>
                              <p className="text-slate-600 dark:text-white/60 text-xs italic">影响：{challenge.impact}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 转型机遇 */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800/50">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-green-500" />
                      数字化带来的核心机遇
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">实现规模化因材施教</h4>
                        <p className="text-slate-700 dark:text-white/80 text-sm">AI驱动的个性化学习路径与资源推荐，让每个学生都能获得最适合的教育</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">驱动管理决策科学化</h4>
                        <p className="text-slate-700 dark:text-white/80 text-sm">基于数据的教学评估、资源调配与学生成长预测，提升管理效率</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">促进教育资源公平化</h4>
                        <p className="text-slate-700 dark:text-white/80 text-sm">优质数字资源跨越时空限制，惠及偏远地区学习者</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">创新人才培养新模式</h4>
                        <p className="text-slate-700 dark:text-white/80 text-sm">培养适应数字时代所需的协作、创新与终身学习能力</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. 四维一体数字化转型框架 */}
            <section id="four-dimension-framework" className="mb-16 scroll-mt-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoPink to-letoPurple">
                    四维一体数字化转型框架
                  </span>
                </h2>
                <DescriptionText className="text-lg">
                  相互关联、层层递进的系统性框架，实现全面数字化转型的四大支柱
                </DescriptionText>
              </div>

              <div className="space-y-12">
                {/* 框架总览 */}
                <div className="bg-gradient-to-r from-purple-50/50 to-indigo-50/30 dark:from-purple-900/10 dark:to-indigo-900/10 backdrop-blur-md border border-purple-200/30 dark:border-purple-800/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">框架总览</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: "战略与治理",
                        subtitle: "Strategy & Governance",
                        description: "顶层设计、组织保障、评估体系",
                        icon: Settings,
                        color: "purple"
                      },
                      {
                        title: "数字底座",
                        subtitle: "Digital Infrastructure",
                        description: "网络、云平台、智能终端、安全",
                        icon: Database,
                        color: "blue"
                      },
                      {
                        title: "数据要素",
                        subtitle: "Data as Core Element",
                        description: "数据标准、中台、治理、价值",
                        icon: BarChart3,
                        color: "green"
                      },
                      {
                        title: "智慧应用",
                        subtitle: "Smart Applications",
                        description: "教学、学习、评价、研究、管理",
                        icon: Brain,
                        color: "orange"
                      }
                    ].map((dimension, index) => (
                      <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10 text-center">
                        <dimension.icon className={`w-8 h-8 mx-auto mb-3 text-${dimension.color}-500`} />
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{dimension.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-white/60 mb-3">{dimension.subtitle}</p>
                        <p className="text-sm text-slate-700 dark:text-white/80">{dimension.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 维度一：战略与治理 */}
                <div id="strategy-governance" className="bg-gradient-to-r from-purple-50/50 to-pink-50/30 dark:from-purple-900/10 dark:to-pink-900/10 backdrop-blur-md border border-purple-200/30 dark:border-purple-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">维度一：战略与治理</h3>
                      <p className="text-slate-600 dark:text-white/70">转型始于顶层，建立清晰的愿景、目标、组织保障和评估体系</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">组织架构</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 成立数字化转型领导小组</li>
                          <li>• 设立首席信息官(CIO)职位</li>
                          <li>• 建立跨部门协调机制</li>
                          <li>• 构建产学研联盟</li>
                        </ul>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">战略规划</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 制定3-5年转型战略</li>
                          <li>• 明确发展目标与里程碑</li>
                          <li>• 建立预算投入机制</li>
                          <li>• 设计激励约束制度</li>
                        </ul>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">治理体系</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 数据治理规范与标准</li>
                          <li>• 安全伦理准则建设</li>
                          <li>• 隐私保护制度设计</li>
                          <li>• 绩效评估监督机制</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100/80 to-pink-100/60 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800/50">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        关键成功要素
                      </h4>
                      <p className="text-slate-700 dark:text-white/80 text-sm">
                        战略与治理维度的成功关键在于<strong>一把手工程</strong>的贯彻执行。必须确保领导层的高度重视和持续投入，建立清晰的责任体系和考核机制，让数字化转型成为全员共同目标而非信息部门单独任务。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 维度二：数字底座 */}
                <div id="digital-infrastructure" className="bg-gradient-to-r from-blue-50/50 to-cyan-50/30 dark:from-blue-900/10 dark:to-cyan-900/10 backdrop-blur-md border border-blue-200/30 dark:border-blue-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">维度二：数字底座</h3>
                      <p className="text-slate-600 dark:text-white/70">构建稳定、安全、开放、智能的技术基础设施</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "网络建设",
                          items: ["全光网络覆盖", "5G/Wi-Fi 6融合", "边缘计算节点", "SD-WAN架构"],
                          icon: Network
                        },
                        {
                          title: "云平台",
                          items: ["混合云架构", "容器化部署", "微服务架构", "弹性扩展"],
                          icon: Layers
                        },
                        {
                          title: "智能终端",
                          items: ["云桌面系统", "智慧教室设备", "移动学习终端", "IoT感知设备"],
                          icon: Smartphone
                        },
                        {
                          title: "安全体系",
                          items: ["零信任架构", "数据加密存储", "身份认证", "行为审计"],
                          icon: Shield
                        }
                      ].map((component, index) => (
                        <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-4">
                            <component.icon className="w-6 h-6 text-blue-500" />
                            <h4 className="font-semibold text-slate-900 dark:text-white">{component.title}</h4>
                          </div>
                          <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                            {component.items.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-blue-100/80 to-cyan-100/60 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-blue-500" />
                        信创实践路径
                      </h4>
                      <p className="text-slate-700 dark:text-white/80 text-sm">
                        在国产化替代大趋势下，教育机构应制定渐进式的信创实施路径。<strong>优先在非核心业务系统试点</strong>，积累经验后逐步扩展到核心教学系统。重点关注<strong>操作系统、数据库、中间件</strong>的国产化适配，确保系统稳定性和数据安全性。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 维度三：数据要素 */}
                <div id="data-element" className="bg-gradient-to-r from-green-50/50 to-emerald-50/30 dark:from-green-900/10 dark:to-emerald-900/10 backdrop-blur-md border border-green-200/30 dark:border-green-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">维度三：数据要素</h3>
                      <p className="text-slate-600 dark:text-white/70">视数据为核心资产，打通、治理、激活数据价值</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">数据资产体系</h4>
                        <div className="space-y-3">
                          {[
                            { title: "主数据管理", desc: "学生、教师、课程、资源等核心主数据统一管理" },
                            { title: "元数据治理", desc: "数据字典、血缘关系、质量标准建立" },
                            { title: "数据标准化", desc: "制定统一的数据采集、存储、交换标准" },
                            { title: "数据编目", desc: "构建全面的数据资产目录和检索体系" }
                          ].map((item, index) => (
                            <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg">
                              <h5 className="font-medium text-slate-900 dark:text-white text-sm mb-1">{item.title}</h5>
                              <p className="text-xs text-slate-600 dark:text-white/60">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">数据中台架构</h4>
                        <div className="space-y-3">
                          {[
                            { title: "数据集成层", desc: "多源异构数据统一接入和ETL处理" },
                            { title: "数据存储层", desc: "分布式存储、数据湖、数据仓库" },
                            { title: "数据服务层", desc: "API服务、数据共享、权限控制" },
                            { title: "数据应用层", desc: "报表分析、AI建模、决策支持" }
                          ].map((item, index) => (
                            <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg">
                              <h5 className="font-medium text-slate-900 dark:text-white text-sm mb-1">{item.title}</h5>
                              <p className="text-xs text-slate-600 dark:text-white/60">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl text-center">
                        <PieChart className="w-8 h-8 mx-auto mb-3 text-green-500" />
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">用户画像</h4>
                        <p className="text-sm text-slate-700 dark:text-white/80">学生、教师多维度标签体系，支持个性化服务</p>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl text-center">
                        <Network className="w-8 h-8 mx-auto mb-3 text-green-500" />
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">知识图谱</h4>
                        <p className="text-sm text-slate-700 dark:text-white/80">学科知识点关联关系，支持智能推荐</p>
                      </div>
                      <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl text-center">
                        <Activity className="w-8 h-8 mx-auto mb-3 text-green-500" />
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">行为分析</h4>
                        <p className="text-sm text-slate-700 dark:text-white/80">学习轨迹挖掘，发现规律预测趋势</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 维度四：智慧应用 */}
                <div id="smart-applications" className="bg-gradient-to-r from-orange-50/50 to-red-50/30 dark:from-orange-900/10 dark:to-red-900/10 backdrop-blur-md border border-orange-200/30 dark:border-orange-800/30 rounded-2xl p-8 scroll-mt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">维度四：智慧应用</h3>
                      <p className="text-slate-600 dark:text-white/70">以场景为驱动，让技术真正服务于"教、学、评、研、管"</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "智慧教学",
                          scenarios: ["AI助教系统", "智能备课工具", "线上线下融合", "个性化教学"],
                          icon: GraduationCap,
                          color: "orange"
                        },
                        {
                          title: "智慧学习",
                          scenarios: ["个性化学习路径", "智能学情诊断", "自适应练习", "知识点推荐"],
                          icon: BookOpen,
                          color: "blue"
                        },
                        {
                          title: "智慧评价",
                          scenarios: ["综合素质评价", "过程性评估", "AI智能测评", "多维度分析"],
                          icon: Award,
                          color: "green"
                        },
                        {
                          title: "智慧科研",
                          scenarios: ["科研算力平台", "学术资源共享", "跨学科协作", "成果转化"],
                          icon: Lightbulb,
                          color: "purple"
                        },
                        {
                          title: "智慧管理",
                          scenarios: ["一站式服务", "智慧校园安防", "绿色节能运维", "决策支持"],
                          icon: Settings,
                          color: "indigo"
                        },
                        {
                          title: "智慧服务",
                          scenarios: ["家校沟通", "生活服务", "就业指导", "校友网络"],
                          icon: Users,
                          color: "pink"
                        }
                      ].map((scenario, index) => (
                        <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-4">
                            <scenario.icon className={`w-6 h-6 text-${scenario.color}-500`} />
                            <h4 className="font-semibold text-slate-900 dark:text-white">{scenario.title}</h4>
                          </div>
                          <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                            {scenario.scenarios.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-100/80 to-red-100/60 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800/50">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-orange-500" />
                        应用场景优先级策略
                      </h4>
                      <p className="text-slate-700 dark:text-white/80 text-sm">
                        建议按照<strong>"痛点明确、见效快速、推广性强"</strong>的原则选择首批试点场景。通常优先级为：<strong>智慧管理</strong>（提升行政效率）→ <strong>智慧教学</strong>（核心业务）→ <strong>智慧学习</strong>（个性化服务）→ <strong>智慧评价</strong>（变革创新）→ <strong>智慧科研和服务</strong>（扩展应用）。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center mb-16">
              <div className="bg-gradient-to-br from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoOrange/20 dark:to-letoCoolEnd/20 backdrop-blur-md border border-letoOrange/20 dark:border-letoCoolEnd/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  准备开启教育数字化转型之旅？
                </h2>
                <p className="text-slate-700 dark:text-white/80 mb-6">
                  联系LetoAI，获取专属的数字化转型解决方案和实施指导
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="leto-gradient-bg hover:opacity-90 text-white px-8 py-3">
                    <Link href="/contact?from=education-digital-transformation-guide">
                      免费咨询方案
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/solutions/education">
                      查看教育解决方案
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* 4. 分阶段实施路径图 */}
            <section id="implementation-roadmap" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-indigo-50/50 to-purple-50/30 dark:from-indigo-900/10 dark:to-purple-900/10 backdrop-blur-md border border-indigo-200/30 dark:border-indigo-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Map className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">分阶段实施路径图（12-24个月）</h2>
                </div>

                <div className="space-y-8">
                  {/* 实施路径总览 */}
                  <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">三阶段转型路径</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">规划与基建期</h4>
                        <p className="text-sm text-slate-600 dark:text-white/60">1-6个月</p>
                        <p className="text-sm text-slate-700 dark:text-white/80 mt-2">完成顶层设计，夯实数字底座</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">试点与融合期</h4>
                        <p className="text-sm text-slate-600 dark:text-white/60">6-12个月</p>
                        <p className="text-sm text-slate-700 dark:text-white/80 mt-2">打通数据，试点核心应用</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">深化与创新期</h4>
                        <p className="text-sm text-slate-600 dark:text-white/60">12-24个月</p>
                        <p className="text-sm text-slate-700 dark:text-white/80 mt-2">全面推广，形成创新生态</p>
                      </div>
                    </div>
                  </div>

                  {/* 详细阶段规划 */}
                  <div className="space-y-8">
                    {[
                      {
                        phase: "第一阶段：规划与基建期",
                        duration: "1-6个月",
                        color: "green",
                        goals: ["完成数字化转型战略规划", "建立组织架构和治理体系", "夯实基础设施建设", "制定数据标准规范"],
                        tasks: [
                          "成立数字化转型领导小组，明确责任分工",
                          "制定3-5年数字化转型战略规划",
                          "升级网络基础设施，部署云平台架构",
                          "建立数据治理规范和安全标准",
                          "完成核心业务系统梳理和现状评估",
                          "启动教师数字化能力培训计划"
                        ],
                        deliverables: ["数字化转型战略规划书", "组织架构与制度体系", "基础设施升级方案", "数据标准规范文档"],
                        kpis: ["基础设施达标率100%", "教师培训覆盖率80%", "数据标准制定完成率100%"]
                      },
                      {
                        phase: "第二阶段：试点与融合期",
                        duration: "6-12个月",
                        color: "blue",
                        goals: ["建设数据中台平台", "试点智慧教学应用", "实现核心业务数据打通", "构建用户画像体系"],
                        tasks: [
                          "部署数据中台，实现多源数据整合",
                          "选择2-3个核心场景进行深度试点",
                          "开发智慧教学和学习管理系统",
                          "建立学生和教师用户画像",
                          "实施综合素养评价系统试点",
                          "完善数据安全和隐私保护机制"
                        ],
                        deliverables: ["数据中台平台", "智慧教学试点系统", "用户画像模型", "综合评价试点方案"],
                        kpis: ["数据集成覆盖率90%", "试点应用满意度85%+", "系统稳定性99%+"]
                      },
                      {
                        phase: "第三阶段：深化与创新期",
                        duration: "12-24个月",
                        color: "purple",
                        goals: ["全面推广智慧应用", "建立开放生态平台", "实现数据驱动决策", "形成持续创新机制"],
                        tasks: [
                          "智慧应用场景全面覆盖教学管理",
                          "建立开放API平台，对接第三方应用",
                          "实现基于AI的个性化教学推荐",
                          "构建校企合作和产学研一体化平台",
                          "建立数据驱动的决策支持系统",
                          "形成可复制推广的转型模式"
                        ],
                        deliverables: ["全场景智慧应用平台", "开放生态体系", "AI推荐引擎", "决策支持系统"],
                        kpis: ["应用覆盖率100%", "生态合作伙伴10+", "决策效率提升50%+"]
                      }
                    ].map((stage, index) => (
                      <div key={index} className={`bg-gradient-to-r from-${stage.color}-50/50 to-${stage.color}-100/30 dark:from-${stage.color}-900/10 dark:to-${stage.color}-900/20 border border-${stage.color}-200 dark:border-${stage.color}-800/50 rounded-xl p-6`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-8 h-8 bg-${stage.color}-500 rounded-lg flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{stage.phase}</h3>
                            <p className="text-sm text-slate-600 dark:text-white/60">{stage.duration}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">阶段目标</h4>
                            <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                              {stage.goals.map((goal, idx) => (
                                <li key={idx}>• {goal}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">关键任务</h4>
                            <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                              {stage.tasks.slice(0, 4).map((task, idx) => (
                                <li key={idx}>• {task}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">主要交付物</h4>
                            <div className="flex flex-wrap gap-2">
                              {stage.deliverables.map((item, idx) => (
                                <span key={idx} className={`text-xs px-2 py-1 bg-${stage.color}-100 dark:bg-${stage.color}-900/30 text-${stage.color}-700 dark:text-${stage.color}-300 rounded`}>
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">成功指标</h4>
                            <div className="flex flex-wrap gap-2">
                              {stage.kpis.map((kpi, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                                  {kpi}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 预算与ROI */}
                  <div className="bg-gradient-to-r from-indigo-100/80 to-purple-100/60 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800/50">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-indigo-500" />
                      预算投入与ROI分析
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">总投入成本(TCO)</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 基础设施建设：40%</li>
                          <li>• 软件平台开发：30%</li>
                          <li>• 人员培训：15%</li>
                          <li>• 运维服务：15%</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">预期收益</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 管理效率提升：50%+</li>
                          <li>• 教学质量改善：30%+</li>
                          <li>• 运营成本降低：25%+</li>
                          <li>• 学生满意度提升：40%+</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">ROI时间线</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 第1年：投入期</li>
                          <li>• 第2年：回收期开始</li>
                          <li>• 第3年：全面回报期</li>
                          <li>• 3年ROI：150%+</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. 成功案例深度剖析 */}
            <section id="success-cases" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-900/10 dark:to-green-900/10 backdrop-blur-md border border-emerald-200/30 dark:border-emerald-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">成功案例深度剖析</h2>
                </div>

                <div className="space-y-8">
                  {/* 案例一：某顶尖高校 */}
                  <div className="bg-white/60 dark:bg-white/[0.05] p-8 rounded-xl border border-white/20 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">案例一：某985高校数智教育一体化平台</h3>
                        <p className="text-slate-600 dark:text-white/70">构建"教-学-研-管"全场景智慧教育生态</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">转型背景与挑战</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>科研与教学数据分散：</strong>20+个业务系统独立运行，数据难以有效整合利用</li>
                          <li><strong>跨院系协作困难：</strong>缺乏统一平台支撑跨学科项目合作和资源共享</li>
                          <li><strong>个性化教学缺失：</strong>无法根据学生特点提供差异化的学习支持</li>
                          <li><strong>决策缺乏数据支撑：</strong>管理层难以获得实时、准确的决策数据</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">解决方案设计</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>统一数据中台：</strong>整合教务、科研、图书、财务等核心系统数据</li>
                          <li><strong>AI智能推荐：</strong>基于学习行为分析的个性化课程和资源推荐</li>
                          <li><strong>科研协作平台：</strong>支持跨院系项目管理和算力资源共享</li>
                          <li><strong>管理驾驶舱：</strong>多维度数据看板支持科学决策</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">实施效果与成果</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { metric: "数据整合", value: "95%", desc: "核心业务系统" },
                          { metric: "效率提升", value: "80%", desc: "教学管理效率" },
                          { metric: "协作项目", value: "150%", desc: "跨院系合作增长" },
                          { metric: "学生满意度", value: "92%", desc: "教学服务评价" }
                        ].map((item, index) => (
                          <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{item.value}</div>
                            <div className="text-sm font-medium text-slate-900 dark:text-white">{item.metric}</div>
                            <div className="text-xs text-slate-600 dark:text-white/60">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/50">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        关键成功要素
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-white/80">
                        <strong>一把手工程推动：</strong>校领导班子高度重视，成立专门的数字化转型委员会；<strong>分步实施策略：</strong>先易后难，从管理系统开始逐步扩展到教学科研；<strong>用户参与设计：</strong>充分征求师生意见，确保系统易用性和实用性。
                      </p>
                    </div>
                  </div>

                  {/* 案例二：某区域教育局 */}
                  <div className="bg-white/60 dark:bg-white/[0.05] p-8 rounded-xl border border-white/20 dark:border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <School className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">案例二：某区域教育局智慧教育云平台</h3>
                        <p className="text-slate-600 dark:text-white/70">打造区域教育均衡发展"智慧大脑"</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">区域挑战</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>发展不均衡：</strong>辖区内学校信息化水平参差不齐</li>
                          <li><strong>资源配置不合理：</strong>优质教育资源集中在市区，农村学校匮乏</li>
                          <li><strong>管理效率低下：</strong>教育局难以实时掌握各校运行状况</li>
                          <li><strong>教师发展不平衡：</strong>缺乏统一的教师培训和发展平台</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">云平台架构</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>区域教育云：</strong>统一的基础设施和应用服务平台</li>
                          <li><strong>优质资源库：</strong>名师课程、教学素材集中管理和分发</li>
                          <li><strong>教学质量监测：</strong>区域教学数据实时采集和分析</li>
                          <li><strong>教师发展中心：</strong>在线培训、教研协作一体化平台</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">转型成果</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">300+</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">接入学校</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">覆盖率100%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">7000+</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">师生用户</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">活跃度85%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">60%</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">管理效率提升</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">数据驱动决策</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/50">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">典型应用场景</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-white/80">
                        <div>
                          <p><strong>名师课堂共享：</strong>市区优秀教师的课程实时直播到农村学校，实现优质教育资源共享</p>
                        </div>
                        <div>
                          <p><strong>区域质量监测：</strong>通过数据分析发现薄弱学校和学科，精准制定改进措施</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. 数字化成熟度评估模型 */}
            <section id="maturity-assessment" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-900/10 dark:to-gray-900/10 backdrop-blur-md border border-slate-200/30 dark:border-slate-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-gray-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">数字化成熟度评估模型</h2>
                </div>

                <div className="space-y-8">
                  {/* 评估模型介绍 */}
                  <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">六维度×五级成熟度评估框架</h3>
                    <p className="text-slate-700 dark:text-white/80 mb-4">
                      基于国际先进的成熟度评估理论，结合中国教育数字化实践，构建科学的评估体系，帮助教育机构准确定位现状，制定针对性的提升策略。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">六个评估维度</h4>
                        <div className="space-y-3">
                          {[
                            { name: "战略治理", desc: "顶层设计、组织架构、制度建设", color: "purple" },
                            { name: "基础设施", desc: "网络、计算、存储、安全设施", color: "blue" },
                            { name: "数据平台", desc: "数据治理、中台建设、分析能力", color: "green" },
                            { name: "教学应用", desc: "智慧教学、学习管理、评价系统", color: "orange" },
                            { name: "队伍建设", desc: "数字化能力、培训体系、人才梯队", color: "pink" },
                            { name: "安全合规", desc: "网络安全、数据保护、制度规范", color: "red" }
                          ].map((dimension, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full ${
                                dimension.color === 'purple' ? 'bg-purple-500' :
                                dimension.color === 'blue' ? 'bg-blue-500' :
                                dimension.color === 'green' ? 'bg-green-500' :
                                dimension.color === 'orange' ? 'bg-orange-500' :
                                dimension.color === 'pink' ? 'bg-pink-500' :
                                dimension.color === 'red' ? 'bg-red-500' : 'bg-gray-500'
                              }`}></div>
                              <div>
                                <span className="font-medium text-slate-900 dark:text-white">{dimension.name}</span>
                                <span className="text-sm text-slate-600 dark:text-white/60 ml-2">{dimension.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">五级成熟度等级</h4>
                        <div className="space-y-3">
                          {[
                            { level: "L1 - 初始级", desc: "缺乏统一规划，信息化应用零散", score: "0-20分" },
                            { level: "L2 - 管理级", desc: "具备基本管理制度，应用相对独立", score: "21-40分" },
                            { level: "L3 - 定义级", desc: "制定标准规范，系统初步整合", score: "41-60分" },
                            { level: "L4 - 量化级", desc: "数据驱动决策，流程持续优化", score: "61-80分" },
                            { level: "L5 - 优化级", desc: "智能化应用，持续创新发展", score: "81-100分" }
                          ].map((level, index) => (
                            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-slate-900 dark:text-white">{level.level}</span>
                                <span className="text-sm text-slate-600 dark:text-white/60">{level.score}</span>
                              </div>
                              <p className="text-sm text-slate-700 dark:text-white/80 mt-1">{level.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 评估方法 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-500" />
                      评估实施方法
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { step: "问卷调查", desc: "标准化问卷，定量评估各维度现状", icon: FileText },
                        { step: "深度访谈", desc: "关键人员访谈，了解具体实施情况", icon: Users },
                        { step: "数据分析", desc: "现有系统数据分析，验证评估结果", icon: BarChart3 },
                        { step: "现场调研", desc: "实地考察，全面了解应用效果", icon: Map }
                      ].map((method, index) => (
                        <div key={index} className="text-center">
                          <method.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                          <h4 className="font-medium text-slate-900 dark:text-white mb-1">{method.step}</h4>
                          <p className="text-xs text-slate-600 dark:text-white/60">{method.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 评估输出 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">评估报告内容</h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                        <li>• <strong>成熟度雷达图：</strong>直观展示六个维度的成熟度水平</li>
                        <li>• <strong>差距分析：</strong>对标行业先进水平，识别改进空间</li>
                        <li>• <strong>优先级矩阵：</strong>基于影响度和紧迫性排序改进重点</li>
                        <li>• <strong>行动计划：</strong>制定具体的提升路径和时间节点</li>
                        <li>• <strong>投资建议：</strong>预算分配和ROI预期分析</li>
                      </ul>
                    </div>

                    <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">评估价值</h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                        <li>• <strong>现状诊断：</strong>全面了解数字化转型现状和水平</li>
                        <li>• <strong>目标定位：</strong>明确未来发展方向和目标等级</li>
                        <li>• <strong>路径规划：</strong>制定科学的分阶段实施策略</li>
                        <li>• <strong>资源配置：</strong>优化人财物投入，提高转型效率</li>
                        <li>• <strong>风险识别：</strong>提前发现潜在风险和实施障碍</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. 未来技术趋势与展望 */}
            <section id="future-trends" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-900/10 dark:to-blue-900/10 backdrop-blur-md border border-cyan-200/30 dark:border-cyan-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">未来技术趋势与展望</h2>
                </div>

                <div className="space-y-8">
                  {/* 前沿技术趋势 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">前沿技术发展方向</h3>

                      <div className="space-y-4">
                        {[
                          {
                            title: "生成式AI在教育中的深度应用",
                            description: "从AI助教到AI学伴的演进，实现更加自然和个性化的人机交互",
                            trends: [
                              "AI驱动的个性化课程内容生成",
                              "智能作业批改和反馈系统",
                              "基于对话的智能学习助手",
                              "多模态AI支持的沉浸式学习体验"
                            ],
                            icon: Brain,
                            color: "purple"
                          },
                          {
                            title: "教育元宇宙与虚拟现实",
                            description: "构建沉浸式、高仿真的虚拟教学环境，突破时空限制",
                            trends: [
                              "虚拟实验室和仿真实训环境",
                              "3D沉浸式历史文化体验",
                              "跨地域的虚拟协作学习空间",
                              "AR增强现实教学内容叠加"
                            ],
                            icon: Globe,
                            color: "blue"
                          }
                        ].map((trend, index) => (
                          <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                              <trend.icon className={`w-6 h-6 text-${trend.color}-500`} />
                              <h4 className="font-semibold text-slate-900 dark:text-white">{trend.title}</h4>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-white/80 mb-4">{trend.description}</p>
                            <ul className="text-sm text-slate-600 dark:text-white/70 space-y-1">
                              {trend.trends.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">技术融合创新</h3>

                      <div className="space-y-4">
                        {[
                          {
                            title: "区块链+教育：可信学习档案",
                            description: "构建基于区块链的终身学习档案和能力认证体系",
                            applications: [
                              "学历学位证书防伪验证",
                              "技能证书和微学位认证",
                              "跨机构学分互认体系",
                              "个人学习成果NFT化"
                            ],
                            icon: Shield,
                            color: "green"
                          },
                          {
                            title: "边缘计算+隐私保护",
                            description: "在保护学生隐私的前提下，实现智能化教育服务",
                            applications: [
                              "本地化AI推理和数据处理",
                              "联邦学习保护隐私的协作",
                              "差分隐私的学习行为分析",
                              "同态加密的成绩统计分析"
                            ],
                            icon: Cpu,
                            color: "orange"
                          }
                        ].map((innovation, index) => (
                          <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl border border-white/20 dark:border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                              <innovation.icon className={`w-6 h-6 text-${innovation.color}-500`} />
                              <h4 className="font-semibold text-slate-900 dark:text-white">{innovation.title}</h4>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-white/80 mb-4">{innovation.description}</p>
                            <ul className="text-sm text-slate-600 dark:text-white/70 space-y-1">
                              {innovation.applications.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 技术发展时间线 */}
                  <div className="bg-gradient-to-r from-cyan-100/80 to-blue-100/60 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800/50">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-cyan-500" />
                      技术成熟度与应用时间线
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">近期（1-2年）</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>生成式AI应用：</strong>智能写作助手、作业批改</li>
                          <li><strong>数据中台建设：</strong>统一数据治理和分析</li>
                          <li><strong>低代码平台：</strong>快速应用开发部署</li>
                          <li><strong>云原生架构：</strong>容器化微服务部署</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">中期（3-5年）</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>教育元宇宙：</strong>沉浸式虚拟学习环境</li>
                          <li><strong>区块链认证：</strong>可信学历证书体系</li>
                          <li><strong>边缘AI：</strong>本地化智能推理</li>
                          <li><strong>数字孪生：</strong>校园运营优化</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">远期（5-10年）</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                          <li><strong>通用人工智能：</strong>全能AI教学助手</li>
                          <li><strong>脑机接口：</strong>直接知识传输</li>
                          <li><strong>量子计算：</strong>超大规模教育建模</li>
                          <li><strong>全息投影：</strong>真实感远程教学</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 发展建议 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-cyan-500" />
                        技术选型建议
                      </h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                        <li>• <strong>优先成熟技术：</strong>选择经过验证的稳定技术栈</li>
                        <li>• <strong>关注开源生态：</strong>避免技术绑定，保持灵活性</li>
                        <li>• <strong>渐进式创新：</strong>稳步引入前沿技术，控制风险</li>
                        <li>• <strong>标准化优先：</strong>遵循行业标准，确保互联互通</li>
                      </ul>
                    </div>

                    <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-500" />
                        创新应用策略
                      </h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-2">
                        <li>• <strong>试点先行：</strong>小范围试点验证可行性</li>
                        <li>• <strong>用户参与：</strong>师生深度参与设计和测试</li>
                        <li>• <strong>效果评估：</strong>建立科学的效果评估机制</li>
                        <li>• <strong>持续迭代：</strong>基于反馈快速迭代优化</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. LetoAI解决方案与服务体系 */}
            <section id="letoai-solutions" className="mb-16 scroll-mt-8">
              <div className="bg-gradient-to-br from-orange-50/50 to-red-50/30 dark:from-orange-900/10 dark:to-red-900/10 backdrop-blur-md border border-orange-200/30 dark:border-orange-800/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">LetoAI解决方案与服务体系</h2>
                </div>

                <div className="space-y-8">
                  {/* 核心能力 */}
                  <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">核心技术能力</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "AI算法平台",
                          description: "基于10亿+教育数据训练的专业AI模型",
                          capabilities: [
                            "深度学习推荐算法",
                            "自然语言处理引擎",
                            "计算机视觉分析",
                            "多模态数据融合"
                          ],
                          icon: Brain,
                          color: "purple"
                        },
                        {
                          title: "数据治理平台",
                          description: "企业级数据中台，支持海量教育数据处理",
                          capabilities: [
                            "实时数据采集ETL",
                            "多源数据标准化",
                            "数据质量监控",
                            "隐私保护计算"
                          ],
                          icon: Database,
                          color: "blue"
                        },
                        {
                          title: "应用开发平台",
                          description: "低代码/无代码快速应用构建平台",
                          capabilities: [
                            "可视化界面设计",
                            "业务流程编排",
                            "组件库和模板",
                            "API接口管理"
                          ],
                          icon: Layers,
                          color: "green"
                        }
                      ].map((platform, index) => (
                        <div key={index} className="text-center">
                          <platform.icon className={`w-8 h-8 mx-auto mb-3 text-${platform.color}-500`} />
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{platform.title}</h4>
                          <p className="text-sm text-slate-700 dark:text-white/80 mb-3">{platform.description}</p>
                          <ul className="text-xs text-slate-600 dark:text-white/60 space-y-1">
                            {platform.capabilities.map((cap, idx) => (
                              <li key={idx}>• {cap}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 解决方案矩阵 */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">解决方案矩阵</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                      {/* K12解决方案 */}
                      <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/60 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800/50">
                        <div className="flex items-center gap-3 mb-4">
                          <School className="w-6 h-6 text-blue-500" />
                          <h4 className="font-semibold text-slate-900 dark:text-white">K12教育解决方案</h4>
                        </div>
                        <div className="space-y-4">
                          {[
                            {
                              name: "智慧课堂系统",
                              features: ["互动教学工具", "实时学情分析", "多媒体资源管理", "家校沟通平台"]
                            },
                            {
                              name: "综合素养评价",
                              features: ["德智体美劳五维评价", "过程性数据采集", "成长轨迹记录", "个性化报告生成"]
                            },
                            {
                              name: "区域教育云",
                              features: ["统一身份认证", "优质资源共享", "教研协作平台", "数据统计分析"]
                            }
                          ].map((solution, index) => (
                            <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg">
                              <h5 className="font-medium text-slate-900 dark:text-white mb-2">{solution.name}</h5>
                              <div className="grid grid-cols-2 gap-1">
                                {solution.features.map((feature, idx) => (
                                  <span key={idx} className="text-xs text-slate-600 dark:text-white/60">• {feature}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 高等教育解决方案 */}
                      <div className="bg-gradient-to-r from-purple-50/80 to-pink-50/60 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800/50">
                        <div className="flex items-center gap-3 mb-4">
                          <GraduationCap className="w-6 h-6 text-purple-500" />
                          <h4 className="font-semibold text-slate-900 dark:text-white">高等教育解决方案</h4>
                        </div>
                        <div className="space-y-4">
                          {[
                            {
                              name: "智慧教学平台",
                              features: ["SPOC课程建设", "AI教学助手", "学习分析引擎", "个性化推荐"]
                            },
                            {
                              name: "科研协作平台",
                              features: ["项目管理系统", "算力资源调度", "成果转化追踪", "学术网络分析"]
                            },
                            {
                              name: "数字化校园",
                              features: ["一站式服务大厅", "移动端应用", "IoT设备管理", "智能运维监控"]
                            }
                          ].map((solution, index) => (
                            <div key={index} className="bg-white/60 dark:bg-white/[0.05] p-4 rounded-lg">
                              <h5 className="font-medium text-slate-900 dark:text-white mb-2">{solution.name}</h5>
                              <div className="grid grid-cols-2 gap-1">
                                {solution.features.map((feature, idx) => (
                                  <span key={idx} className="text-xs text-slate-600 dark:text-white/60">• {feature}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 服务模式 */}
                  <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/60 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800/50">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-500" />
                      服务交付模式
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "咨询评估",
                          duration: "1-2周",
                          deliverables: ["现状评估报告", "转型规划建议", "技术选型方案", "投资预算分析"],
                          icon: Target
                        },
                        {
                          phase: "方案设计",
                          duration: "2-4周",
                          deliverables: ["架构设计方案", "数据治理规范", "安全保障体系", "实施时间表"],
                          icon: Lightbulb
                        },
                        {
                          phase: "试点实施",
                          duration: "3-6个月",
                          deliverables: ["试点系统部署", "用户培训服务", "效果监测分析", "优化改进建议"],
                          icon: Settings
                        },
                        {
                          phase: "全面推广",
                          duration: "6-12个月",
                          deliverables: ["全量系统部署", "运维服务支持", "持续优化升级", "成效评估报告"],
                          icon: TrendingUp
                        }
                      ].map((service, index) => (
                        <div key={index} className="text-center">
                          <service.icon className="w-8 h-8 mx-auto mb-3 text-green-500" />
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{service.phase}</h4>
                          <p className="text-sm text-slate-600 dark:text-white/60 mb-3">{service.duration}</p>
                          <ul className="text-xs text-slate-700 dark:text-white/80 space-y-1">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 成功案例数据 */}
                  <div className="bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">服务成果数据</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { number: "2+", label: "合作机构", desc: "重点中学+培训机构" },
                        { number: "7000+", label: "受益师生", desc: "直接使用用户" },
                        { number: "95%+", label: "客户满意度", desc: "持续服务续约率" },
                        { number: "85%+", label: "效率提升", desc: "平均管理效率改善" }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stat.number}</div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">{stat.label}</div>
                          <div className="text-xs text-slate-600 dark:text-white/60">{stat.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 联系合作 */}
                  <div className="bg-gradient-to-r from-orange-100/80 to-red-100/60 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800/50">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      合作方式
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">战略合作</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 区域教育数字化转型</li>
                          <li>• 联合实验室建设</li>
                          <li>• 标准规范制定</li>
                          <li>• 产学研深度融合</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">项目合作</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 智慧校园建设</li>
                          <li>• 教学系统升级</li>
                          <li>• 数据平台开发</li>
                          <li>• 定制化解决方案</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">技术服务</h4>
                        <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1">
                          <li>• 咨询评估服务</li>
                          <li>• 培训赋能支持</li>
                          <li>• 运维保障服务</li>
                          <li>• 技术支持热线</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 结语与行动建议 */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-slate-50/80 to-gray-50/60 dark:bg-white/[0.05] backdrop-blur-md border border-slate-200/50 dark:border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">结语与行动建议</h2>

                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed">
                      教育数字化转型是一场深刻的教育变革，需要<strong className="text-letoOrange dark:text-letoTurquoise">系统思维、长期坚持、持续创新</strong>。
                      LetoAI基于"四维一体"转型框架，愿与广大教育工作者携手共进，共创智慧教育新未来。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">立即开始</h3>
                      <p className="text-sm text-slate-700 dark:text-white/80">
                        进行数字化成熟度快速评估，明确现状和改进方向
                      </p>
                    </div>

                    <div className="text-center bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">试点先行</h3>
                      <p className="text-sm text-slate-700 dark:text-white/80">
                        选择1-2个关键场景进行深度试点，积累经验后推广
                      </p>
                    </div>

                    <div className="text-center bg-white/60 dark:bg-white/[0.05] p-6 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">持续优化</h3>
                      <p className="text-sm text-slate-700 dark:text-white/80">
                        建立持续改进机制，与时俱进推进数字化转型进程
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 附录 */}
            <section id="appendix" className="mb-16 scroll-mt-8">
              <div className="border border-slate-200 dark:border-slate-700 rounded p-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">附录</h2>

                {/* 附录A: 教育数字化成熟度自评量表 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    附录A：教育数字化成熟度自评量表
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-white/80 mb-4">
                    <strong>说明：</strong>请根据您所在机构的实际情况，对以下各项进行评分（1-5分制）。评分标准：1-初始级，2-发展级，3-成熟级，4-优化级，5-引领级
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">1. 战略与治理</h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1 ml-4">
                        <li>• 机构已制定明确的数字化转型战略规划</li>
                        <li>• 建立了数字化转型专项组织架构和治理体系</li>
                        <li>• 制定了完善的数据治理政策和安全规范</li>
                        <li>• 建立了数字化项目的预算管理和ROI评估机制</li>
                        <li>• 形成了全员参与的数字化文化和变革意识</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">2. 数字底座</h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1 ml-4">
                        <li>• 建设了完善的网络基础设施和云平台架构</li>
                        <li>• 部署了统一的身份认证和权限管理系统</li>
                        <li>• 构建了稳定可靠的数据存储和备份体系</li>
                        <li>• 建立了完善的网络安全防护和监控机制</li>
                        <li>• 实现了系统的标准化和规范化部署</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">3. 数据要素</h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1 ml-4">
                        <li>• 建立了统一的数据标准和数据字典</li>
                        <li>• 实现了多系统间的数据互联互通</li>
                        <li>• 构建了数据质量监控和治理机制</li>
                        <li>• 建立了数据驱动的决策分析体系</li>
                        <li>• 形成了数据资产管理和价值挖掘能力</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-3">4. 智慧应用</h4>
                      <ul className="text-sm text-slate-700 dark:text-white/80 space-y-1 ml-4">
                        <li>• 部署了智能化的教学管理和评估系统</li>
                        <li>• 建立了个性化学习和智能推荐服务</li>
                        <li>• 实现了智能化的学生综合素质评价</li>
                        <li>• 构建了智慧化的校园管理和服务平台</li>
                        <li>• 形成了持续创新的应用生态和服务体系</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded text-sm">
                    <strong>评分建议：</strong>
                    80-100分：引领者；60-79分：先进者；40-59分：发展者；20-39分：起步者；0-19分：初学者
                  </div>
                </div>

                {/* 附录B: 关键术语解释 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    附录B：关键术语解释
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>数字化转型：</strong>运用数字技术对组织的业务流程、文化和客户体验进行根本性改造的过程。
                    </div>
                    <div>
                      <strong>智慧教育：</strong>以AI、云计算、大数据等新兴信息技术为基础，构建智能化的教育环境和服务体系。
                    </div>
                    <div>
                      <strong>教育大数据：</strong>在教育领域产生的各种类型和规模的数据集合，用于支撑教育决策和个性化服务。
                    </div>
                    <div>
                      <strong>AI评估系统：</strong>运用人工智能技术，对学生的学习过程、学习成果和综合素质进行智能化评估的系统。
                    </div>
                    <div>
                      <strong>数据中台：</strong>介于底层数据源和上层应用之间的数据服务层，提供统一的数据服务能力。
                    </div>
                    <div>
                      <strong>学习分析：</strong>通过收集、分析和报告学习者及其环境的数据，以理解和优化学习过程的研究领域。
                    </div>
                    <div>
                      <strong>个性化学习：</strong>根据每个学习者的特点、需求和偏好，提供定制化的学习内容、路径和节奏的教育方式。
                    </div>
                    <div>
                      <strong>教育信创：</strong>在教育领域推进信息技术应用创新，实现核心技术自主可控的国产化替代。
                    </div>
                    <div>
                      <strong>四维一体框架：</strong>本白皮书提出的数字化转型理论框架，包括战略与治理、数字底座、数据要素、智慧应用四个维度。
                    </div>
                    <div>
                      <strong>数字化成熟度：</strong>组织在数字化转型过程中所达到的发展水平，分为初始级、发展级、成熟级、优化级、引领级五个层次。
                    </div>
                  </div>
                </div>

                {/* 附录C: 参考文献列表 */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    附录C：参考文献列表
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-green-500 pl-3">
                      <strong>Digital Intelligence Education（白皮书）</strong> - DI-IDEA（北大牵头），2025<br/>
                      <span className="text-slate-600 dark:text-white/60">提出数智教育概念/体系/标准与大量高校案例，兼顾框架与实践路径</span>
                    </div>

                    <div className="border-l-4 border-green-500 pl-3">
                      <strong>人工智能与教育：政策制定者指南</strong> - UNESCO，2021<br/>
                      <span className="text-slate-600 dark:text-white/60">系统阐述AI与教育融合的风险/效益评估与政策应对，提供治理原则与实施建议</span>
                    </div>

                    <div className="border-l-4 border-green-500 pl-3">
                      <strong>中国智慧教育白皮书</strong> - 高校/研究机构，2025<br/>
                      <span className="text-slate-600 dark:text-white/60">对国家教育数字化战略行动、智慧教育平台与教育强国（2024–2035）专章解读</span>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-3">
                      <strong>教育数字化转型与变革白皮书</strong> - 新华三（H3C），2025<br/>
                      <span className="text-slate-600 dark:text-white/60">面向K12/高等教育的整体解决方案与转型路径，聚焦技术底座与场景应用</span>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-3">
                      <strong>教育数字化转型的发展机遇（含成熟度模型）</strong> - 华为，2022<br/>
                      <span className="text-slate-600 dark:text-white/60">首次提出智慧教育成熟度评估模型（6子维度×5级），用于自评与路线规划</span>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-3">
                      <strong>教育行业数字化自主创新白皮书</strong> - 飞腾（Phytium），2024<br/>
                      <span className="text-slate-600 dark:text-white/60">全栈"芯-软-云-安"生态与教育场景案例，覆盖智慧校园、云桌面、公共服务平台与科研</span>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-3">
                      <strong>教育数字化转型的趋势与路径</strong> - 国家信息中心，2024<br/>
                      <span className="text-slate-600 dark:text-white/60">强调数据要素、技术融合、顶层设计与统筹推进的四大关键点与实施路径</span>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-3">
                      <strong>2025世界数字教育大会资料汇编</strong> - 世界数字教育大会，2025<br/>
                      <span className="text-slate-600 dark:text-white/60">汇编各国政策与实践成果，利于洞察全球趋势与对标先进实践</span>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <strong>2024年AI+教育行业发展研究报告</strong> - 研究机构，2024<br/>
                      <span className="text-slate-600 dark:text-white/60">聚焦AI赋能教育的技术路线与产业趋势，辅助技术选型与节奏判断</span>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-3">
                      <strong>智慧教育白皮书（2024）</strong> - 行业厂商（转载稿），2024<br/>
                      <span className="text-slate-600 dark:text-white/60">涵盖全光专网、5G双域、云电脑、智算与安全等关键底座与应用场景</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-white/60 mt-4">
                    注：以上文献按评分排序，评分综合考虑内容权威性、实用性、前瞻性等因素。
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}