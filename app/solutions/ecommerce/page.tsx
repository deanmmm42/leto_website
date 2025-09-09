"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Bot, TrendingUp, FileText, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { DescriptionText } from "@/components/description-text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"

export default function EcommercePage() {
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

  const services = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AI欺诈检测",
      description: "智能风险控制，保障交易安全",
      details: "基于机器学习算法，实时监测异常行为，智能识别欺诈风险，为平台提供全方位的安全保障。"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI智能客服", 
      description: "24/7智能响应，提升服务效率",
      details: "智能对话系统，支持多轮对话和情感识别，显著提升客户服务质量，降低人力成本。"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "AI运营策略",
      description: "数据驱动决策，优化营销效果",
      details: "基于用户画像分析，提供个性化营销策略，优化用户转化路径，提升整体运营效果。"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "AI业务报告",
      description: "智能洞察分析，支持战略决策", 
      details: "自动生成业务分析报告，提供深度数据洞察，为管理层战略决策提供科学支撑。"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "AI数据保护",
      description: "多重安全防护，确保信息安全",
      details: "采用先进加密技术，建立完善的数据安全体系，确保客户信息和交易数据的绝对安全。"
    }
  ]

  const challenges = [
    "获客成本高：流量红利消失，拉新越来越难？",
    "用户不活跃：用户留存率低，如何提升生命周期价值？", 
    "营销欺诈多：\"羊毛党\"猖獗，营销预算大量流失？",
    "运营效率低：依赖人工处理，流程复杂，响应慢？"
  ]

  const coreProducts = [
    {
      title: "数字权益营销平台",
      description: "整合全品类虚拟商品（话费、油卡、会员卡等），打造一站式权益中心。",
      target: "为互联网平台提供拉新促活工具，为金融保险企业提供客户增值服务。",
      advantages: [
        "AI智能营销：基于LLM大模型的智能营销策略生成，精准匹配用户需求，提升营销转化效果",
        "海量数据支撑：10亿级私有训练数据，覆盖全行业营销场景和完整的用户画像分析", 
        "全品类商品覆盖：50+虚拟商品类型，话费、油卡、Q币等完整数字权益生态体系",
        "成熟运营体系：100+成功案例实践验证，从产品供应到运营服务的全链条专业支持"
      ]
    },
    {
      title: "AI风控系统",
      description: "基于10亿级私有数据和深度学习模型，实时识别和拦截欺诈行为。",
      target: "保障营销资金安全，提升ROI。",
      advantages: [
        "实时风险监控：7×24小时不间断智能监测，毫秒级风险识别和即时预警响应",
        "多维度深度分析：整合用户行为、交易模式、设备指纹等多维度数据进行综合风险评估",
        "自学习持续优化：AI算法持续学习最新欺诈模式，风控识别准确率不断自我提升", 
        "全面合规保障：严格符合金融监管标准要求，确保平台业务合规安全运营"
      ]
    }
  ]

  const cases = [
    {
      title: "抖音极速版",
      subtitle: "金币补贴拉新促活解决方案",
      tag: "头部案例",
      description: "为互联网头部平台提供完整的用户激励体系解决方案，通过智能化金币补贴机制实现精准用户拉新和深度促活，有效提升平台用户规模和活跃度表现",
      metrics: [
        "日活跃用户：5000万+",
        "用户增长：显著提升",
        "留存优化：长期活跃", 
        "营销ROI：300%+"
      ]
    },
    {
      title: "平安好车主",
      subtitle: "车主权益服务平台",
      tag: "权益服务",
      description: "为大型保险集团打造专业车主权益服务平台，提供代驾、保养、洗车、道路救援等全方位车主专享服务体系",
      metrics: [
        "服务覆盖：全国300+城市",
        "权益种类：8大类200+项生活消费权益",
        "用户满意度：98%+",
        "续保转化率：显著改善"
      ]
    }
  ]

  const techAdvantages = [
    {
      title: "10亿级私有数据",
      description: "基于多年大客户服务经验积累，沉淀超大规模行业数据资源，为客户提供深度定制化的算法模型和数据分析支持。"
    },
    {
      title: "开源LLM模型", 
      description: "采用业界领先的开源LLM大语言模型，结合深度学习算法持续优化，实现行业特定场景的快速商业化落地应用。"
    },
    {
      title: "5大AI应用",
      description: "AI欺诈检测、AI智能客服、AI运营策略、AI业务报告、AI数据保护等五大成熟AI核心应用产品。"
    },
    {
      title: "行业领先地位",
      description: "成功服务抖音、平安、美团等50+知名头部客户，在数字权益智能营销领域确立行业领导者地位。"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#030314]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.03] via-transparent to-letoCoolEnd/[0.03]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange to-letoWarmStart">
                数字权益智能营销
              </span>
              <br />
              驱动GMV百亿级增长
            </motion.h1>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              <DescriptionText size="large" className="text-xl mb-8 max-w-3xl mx-auto">
                基于私有化AI大模型，为头部企业提供安全、高效的拉新促活与用户留存方案
              </DescriptionText>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientHoverButton href="/contact?from=/solutions/ecommerce" size="lg">
                立即咨询
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
              解决方案挑战
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/[0.03] p-6 rounded-xl border border-gray-200 dark:border-white/10"
                >
                  <p className="text-slate-700 dark:text-white/80">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              我们的服务
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-lg flex items-center justify-center text-white mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-white/60">{service.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {services.slice(3).map((service, index) => (
                <motion.div
                  key={index + 3}
                  custom={index + 4}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-lg flex items-center justify-center text-white mb-4">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-white/60">{service.details}</p>
                    </CardContent>
                  </Card>
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
            
            <div className="space-y-12">
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
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-slate-700 dark:text-white/80 mb-4">{product.description}</p>
                  <p className="text-slate-600 dark:text-white/60 mb-6">{product.target}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.advantages.map((advantage, advIndex) => (
                      <div key={advIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-letoOrange rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-600 dark:text-white/60">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
                        <span className="px-2 py-1 bg-letoOrange/10 text-letoOrange text-xs rounded-full">
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
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
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
              准备开启您的数字化转型之旅？
            </motion.h2>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GradientHoverButton href="/contact?from=/solutions/ecommerce" size="lg">
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