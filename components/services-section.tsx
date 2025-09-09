"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Building, DollarSign, Award, Shield } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import { achievements } from "@/config/text"

export default function ServicesSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.15 * i,
        ease: "easeOut" as const,
      },
    }),
  }

  const achievementIcons = [
    <Building className="h-8 w-8" key="building" />,
    <DollarSign className="h-8 w-8" key="dollar" />,
    <Award className="h-8 w-8" key="award" />,
    <Shield className="h-8 w-8" key="shield" />,
  ]

  const gradients = [
    "from-orange-500 to-red-400",
    "from-green-500 to-emerald-400", 
    "from-purple-500 to-indigo-400",
    "from-blue-500 to-cyan-400",
  ]

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#020210]">
      <div className="absolute inset-0 bg-gradient-to-tr from-letoWarmStart/[0.02] via-transparent to-letoCoolEnd/[0.02]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            custom={0}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {achievements.title}
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {achievements.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.data.map((item, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl p-8 hover:shadow-lg dark:hover:bg-white/[0.05] transition-all duration-300 text-center group"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center p-4 rounded-2xl mb-6 mx-auto",
                  "bg-gradient-to-r text-white group-hover:scale-110 transition-transform duration-300",
                  gradients[index],
                )}
              >
                {achievementIcons[index]}
              </div>
              
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
                {item.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
              <DescriptionText size="small">{item.description}</DescriptionText>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
