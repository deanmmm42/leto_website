"use client"

import { GradientHoverButton } from "@/components/ui/gradient-hover-button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

export default function ButtonExamplesPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-10">渐变悬停按钮示例</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">尺寸变体</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <GradientHoverButton size="sm">小按钮</GradientHoverButton>
            <GradientHoverButton size="md">中按钮</GradientHoverButton>
            <GradientHoverButton size="lg">大按钮</GradientHoverButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">样式变体</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <GradientHoverButton variant="default">默认按钮</GradientHoverButton>
            <GradientHoverButton variant="outline">轮廓按钮</GradientHoverButton>
            <GradientHoverButton variant="ghost">幽灵按钮</GradientHoverButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">带图标</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <GradientHoverButton>
              <Download className="mr-2 h-4 w-4" /> 下载
            </GradientHoverButton>
            <GradientHoverButton>
              了解更多 <ArrowRight className="ml-2 h-4 w-4" />
            </GradientHoverButton>
            <GradientHoverButton variant="outline">
              访问 <ExternalLink className="ml-2 h-4 w-4" />
            </GradientHoverButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">链接按钮</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <GradientHoverButton href="/explore">探索页面</GradientHoverButton>
            <GradientHoverButton href="/learn-more" variant="outline">
              了解更多
            </GradientHoverButton>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">全宽按钮</h2>
          <div className="space-y-4 max-w-md">
            <GradientHoverButton fullWidth>全宽按钮</GradientHoverButton>
            <GradientHoverButton fullWidth variant="outline">
              全宽轮廓按钮
            </GradientHoverButton>
          </div>
        </section>
      </div>
    </div>
  )
}
