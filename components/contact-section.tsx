"use client"

import { motion } from "framer-motion"
import { LetoBrandText } from "./leto-brand-text"
import { DescriptionText } from "@/components/description-text"
import { contact } from "@/config/text"
import { ContactFormCard } from "./contact/contact-form-card"
import { ContactInfoCard } from "./contact/contact-info-card"

export default function ContactSection() {
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

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#030314]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />

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
            {contact.title}
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <DescriptionText size="medium" className="text-lg text-slate-600 dark:text-white/60 leading-relaxed">
              {contact.description}
            </DescriptionText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactFormCard />
          <ContactInfoCard showSunday={false} />
        </div>
      </div>
    </section>
  )
}
