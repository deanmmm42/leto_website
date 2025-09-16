"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ShoppingCart, GraduationCap, Globe, ArrowRight, Target, Lightbulb, Zap, Shield } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { solutions } from "@/config/text"
import { Pacifico } from "next/font/google"
import { useEffect, useState } from "react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  lightGradient = "from-white/[0.15]",
  darkGradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  lightGradient?: string
  darkGradient?: string
}) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute z-20", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            isDark ? darkGradient : lightGradient,
            "backdrop-blur-[1px]",
            isDark ? "" : "border border-white/[0.3]",
            isDark ? "shadow-[0_2px_12px_0_rgba(255,255,255,0.08)]" : "shadow-[0_4px_16px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            isDark
              ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_85%)]"
              : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_80%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function SolutionsContent() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: "easeOut" as const,
      },
    }),
  }

  const solutionIcons = [
    <ShoppingCart className="h-12 w-12" key="ecommerce" />,
    <GraduationCap className="h-12 w-12" key="education" />,
    <Globe className="h-12 w-12" key="global" />,
  ]

  const gradients = [
    "from-orange-500 to-red-400",
    "from-blue-500 to-indigo-400", 
    "from-green-500 to-teal-400",
  ]

  const techAdvantages = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "10亿级私有数据",
      description: "基于多年大客户服务经验，沉淀超大规模行业数据资源"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "开源LLM模型",
      description: "采用业界领先的大语言模型，结合深度学习算法优化"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "5大AI应用",
      description: "AI欺诈检测、智能客服、运营策略、业务报告、数据保护"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "行业领先地位",
      description: "成功服务平安、美团等50+知名头部客户"
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section - 使用与首页一致的风格 */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#030303]">
        {/* 背景渐变 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-letoWarmStart/[0.03] via-transparent to-letoCoolEnd/[0.03] blur-3xl" />

        {/* 几何形状容器 */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            lightGradient="from-letoWarmStart/[0.15]"
            darkGradient="from-letoWarmStart/[0.12]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            lightGradient="from-letoPink/[0.15]"
            darkGradient="from-letoPink/[0.12]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            lightGradient="from-letoCoolMid/[0.15]"
            darkGradient="from-letoCoolMid/[0.12]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            lightGradient="from-letoWarmMid/[0.15]"
            darkGradient="from-letoWarmMid/[0.12]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            lightGradient="from-letoCoolEnd/[0.15]"
            darkGradient="from-letoCoolEnd/[0.12]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        {/* 内容 */}
        <div className="relative z-30 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/[0.7] dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] mb-8 md:mb-12"
            >
              <span className="text-sm text-slate-700 dark:text-white/60 tracking-wide">AI Solutions</span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80 font-medium">
                  专业AI技术
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-letoWarmStart via-letoPink to-letoCoolEnd dark:from-letoWarmStart dark:via-white/90 dark:to-letoCoolEnd font-bold",
                    pacifico.className,
                  )}
                  style={{ fontWeight: 700 }}
                >
                  解决方案
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <DescriptionText size="medium" className="mb-8 max-w-xl mx-auto px-4">
                洞察人工智能发展趋势，为企业提供前瞻性AI解决方案，引领数字化转型新浪潮，共创智能化商业未来
              </DescriptionText>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-40 border-2 border-transparent"
            >
              <GradientHoverButton href="#solutions-overview" size="lg">
                开始探索
              </GradientHoverButton>
              <Button
                asChild
                variant="outline"
                className="border-letoWarmStart/30 text-letoWarmStart hover:text-letoWarmStart hover:bg-letoWarmStart/10 dark:border-letoCoolEnd/30 dark:text-letoCoolEnd dark:hover:text-letoCoolEnd dark:hover:bg-letoCoolEnd/10 px-8 py-6 text-lg"
              >
                <Link href="/#contact">
                  了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* 渐变覆盖 */}
        <div className="absolute inset-0 z-4 bg-gradient-to-t from-white dark:from-[#030303] via-transparent to-white/80 dark:to-[#030303]/80 pointer-events-none" />
      </section>

      {/* Solutions Overview */}
      <section id="solutions-overview" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-letoOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              三大核心解决方案
            </h2>

            <motion.div
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
                深耕电商营销、教育评估、海外工具三大领域，为不同行业提供专业化AI技术解决方案
              </DescriptionText>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.cards.map((card, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-letoOrange/10 dark:hover:bg-white/[0.08] transition-all duration-500 group hover:-translate-y-2"
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center p-5 rounded-3xl mb-6 shadow-lg",
                    "bg-gradient-to-r text-white group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500",
                    gradients[index],
                  )}
                >
                  {solutionIcons[index]}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">{card.title}</h3>
                <DescriptionText size="small" className="mb-6">{card.description}</DescriptionText>
                
                <Link href={card.href} className="inline-flex items-center gap-2 text-letoOrange dark:text-letoTurquoise font-medium hover:gap-3 transition-all duration-300 group/btn">
                  {card.buttonText}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#020210] dark:via-[#030318] dark:to-[#041028]">
        <div className="absolute inset-0 bg-gradient-to-tr from-letoWarmStart/[0.08] via-transparent to-letoCoolEnd/[0.08]" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              核心技术优势
            </motion.h2>

            <motion.div
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
                基于深度学习和大数据技术，为各行业提供专业AI解决方案
              </DescriptionText>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-letoOrange/15 dark:hover:bg-white/[0.08] transition-all duration-700 hover:-translate-y-2 hover:scale-105">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                        {advantage.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                        {advantage.title}
                      </h3>
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-[#030314] dark:to-[#020210] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-letoOrange/10 via-transparent to-letoCoolEnd/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-letoOrange/20 to-letoCoolEnd/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              准备开启您的AI数字化转型之旅？
            </motion.h2>

            <motion.div
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <DescriptionText size="large" className="text-xl text-white/80 leading-relaxed mb-12">
                联系我们的专业团队，获取定制化AI解决方案，助力您的业务实现跨越式发展
              </DescriptionText>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                className="leto-gradient-bg hover:opacity-90 text-white px-8 py-6 text-lg"
              >
                <Link href="/#contact" className="flex items-center justify-center">
                  立即咨询 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}