"use client"

import { ArrowLeft, FileText, Download, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"

// 白皮书数据
const whitepapers = [
  {
    id: "education-ai-transformation",
    title: "教育行业数字化转型实践指南",
    description: "基于四维一体转型框架，提供从战略规划到技术实施的完整路线图，涵盖成熟度评估、实施路径、案例分析。",
    category: "教育AI",
    pages: "30页",
    releaseDate: "2025年9月",
    status: "已发布",
    featured: true
  }
]

export default function WhitepapersContent() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-letoOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {common.backToHome}
                </Link>
              </Button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
                行业白皮书
              </span>
            </h1>

            <DescriptionText
              size="medium"
              className="text-lg text-slate-600 dark:text-white/60 text-center max-w-2xl mx-auto mb-8"
            >
              深度技术分析与行业趋势报告，为企业AI转型提供专业指导
            </DescriptionText>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "1", label: "专业报告" },
                { number: "2+", label: "合作机构" },
                { number: "7000+", label: "学生受益" },
                { number: "10亿+", label: "教育数据" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-letoOrange dark:text-letoTurquoise mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {whitepapers.map((whitepaper, index) => (
                <article
                  key={whitepaper.id}
                  className={`bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-letoOrange/10 dark:hover:bg-white/[0.08] transition-all duration-500 group hover:-translate-y-1 ${
                    whitepaper.featured ? 'ring-2 ring-letoOrange/20 dark:ring-letoTurquoise/20' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-letoOrange/10 dark:bg-letoTurquoise/10 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                      <FileText className="h-3 w-3" />
                      {whitepaper.category}
                    </span>
                    {whitepaper.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-letoOrange/20 to-letoCoolEnd/20 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                        重点推荐
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {whitepaper.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-letoOrange dark:group-hover:text-letoTurquoise transition-colors">
                    {whitepaper.title}
                  </h2>

                  <DescriptionText className="mb-6" size="small">
                    {whitepaper.description}
                  </DescriptionText>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-slate-600 dark:text-white/60">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{whitepaper.pages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{whitepaper.releaseDate}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-4">
                    {whitepaper.status === "已发布" ? (
                      <>
                        <Button asChild className="leto-gradient-bg hover:opacity-90 text-white">
                          <Link href={whitepaper.id === "education-ai-transformation" ? "/whitepapers/education-digital-transformation-guide" : "/#contact"} target="_blank" rel="noopener noreferrer">
                            立即阅读
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline">
                          <Clock className="h-4 w-4 mr-2" />
                          {whitepaper.status}
                        </Button>
                        <Button asChild variant="ghost" className="text-letoOrange dark:text-letoTurquoise">
                          <Link href="/#contact">
                            了解更多 →
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoTurquoise/10 dark:to-letoCoolEnd/10 rounded-2xl p-8 text-center border border-letoOrange/20 dark:border-letoTurquoise/20">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                获取定制化AI技术报告
              </h3>
              <DescriptionText className="mb-6" size="medium">
                基于您的业务需求，我们可以为您提供专门的AI技术分析和实施建议
              </DescriptionText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="leto-gradient-bg hover:opacity-90 text-white">
                  <Link href="/#contact">申请定制报告</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/solutions">查看解决方案</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}