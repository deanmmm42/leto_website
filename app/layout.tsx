import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LetoAI - 国内领先的AI技术解决方案提供商 | AI营销·AI教育·全球AI工具",
  description: "LetoAI是国内领先的AI技术解决方案提供商，专注AI技术商业化应用。提供电商营销、教育评估、全球AI工具三大领域专业解决方案，拥有10亿级私有数据、25项专利软著，助力企业数字化转型。",
  keywords: "AI营销,AI教育,人工智能解决方案,电商AI,智能教育,海外AI工具,数字化转型,LetoAI,AI公司,成都AI,智能风控,数字权益营销",
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
      siteName: 'LetoAI',
      title: "LetoAI - 国内领先的AI技术解决方案提供商 | AI营销·AI教育·全球AI工具",
      description: "LetoAI是国内领先的AI技术解决方案提供商，专注AI技术商业化应用。提供电商营销、教育评估、全球AI工具三大领域专业解决方案，拥有10亿级私有数据、25项专利软著，助力企业数字化转型。",
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
      title: "LetoAI - 国内领先的AI技术解决方案提供商 | AI营销·AI教育·全球AI工具",
      description: "LetoAI是国内领先的AI技术解决方案提供商，专注AI技术商业化应用。提供电商营销、教育评估、全球AI工具三大领域专业解决方案，拥有10亿级私有数据、25项专利软著，助力企业数字化转型。",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* 微信分享优化标签 */}
        <meta name="wxcard" content="summary_large_image" />
        <meta property="wxcard:title" content="LetoAI - 国内领先的AI技术解决方案提供商 | AI营销·AI教育·全球AI工具" />
        <meta property="wxcard:description" content="LetoAI是国内领先的AI技术解决方案提供商，专注AI技术商业化应用。提供电商营销、教育评估、全球AI工具三大领域专业解决方案，拥有10亿级私有数据、25项专利软著，助力企业数字化转型。" />
        <meta property="wxcard:image" content="https://www.letoai.tech/ai-educational-content.png" />
        <meta property="wxcard:url" content="https://www.letoai.tech/" />

        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LetoAI",
              "alternateName": "四川省乐途智行科技有限公司",
              "description": "国内领先的AI技术解决方案提供商，专注AI技术商业化应用，提供电商营销、教育评估、全球AI工具三大领域专业解决方案",
              "url": "https://www.letoai.tech",
              "logo": "https://www.letoai.tech/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "天府二街领地环球金融中心A808",
                "addressLocality": "成都",
                "addressRegion": "四川省",
                "postalCode": "610000",
                "addressCountry": "CN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@letoai.tech"
              },
              "foundingDate": "2022",
              "numberOfEmployees": "50-100",
              "knowsAbout": ["人工智能", "AI营销", "AI教育", "海外AI工具", "数字化转型", "智能风控"],
              "serviceArea": {
                "@type": "Country",
                "name": "中国"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI解决方案",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI营销解决方案",
                      "description": "数字权益智能营销，AI风控系统"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI教育解决方案",
                      "description": "综合素养评价系统，智能题库与个性化辅导"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "海外AI工具解决方案",
                      "description": "移动端AI应用开发，智能相册清理，健康监测工具"
                    }
                  }
                ]
              }
            })
          }}
        />

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
        <Script
          id="baidu-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?328ba2b9c162a3e1e011494cc35f3c39";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
            `,
          }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
