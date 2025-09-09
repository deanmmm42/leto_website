"use client"

import { motion } from "framer-motion"
import { ArrowRight, Smartphone, Shield, Zap, Globe, Users, Lightbulb } from "lucide-react"
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-teal-500/[0.03]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
                全球AI工具生态
              </span>
              <br />
              让AI触手可及
            </motion.h1>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              <DescriptionText size="large" className="text-xl mb-8 max-w-3xl mx-auto">
                构建世界一流AI工具矩阵，连接全球AI开发者和用户，让每个人都能享受AI技术带来的便利和创新体验
              </DescriptionText>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientHoverButton href="/contact?from=/solutions/global-tools" size="lg">
                下载体验
              </GradientHoverButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="#apps">
                  了解功能 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
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
                  className="bg-white dark:bg-white/[0.03] p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                          {app.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{app.name}</h3>
                          <p className="text-sm text-slate-500 dark:text-white/50">{app.englishName}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-green-600 dark:text-green-400 font-medium mb-4">"{app.slogan}"</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-white/60">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {app.disclaimer && (
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-500/10 rounded-lg mb-6">
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">
                            <strong>免责声明：</strong> {app.disclaimer}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-black text-white hover:bg-gray-800">
                          Download on the App Store
                        </Button>
                        <Button className="bg-green-600 text-white hover:bg-green-700">
                          Get it on Google Play
                        </Button>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-80 h-64 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-500/20 dark:to-teal-500/20 rounded-xl flex items-center justify-center">
                      <div className="text-slate-400 dark:text-white/30">
                        <Smartphone className="h-24 w-24" />
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
      <section className="py-20">
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
              驱动创新技术
            </motion.h2>
            
            <motion.p
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-slate-600 dark:text-white/60 mb-12 max-w-4xl mx-auto"
            >
              我们的核心技术实力体现在以下几个关键维度：
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.03] p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">{tech.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Values Section */}
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
              用户价值
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userValues.map((value, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.03] p-6 rounded-xl border border-gray-200 dark:border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-white/60">{value.description}</p>
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
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              准备体验AI工具的魅力？
            </motion.h2>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GradientHoverButton href="/contact?from=/solutions/global-tools" size="lg">
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