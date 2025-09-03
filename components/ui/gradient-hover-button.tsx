"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { type VariantProps, cva } from "class-variance-authority"

// 定义按钮变体
const gradientButtonVariants = cva("relative overflow-hidden group transition-all duration-300", {
  variants: {
    variant: {
      default: "bg-gradient-to-r from-letoWarmStart to-letoPink text-white",
      outline:
        "border-2 border-letoWarmStart/30 text-letoWarmStart hover:bg-letoWarmStart/10 dark:border-letoCoolEnd/30 dark:text-letoCoolEnd dark:hover:bg-letoCoolEnd/10",
      ghost:
        "bg-transparent text-letoWarmStart hover:bg-letoWarmStart/10 dark:text-letoCoolEnd dark:hover:bg-letoCoolEnd/10",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-6 text-lg",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: false,
  },
})

export interface GradientHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  href?: string
  asChild?: boolean
  gradientOnHover?: boolean
}

const GradientHoverButton = forwardRef<HTMLButtonElement, GradientHoverButtonProps>(
  ({ className, variant, size, fullWidth, href, asChild = false, gradientOnHover = true, children, ...props }, ref) => {
    // 渐变背景样式
    const gradientStyle = {
      background: `
        radial-gradient(circle at 10% 0%, rgba(247, 92, 3, 0.9) 0%, rgba(247, 92, 3, 0.4) 50%, transparent 70%),
        radial-gradient(circle at 90% 10%, rgba(241, 91, 181, 0.9) 0%, rgba(241, 91, 181, 0.5) 40%, transparent 70%),
        radial-gradient(circle at 50% 100%, rgba(0, 187, 249, 0.8) 0%, rgba(0, 187, 249, 0.4) 40%, transparent 70%),
        linear-gradient(135deg, rgba(247, 92, 3, 0.8) 0%, rgba(241, 91, 181, 0.8) 50%, rgba(0, 187, 249, 0.8) 100%)
      `,
    }

    // 按钮内容
    const buttonContent = (
      <>
        {gradientOnHover && (
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={gradientStyle}
          ></span>
        )}
        <span className="relative z-10">{children}</span>
      </>
    )

    // 如果提供了href，则渲染为Link
    if (href) {
      return (
        <Button
          asChild
          className={cn(gradientButtonVariants({ variant, size, fullWidth }), className, "z-30")}
          {...props}
        >
          <Link href={href} className="relative flex items-center justify-center">
            {buttonContent}
          </Link>
        </Button>
      )
    }

    // 否则渲染为普通按钮
    return (
      <Button
        ref={ref}
        className={cn(gradientButtonVariants({ variant, size, fullWidth }), className, "z-30")}
        {...props}
      >
        <div className="relative flex items-center justify-center w-full">{buttonContent}</div>
      </Button>
    )
  },
)

GradientHoverButton.displayName = "GradientHoverButton"

export { GradientHoverButton, gradientButtonVariants }
