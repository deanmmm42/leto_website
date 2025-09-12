"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users, TrendingUp, BarChart3, Shield, Brain, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { DescriptionText } from "@/components/description-text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"

export default function EducationPage() {
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

  const challenges = [
    {
      title: "评价难题：如何科学衡量学生？",
      description: "传统分数无法体现综合能力，政策要求多维度评价。"
    },
    {
      title: "教学难题：如何实现因材施教？",
      description: "\"大班额\"教学难以兼顾个体差异，学生学习效率瓶颈。"
    }
  ]

  const coreProducts = [
    {
      title: "综合素养评价系统",
      slogan: "告别唯分数论，构建学生360°成长画像",
      problem: "响应国家教育评价改革，为学校提供一套科学、全面、过程性的学生评价工具，从\"育分\"走向\"育人\"。",
      features: [
        {
          icon: <Users className="h-5 w-5" />,
          title: "多维评价模型",
          description: "支持德智体美劳五育并举的自定义指标体系。"
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: "过程性数据采集", 
          description: "通过App、平台等多端轻松记录学生日常表现。"
        },
        {
          icon: <BookOpen className="h-5 w-5" />,
          title: "学生成长档案",
          description: "自动生成每个学生独一无二的、可视化的成长雷达图与档案。"
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: "智能分析报告",
          description: "为学校、班级和个人提供数据洞察，辅助决策。"
        }
      ]
    },
    {
      title: "智能题库+个性化辅导系统",
      slogan: "AI精准赋能，让因材施教成为可能",
      problem: "利用AI技术分析学生知识点掌握情况，提供个性化学习路径和资源，提升学习效率和教学质量。",
      features: [
        {
          icon: <Brain className="h-5 w-5" />,
          title: "智慧题库",
          description: "海量、高质量、精细化标签的题目资源。"
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: "知识图谱诊断",
          description: "通过少量测试，精准定位学生知识薄弱环节。"
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: "个性化推荐引擎",
          description: "智能推荐最适合的练习题和学习内容。"
        },
        {
          icon: <BookOpen className="h-5 w-5" />,
          title: "智能错题本",
          description: "自动归集错题，并提供同类题、变式题巩固。"
        }
      ]
    }
  ]

  const userValues = [
    {
      title: "教学效率革命性提升",
      description: "AI语音录入和智能分析技术大幅提升教师工作效率，让教师有更多时间专注教学创新和学生关怀",
      benefit: "评价效率提升300%，教师工作负担减轻70%，教学质量和学生满意度显著提高"
    },
    {
      title: "教育评价客观公正化", 
      description: "统一的AI评价标准彻底消除主观评价差异，大幅提升教育评价的权威性和社会公信力",
      benefit: "评价标准一致性达到95%+，家长信任度和学校声誉显著提升，教育品牌价值增强"
    },
    {
      title: "学生个性化发展保障",
      description: "基于AI数据分析的个性化成长路径规划，让每个学生都能获得最适合的教育资源和发展指导", 
      benefit: "学生学习效果提升50%，学习兴趣和自主性明显增强，综合素养得到全面均衡发展"
    },
    {
      title: "教育决策科学化支撑",
      description: "大数据驱动的教育管理决策体系，为学校发展规划和教学改革提供强有力的科学依据",
      benefit: "管理决策准确率提升80%，教育资源配置优化，学校整体教学水平和竞争力全面提升"
    }
  ]

  const cases = [
    {
      title: "综合素养评价系统应用",
      subtitle: "某知名AI试点学校",
      tag: "教育创新",
      description: "成功部署学生综合素养AI评价系统，实现从传统人工评价向智能化评价的全面转型，大幅提升评价工作效率和客观性水平",
      metrics: [
        "评价效率：提升80%",
        "教师满意度：显著改善", 
        "学生成长：可视化追踪",
        "家校沟通：明显优化"
      ]
    },
    {
      title: "个性化教辅系统应用",
      subtitle: "某知名私立学校",
      tag: "因材施教",
      description: "全面引入AI个性化教辅系统，为每位学生制定专属学习成长方案，真正实现因材施教的教育理想",
      metrics: [
        "学习效果：显著提升",
        "个性化程度：大幅改善",
        "教学质量：整体优化", 
        "学生参与度：明显增强"
      ]
    }
  ]

  const techAdvantages = [
    {
      title: "AI算法引擎",
      description: "拥有针对教育领域的专门算法模型（如学生认知诊断、知识追踪等）。"
    },
    {
      title: "大数据处理能力",
      description: "能够高效、安全地处理区域/学校级的海量学生数据。"
    },
    {
      title: "高标准数据安全",
      description: "遵循国家对教育数据的安全和隐私规范，可支持私有化部署。"
    },
    {
      title: "灵活兼容的平台", 
      description: "系统可与学校现有的教务系统、智慧校园平台进行集成。"
    }
  ]

  const userDimensions = [
    { role: "教师层面", benefit: "减轻工作负担，提升教学专业性" },
    { role: "学生层面", benefit: "获得公平客观评价，个性化发展支持" },
    { role: "家长层面", benefit: "透明可信的评价结果，清晰的成长轨迹" },
    { role: "学校层面", benefit: "提升教学管理效率，增强教育品牌价值" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#030314]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-indigo-500/[0.08]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-500">教育行业AI解决方案</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                  AI赋能智慧教育
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">让每个学生都能</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">精准成长</span>
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
                基于AI大模型技术，为教育机构提供综合素养评价与个性化教学双引擎系统
              </DescriptionText>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">300%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">评价效率提升</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">50%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">学习效果提升</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">98%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">用户满意度</div>
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
              <Button
                asChild
                className="leto-gradient-bg hover:opacity-90 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/25"
              >
                <Link href="/contact?from=/solutions/education" className="flex items-center justify-center">
                  立即咨询 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Link href="#cases" className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-slate-700 dark:text-white font-medium hover:bg-white dark:hover:bg-white/20 hover:shadow-lg hover:gap-3 transition-all duration-300 group">
                <Star className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                查看成功案例
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
                <TrendingUp className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">教育行业痛点</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="text-slate-900 dark:text-white">教育管理面临的</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">核心挑战</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-white/[0.05] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-red-200 dark:group-hover:border-red-800/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{challenge.title}</h3>
                        <p className="text-slate-600 dark:text-white/60 leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
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
              核心产品
            </motion.h2>
            
            <div className="space-y-16">
              {coreProducts.map((product, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={index === 0 ? 
                    `flex flex-col lg:flex-row items-center gap-12` : 
                    `flex flex-col gap-8`
                  }
                >
                  {index === 0 ? (
                    <>
                      {/* 综合素养评价系统 - 保持原有左右布局 */}
                      <div className="w-full lg:w-2/3">
                        <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-10 rounded-3xl border border-gray-200/50 dark:border-white/10 h-full shadow-xl">
                          <div className="mb-6">
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1 rounded-full mb-4">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              <span className="text-sm font-medium text-blue-500">核心产品</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                              {product.title}
                            </h3>
                          </div>
                          
                          <div className="space-y-6">
                            <p className="text-xl text-slate-700 dark:text-white/80 leading-relaxed font-medium">"{product.slogan}"</p>
                            <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">{product.problem}</p>
                            
                            <div className="grid grid-cols-1 gap-4 mt-8">
                              {product.features.map((feature, advIndex) => (
                                <div key={advIndex} className="flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-gray-100 dark:border-white/5 hover:shadow-md transition-all duration-300">
                                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">{feature.title}</h4>
                                    <p className="text-base text-slate-600 dark:text-white/60 leading-relaxed">{feature.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full lg:w-1/3">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 p-8 rounded-3xl border border-blue-200/50 dark:border-blue-800/30 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                            {/* 装饰性背景元素 */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
                            
                            <div className="relative z-10">
                              <img
                                src="/comprehensive-assessment-new.jpg"
                                alt={product.title}
                                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
                              />
                            </div>
                          </div>
                          
                          {/* 特色标签 */}
                          <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            🔥 热门产品
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* 智能题库系统 - 新的上下布局，图片优先展示 */}
                      <div className="w-full">
                        <div className="text-center mb-8">
                          <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-500/20 px-4 py-2 rounded-full mb-6">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-sm font-medium text-blue-500">核心产品</span>
                          </div>
                          <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                            {product.title}
                          </h3>
                          <p className="text-xl text-slate-700 dark:text-white/80 leading-relaxed font-medium max-w-3xl mx-auto">"{product.slogan}"</p>
                        </div>
                      </div>
                      
                      {/* 大图片展示区域 */}
                      <div className="w-full">
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500">
                          <img
                            src="/smart-question-bank-simple.svg"
                            alt={product.title}
                            className="w-full h-auto rounded-2xl"
                          />
                        </div>
                      </div>

                      {/* 产品描述和特点 - 放在图片下方 */}
                      <div className="w-full">
                        <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-10 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-xl">
                          <div className="space-y-8">
                            <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed text-center max-w-4xl mx-auto">{product.problem}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {product.features.map((feature, advIndex) => (
                                <div key={advIndex} className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-gray-100 dark:border-white/5 hover:shadow-md transition-all duration-300">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold mb-2 text-slate-900 dark:text-white text-lg">{feature.title}</h4>
                                    <p className="text-base text-slate-600 dark:text-white/60 leading-relaxed">{feature.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
                <span className="text-slate-900 dark:text-white">为教育创造的</span>
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
                        <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{value.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-white/70 mb-6 leading-relaxed">{value.description}</p>
                        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/5 rounded-2xl border border-green-100 dark:border-green-800/30">
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">核心效益</h4>
                          </div>
                          <p className="text-base text-green-600 dark:text-green-400 font-semibold leading-relaxed">{value.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              custom={6}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-white/80 to-green-50/30 dark:from-white/[0.05] dark:to-green-900/5 backdrop-blur-lg p-12 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white">多维度价值体现</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {userDimensions.map((dimension, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">{dimension.role}</h4>
                    <p className="text-slate-600 dark:text-white/60 leading-relaxed">{dimension.benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20">
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
              成功案例
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/60 dark:bg-white/[0.05] backdrop-blur-sm border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg">
                          {caseItem.tag}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mb-2">
                        {caseItem.title}
                      </CardTitle>
                      <CardDescription className="text-xl text-slate-600 dark:text-white/70 font-medium">
                        {caseItem.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      <p className="text-lg text-slate-700 dark:text-white/80 leading-relaxed font-medium">
                        {caseItem.description}
                      </p>
                      
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/5 p-8 rounded-2xl border border-green-100 dark:border-green-800/30">
                        <div className="flex items-center gap-2 mb-6">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white">核心成果</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {caseItem.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-4 p-4 bg-white dark:bg-white/[0.05] rounded-xl border border-green-100 dark:border-green-800/20 hover:shadow-md transition-all duration-300">
                              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-base font-semibold text-slate-700 dark:text-white/90">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Advantages Section */}
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
              技术优势
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.03] p-6 rounded-xl border border-gray-200 dark:border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">{advantage.title}</h3>
                  <p className="text-slate-600 dark:text-white/60">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 dark:from-blue-900/10 dark:via-[#030314] dark:to-indigo-900/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
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
              准备革新您的教育管理方式？
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
                className="leto-gradient-bg hover:opacity-90 text-white px-8 py-6 text-lg shadow-2xl shadow-blue-500/30"
              >
                <Link href="/contact?from=/solutions/education" className="flex items-center justify-center">
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