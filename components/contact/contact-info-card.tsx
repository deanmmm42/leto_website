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
        ease: [0.25, 0.4, 0.25, 1],
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
        <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">{contact.info.title}</h3>

        <div className="space-y-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">{contact.info.address.title}</h4>
              <p className="text-slate-600 dark:text-white/60">{contact.info.address.content}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">{contact.info.email.title}</h4>
              <p className="text-slate-600 dark:text-white/60">{contact.info.email.content}</p>
            </div>
          </div>

          <div className="flex items-start hidden">
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">{contact.info.phone.title}</h4>
              <p className="text-slate-600 dark:text-white/60">{contact.info.phone.content}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-4">{contact.info.workingHours.title}</h4>
          <div className="space-y-2 text-slate-600 dark:text-white/60">
            <p>{contact.info.workingHours.weekdays}</p>
            <p>{contact.info.workingHours.saturday}</p>
            {showSunday && <p>{contact.info.workingHours.sunday}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
