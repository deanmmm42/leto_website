"use client"

import { motion } from "framer-motion"
import { Smartphone, Shield, Zap, Globe, Users, Lightbulb, CheckCircle, Star, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { DescriptionText } from "@/components/description-text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"

export default function GlobalToolsContent() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * i,
        ease: "easeOut" as const,
      },
    }),
  }

  const apps = [
    {
      name: "智能相册清理",
      englishName: "Super Cleanup / Smart Cleaner",
      slogan: "Reclaim Your Phone's Storage, Intelligently.",
      features: [
        "AI Similar Photo Scan (智能扫描相似照片)",
        "Large Video Finder (大视频查找)",
        "Best Photo Suggestion (最佳照片建议)",
        "One-Tap Cleanup (一键清理)",
        "Charging Animation (酷炫充电屏保)"
      ],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      name: "血压/心率智能检测",
      englishName: "BP & Heart Rate Monitor",
      slogan: "Your Personal Health Companion, on Your Phone.",
      features: [
        "Camera Heart Rate Scan (摄像头心率检测)",
        "BP Meter OCR Scan (血压计读数扫描)",
        "AI Health Reports (AI健康报告)",
        "Trend & History Tracking (趋势与历史追踪)",
        "Apple Health Sync (同步Apple Health)"
      ],
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const marketData = [
    {
      title: "全球下载量",
      value: "1000万+",
      description: "累计用户覆盖全球50+国家",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "用户评分",
      value: "4.8★",
      description: "App Store & Google Play 高评分",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "月活用户",
      value: "200万+",
      description: "海外市场活跃用户规模",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "增长率",
      value: "150%",
      description: "年用户增长率持续攀升",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ]

  const techAdvantages = [
    {
      title: "AI技术驱动",
      description: "核心功能基于深度学习算法",
      details: "采用先进的计算机视觉和机器学习技术，为用户提供智能化的工具体验，准确率达95%以上。",
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      title: "全球化布局",
      description: "多语言支持，文化本地化",
      details: "支持20+种语言，深度了解不同地区用户习惯，提供符合当地文化的产品体验。",
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "性能优化",
      description: "极致性能，流畅体验",
      details: "针对不同设备型号深度优化，确保在各种硬件条件下都能提供流畅稳定的用户体验。",
      icon: <Zap className="h-8 w-8" />
    }
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "市场调研",
      description: "深入分析海外目标市场，了解用户需求和竞争格局"
    },
    {
      step: "02",
      title: "产品设计",
      description: "基于AI技术设计核心功能，注重用户体验和界面设计"
    },
    {
      step: "03",
      title: "技术开发",
      description: "采用前沿AI技术，确保产品功能的先进性和稳定性"
    },
    {
      step: "04",
      title: "本地化适配",
      description: "针对不同市场进行语言和文化本地化适配"
    },
    {
      step: "05",
      title: "全球发布",
      description: "在App Store和Google Play等平台全球发布推广"
    },
    {
      step: "06",
      title: "运营优化",
      description: "持续收集用户反馈，不断优化产品功能和用户体验"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 via-white to-teal-50/30 dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.08] via-transparent to-teal-500/[0.08]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/20 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">海外工具产品</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                  AI驱动
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">海外工具产品</span>
              </h1>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <DescriptionText size="large" className="text-xl md:text-2xl mb-12 leading-relaxed text-slate-700 dark:text-white/80">
                基础设施级AI技术驱动，专业打造海外移动应用产品，为全球用户提供智能化工具体验
              </DescriptionText>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {marketData.map((metric, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                      {metric.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-slate-900 dark:text-white">{metric.value}</div>
                      <div className="text-xs text-slate-600 dark:text-white/60">{metric.title}</div>
                      <div className="text-xs text-slate-500 dark:text-white/50 mt-1">{metric.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <GradientHoverButton href="/contact?from=/solutions/global-tools" size="lg" className="shadow-lg shadow-green-500/25">
                免费咨询方案
              </GradientHoverButton>
              <Link href="#products" className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-slate-700 dark:text-white font-medium hover:bg-white dark:hover:bg-white/20 hover:shadow-lg hover:gap-3 transition-all duration-300 group">
                <Star className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                查看产品详情
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50 dark:bg-[#020210]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              核心产品矩阵
            </motion.h2>

            <div className="space-y-24">
              {apps.map((app, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-white/[0.05] dark:to-white/[0.02] p-8 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        src={index === 0 ? "/images/smart-photo-cleaner.jpg" : "/images/blood-pressure-monitor.jpg"}
                        alt={app.name}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-10 rounded-3xl border border-gray-200/50 dark:border-white/10 h-full shadow-xl">
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-green-500/10 dark:bg-green-500/20 px-3 py-1 rounded-full mb-4">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">海外工具产品</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                          {app.name}
                        </h3>
                        <p className="text-lg font-semibold text-slate-600 dark:text-white/70 mb-4">{app.englishName}</p>
                        <p className="text-xl font-medium text-slate-700 dark:text-white/80 mb-6 italic">{app.slogan}</p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">核心功能</h4>
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50 to-white dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-gray-100 dark:border-white/5">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Advantages Section */}
      <section className="py-32 bg-gradient-to-br from-green-50/50 via-white to-teal-50/30 dark:from-[#030314] dark:via-[#0a0420] dark:to-[#041420]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2
                custom={0}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">技术优势</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {techAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-white/[0.05] backdrop-blur-sm p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-green-200 dark:group-hover:border-green-800/50 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-base text-slate-600 dark:text-white/70 leading-relaxed mb-4">{advantage.description}</p>
                      <p className="text-sm text-slate-500 dark:text-white/60 leading-relaxed">{advantage.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              产品开发流程
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentProcess.map((process, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-white/[0.05] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-green-200 dark:group-hover:border-green-800/50 h-full">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{process.step}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-green-500/5 via-white to-teal-500/5 dark:from-green-500/10 dark:via-[#030314] dark:to-teal-500/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-12 leading-tight text-slate-900 dark:text-white"
            >
              准备打造您的海外工具产品？
            </motion.h2>

            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-90 text-white px-8 py-6 text-lg shadow-2xl shadow-green-500/30"
              >
                <Link href="/contact?from=/solutions/global-tools" className="flex items-center justify-center">
                  立即咨询 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}