"use client"

import { ArrowLeft, Shield, Eye, Lock, Users, FileText, AlertCircle, CheckCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"

// 隐私政策章节数据
const privacySections = [
  {
    id: "information-collection",
    title: "1. 信息收集",
    icon: Eye,
    content: [
      {
        subtitle: "个人信息收集",
        description: "我们仅收集为您提供服务所必需的个人信息，包括但不限于：",
        items: [
          "基本联系信息（姓名、邮箱、电话号码）",
          "企业信息（公司名称、职位、业务需求）",
          "技术信息（IP地址、浏览器信息、设备信息）",
          "使用数据（访问记录、功能使用情况）"
        ]
      },
      {
        subtitle: "信息收集方式",
        description: "我们通过以下方式收集信息：",
        items: [
          "您主动提供的信息（联系表单、咨询请求）",
          "自动收集的技术信息（Cookies、日志文件）",
          "第三方合作伙伴提供的公开商业信息"
        ]
      }
    ]
  },
  {
    id: "information-usage",
    title: "2. 信息使用",
    icon: Users,
    content: [
      {
        subtitle: "使用目的",
        description: "我们使用收集的信息用于：",
        items: [
          "提供AI技术解决方案和相关服务",
          "响应您的咨询和技术支持请求",
          "改进我们的产品和服务质量",
          "发送重要的服务通知和更新",
          "遵守法律法规要求"
        ]
      },
      {
        subtitle: "数据处理原则",
        description: "我们遵循以下数据处理原则：",
        items: [
          "合法性：基于合法理由处理个人数据",
          "必要性：仅处理服务所需的最少数据",
          "准确性：确保数据的准确性和及时更新",
          "安全性：采取适当措施保护数据安全"
        ]
      }
    ]
  },
  {
    id: "data-protection",
    title: "3. 数据保护",
    icon: Lock,
    content: [
      {
        subtitle: "技术安全措施",
        description: "我们采用行业领先的安全技术保护您的数据：",
        items: [
          "数据传输加密（SSL/TLS协议）",
          "数据存储加密（AES-256加密算法）",
          "访问控制和身份验证机制",
          "定期安全审计和漏洞扫描",
          "安全备份和灾难恢复机制"
        ]
      },
      {
        subtitle: "管理安全措施",
        description: "在管理层面，我们实施了严格的安全措施：",
        items: [
          "员工数据保护培训和保密协议",
          "最小权限原则和角色访问控制",
          "数据处理活动记录和审计跟踪",
          "第三方合作伙伴安全评估"
        ]
      }
    ]
  },
  {
    id: "data-sharing",
    title: "4. 信息共享",
    icon: Users,
    content: [
      {
        subtitle: "共享原则",
        description: "我们不会出售、出租或以其他方式转让您的个人信息给第三方，除非：",
        items: [
          "获得您的明确同意",
          "为提供服务所必需（如技术服务提供商）",
          "法律法规要求或政府部门要求",
          "保护LetoAI或用户的合法权益"
        ]
      },
      {
        subtitle: "合作伙伴",
        description: "我们可能与以下类型的合作伙伴共享必要信息：",
        items: [
          "云服务提供商（用于数据存储和计算）",
          "技术服务商（用于系统维护和支持）",
          "法律和审计服务提供商"
        ]
      }
    ]
  },
  {
    id: "user-rights",
    title: "5. 用户权利",
    icon: Shield,
    content: [
      {
        subtitle: "您的权利",
        description: "根据适用的数据保护法律，您享有以下权利：",
        items: [
          "知情权：了解我们如何处理您的个人信息",
          "访问权：获取我们持有的您的个人信息副本",
          "更正权：要求更正不准确或不完整的信息",
          "删除权：在特定情况下要求删除您的个人信息",
          "限制处理权：限制我们处理您的个人信息",
          "数据可携权：以结构化格式获得您的数据"
        ]
      },
      {
        subtitle: "权利行使",
        description: "如需行使上述权利，请通过以下方式联系我们：",
        items: [
          "发送邮件至：contact@letoai.tech",
          "通过官网联系表单提交请求",
          "我们将在30天内响应您的请求"
        ]
      }
    ]
  },
  {
    id: "cookies-policy",
    title: "6. Cookie 政策",
    icon: FileText,
    content: [
      {
        subtitle: "什么是Cookies",
        description: "Cookies是由网站存储在您设备上的小型文本文件，用于记住您的偏好设置并提升网站使用体验。",
        items: [
          "会话Cookies：在您关闭浏览器后即失效",
          "持久Cookies：在您的设备上保留一段时间或直到您删除它们",
          "同站与第三方Cookies：用于分析、功能与安全等用途"
        ]
      },
      {
        subtitle: "我们如何使用Cookies",
        description: "我们仅在提供和改进服务所必需的范围内使用Cookies：",
        items: [
          "功能性Cookies：保存语言、主题等偏好",
          "性能与分析Cookies：用于统计访问量与页面性能（如开启时）",
          "安全Cookies：用于防止恶意活动和提高账户安全"
        ]
      },
      {
        subtitle: "您的选择",
        description: "您可以通过浏览器设置管理或禁用Cookies：",
        items: [
          "在浏览器中阻止或删除Cookies",
          "接收Cookies前显示提示",
          "选择仅接受网站必需的Cookies"
        ]
      }
    ]
  },
  {
    id: "policy-updates",
    title: "7. 政策更新",
    icon: AlertCircle,
    content: [
      {
        subtitle: "更新通知",
        description: "我们可能会定期更新本隐私政策以反映：",
        items: [
          "服务变更和新功能",
          "法律法规的变化",
          "行业最佳实践的发展",
          "用户反馈和建议"
        ]
      },
      {
        subtitle: "变更生效",
        description: "政策更新时，我们将：",
        items: [
          "在网站上发布更新后的政策",
          "通过邮件通知重要变更",
          "新政策自发布之日起生效",
          "继续使用服务即表示接受新政策"
        ]
      }
    ]
  }
]

export default function PrivacyPolicyContent() {
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
                隐私政策
              </span>
            </h1>

            <DescriptionText
              size="medium"
              className="text-lg text-slate-600 dark:text-white/60 text-center max-w-2xl mx-auto mb-8"
            >
              我们重视并保护您的隐私权益，本政策详细说明我们如何收集、使用和保护您的个人信息
            </DescriptionText>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-white/50">
              <Calendar className="h-4 w-4" />
              <span>最后更新：2025年9月</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-letoOrange dark:text-letoTurquoise" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">概述</h2>
              </div>
              <DescriptionText className="mb-6" size="medium">
                LetoAI（以下简称"我们"）致力于保护您的隐私和个人信息安全。本隐私政策适用于您使用我们的网站、产品和服务时的个人信息处理活动。
              </DescriptionText>
              <DescriptionText size="medium">
                我们遵循合法、正当、必要的原则，严格按照《网络安全法》、《数据安全法》、《个人信息保护法》等法律法规的要求，保护您的个人信息权益。
              </DescriptionText>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {privacySections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl hover:shadow-letoOrange/5 dark:hover:bg-white/[0.08] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-letoOrange/10 dark:bg-letoTurquoise/10 rounded-lg">
                      <section.icon className="h-5 w-5 text-letoOrange dark:text-letoTurquoise" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((contentBlock, contentIndex) => (
                      <div key={contentIndex}>
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
                          {contentBlock.subtitle}
                        </h3>
                        <DescriptionText className="mb-4" size="small">
                          {contentBlock.description}
                        </DescriptionText>
                        <ul className="space-y-2">
                          {contentBlock.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-white/70">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gradient-to-r from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoTurquoise/10 dark:to-letoCoolEnd/10 rounded-2xl p-8 border border-letoOrange/20 dark:border-letoTurquoise/20">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  联系我们
                </h2>
                <DescriptionText size="medium" className="mb-6">
                  如果您对本隐私政策有任何疑问，或需要行使您的数据权利，请通过以下方式联系我们：
                </DescriptionText>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="leto-gradient-bg hover:opacity-90 text-white">
                    <Link href="/#contact">在线联系</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="mailto:contact@letoai.tech">发送邮件</Link>
                  </Button>
                </div>
                <p className="text-sm text-slate-500 dark:text-white/50 mt-4">
                  我们承诺在收到您的请求后30天内给予回复
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
