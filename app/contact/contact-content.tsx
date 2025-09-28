"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { contact, common } from "@/config/text"
import { LetoBrandText } from "@/components/leto-brand-text"
import { DescriptionText } from "@/components/description-text"
import { ContactFormCard } from "@/components/contact/contact-form-card"
import { ContactInfoCard } from "@/components/contact/contact-info-card"

function SmartBackButton() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleBack = () => {
    // 尝试从URL参数获取来源页面
    const from = searchParams.get('from')
    if (from) {
      router.push(from)
    } else {
      // 如果没有来源参数，使用browser的history.back()
      if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back()
      } else {
        // 如果没有历史记录，默认返回首页
        router.push('/')
      }
    }
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {common.backToHome}
    </button>
  )
}

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#030314]">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.03] via-transparent to-letoCoolEnd/[0.03]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8">
            <Suspense fallback={
              <Link
                href="/"
                className="inline-flex items-center text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {common.backToHome}
              </Link>
            }>
              <SmartBackButton />
            </Suspense>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
              {contact.title}
            </span>
          </h1>

          <DescriptionText
            size="medium"
            className="text-lg text-slate-600 dark:text-white/60 text-center max-w-3xl mx-auto mb-16"
          >
            {contact.description.replace(/Leto AI/g, () => "")}
            <LetoBrandText />
            {contact.description.split("Leto AI")[1] || ""}
          </DescriptionText>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactFormCard />
            <ContactInfoCard />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
