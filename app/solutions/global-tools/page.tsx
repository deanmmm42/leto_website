"use client"

import { motion } from "framer-motion"
import { Smartphone, Shield, Zap, Globe, Users, Lightbulb, CheckCircle, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { DescriptionText } from "@/components/description-text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"

export default function GlobalToolsPage() {
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
      disclaimer: "This app is for informational purposes and not a substitute for professional medical advice.",
      icon: <Zap className="h-6 w-6" />
    }
  ]

  const technologies = [
    {
      title: "移动端AI优化技术",
      description: "专门针对移动设备的计算能力限制进行深度优化，实现复杂AI算法在手机端的高效运行，确保流畅的用户体验。"
    },
    {
      title: "边缘计算架构",
      description: "采用先进的边缘计算技术架构，将AI计算能力部署到用户设备本地，实现毫秒级响应速度，同时保护用户隐私安全。"
    },
    {
      title: "跨平台适配能力",
      description: "支持iOS、Android等主流移动操作系统，确保AI功能在不同设备和系统版本上的稳定性和一致性表现。"
    },
    {
      title: "AI模型轻量化",
      description: "通过模型压缩、量化等先进技术手段，在保证AI效果的前提下大幅降低模型体积，适合移动端部署和快速迭代。"
    },
    {
      title: "用户体验优化",
      description: "深度理解全球用户使用习惯，结合人机交互设计原理，打造直观易用的AI工具产品界面和交互流程。"
    },
    {
      title: "多语言国际化", 
      description: "支持全球主要语言的AI处理能力，为不同地区用户提供本地化的AI工具体验，突破语言壁垒。"
    }
  ]

  const userValues = [
    {
      title: "便捷高效的AI体验",
      description: "将复杂的AI技术简化为直观易用的工具功能，让普通用户无需技术背景也能轻松享受AI带来的便利",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "隐私安全有保障",
      description: "所有AI处理在用户设备本地完成，不上传任何个人数据到云端，真正保护用户隐私安全", 
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "持续创新的产品体验",
      description: "基于用户反馈持续优化AI算法和产品功能，为用户提供越来越智能、贴心的工具体验",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "全球化服务能力",
      description: "支持多语言和跨地区使用，为全球用户提供一致的高质量AI工具服务体验",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const developmentProcess = [
    {
      title: "市场调研",
      description: "深入调研全球用户需求，识别AI技术应用机会",
      step: "01"
    },
    {
      title: "AI模型训练",
      description: "基于收集的数据训练专业AI模型，优化算法效果", 
      step: "02"
    },
    {
      title: "产品开发",
      description: "将AI技术集成到用户友好的移动应用产品中",
      step: "03"
    },
    {
      title: "全球发布",
      description: "在全球应用商店发布产品，为用户提供AI工具服务",
      step: "04"
    }
  ]


  return (
    <div className="min-h-screen bg-white dark:bg-[#030314]">
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
                <span className="text-sm font-medium text-green-500">海外工具AI解决方案</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                  全球AI工具生态
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">让</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">AI触手可及</span>
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
                构建世界一流AI工具矩阵，连接全球AI开发者和用户，让每个人都能享受AI技术带来的便利和创新体验
              </DescriptionText>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">全球化</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">多语言支持</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">隐私安全</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">本地化处理</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">AI优化</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">边缘计算</div>
                  </div>
                </div>
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
                立即体验
              </GradientHoverButton>
              <Link href="#apps" className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-slate-700 dark:text-white font-medium hover:bg-white dark:hover:bg-white/20 hover:shadow-lg hover:gap-3 transition-all duration-300 group">
                <Globe className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                了解产品功能
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-32 bg-white/50 dark:bg-[#020210]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                custom={0}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-full border border-red-200 dark:border-red-800 mb-6"
              >
                <Globe className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">全球工具市场挑战</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="text-slate-900 dark:text-white">海外工具开发面临的</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">核心挑战</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                custom={2}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-white/[0.05] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-red-200 dark:group-hover:border-red-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">技术壁垒高：AI算法复杂难以移动端部署？</h3>
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed">移动端AI应用需要复杂的模型优化和硬件适配，技术门槛极高。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                custom={3}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-white/[0.05] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-red-200 dark:group-hover:border-red-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">用户体验差：全球化本地化适配困难？</h3>
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed">不同地区用户习惯差异巨大，语言文化适配成本高昂。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                custom={4}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-white/[0.05] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-red-200 dark:group-hover:border-red-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">隐私安全忧虑：云端AI处理数据风险大？</h3>
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed">用户越来越重视数据隐私，传统云端AI处理方案面临信任危机。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                custom={5}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-white/[0.05] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-red-200 dark:group-hover:border-red-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">04</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">竞争激烈：如何在红海市场脱颖而出？</h3>
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed">全球工具类App竞争白热化，需要独特价值主张和技术优势。</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="apps" className="py-20 bg-gray-50 dark:bg-[#020210]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              我们的应用场景
            </motion.h2>
            
            <motion.p
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-slate-600 dark:text-white/60 mb-12 max-w-3xl mx-auto"
            >
              专注移动端AI应用开发，涵盖智能相册管理、健康监测、生产力工具等多个实用场景，为全球用户提供便捷智能的移动应用体验。
            </motion.p>
            
            <div className="space-y-16">
              {apps.map((app, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="w-full lg:w-1/3">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-6 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                        {/* 装饰性背景元素 */}
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl" />
                        
                        <div className="relative z-10">
                          <img
                            src={index === 0 ? "/images/相册清理.jpg" : "/images/血压测量.jpg"}
                            alt={app.name}
                            className="w-full h-auto object-contain rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
                          />
                        </div>
                      </div>
                      
                      {/* 特色标签 */}
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {index === 0 ? '🔥 全球热门' : '🌱 健康生活'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="w-full lg:w-2/3">
                    <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-10 rounded-3xl border border-gray-200/50 dark:border-white/10 h-full shadow-xl">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-green-500/10 dark:bg-green-500/20 px-3 py-1 rounded-full mb-4">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm font-medium text-green-500">核心产品</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                            {app.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">{app.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-white/50">{app.englishName}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-xl text-green-600 dark:text-green-400 font-medium">"{app.slogan}"</p>
                        
                        <div className="grid grid-cols-1 gap-4 mt-8">
                          {app.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-gray-100 dark:border-white/5 hover:shadow-md transition-all duration-300">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-base text-slate-600 dark:text-white/60 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {app.disclaimer && (
                          <div className="p-4 bg-yellow-50 dark:bg-yellow-500/10 rounded-xl border border-yellow-200 dark:border-yellow-800/30 mt-6">
                            <p className="text-sm text-yellow-600 dark:text-yellow-400 leading-relaxed">
                              <strong>免责声明：</strong> {app.disclaimer}
                            </p>
                          </div>
                        )}
                        
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:from-[#030314] dark:via-[#0a0420] dark:to-[#041420]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <motion.div
                custom={0}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 mb-6"
              >
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">技术优势</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="text-slate-900 dark:text-white">驱动创新的</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">技术优势</span>
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl text-slate-600 dark:text-white/60 max-w-4xl mx-auto"
              >
                我们的核心技术实力体现在以下几个关键维度：
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  custom={index + 3}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-white/[0.05] backdrop-blur-sm p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-purple-200 dark:group-hover:border-purple-800/50 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {tech.title}
                        </h3>
                        <p className="text-base text-slate-600 dark:text-white/70 leading-relaxed">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Values Section */}
      <section className="py-32 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 dark:from-green-900/10 dark:via-[#030314] dark:to-emerald-900/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                custom={0}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800 mb-6"
              >
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">用户价值</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="text-slate-900 dark:text-white">为全球用户创造的</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">核心价值</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {userValues.map((value, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-lg p-10 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-green-200 dark:group-hover:border-green-800/50 hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{value.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#020210]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              开发流程
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((process, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{process.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-green-50/50 via-white to-teal-50/30 dark:from-green-900/10 dark:via-[#030314] dark:to-teal-900/10 relative overflow-hidden">
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
              className="text-4xl md:text-6xl font-bold mb-12 leading-tight"
            >
              准备体验全球AI工具的魅力？
            </motion.h2>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <GradientHoverButton href="/contact?from=/solutions/global-tools" size="lg" className="shadow-2xl shadow-green-500/30">
                立即咨询
              </GradientHoverButton>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}