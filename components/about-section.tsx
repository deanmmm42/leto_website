"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Brain, Lightbulb, Users, Zap } from "lucide-react"
import { LetoBrandText } from "./leto-brand-text"
import { DescriptionText } from "@/components/description-text"
import { about } from "@/config/text"

export default function AboutSection() {
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

  const featureIcons = [
    <Brain className="h-10 w-10" key="brain" />,
    <Lightbulb className="h-10 w-10" key="lightbulb" />,
    <Users className="h-10 w-10" key="users" />,
    <Zap className="h-10 w-10" key="zap" />,
  ]

  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-indigo-500 to-blue-400",
    "from-violet-500 to-indigo-400",
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#030314] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

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
            {about.title} <LetoBrandText />
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {about.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {about.features.map((item, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl p-6 hover:shadow-md dark:hover:bg-white/[0.05] transition-all duration-300"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center p-3 rounded-lg mb-4",
                  "bg-gradient-to-r text-white",
                  gradients[index % gradients.length],
                )}
              >
                {featureIcons[index % featureIcons.length]}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
              <DescriptionText size="small">{item.description}</DescriptionText>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
