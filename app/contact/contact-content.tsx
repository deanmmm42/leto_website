"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { contact, common } from "@/config/text"
import { LetoBrandText } from "@/components/leto-brand-text"
import { DescriptionText } from "@/components/description-text"
import { ContactFormCard } from "@/components/contact/contact-form-card"
import { ContactInfoCard } from "@/components/contact/contact-info-card"

function SmartBackButton() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleBack = () => {
    // 尝试从URL参数获取来源页面
    const from = searchParams.get('from')
    if (from) {
      router.push(from)
    } else {
      // 如果没有来源参数，使用browser的history.back()
      if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back()
      } else {
        // 如果没有历史记录，默认返回首页
        router.push('/')
      }
    }
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {common.backToHome}
    </button>
  )
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
}) {
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
        ease: "easeOut" as const,
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
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
            "dark:from-white/[0.12] from-white/[0.15]", // 调整暗色主题透明度
            "backdrop-blur-[1px]",
            // 亮色主题保留边框，暗色主题去掉边框
            "dark:border-0 border border-white/[0.3]",
            // 调整阴影效果
            "dark:shadow-[0_2px_12px_0_rgba(255,255,255,0.08)] shadow-[0_4px_16px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            // 调整高光效果，使暗色主题下看起来像粉笔效果
            "dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_85%)] after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_75%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ContactContent() {
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

  return (
    <main className="min-h-screen bg-white dark:bg-[#030314]">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.03] via-transparent to-letoCoolEnd/[0.03] blur-3xl" />

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8">
            <Suspense fallback={
              <Link
                href="/"
                className="inline-flex items-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {common.backToHome}
              </Link>
            }>
              <SmartBackButton />
            </Suspense>
          </div>

          <motion.h1
            custom={0}
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
              {contact.title}
            </span>
          </motion.h1>

          <motion.div
            custom={1}
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <DescriptionText
              size="medium"
              className="text-lg text-slate-600 dark:text-white/60 text-center max-w-3xl mx-auto mb-16"
            >
              {contact.description.replace(/Leto AI/g, () => "")}
              <LetoBrandText />
              {contact.description.split("Leto AI")[1] || ""}
            </DescriptionText>
          </motion.div>

          {/* 使用可复用的卡片组件 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactFormCard customIndex={2} />
            <ContactInfoCard customIndex={3} showSunday={false} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}