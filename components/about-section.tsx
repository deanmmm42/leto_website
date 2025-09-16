"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ShoppingCart, GraduationCap, Globe, ArrowRight } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import Link from "next/link"
import { solutions } from "@/config/text"

export default function AboutSection() {
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

  const solutionIcons = [
    <ShoppingCart className="h-12 w-12" key="ecommerce" />,
    <GraduationCap className="h-12 w-12" key="education" />,
    <Globe className="h-12 w-12" key="global" />,
  ]

  const gradients = [
    "from-orange-500 to-red-400",
    "from-blue-500 to-indigo-400", 
    "from-green-500 to-teal-400",
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-letoOrange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

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
            {solutions.title}
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {solutions.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-letoOrange/10 dark:hover:bg-white/[0.08] transition-all duration-500 group hover:-translate-y-2"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center p-5 rounded-3xl mb-6 shadow-lg",
                  "bg-gradient-to-r text-white group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500",
                  gradients[index],
                )}
              >
                {solutionIcons[index]}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">{card.title}</h3>
              <DescriptionText size="small" className="mb-6">{card.description}</DescriptionText>
              
              <Link href={card.href} className="inline-flex items-center gap-2 text-letoOrange dark:text-letoTurquoise font-medium hover:gap-3 transition-all duration-300 group/btn">
                {card.buttonText}
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
