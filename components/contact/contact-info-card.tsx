"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { contact } from "@/config/text"

interface ContactInfoCardProps {
  customIndex?: number
  className?: string
  showSunday?: boolean
}

export function ContactInfoCard({ customIndex = 3, className = "", showSunday = true }: ContactInfoCardProps) {
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
    <motion.div
      custom={customIndex}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      <div className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl p-8 h-full shadow-sm">
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{contact.info.address.title}</h4>
            <p className="text-slate-600 dark:text-white/60">{contact.info.address.content}</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{contact.info.email.title}</h4>
            <p className="text-slate-600 dark:text-white/60">{contact.info.email.content}</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">{contact.info.workingHours.title}</h4>
            <div className="space-y-1 text-slate-600 dark:text-white/60">
              <p>{contact.info.workingHours.weekdays}</p>
              <p>{contact.info.workingHours.saturday}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
