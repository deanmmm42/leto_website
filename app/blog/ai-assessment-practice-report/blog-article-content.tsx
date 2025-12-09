"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const organizers = [
  "成都市教育科学研究院",
  "成都市教育学会",
  "成都教育高质量发展研究中心"
]

const hosts = [
  "成都市教育学会",
  "成都七中初中附属小学"
]

export default function BlogArticleContent() {
  return (
    <div className="min-h-screen bg-[#ebf4fe] text-slate-900">
      <Header />

      <main className="relative overflow-hidden pb-16">
        {/* 背景装饰 */}
        <div className="pointer-events-none absolute -left-20 -top-10 h-80 w-80 opacity-50">
          <Image
            src="/images/blog/ai-assessment-report/circle-bg.png"
            alt="背景圆"
            width={320}
            height={320}
            className="h-full w-full object-contain"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-56 opacity-60">
          <Image
            src="/images/blog/ai-assessment-report/wave-light.png"
            alt="浅色波纹"
            width={1400}
            height={500}
            className="mx-auto w-full max-w-6xl"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-64 opacity-40">
          <Image
            src="/images/blog/ai-assessment-report/wave-blue.png"
            alt="深色波纹"
            width={1400}
            height={500}
            className="mx-auto w-full max-w-6xl"
            priority
          />
        </div>

        {/* Hero 区域 */}
        <section className="relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pt-12 md:px-6 md:pt-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#1f4fb2] shadow-sm">
                <span>数智赋能教育</span>
                <span className="text-slate-300">|</span>
                <span>案例彰显实效</span>
              </div>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0b2f7d] md:text-4xl">
                LetoAI首席科学家龙迪教授重磅报告“AI赋能中小学生综合素质评价的实践探索”
              </h1>
              <div className="mt-16 md:mt-20 space-y-8 md:space-y-10">
                <div className="flex justify-center">
                  <div className="rounded-3xl bg-white/90 px-7 py-5 shadow-md ring-1 ring-white/70">
                    <p className="text-lg font-bold tracking-[0.22em] text-[#1f4fb2] md:text-xl">2025年成都市教育学术年会</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-xl">
                  <Image
                    src="/images/blog/ai-assessment-report/hero-poster.png"
                    alt="人工智能+典型应用场景案例分享海报"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 活动信息 */}
        <section className="relative z-10 mt-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6">
            <p className="text-base leading-relaxed text-slate-700 indent-8">
              岁末蓉城，研韵正浓。在推动教育数字化转型迈入深水区的关键阶段，成都市教育学会 2025 年学术年会之“人工智能+典型应用场景案例分享”分会场成功在成都七中初中附属小学顺利举行。本次活动围绕“技术赋能教育，人文守护本质”这一主题，凝聚了市内外教育行政部门代表、专家学者及一线骨干教师等多方智慧，通过案例剖析、专题讲座、成果展示等多样化环节，深入探讨“人工智能+教育”的实施路径，为区域教育提质增效贡献了新的思路与动力。
            </p>
            <div className="rounded-3xl bg-white/90 p-6 shadow-md md:p-8">
              <h2 className="text-xl font-semibold text-[#0b2f7d] md:text-2xl">主办单位</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                本次活动以党的二十届四中全会精神为指导，全面贯彻教育强国战略规划。活动由成都市教育学会主办、成都七中初中附属小学承办。按照《成都市智慧教育三年行动计划（2023-2025 年）》相关要求，构建“政策引导—实践创新—学术支撑—成效辐射”的研讨闭环。
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border-2 border-[#1f4fb2]/20 bg-white px-4 py-4 shadow-lg ring-1 ring-[#1f4fb2]/10">
                  <p className="text-sm font-semibold text-[#1f4fb2]">主办与指导</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700 font-semibold">
                    {organizers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-[#1f4fb2]/20 bg-white px-4 py-4 shadow-lg ring-1 ring-[#1f4fb2]/10">
                  <p className="text-sm font-semibold text-[#1f4fb2]">承办单位</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700 font-semibold">
                    {hosts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-[#1f4fb2]/20 bg-white px-4 py-4 shadow-lg ring-1 ring-[#1f4fb2]/10">
                  <p className="text-sm font-semibold text-[#1f4fb2]">活动邀请</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    成都市教育科学研究院数字教育研究所副所长陕昌群和成都市青羊区教育技术装备与信息管理中心研究与培训办教研员瓮子江担任学术主持。
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-md">
              <Image
                src="/images/blog/ai-assessment-report/group-photo.jpeg"
                alt="嘉宾合影"
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 特邀嘉宾 */}
        <section className="relative z-10 mt-12">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="rounded-3xl bg-white/95 p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-[#0b2f7d] md:text-3xl">特邀嘉宾</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                清华大学计算机系博士、四川省“千人计划”特聘专家、LetoAI首席科学家龙迪教授受邀出席 2025 成都教育学会学术年会，深度剖析 AI 技术如何助力中小学生综合素质评价，开启教育评价新篇章！
              </p>
            </div>
          </div>
        </section>

        {/* 报告与实践 */}
        <section className="relative z-10 mt-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6">
            <div className="rounded-3xl bg-white/95 p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-[#0b2f7d] md:text-3xl">AI赋能中小学综合素养评价</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                在大会主论坛上，LetoAI首席科学家龙迪教授的报告成为了全场焦点。龙教授的报告深入浅出，聚焦于当前教育评价体系中的痛点——如何科学、全面、公正地评价中小学生的综合素养。
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                龙迪教授指出，传统的纸笔测试难以有效衡量学生的创新能力、合作精神、审美情趣等综合素养。而 LetoAI 正在做的，正是通过领先的人工智能、大数据分析及教育心理学模型，构建一套多维度、伴随式的综合素质评价体系。
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                  <Image
                    src="/images/blog/ai-assessment-report/speaker.jpeg"
                    alt="龙迪教授报告现场"
                    width={960}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                  <Image
                    src="/images/blog/ai-assessment-report/slide.jpeg"
                    alt="“AI+评价”思路分享"
                    width={960}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/95 p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-[#0b2f7d] md:text-3xl">龙迪教授解析“AI+评价”的无限可能</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                龙迪教授指出，传统的综合素质评价常面临“数据采集难、评价主观性强、结果反馈滞后”三大痛点。而 LetoAI 致力于利用多模态人工智能技术，将“评价”无感地融入到学生的日常学习与活动中。
              </p>
              <blockquote className="mt-4 rounded-2xl border-l-4 border-[#1f4fb2] bg-[#f0f5ff] px-4 py-3 text-base font-medium text-[#0b2f7d]">
                “评价不是为了给学生贴标签，而是为了发现潜能。”
              </blockquote>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                <div>
                  <p className="font-semibold text-[#0b2f7d]">1. 多维素养模型</p>
                  <p className="mt-2">
                    构建：依托 LetoAI 的大模型算法，将散落的行为数据转化为可视化的素养雷达图，精准分析学生的创新思维、协作能力与审美情趣。
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#0b2f7d]">2. 个性化成长画像</p>
                  <p className="mt-2">
                    为每个学生生成独一无二的“成长数字档案”，帮助教师因材施教，让家长看到孩子分数之外的闪光点。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 现场反响 */}
        <section className="relative z-10 mt-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 md:px-6">
            <div className="rounded-3xl bg-white/95 p-6 shadow-md md:p-8">
              <h2 className="text-2xl font-bold text-[#0b2f7d] md:text-3xl">报告成果</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                龙教授的报告数据详实、案例生动，展示了技术如何让教育评价更有温度、更科学，赢得了在场专家与同行的热烈掌声与高度评价！
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                此次龙迪教授受邀出席成都教育学会2025学术年会，标志着 LetoAI 在教育评价领域的探索成果得到了学术界与教育界的双重认可！
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                未来，LetoAI 将继续深耕“AI+教育”场景，携手更多学校与区域，共同探索智能时代的教育评价新范式，为培养适应未来的创新人才贡献科技力量！
              </p>

              <div className="mt-6">
                <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                  <Image
                    src="/images/blog/ai-assessment-report/audience.jpeg"
                    alt="大会现场反响"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 mt-16">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white/95 px-6 py-10 text-center shadow-md md:px-10">
            <p className="text-xl font-bold text-[#0b2f7d] md:text-2xl">准备开启AI综合素养评价新时代？</p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
              联系LetoAI，获取基于五大核心维度的专属教育评价改革解决方案
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/contact?from=/blog/ai-assessment-practice-report"
                className="inline-flex items-center justify-center rounded-full bg-[#0b2f7d] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#09306c]"
              >
                免费咨询方案
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
