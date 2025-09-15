"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Building2, TrendingUp, Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DescriptionText } from "@/components/description-text"
import { common } from "@/config/text"

// 基于真实配置文件的案例数据
const caseStudies = [
  {
    id: "pingan-car-owner",
    title: "平安好车主",
    subtitle: "车主权益服务平台",
    category: "电商营销",
    client: "平安好车主平台",
    tag: "权益服务",
    description: "为车主权益服务平台打造专业的数字权益管理系统，提供代驾、保养、洗车、道路救援等全方位车主专享服务体系",
    challenge: "车主服务平台需要为用户提供多样化的增值服务，提升用户粘性和服务体验，同时需要高效的权益管理和风控系统。",
    solution: "部署LetoAI数字权益营销平台，构建全国性车主服务网络，实现智能风控和精准服务推荐。",
    metrics: [
      { label: "服务覆盖", value: "全国300+城市", icon: "map" },
      { label: "权益种类", value: "8大类200+项权益", icon: "gift" },
      { label: "用户满意度", value: "98%+", icon: "heart" },
      { label: "续保转化率", value: "显著改善", icon: "trending" }
    ],
    industry: "保险服务",
    duration: "长期合作",
    featured: true
  },
  {
    id: "education-assessment-pilot",
    title: "综合素养评价系统应用",
    subtitle: "AI赋能教育评价革新",
    category: "教育AI",
    client: "某知名AI试点学校",
    tag: "试点应用",
    description: "通过部署我们的综合素养评价系统，该校实现了学生评价从单一分数向多维度综合素养的转变，获得了教育主管部门的高度认可。",
    challenge: "传统教育评价体系过分依赖考试分数，难以全面反映学生综合素养发展情况，亟需多维度科学评价体系。",
    solution: "部署LetoAI综合素养评价系统，建立多维度数据采集和AI智能分析体系，构建科学化评价标准。",
    metrics: [
      { label: "评价维度", value: "从1个扩展至15个", icon: "layers" },
      { label: "教师满意度", value: "95%以上", icon: "users" },
      { label: "家长认可度", value: "90%以上", icon: "heart" },
      { label: "评价效率", value: "提升300%+", icon: "trending" }
    ],
    industry: "教育行业",
    duration: "试点成功",
    featured: true
  },
  {
    id: "personalized-tutoring-system",
    title: "个性化教辅系统应用",
    subtitle: "智能化因材施教实践",
    category: "教育AI",
    client: "某知名私立学校",
    tag: "深度应用",
    description: "采用我们的智能题库与个性化辅导系统后，该校学生的学习效果显著提升，在各类考试中表现优异。",
    challenge: "大班额教学模式下难以实现因材施教，学生个体差异导致学习效率参差不齐，需要个性化教学解决方案。",
    solution: "部署LetoAI智能题库+个性化辅导系统，实现AI精准推荐和自适应学习路径规划。",
    metrics: [
      { label: "学习效果", value: "平均提升50%+", icon: "trending" },
      { label: "作业质量", value: "提升40%+", icon: "award" },
      { label: "学生满意度", value: "92%+", icon: "heart" },
      { label: "教学效率", value: "提升60%+", icon: "users" }
    ],
    industry: "教育行业",
    duration: "持续优化",
    featured: false
  }
]

const categories = [
  { name: "全部案例", value: "all", count: 3 },
  { name: "电商营销", value: "电商营销", count: 1 },
  { name: "教育AI", value: "教育AI", count: 2 },
]

export default function CaseStudiesContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: "easeOut" as const,
      },
    }),
  }
  
  const filteredCases = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === selectedCategory)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "map": return <Building2 className="h-5 w-5" />
      case "gift": return <Award className="h-5 w-5" />
      case "heart": return <CheckCircle className="h-5 w-5" />
      case "trending": return <TrendingUp className="h-5 w-5" />
      case "layers": return <Building2 className="h-5 w-5" />
      case "users": return <Users className="h-5 w-5" />
      case "award": return <Award className="h-5 w-5" />
      default: return <CheckCircle className="h-5 w-5" />
    }
  }

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
            <motion.div
              custom={0}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Button asChild variant="ghost" className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {common.backToHome}
                </Link>
              </Button>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/80">
                成功案例研究
              </span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
            >
              <DescriptionText
                size="medium"
                className="text-lg text-slate-600 dark:text-white/60 text-center max-w-2xl mx-auto mb-8"
              >
                深入了解LetoAI如何为车主服务平台、教育机构等客户提供专业AI解决方案，助力实现业务增长和数字化转型
              </DescriptionText>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={3}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {[
                { number: "50+", label: "服务客户" },
                { number: "300%+", label: "平均ROI提升" },
                { number: "98%+", label: "客户满意度" },
                { number: "3", label: "核心业务领域" }
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Categories */}
            <aside className="lg:w-1/4">
              <div className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 sticky top-8">
                <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">案例分类</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                        selectedCategory === category.value
                          ? "bg-letoOrange/10 text-letoOrange dark:bg-letoTurquoise/10 dark:text-letoTurquoise border border-letoOrange/20 dark:border-letoTurquoise/20"
                          : "hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-white/70"
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm opacity-60">({
                        category.value === "all" 
                          ? caseStudies.length 
                          : caseStudies.filter(c => c.category === category.value).length
                      })</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
              <div className="space-y-8">
                {filteredCases.map((caseStudy, index) => (
                  <article
                    key={caseStudy.id}
                    className="bg-white/80 dark:bg-white/[0.05] backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-letoOrange/10 dark:hover:bg-white/[0.08] transition-all duration-500 group hover:-translate-y-1"
                  >
                    {/* Case Header */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-letoOrange/10 dark:bg-letoTurquoise/10 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                        {caseStudy.category}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-white/60 rounded-full text-sm">
                        {caseStudy.tag}
                      </span>
                      {caseStudy.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-letoOrange/20 to-letoCoolEnd/20 text-letoOrange dark:text-letoTurquoise rounded-full text-sm font-medium">
                          重点案例
                        </span>
                      )}
                    </div>

                    {/* Case Title */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-letoOrange dark:group-hover:text-letoTurquoise transition-colors">
                      {caseStudy.title}
                    </h2>
                    <h3 className="text-lg text-slate-600 dark:text-white/70 mb-4">
                      {caseStudy.subtitle}
                    </h3>

                    {/* Case Info */}
                    <div className="flex flex-wrap gap-6 mb-6 text-sm text-slate-600 dark:text-white/60">
                      <div>
                        <span className="font-medium">客户：</span>
                        {caseStudy.client}
                      </div>
                      <div>
                        <span className="font-medium">行业：</span>
                        {caseStudy.industry}
                      </div>
                      <div>
                        <span className="font-medium">项目状态：</span>
                        {caseStudy.duration}
                      </div>
                    </div>

                    {/* Case Description */}
                    <DescriptionText className="mb-6" size="small">
                      {caseStudy.description}
                    </DescriptionText>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-slate-50 dark:bg-white/[0.02] rounded-xl p-4 border border-slate-200 dark:border-white/10">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">面临挑战</h4>
                        <p className="text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      <div className="bg-letoOrange/5 dark:bg-letoTurquoise/5 rounded-xl p-4 border border-letoOrange/20 dark:border-letoTurquoise/20">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">解决方案</h4>
                        <p className="text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {caseStudy.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="text-center p-4 bg-gradient-to-br from-white to-slate-50 dark:from-white/[0.02] dark:to-white/[0.05] rounded-xl border border-slate-200 dark:border-white/10"
                        >
                          <div className="flex justify-center mb-2 text-letoOrange dark:text-letoTurquoise">
                            {getIcon(metric.icon)}
                          </div>
                          <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-white/60">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-letoOrange/10 to-letoCoolEnd/10 dark:from-letoTurquoise/10 dark:to-letoCoolEnd/10 rounded-2xl p-8 text-center border border-letoOrange/20 dark:border-letoTurquoise/20">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  准备开启您的AI转型之旅？
                </h3>
                <DescriptionText className="mb-6" size="medium">
                  让LetoAI专业团队为您提供定制化的AI解决方案，实现业务增长和数字化转型
                </DescriptionText>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="leto-gradient-bg hover:opacity-90 text-white">
                    <Link href="/#contact">免费咨询方案</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/solutions">查看解决方案</Link>
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}