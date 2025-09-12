import { Metadata } from "next"
import WhitepapersContent from "./whitepapers-content"

export const metadata: Metadata = {
  title: "AI技术白皮书 | LetoAI - 人工智能行业深度分析与技术指南",
  description: "LetoAI发布的AI技术白皮书合集，涵盖AI营销、教育AI、海外工具开发等领域的深度技术分析和行业趋势报告。",
  keywords: "AI白皮书, 人工智能技术报告, AI营销指南, 教育AI研究, 海外AI工具开发, 技术分析报告",
}

export default function WhitepapersPage() {
  return <WhitepapersContent />
}