"use client"

import { ArrowLeft, MessageSquare, Book, Mail, ExternalLink, HelpCircle, FileText, Zap, Shield, Users, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"

// 帮助分类数据
const helpCategories = [
  {
    id: "solutions",
    title: "解决方案指南",
    description: "了解LetoAI三大核心业务领域的详细介绍和实施指南",
    icon: Book,
    articles: [
      { title: "电商AI营销解决方案", href: "/solutions/ecommerce", description: "智能推荐、转化优化、用户画像分析" },
      { title: "教育AI评估系统", href: "/solutions/education", description: "智能评测、学习分析、个性化推荐" },
      { title: "海外AI工具开发", href: "/solutions/global-tools", description: "全球化产品设计、本地化优化、市场分析" },
    ]
  },
  {
    id: "business",
    title: "商务合作",
    description: "了解合作模式、定价方案和服务流程",
    icon: Users,
    articles: [
      { title: "服务定价说明", href: "/#contact", description: "灵活的定价模式和服务套餐" },
      { title: "合作伙伴计划", href: "/#contact", description: "渠道合作和技术合作机会" },
      { title: "企业级服务", href: "/#contact", description: "专属客户经理和定制化解决方案" },
    ]
  },
  {
    id: "support",
    title: "客户支持",
    description: "常见问题解答、技术支持和售后服务",
    icon: MessageSquare,
    articles: [
      { title: "常见问题FAQ", href: "/#contact", description: "快速找到常见问题的解决方案" },
      { title: "技术支持流程", href: "/#contact", description: "获得专业技术团队的及时支持" },
      { title: "服务等级协议", href: "/#contact", description: "了解我们的服务承诺和保障" },
    ]
  }
]

// 常见问题数据
const faqItems = [
  {
    category: "服务相关",
    questions: [
      {
        question: "LetoAI主要提供哪些AI解决方案？",
        answer: "LetoAI专注于三大核心业务领域：电商行业的AI营销解决方案、教育行业的AI评估系统，以及面向全球市场的AI工具产品开发。我们为头部企业提供定制化的AI技术服务。"
      },
      {
        question: "如何开始使用LetoAI的服务？",
        answer: "您可以通过我们的联系表单提交需求，我们的专业团队会在24小时内与您联系，为您提供详细的解决方案介绍和定制化服务建议。"
      },
      {
        question: "LetoAI的服务适合什么规模的企业？",
        answer: "我们主要服务头部企业和中大型企业，具有丰富的大规模项目经验。同时也为有潜力的中小企业提供适合的解决方案。"
      }
    ]
  },
  {
    category: "技术相关",
    questions: [
      {
        question: "AI解决方案的部署周期是多长？",
        answer: "根据项目复杂度不同，部署周期从2-8周不等。我们会提供详细的项目时间规划，确保按时交付高质量的解决方案。"
      },
      {
        question: "如何保证数据安全和隐私保护？",
        answer: "我们严格遵循数据保护法规，采用企业级安全措施，包括数据加密、权限控制、安全审计等，确保您的数据安全。"
      },
      {
        question: "是否提供技术支持和培训？",
        answer: "是的，我们提供全面的技术支持服务，包括系统培训、文档支持、在线技术支持和定期系统维护。"
      }
    ]
  }
]

// 联系方式数据
const contactOptions = [
  {
    title: "在线咨询",
    description: "通过在线表单联系我们的专业团队",
    icon: MessageSquare,
    href: "/#contact",
    action: "立即咨询"
  },
  {
    title: "邮件支持",
    description: "发送邮件获取详细的技术支持",
    icon: Mail,
    href: "mailto:contact@letoai.tech",
    action: "发送邮件"
  }
]

export default function HelpContent() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:bg-gradient-to-br dark:from-[#030314] dark:via-[#040419] dark:to-[#050520]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-letoWarmStart/[0.05] via-transparent to-letoCoolEnd/[0.05]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-letoOrange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-letoCoolEnd/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
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
                帮助中心
              </span>
            </h1>

            <DescriptionText
              size="medium"
              className="text-lg text-slate-600 dark:text-white/60 text-center max-w-2xl mx-auto mb-12"
            >
              为您提供全面的使用指南、技术文档和专业支持服务
            </DescriptionText>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { number: "50+", label: "服务企业" },
                { number: "24/7", label: "技术支持" },
                { number: "3", label: "核心业务" },
                { number: "98%", label: "客户满意度" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-letoOrange dark:text-letoTurquoise mb-2">
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

      {/* Help Categories Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {helpCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-letoOrange/10 dark:hover:bg-white/[0.08] transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-letoOrange/10 dark:bg-letoTurquoise/10 rounded-xl group-hover:bg-letoOrange/20 dark:group-hover:bg-letoTurquoise/20 transition-colors">
                      <category.icon className="h-6 w-6 text-letoOrange dark:text-letoTurquoise" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <DescriptionText className="mb-6" size="small">
                    {category.description}
                  </DescriptionText>

                  <div className="space-y-4">
                    {category.articles.map((article, index) => (
                      <Link
                        key={index}
                        href={article.href}
                        className="block p-3 bg-white/40 dark:bg-white/[0.02] rounded-lg border border-white/30 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/[0.04] hover:border-letoOrange/30 dark:hover:border-letoTurquoise/30 transition-all duration-300 group/link"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-1 group-hover/link:text-letoOrange dark:group-hover/link:text-letoTurquoise">
                              {article.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-white/50">
                              {article.description}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-slate-400 dark:text-white/30 group-hover/link:text-letoOrange dark:group-hover/link:text-letoTurquoise group-hover/link:translate-x-0.5 transition-all duration-300" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  常见问题
                </h2>
                <DescriptionText size="medium">
                  快速找到您关心问题的答案
                </DescriptionText>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {faqItems.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-letoOrange dark:text-letoTurquoise" />
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div
                          key={faqIndex}
                          className="bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-xl p-6 hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all duration-300"
                        >
                          <h4 className="text-lg font-medium mb-3 text-slate-900 dark:text-white">
                            {faq.question}
                          </h4>
                          <DescriptionText size="small" className="text-slate-600 dark:text-white/70">
                            {faq.answer}
                          </DescriptionText>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support Section */}
            <div className="bg-gradient-to-r from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoTurquoise/10 dark:to-letoCoolEnd/10 rounded-2xl p-8 border border-letoOrange/20 dark:border-letoTurquoise/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  联系技术支持
                </h2>
                <DescriptionText size="medium">
                  无法找到您需要的答案？我们的专业团队随时为您提供帮助
                </DescriptionText>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {contactOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-xl p-6 text-center hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-letoOrange/10 dark:bg-letoTurquoise/10 rounded-xl">
                        <option.icon className="h-6 w-6 text-letoOrange dark:text-letoTurquoise" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                      {option.title}
                    </h3>
                    <DescriptionText className="mb-4" size="small">
                      {option.description}
                    </DescriptionText>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={option.href}>{option.action}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}