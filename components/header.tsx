"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeSwitcher } from "./theme-switcher"
import Image from "next/image"
import { navigation, common } from "@/config/text"
import { GradientHoverButton } from "@/components/ui/gradient-hover-button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home") // 默认设置为home

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // 只在首页检测当前活动的部分
      if (pathname === "/") {
        // 如果滚动位置接近顶部，直接设置为home
        if (window.scrollY < 100) {
          setActiveSection("home")
          return
        }

        const sections = ["home", "about", "services", "features", "contact"]
        let foundActive = false

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            // 如果部分在视口中或刚刚离开视口顶部
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section)
              foundActive = true
              break
            }
          }
        }

        // 如果没有找到活动部分且在顶部，设置为home
        if (!foundActive && window.scrollY < 100) {
          setActiveSection("home")
        }
      }
    }

    // 初始化时设置activeSection
    if (pathname === "/") {
      setActiveSection("home")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // 更精确地确定哪个菜单项是活动的
  const isActive = (href: string) => {
    // 对于首页链接
    if (href === "/" && pathname === "/") {
      return activeSection === "home"
    }

    // 对于带有哈希的链接（如 /#about）
    if (href.startsWith("/#")) {
      const section = href.split("#")[1]
      return pathname === "/" && activeSection === section
    }

    // 对于其他页面链接
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-[#030314]/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Leto AI" width={100} height={33} className="h-8 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-6"
          >
            {navigation.menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "transition-colors duration-200 text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise",
                  isActive(item.href) && "text-letoOrange dark:text-letoTurquoise font-medium",
                )}
              >
                {item.name}
              </Link>
            ))}

            <ThemeSwitcher />

            <GradientHoverButton href="/contact">{common.cta.experience}</GradientHoverButton>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-[#030314]/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "py-2 transition-colors duration-200 text-slate-600 dark:text-white/70 hover:text-letoOrange dark:hover:text-letoTurquoise",
                    isActive(item.href) && "text-letoOrange dark:text-letoTurquoise font-medium",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <GradientHoverButton href="/contact" fullWidth>
                {common.cta.experience}
              </GradientHoverButton>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
