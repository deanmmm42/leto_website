"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  // 直接跟踪当前主题状态，不依赖 next-themes
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [mounted, setMounted] = useState(false)

  // 初始化时检测当前主题
  useEffect(() => {
    // 检查是否已经有主题设置
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkTheme(isDark)
    setMounted(true)

    console.log("Theme switcher mounted, initial theme:", isDark ? "dark" : "light")
  }, [])

  // 切换主题的函数
  const toggleTheme = () => {
    const newIsDark = !isDarkTheme
    setIsDarkTheme(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      console.log("Theme switched to: dark (DOM updated)")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      console.log("Theme switched to: light (DOM updated)")
    }

    // 强制重新应用样式
    document.body.style.display = "none"
    setTimeout(() => {
      document.body.style.display = ""
    }, 5)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 relative hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
      <span className="sr-only">切换主题</span>
    </Button>
  )
}
