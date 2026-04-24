"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const productMatrix = [
  {
    title: "AI+学生发展",
    description: "围绕德智体美劳全面发展，使用AI技术构建全过程、全要素的综合素质评价体系，实现个性化成长评估与发展指导。"
  },
  {
    title: "AI+教师发展",
    description: "构建AI赋能的教师发展体系，联动学生发展情况等多维数据支撑教师发展评价，切实帮助教师减负增效，专注核心教学工作。"
  },
  {
    title: "AI+项目式学习",
    description: "以项目驱动培养学生跨学科解决问题能力。"
  },
  {
    title: "AI+英语、美育等学科智能体",
    description: "推动教育大模型与学科教学深度融合，构建学科智能体，创新教学场景和模式，发展个性化、自适应学习场景。"
  },
  {
    title: "AI+学校治理",
    description: "打造校级“教育智能大脑”和“数字助教”，实现校园服务智慧化、管理数据化、决策科学化，提升教育治理现代化水平。"
  }
]

function ArticleFigure({
  src,
  alt,
  caption,
  priority = false
}: {
  src: string
  alt: string
  caption: string
  priority?: boolean
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={699}
        height={524}
        className="h-auto w-full object-cover"
        priority={priority}
      />
      <figcaption className="border-t border-slate-100 bg-white/80 px-5 py-3 text-center text-sm text-slate-500">
        {caption}
      </figcaption>
    </figure>
  )
}

function SectionCard({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="relative z-10 mt-10">
      <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-white/70 md:p-8">
        {eyebrow ? <p className="text-sm font-semibold tracking-[0.2em] text-[#1f4fb2]">{eyebrow}</p> : null}
        <h2 className="mt-2 text-2xl font-bold leading-tight text-[#0b2f7d] md:text-3xl">{title}</h2>
        <div className="mt-5 space-y-5 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
          {children}
        </div>
      </div>
    </section>
  )
}

export default function BlogArticleContent() {
  return (
    <div className="min-h-screen bg-[#ebf4fe] text-slate-900">
      <Header />

      <main className="relative overflow-hidden pb-16">
        <div className="pointer-events-none absolute -left-24 -top-16 h-96 w-96 rounded-full bg-[#9fd6ff]/40 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-[#ffbf7a]/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-72 h-72 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <section className="relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pt-12 md:px-6 md:pt-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#1f4fb2] shadow-sm">
                <span>媒体报道</span>
                <span className="text-slate-300">|</span>
                <span>AI+教育实践</span>
              </div>
              <h1 className="mt-5 text-3xl font-bold leading-tight text-[#0b2f7d] md:text-5xl">
                四川乐途智学的“AI+教育”实践路径：全栈AI驱动 全场景育人
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                本文转载自中新网四川，原文发布于 2026年4月24日 11:56:44。报道关注四川乐途智学以自主可控的AI能力，构建覆盖“教、学、管、评、育”的全场景智慧教育解决方案。
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-white/85 px-4 py-2 shadow-sm">来源：中新网四川</span>
                <span className="rounded-full bg-white/85 px-4 py-2 shadow-sm">发布时间：2026-04-24 11:56:44</span>
                <span className="rounded-full bg-white/85 px-4 py-2 shadow-sm">责任编辑：尧欣雨</span>
              </div>
            </div>

            <ArticleFigure
              src="/images/blog/ai-education-practice-path/speech-scene.jpg"
              alt="四川乐途智学演讲现场"
              caption="演讲现场。四川乐途智学科技有限公司供图"
              priority
            />
          </div>
        </section>

        <article className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
          <section className="mt-4 rounded-3xl border border-[#1f4fb2]/15 bg-white/80 p-6 text-base leading-8 text-slate-700 shadow-sm md:p-8 md:text-lg md:leading-9">
            <p>
              中新网四川新闻4月24日电 第87届中国教育装备展示会24日在成都拉开帷幕。在人工智能赋能教育的浪潮中，一批本土创新企业正崭露头角。其中，四川乐途智学科技有限公司正以自主可控的AI能力，构建覆盖“教、学、管、评、育”的全场景智慧教育解决方案。
            </p>
          </section>

          <SectionCard eyebrow="成都本土AI教育企业" title="从“能力展示”到“可落地可复制”">
            <p>
              四川乐途智学科技有限公司是一家专注于AI+教育创新领域的科技型企业。公司首席科学家龙迪博士毕业于清华大学计算机科学与技术专业，系成都市“蓉漂计划”特聘专家等。核心团队均来自科大讯飞、腾讯、百度、好未来、微博等头部企业，兼具AI技术与教育场景双重基因。
            </p>
            <p>
              公司先后获评国家级高新技术企业、国家级科技型中小企业、四川省专精特新中小企业，拥有19项软件著作权和6项发明专利。与市场上许多AI公司不同，乐途智学从一开始就明确提出：人工智能要从“能力展示”走向“可落地、可复制的解决方案”，为客户创造可衡量的价值。
            </p>
            <p>
              “我们依托自主可控的核心AI研发能力，面向学校、教师、学生提供全场景创新智慧教育解决方案，全面对标国家级‘AI+教育’政策要求。”公司联合创始人兼CEO朱林表示，乐途智学的使命是用人工智能技术驱动教育公平与高质量发展。
            </p>
          </SectionCard>

          <SectionCard eyebrow="自主研发教育数字人" title="构建全链路数据安全体系">
            <p>
              乐途智学自主研发的教育数字人，具备多模态交互、精准分析、个性化内容生成三大核心能力，赋能教学和管理全流程。同时，该公司严格遵循教育数据安全规范与AI进校园管理要求，建立了企业级数据隐私保护屏障和全链路数据安全与合规体系。
            </p>
            <p>
              “技术要真正进入校园，安全是第一道门槛。”该负责人强调，公司从底层设计上就对标国家级政策要求，确保每一套方案都符合教育数据安全标准。
            </p>
          </SectionCard>

          <SectionCard eyebrow="教、学、管、评、育" title="产品矩阵全面对标政策方向">
            <p>
              2026年4月，教育部等五部门联合印发《“人工智能+教育”行动计划》，作为“十五五”时期的纲领性文件，明确要求AI与教育全要素、全场景、全流程深度融合。乐途智学的产品布局与这一政策体系高度契合，公司深耕教育场景闭环构建，覆盖“教、学、管、评、育”五大核心环节，打造懂教育、贴实际的技术落地闭环。其核心产品矩阵包括：
            </p>

            <ArticleFigure
              src="/images/blog/ai-education-practice-path/product-showcase.jpg"
              alt="乐途智学产品展出现场"
              caption="乐途智学产品展出现场。四川乐途智学科技有限公司供图"
            />

            <div className="space-y-4">
              {productMatrix.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#1f4fb2]/15 bg-[#f7fbff] p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b2f7d]">{item.title}</h3>
                  <p className="mt-2 text-base leading-8 text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>

            <p>
              依托上述能力，乐途智学已与超过40家学校、教育局客户达成合作，率先落地了AI综合素质评价解决方案。该方案通过全过程、全要素的数据采集与智能分析，为学生建立动态成长画像，帮助教师和管理者精准把握每位学生的发展状况，真正实现“五育并举”的可视化与可干预。
            </p>
            <p>
              “我们不做空中楼阁的技术演示，每一套方案都要经得起教学和管理一线的检验。”该公司负责人表示，乐途智学坚持敏捷迭代的研发体系，紧跟国家级政策更新节奏，快速响应教育一线实际需求，保持产品技术的领先性。
            </p>
          </SectionCard>

          <SectionCard eyebrow="展望" title="以全栈AI赋能驱动教育公平与高质量发展">
            <p>
              从成都这个充满创新与开拓精神的原点起步，乐途智学正将自主可控的AI教育解决方案推广到更多地区。在“人工智能+教育”成为国家战略的当下，这家本土企业以扎实的技术积累、完整的场景闭环和对育人本质的坚守，走出了一条差异化的发展路径。
            </p>
            <p>
              “AI是路径，育人是归宿。我们所有的产品开发，都围绕一个方向——让技术真正服务于每一个学生的成长。”该公司负责人表示。
            </p>
            <p>
              随着第87届中国教育装备展示会在成都举办，更多像乐途智学这样的创新企业将走进公众视野。而在展会之外，他们与学校、教师、学生共同书写的AI教育故事，才刚刚开始。(完)
            </p>
          </SectionCard>

          <section className="relative z-10 mt-10 rounded-3xl border border-[#1f4fb2]/15 bg-white/90 p-6 text-sm leading-7 text-slate-600 shadow-md md:p-8">
            <p>来源：中新网四川　发布时间：2026年4月24日 11:56:44　责任编辑：尧欣雨</p>
            <p className="mt-3">
              本文转载自中新网四川，版权归原作者及原媒体所有。如涉及版权问题，请联系我们处理。原文链接：
              <a
                href="https://m.chinanews.com/wap/detail/chs/zw/431172.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1f4fb2] underline underline-offset-4"
              >
                https://m.chinanews.com/wap/detail/chs/zw/431172.shtml
              </a>
            </p>
          </section>

          <section className="relative z-10 mt-12 rounded-3xl bg-[#0b2f7d] px-6 py-10 text-center text-white shadow-xl md:px-10">
            <p className="text-sm font-semibold tracking-[0.24em] text-white/70">AI EDUCATION SOLUTIONS</p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">了解乐途智学全场景智慧教育解决方案</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              围绕学生发展、教师发展、项目式学习、学科智能体与学校治理，LetoAI 为学校和教育主管部门提供可落地、可复制的 AI+教育能力。
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/contact?from=/blog/ai-education-practice-path"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b2f7d] shadow-md transition hover:bg-[#f4f8ff]"
              >
                免费咨询方案
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
