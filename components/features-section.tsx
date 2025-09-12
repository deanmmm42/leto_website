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

  const missionPoints = mission.points.map((point, index) => ({
    icon: [
      <Target className="h-6 w-6" key="target" />,
      <Globe className="h-6 w-6" key="globe" />,
      <Zap className="h-6 w-6" key="zap" />,
      <Users className="h-6 w-6" key="users" />
    ][index],
    ...point
  }))

  return (
    <section id="features" className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50/40 via-white to-yellow-50/30 dark:from-[#020210] dark:to-[#030314] overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-letoOrange/15 to-letoWarmStart/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-letoCoolEnd/15 to-letoTurquoise/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-bounce" />
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
                <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-3xl p-10 h-full hover:shadow-2xl hover:shadow-letoOrange/15 dark:hover:bg-white/[0.08] transition-all duration-700 hover:-translate-y-4 hover:scale-105">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-letoOrange to-letoWarmStart rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
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
              <span>{mission.cta}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
