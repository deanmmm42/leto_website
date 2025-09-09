"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DescriptionText } from "@/components/description-text"
import { home, common } from "@/config/text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"

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
  lightGradient = "from-white/[0.15]", // 改为白色透明度
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
  // 检测当前主题
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // 初始检测
    setIsDark(document.documentElement.classList.contains("dark"))

    // 监听主题变化
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
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute z-20", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            isDark ? darkGradient : lightGradient,
            "backdrop-blur-[1px]",
            // 亮色主题保留边框，暗色主题去掉边框
            isDark ? "" : "border border-white/[0.3]",
            // 调整阴影效果
            isDark ? "shadow-[0_2px_12px_0_rgba(255,255,255,0.08)]" : "shadow-[0_4px_16px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            // 调整高光效果，使暗色主题下看起来像粉笔效果
            isDark
              ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_85%)]"
              : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_80%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carousels = home.hero.carousels
  
  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carousels.length)
    }, 5000) // 5秒切换一次
    
    return () => clearInterval(timer)
  }, [carousels.length])
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: "easeOut" as const,
      },
    }),
  }
  
  const currentCarousel = carousels[currentSlide]

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#030303]">
      {/* 背景渐变 - 降低 z-index 确保在几何形状下方 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-letoWarmStart/[0.03] via-transparent to-letoCoolEnd/[0.03] blur-3xl" />

      {/* 几何形状容器 - 增加 z-index 确保在背景上方 */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          lightGradient="from-letoWarmStart/[0.15]" // 增加透明度使颜色更纯净
          darkGradient="from-letoWarmStart/[0.12]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          lightGradient="from-letoPink/[0.15]" // 增加透明度使颜色更纯净
          darkGradient="from-letoPink/[0.12]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          lightGradient="from-letoCoolMid/[0.15]" // 增加透明度使颜色更纯净
          darkGradient="from-letoCoolMid/[0.12]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          lightGradient="from-letoWarmMid/[0.15]" // 增加透明度使颜色更纯净
          darkGradient="from-letoWarmMid/[0.12]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          lightGradient="from-letoCoolEnd/[0.15]" // 增加透明度使颜色更纯净
          darkGradient="from-letoCoolEnd/[0.12]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* 内容 - 增加 z-index 确保在几何形状上方 */}
      <div className="relative z-30 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            key={`badge-${currentSlide}`}
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/[0.7] dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="text-sm text-slate-700 dark:text-white/60 tracking-wide">{currentCarousel.badge}</span>
          </motion.div>

          <motion.div 
            key={`title-${currentSlide}`}
            custom={1} 
            variants={fadeUpVariants} 
            initial="hidden" 
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80 font-medium">
                {currentCarousel.title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-letoWarmStart via-letoPink to-letoCoolEnd dark:from-letoWarmStart dark:via-white/90 dark:to-letoCoolEnd font-bold",
                  pacifico.className,
                )}
                style={{ fontWeight: 700 }}
              >
                {currentCarousel.title2}
              </span>
            </h1>
          </motion.div>

          <motion.div 
            key={`desc-${currentSlide}`}
            custom={2} 
            variants={fadeUpVariants} 
            initial="hidden" 
            animate="visible"
          >
            <DescriptionText size="medium" className="mb-8 max-w-xl mx-auto px-4">
              {currentCarousel.description}
            </DescriptionText>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-40 border-2 border-transparent"
          >
            <GradientHoverButton href="/#about" size="lg">
              {common.cta.explore}
            </GradientHoverButton>
            <Button
              asChild
              variant="outline"
              className="border-letoWarmStart/30 text-letoWarmStart hover:text-letoWarmStart hover:bg-letoWarmStart/10 dark:border-letoCoolEnd/30 dark:text-letoCoolEnd dark:hover:text-letoCoolEnd dark:hover:bg-letoCoolEnd/10 px-8 py-6 text-lg"
            >
              <Link href="/contact">
                {common.cta.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          {/* 轮播指示器 */}
          <motion.div 
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-2 mt-8"
          >
            {carousels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentSlide === index 
                    ? "bg-letoOrange dark:bg-letoTurquoise" 
                    : "bg-slate-300 dark:bg-white/30 hover:bg-slate-400 dark:hover:bg-white/50"
                )}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* 渐变覆盖 - 降低 z-index 确保不会覆盖按钮 */}
      <div className="absolute inset-0 z-4 bg-gradient-to-t from-white dark:from-[#030303] via-transparent to-white/80 dark:to-[#030303]/80 pointer-events-none" />
    </section>
  )
}
