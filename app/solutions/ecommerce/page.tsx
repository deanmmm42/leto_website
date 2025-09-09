"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Bot, TrendingUp, FileText, Lock, CheckCircle, Star, Users, TrendingDown } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.08] via-transparent to-letoCoolEnd/[0.08]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-letoOrange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-letoOrange/20 mb-6">
                <div className="w-2 h-2 bg-letoOrange rounded-full animate-pulse" />
                <span className="text-sm font-medium text-letoOrange">电商行业AI解决方案</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoWarmStart to-letoPink">
                  数字权益智能营销
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">驱动</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoCoolEnd to-letoTurquoise">GMV百亿级</span>
                <span className="text-slate-900 dark:text-white">增长</span>
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
                基于私有化AI大模型，为头部企业提供安全、高效的拉新促活与用户留存方案
              </DescriptionText>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">300%+ ROI</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">营销投资回报率</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-letoCoolEnd to-letoTurquoise rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">5000万+</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">日活跃用户</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-letoPink to-letoWarmStart rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">99.7%</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">风控准确率</div>
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
              <GradientHoverButton href="/contact?from=/solutions/ecommerce" size="lg" className="shadow-lg shadow-letoOrange/25">
                免费咨询方案
              </GradientHoverButton>
              <Button variant="outline" size="lg" asChild className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white dark:hover:bg-white/20">
                <Link href="#cases" className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  查看成功案例
                </Link>
              </Button>
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
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">电商行业痛点</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="text-slate-900 dark:text-white">电商营销面临的</span>
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
                        <p className="text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">{challenge}</p>
                      </div>
                    </div>
                  </div>
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
            
            <div className="space-y-16">
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
                        src={index === 0 ? "/images/digital-marketing-clean.svg" : "/images/ai-risk-control-clean.svg"}
                        alt={product.title}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Product Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-white to-gray-50/30 dark:from-white/[0.05] dark:to-white/[0.02] p-10 rounded-3xl border border-gray-200/50 dark:border-white/10 h-full shadow-xl">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-letoOrange/10 dark:bg-letoOrange/20 px-3 py-1 rounded-full mb-4">
                          <div className="w-2 h-2 bg-letoOrange rounded-full" />
                          <span className="text-sm font-medium text-letoOrange">核心产品</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoWarmStart to-letoPink">
                          {product.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-xl text-slate-700 dark:text-white/80 leading-relaxed font-medium">{product.description}</p>
                        <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">{product.target}</p>
                        
                        <div className="grid grid-cols-1 gap-4 mt-8">
                          {product.advantages.map((advantage, advIndex) => (
                            <div key={advIndex} className="flex items-start gap-4 p-5 bg-gradient-to-r from-gray-50 to-white dark:from-white/[0.03] dark:to-white/[0.01] rounded-xl border border-gray-100 dark:border-white/5 hover:shadow-md transition-all duration-300">
                              <div className="w-6 h-6 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <p className="text-base text-slate-700 dark:text-white/80 leading-relaxed font-medium">{advantage}</p>
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
            
            <div className="space-y-16">
              {cases.map((caseItem, index) => (
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
                  {/* Case Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-white/[0.05] dark:to-white/[0.02] p-8 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        src={index === 0 ? "/images/douyin-speed-clean.svg" : "/images/pingan-car-clean.svg"}
                        alt={caseItem.title}
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Case Content */}
                  <div className="w-full lg:w-1/2">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Advantages Section */}
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
                <span className="text-slate-900 dark:text-white">领先的</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">技术优势</span>
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {techAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-white/[0.05] backdrop-blur-sm p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-purple-200 dark:group-hover:border-purple-800/50">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {advantage.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-white/70 leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-letoOrange/5 via-white to-letoCoolEnd/5 dark:from-letoOrange/10 dark:via-[#030314] dark:to-letoCoolEnd/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-letoOrange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-letoCoolEnd/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-12 leading-tight text-slate-900 dark:text-slate-900"
            >
              准备开启您的数字化转型之旅？
            </motion.h2>
            
            <motion.div
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <GradientHoverButton href="/contact?from=/solutions/ecommerce" size="lg" className="shadow-2xl shadow-letoOrange/30">
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