import { cn } from "@/lib/utils"
import { LetoBrandText } from "./leto-brand-text"
import type React from "react"

interface DescriptionTextProps {
  children: React.ReactNode
  className?: string
  size?: "small" | "medium" | "large"
}

export function DescriptionText({ children, className, size = "medium" }: DescriptionTextProps) {
  // 将文本内容中的 "Leto AI" 替换为 LetoBrandText 组件
  const renderContent = () => {
    if (typeof children !== "string") return children

    const parts = children.split(/Leto AI/i)
    if (parts.length === 1) return children

    return (
      <>
        {parts[0]}
        <LetoBrandText />
        {parts.slice(1).join("")}
      </>
    )
  }

  const sizeClasses = {
    small: "text-sm sm:text-base",
    medium: "text-base sm:text-lg md:text-xl",
    large: "text-lg sm:text-xl md:text-2xl",
  }

  return (
    <p
      className={cn(
        sizeClasses[size],
        "text-slate-600 dark:text-white/40 leading-relaxed font-light tracking-wide",
        className,
      )}
    >
      {renderContent()}
    </p>
  )
}
