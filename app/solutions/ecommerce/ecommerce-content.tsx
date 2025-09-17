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
import { ecommerce } from "@/config/text"
import Breadcrumb from "@/components/breadcrumb"
import { getBreadcrumbItems } from "@/lib/breadcrumb-config"
import { usePathname } from "next/navigation"

export default function EcommerceContent() {
  const pathname = usePathname()
  const breadcrumbItems = getBreadcrumbItems(pathname)

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

  const getServiceIcon = (index: number) => {
    const icons = [
      <Shield className="h-6 w-6" />,
      <Bot className="h-6 w-6" />,
      <TrendingUp className="h-6 w-6" />,
      <FileText className="h-6 w-6" />,
      <Lock className="h-6 w-6" />
    ]
    return icons[index] || <Shield className="h-6 w-6" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-20 pb-2">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-32 overflow-hidden">
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
                <span className="text-sm font-medium text-letoOrange">{ecommerce.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoOrange via-letoWarmStart to-letoPink">
                  {ecommerce.hero.title1}
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-letoCoolEnd to-letoTurquoise">{ecommerce.hero.title2}</span>
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
                {ecommerce.hero.description}
              </DescriptionText>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{ecommerce.hero.metrics[0].number}</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">{ecommerce.hero.metrics[0].label}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-letoCoolEnd to-letoTurquoise rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{ecommerce.hero.metrics[1].number}</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">{ecommerce.hero.metrics[1].label}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-letoPink to-letoWarmStart rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{ecommerce.hero.metrics[2].number}</div>
                    <div className="text-sm text-slate-600 dark:text-white/60">{ecommerce.hero.metrics[2].label}</div>
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
                {ecommerce.hero.buttons.primary}
              </GradientHoverButton>
              <Link href="#cases" className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-slate-700 dark:text-white font-medium hover:bg-white dark:hover:bg-white/20 hover:shadow-lg hover:gap-3 transition-all duration-300 group">
                <Star className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                {ecommerce.hero.buttons.secondary}
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
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-600 dark:text-red-400">{ecommerce.challenges.subtitle}</span>
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">{ecommerce.challenges.title}</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ecommerce.challenges.items.map((challenge, index) => (
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
              {ecommerce.services.title}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecommerce.services.items.slice(0, 3).map((service, index) => (
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
                        {getServiceIcon(index)}
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
              {ecommerce.services.items.slice(3).map((service, index) => (
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
                        {getServiceIcon(index + 3)}
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
              {ecommerce.coreProducts.title}
            </motion.h2>

            <div className="space-y-16">
              {ecommerce.coreProducts.items.map((product, index) => (
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
                        alt={index === 0 ? "LetoAI数字权益营销平台界面展示 - 电商AI营销解决方案，包含营销自动化、用户画像分析和ROI优化功能" : "LetoAI智能风控系统界面 - 电商AI风险控制解决方案，实时监测交易风险和欺诈防护"}
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
              {ecommerce.cases.title}
            </motion.h2>

            <div className="space-y-16">
              {ecommerce.cases.items.map((caseItem, index) => (
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
                        src="/images/pingan-car-service-dashboard.svg"
                        alt="平安好车主数字权益营销案例展示 - LetoAI电商AI营销解决方案成功案例，展示用户增长和ROI提升效果"
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">{ecommerce.techAdvantages.title}</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ecommerce.techAdvantages.items.map((advantage, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/60 dark:bg-white/[0.05] backdrop-blur-sm p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-purple-200 dark:group-hover:border-purple-800/50 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-base text-slate-600 dark:text-white/70 leading-relaxed">{advantage.description}</p>
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
              className="text-4xl md:text-6xl font-bold mb-12 leading-tight text-slate-900 dark:text-white"
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
              <Button
                asChild
                className="leto-gradient-bg hover:opacity-90 text-white px-8 py-6 text-lg shadow-2xl shadow-letoOrange/30"
              >
                <Link href="/contact?from=/solutions/ecommerce" className="flex items-center justify-center">
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