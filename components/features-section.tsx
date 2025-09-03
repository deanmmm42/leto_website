"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import { features } from "@/config/text"

export default function FeaturesSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15 * i,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section id="features" className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#030314]">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            custom={0}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {features.title}
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {features.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.items.map((feature, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                <DescriptionText size="small">{feature.description}</DescriptionText>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
