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

export default function EducationContent() {
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
          title: "数据可视化",
          description: "雷达图、成长曲线等多种图表形式直观展现。"
        },
        {
          icon: <Shield className="h-5 w-5" />,
          title: "隐私保护",
          description: "严格遵循数据安全法规，保护学生个人信息。"
        },
        {
          icon: <Brain className="h-5 w-5" />,
          title: "AI智能分析",
          description: "基于大数据AI算法，挖掘学生潜力与发展方向。"
        }
      ],
      benefits: [
        "评价效率提升300%+",
        "教师满意度95%+",
        "家长认可度90%+",
        "学生成长可视化"
      ]
    },
    {
      title: "个性化教辅系统",
      slogan: "AI驱动精准教学，让每个孩子都能闪闪发光",
      problem: "针对\"千人一面\"的传统教学模式，打造个性化学习路径，真正实现因材施教。",
      features: [
        {
          icon: <BookOpen className="h-5 w-5" />,
          title: "智能题库",
          description: "海量题库资源，AI自动匹配学生水平。"
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          title: "学习轨迹追踪",
          description: "实时记录学习过程，分析知识点掌握情况。"
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "个性化推荐",
          description: "基于学习数据，推荐最适合的学习内容。"
        },
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: "学情报告",
          description: "生成详细学情分析，指导后续教学安排。"
        }
      ],
      benefits: [
        "学习效果提升50%+",
        "作业时间减少30%",
        "知识点掌握率85%+",
        "学习兴趣显著提升"
      ]
    }
  ]

  const successCases = [
    {
      title: "某重点中学综合素养评价系统应用",
      school: "成都某重点中学",
      students: "2000+名学生",
      duration: "2年实施周期",
      challenge: "传统评价方式单一，无法全面反映学生综合素质，家长和学校对评价结果缺乏信任。",
      solution: "部署LetoAI综合素养评价系统，建立涵盖德智体美劳五个维度的评价体系，通过AI算法分析学生行为数据。",
      results: [
        "评价维度从单一分数扩展至25个指标",
        "教师评价工作效率提升300%",
        "家长对评价结果满意度达95%",
        "学生综合素质发展更加均衡"
      ],
      feedback: "系统帮助我们真正实现了'五育并举'，学生的全面发展有了科学的衡量标准。"
    },
    {
      title: "某教育机构个性化教辅系统案例",
      school: "某知名教育培训机构",
      students: "5000+名学员",
      duration: "18个月部署",
      challenge: "大班教学难以兼顾每个学生的个体差异，学习效果参差不齐，续班率逐年下降。",
      solution: "引入LetoAI个性化教辅系统，为每位学员建立专属学习档案，实现千人千面的个性化教学。",
      results: [
        "学员平均成绩提升50%+",
        "学习时间效率提升40%",
        "续班率提升至90%+",
        "家长满意度达到98%"
      ],
      feedback: "孩子的学习积极性明显提高，以前不爱学习的科目现在也很感兴趣。"
    }
  ]

  const techAdvantages = [
    {
      title: "领先AI算法",
      description: "深度学习模型精准分析学习行为",
      details: "采用先进的深度学习算法，能够精准识别学生的学习模式、认知特点和潜在能力，为个性化教学提供科学依据。"
    },
    {
      title: "海量教育数据",
      description: "10亿+教育数据训练优化",
      details: "基于海量真实教育场景数据训练，涵盖不同年龄段、学科和学习风格，确保AI分析的准确性和适用性。"
    },
    {
      title: "实时动态调整",
      description: "学习路径实时优化调整",
      details: "系统能够实时监测学生学习状态，动态调整学习内容和难度，确保每个学生都能在最适合的节奏下学习。"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-purple-500/[0.08]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">教育行业AI解决方案</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                  智慧教育
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">AI评估系统</span>
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
                AI驱动的学生综合素养评价与个性化辅导解决方案，助力教育机构实现科学评估和因材施教
              </DescriptionText>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">300%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">评价效率提升</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">95%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">教师满意度</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">50%+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">学习效果提升</div>
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
              <GradientHoverButton href="/contact?from=/solutions/education" size="lg" className="shadow-lg shadow-blue-500/25">
                免费咨询方案
              </GradientHoverButton>
              <Link href="#products" className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-slate-700 dark:text-white font-medium hover:bg-white dark:hover:bg-white/20 hover:shadow-lg hover:gap-3 transition-all duration-300 group">
                <Star className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                查看产品演示
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-32 bg-white/50 dark:bg-[#020210]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                custom={0}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-8"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">教育行业面临的核心挑战</span>
              </motion.h2>
            </div>

            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.05] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{challenge.title}</h3>
                      <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
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
              核心产品与解决方案
            </motion.h2>

            <div className="space-y-24">
              {coreProducts.map((product, index) => (
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
                        src={index === 0 ? "/comprehensive-assessment-new.jpg" : "/smart-question-bank-simple.svg"}
                        alt={product.title}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-10 rounded-3xl border border-gray-200/50 dark:border-white/10 h-full shadow-xl">
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1 rounded-full mb-4">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">核心产品</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                          {product.title}
                        </h3>
                        <p className="text-xl font-semibold text-slate-700 dark:text-white/80 mb-6">{product.slogan}</p>
                        <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed mb-8">{product.problem}</p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-gray-100 dark:border-white/5">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{feature.title}</h4>
                              <p className="text-xs text-slate-600 dark:text-white/60">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Benefits */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/5 p-6 rounded-2xl border border-green-100 dark:border-green-800/30">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                          核心成果
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {product.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm font-medium text-slate-700 dark:text-white/90">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
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
              成功案例展示
            </motion.h2>

            <div className="space-y-16">
              {successCases.map((caseItem, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.05] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{caseItem.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-white/60">
                      <span className="bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">{caseItem.school}</span>
                      <span className="bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">{caseItem.students}</span>
                      <span className="bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">{caseItem.duration}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">挑战</h4>
                      <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed">{caseItem.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">解决方案</h4>
                      <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed">{caseItem.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">成果</h4>
                      <ul className="space-y-1">
                        {caseItem.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-slate-600 dark:text-white/70 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                    <blockquote className="text-slate-700 dark:text-white/80 italic">
                      "{caseItem.feedback}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Advantages Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-[#030314] dark:via-[#0a0420] dark:to-[#041420]">
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">技术优势</span>
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
                  <div className="bg-white/60 dark:bg-white/[0.05] backdrop-blur-sm p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-blue-200 dark:group-hover:border-blue-800/50 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-500/5 via-white to-purple-500/5 dark:from-blue-500/10 dark:via-[#030314] dark:to-purple-500/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
              准备开启智慧教育新时代？
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-8 py-6 text-lg shadow-2xl shadow-blue-500/30"
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