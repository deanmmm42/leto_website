"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ShoppingCart, GraduationCap, Globe, ArrowRight } from "lucide-react"
import { DescriptionText } from "@/components/description-text"
import { Button } from "@/components/ui/button"
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
    <section id="about" className="relative py-20 md:py-32 bg-white dark:bg-[#030314] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.02] via-transparent to-letoCoolEnd/[0.02]" />

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
              className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl p-8 hover:shadow-lg dark:hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center p-4 rounded-2xl mb-6",
                  "bg-gradient-to-r text-white group-hover:scale-110 transition-transform duration-300",
                  gradients[index],
                )}
              >
                {solutionIcons[index]}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">{card.title}</h3>
              <DescriptionText size="small" className="mb-6">{card.description}</DescriptionText>
              
              <Button asChild variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                <Link href={card.href} className="flex items-center gap-2 text-letoOrange dark:text-letoTurquoise font-medium">
                  {card.buttonText}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
