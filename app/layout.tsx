import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LetoAi - AI已来，未来已来！",
  description: "LetoAi 将前沿人工智能技术与教育深度融合，为学生和教育工作者创造个性化、高效的学习体验。",
    generator: 'v0.app',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.letoai.tech/",
    },
    openGraph: {
      type: 'website',
      siteName: 'LetoAi',
      title: "LetoAi - AI已来，未来已来！",
      description: "LetoAi 将前沿人工智能技术与教育深度融合，为学生和教育工作者创造个性化、高效的学习体验。",
      url: "https://www.letoai.tech/",
      images: [
        {
          url: '/ai-educational-content.png',
          width: 1024,
          height: 544,
          alt: 'LetoAi - AI已来，未来已来',
        }
      ],
      locale: 'zh_CN',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@hey_letoai',
      title: "LetoAi - AI已来，未来已来！",
      description: "LetoAi 将前沿人工智能技术与教育深度融合，为学生和教育工作者创造个性化、高效的学习体验。",
      images: ['/ai-educational-content.png'],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 网站图标 */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* 微信分享优化标签 */}
        <meta name="wxcard" content="summary_large_image" />
        <meta property="wxcard:title" content="LetoAi - AI已来，未来已来！" />
        <meta property="wxcard:description" content="LetoAi 将前沿人工智能技术与教育深度融合，为学生和教育工作者创造个性化、高效的学习体验。" />
        <meta property="wxcard:image" content="https://www.letoai.tech/ai-educational-content.png" />
        <meta property="wxcard:url" content="https://www.letoai.tech/" />

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
