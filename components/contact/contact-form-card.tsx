"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contact } from "@/config/text"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

interface ContactFormCardProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactFormCard({ className = "" }: ContactFormCardProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // 清除之前的状态消息
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setStatusMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 简单验证
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setStatusMessage('请填写所有必填字段')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage(result.message)
        // 清空表单
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.message || '提交失败，请稍后重试')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('网络错误，请检查连接后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">{contact.form.title}</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                {contact.form.name.label}
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={contact.form.name.placeholder}
                className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
                {contact.form.email.label}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={contact.form.email.placeholder}
                className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
              {contact.form.subject.label}
            </label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              placeholder={contact.form.subject.placeholder}
              className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-white/70 mb-2">
              {contact.form.message.label}
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder={contact.form.message.placeholder}
              rows={5}
              className="bg-gray-50 dark:bg-white/[0.03] border-gray-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
              disabled={isSubmitting}
            />
          </div>

          {/* 状态消息 */}
          {statusMessage && (
            <div className={`flex items-center gap-2 p-3 rounded-md ${
              submitStatus === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
            }`}>
              {submitStatus === 'success' ? (
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 flex-shrink-0" />
              )}
              <span className="text-sm">{statusMessage}</span>
            </div>
          )}

          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-letoOrange to-letoWarmStart hover:from-letoOrange/90 hover:to-letoWarmStart/90 text-white disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                发送中...
              </>
            ) : (
              contact.form.submit
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
