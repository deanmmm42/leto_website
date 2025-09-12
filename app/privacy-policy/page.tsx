import { Metadata } from "next"
import PrivacyPolicyContent from "./privacy-policy-content"

export const metadata: Metadata = {
  title: "隐私政策 | LetoAI - 数据保护与隐私安全政策",
  description: "LetoAI隐私政策详细说明我们如何收集、使用、保护您的个人信息，确保数据安全和用户隐私权益。",
  keywords: "隐私政策, 数据保护, 个人信息安全, LetoAI隐私声明, 数据处理政策, 用户隐私权",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}