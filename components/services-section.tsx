"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BookOpen, Cpu, GraduationCap, LineChart, School } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import { services } from "@/config/text"

export default function ServicesSection() {
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

  const serviceIcons = [
    <BookOpen className="h-6 w-6" key="book" />,
    <GraduationCap className="h-6 w-6" key="graduation" />,
    <Cpu className="h-6 w-6" key="cpu" />,
    <LineChart className="h-6 w-6" key="chart" />,
    <School className="h-6 w-6" key="school" />,
  ]

  const colors = [
    "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    "bg-violet-500/10 text-violet-400 border-violet-500/20",
  ]

  return (
    <section id="services" className="relative py-20 md:py-32 bg-white dark:bg-[#030314]">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

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
            {services.title}
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {services.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-white/[0.02] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl p-6 hover:shadow-md dark:hover:translate-y-[-5px] transition-all duration-300"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center p-3 rounded-lg mb-4",
                  "border",
                  colors[index % colors.length],
                )}
              >
                {serviceIcons[index % serviceIcons.length]}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
              <DescriptionText size="small">{service.description}</DescriptionText>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
