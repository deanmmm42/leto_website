"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Zap, Globe, Users, ArrowRight } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import { mission } from "@/config/text"

export default function FeaturesSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 * i,
        ease: "easeOut" as const,
      },
    }),
  }

  const missionPoints = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "AI技术重塑",
      description: "运用前沿AI技术，深度变革传统行业运作模式"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "多领域覆盖",
      description: "电商营销、教育评估、海外工具三大核心应用领域"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "智能化方案",
      description: "为各行各业提供定制化的AI智能解决方案"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "价值创造",
      description: "助力客户实现商业价值最大化，推动行业发展"
    }
  ]

  return (
    <section id="features" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-[#020210] dark:to-[#030314] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-letoOrange/10 to-letoWarmStart/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-letoCoolEnd/10 to-letoTurquoise/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <motion.div
              custom={0}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-letoOrange/10 to-letoWarmStart/10 dark:from-letoOrange/20 dark:to-letoWarmStart/20 rounded-full px-6 py-3 mb-8"
            >
              <Lightbulb className="h-5 w-5 text-letoOrange" />
              <span className="text-letoOrange dark:text-letoWarmStart font-medium">Our Mission</span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300"
            >
              {mission.title}
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <DescriptionText size="large" className="text-xl text-slate-600 dark:text-white/70 leading-relaxed">
                {mission.content}
              </DescriptionText>
            </motion.div>
          </div>

          {/* 使命要点网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                custom={index + 3}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 h-full hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                        {point.title}
                      </h3>
                      <p className="text-slate-600 dark:text-white/60 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 行动召唤 */}
          <motion.div
            custom={7}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 text-letoOrange dark:text-letoTurquoise font-medium hover:gap-4 transition-all duration-300 cursor-pointer group">
              <span>携手共创AI未来</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
