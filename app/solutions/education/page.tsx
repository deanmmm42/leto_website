"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users, TrendingUp, BarChart3, Shield, Brain } from "lucide-react"
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-indigo-500/[0.03]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                赋能智慧教育
              </span>
              <br />
              重塑未来学习生态
            </motion.h1>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              <DescriptionText size="large" className="text-xl mb-8 max-w-3xl mx-auto">
                我们提供两大核心系统——综合素养评价系统与个性化辅导系统，为教育的数据化、个性化转型提供强大引擎。
              </DescriptionText>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientHoverButton href="/contact?from=/solutions/education" size="lg">
                免费试用
              </GradientHoverButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="#cases">
                  查看案例 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#020210]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              教育领域的双重挑战
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.03] p-8 rounded-xl border border-gray-200 dark:border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{challenge.title}</h3>
                  <p className="text-slate-600 dark:text-white/60">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
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
                  className="bg-white dark:bg-white/[0.03] p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">"{product.slogan}"</p>
                    <p className="text-slate-600 dark:text-white/60 max-w-4xl mx-auto">{product.problem}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                          {feature.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-white/60">{feature.description}</p>
                      </div>
                    ))}
                  </div>
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
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 mb-4">{value.description}</p>
                  <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{value.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              custom={5}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 bg-white dark:bg-white/[0.03] p-6 rounded-xl border border-gray-200 dark:border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">用户维度价值</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {userDimensions.map((dimension, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">{dimension.role}</h4>
                    <p className="text-sm text-slate-600 dark:text-white/60">{dimension.benefit}</p>
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
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                          {caseItem.tag}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                      <CardDescription>{caseItem.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-white/60">{caseItem.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {caseItem.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-sm">
                            <span className="text-slate-500 dark:text-white/50">• {metric}</span>
                          </div>
                        ))}
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
              准备革新您的教育管理方式？
            </motion.h2>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GradientHoverButton href="/contact?from=/solutions/education" size="lg">
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