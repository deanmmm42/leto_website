"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contact } from "@/config/text"

interface ContactFormCardProps {
  customIndex?: number
  className?: string
}

export function ContactFormCard({ customIndex = 2, className = "" }: ContactFormCardProps) {
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
      <div className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">{contact.form.submit}</h3>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                {contact.form.name.label}
              </label>
              <Input
                id="name"
                placeholder={contact.form.name.placeholder}
                className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                {contact.form.email.label}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={contact.form.email.placeholder}
                className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
              {contact.form.subject.label}
            </label>
            <Input
              id="subject"
              placeholder={contact.form.subject.placeholder}
              className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
              {contact.form.message.label}
            </label>
            <Textarea
              id="message"
              placeholder={contact.form.message.placeholder}
              rows={5}
              className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
            {contact.form.submit}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
