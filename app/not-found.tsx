"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, BookOpen, Mail, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { notFound } from "@/config/text"

function BackButton() {
  return (
    <Button
      variant="ghost"
      onClick={() => window.history.back()}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      返回上一页
    </Button>
  )
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-800/30">
      <Header />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404图标和数字 */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#F75C03] via-[#FFB100] to-[#00BBF9] bg-clip-text text-transparent">
                404
              </h1>
              <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-gray-200/20 dark:text-gray-800/20 blur-sm">
                404
              </div>
            </div>
          </div>

          {/* 错误信息 */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {notFound.heading}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {notFound.description}
            </p>
          </div>

          {/* 建议卡片 */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-orange-200/50 dark:border-gray-700/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {notFound.suggestions.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                {notFound.suggestions.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#F75C03] to-[#00BBF9] rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 快速导航按钮 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link href="/">
              <Button
                size="lg"
                className="w-full h-auto p-6 bg-gradient-to-r from-[#F75C03] to-[#FFB100] hover:from-[#F75C03]/90 hover:to-[#FFB100]/90 text-white border-0 flex-col gap-2"
              >
                <Home className="w-6 h-6" />
                {notFound.actions.backHome}
              </Button>
            </Link>

            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-auto p-6 border-2 border-orange-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-800 flex-col gap-2"
              >
                <Search className="w-6 h-6" />
                {notFound.actions.solutions}
              </Button>
            </Link>

            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-auto p-6 border-2 border-orange-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-800 flex-col gap-2"
              >
                <BookOpen className="w-6 h-6" />
                {notFound.actions.blog}
              </Button>
            </Link>

            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-auto p-6 border-2 border-orange-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-800 flex-col gap-2"
              >
                <Mail className="w-6 h-6" />
                {notFound.actions.contact}
              </Button>
            </Link>
          </div>

          {/* 返回上一页 */}
          <div>
            <BackButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}