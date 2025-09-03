import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface LetoBrandTextProps {
  children?: ReactNode
  className?: string
  variant?: "inline" | "block" | "logo"
}

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export function LetoBrandText({ children = "LetoAI", className, variant = "inline" }: LetoBrandTextProps) {
  if (variant === "logo") {
    return null
  }

  if (variant === "block") {
    return (
      <div
        className={cn(
          "bg-gradient-to-r from-letoWarmStart via-letoPink to-letoCoolEnd text-white p-4 rounded-2xl shadow-lg",
          className,
        )}
      >
        {children}
      </div>
    )
  }

  // 默认内联文本样式
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-letoWarmStart via-letoPink to-letoCoolEnd font-medium",
        pacifico.className, // 添加 Pacifico 字体
        "!font-medium", // 添加 !important 确保字体权重不被覆盖
        className,
      )}
      style={{ fontFamily: `var(--font-pacifico), cursive` }} // 添加内联样式确保字体应用
    >
      {children}
    </span>
  )
}
