"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import { LetoBrandText } from "./leto-brand-text"
import { DescriptionText } from "@/components/description-text"
import { testimonials } from "@/config/text"

export default function TestimonialsSection() {
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

  const gradients = [
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-indigo-500/20 to-blue-500/20",
  ]

  return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-[#030314]">
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
            {testimonials.title}
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {testimonials.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={cn(
                "border rounded-xl p-6 backdrop-blur-sm transition-colors duration-300",
                "bg-white/80 border-gray-100 shadow-sm",
                "dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none",
              )}
            >
              <div className="flex mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400 dark:text-yellow-300 dark:fill-yellow-300"
                    />
                  ))}
              </div>
              <p className="text-slate-700 dark:text-white/70 mb-6 italic leading-relaxed">
                "{testimonial.content.replace(/Leto AI/g, () => "")}"<LetoBrandText />
                {testimonial.content.split("Leto AI")[1] || ""}
              </p>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white/90">{testimonial.name}</h4>
                <p className="text-slate-600 dark:text-white/50">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
