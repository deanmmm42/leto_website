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
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#020210] dark:via-[#030318] dark:to-[#041028]">
      <div className="absolute inset-0 bg-gradient-to-tr from-letoWarmStart/[0.08] via-transparent to-letoCoolEnd/[0.08]" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
              className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-3xl p-10 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:bg-white/[0.08] transition-all duration-500 text-center group hover:-translate-y-3 hover:scale-105"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center p-6 rounded-3xl mb-8 mx-auto shadow-xl",
                  "bg-gradient-to-r text-white group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500",
                  gradients[index],
                )}
              >
                {achievementIcons[index]}
              </div>
              
              <div className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-white/80 group-hover:scale-110 transition-transform duration-300">
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
