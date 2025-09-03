"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"
import { LetoBrandText } from "@/components/leto-brand-text"
import { DescriptionText } from "@/components/description-text"
import { explore, common } from "@/config/text"

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
        ease: [0.23, 0.86, 0.39, 0.96],
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

export default function ExplorePage() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.25, 0.4, 0.25, 1],
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
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {common.backToHome}
            </Link>
          </div>

          <motion.h1
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
              {explore.title.prefix}
            </span>
            <LetoBrandText className={cn(pacifico.className, "ml-2 text-4xl md:text-5xl")} />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80 ml-2">
              {explore.title.suffix}
            </span>
          </motion.h1>

          <motion.div variants={fadeInUpVariants} initial="hidden" animate="visible" custom={1}>
            <DescriptionText
              size="medium"
              className="text-lg text-slate-600 dark:text-white/60 text-center max-w-3xl mx-auto mb-16"
            >
              {explore.description}
            </DescriptionText>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {explore.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                custom={index + 2}
                className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl overflow-hidden hover:shadow-md dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="h-[300px] relative">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                  <DescriptionText size="small">{feature.description}</DescriptionText>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUpVariants} initial="hidden" animate="visible" custom={6} className="text-center">
            <Button asChild className="leto-gradient-bg hover:opacity-90 text-white px-8 py-6 text-lg">
              <Link href="/contact">{common.cta.demo}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
