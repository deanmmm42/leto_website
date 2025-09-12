import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LetoAi - AI 赋能教育的未来",
  description: "LetoAi 将前沿人工智能技术与教育深度融合，为学生和教育工作者创造个性化、高效的学习体验。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 添加初始主题检测脚本，在页面加载前执行 */}
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            document.documentElement.style.backgroundColor = '#030314';
          } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.style.backgroundColor = '';
          }
          console.log('Initial theme applied:', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        } catch (e) {
          console.error('Error applying theme:', e);
        }
      })();
    `,
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
