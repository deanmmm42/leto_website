"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  name: string
  href: string
  isCurrentPage?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center space-x-2 text-sm", className)} aria-label="面包屑导航">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && (
              <Home className="w-4 h-4 mr-1 text-slate-400 dark:text-white/50" />
            )}

            {item.isCurrentPage || index === items.length - 1 ? (
              <span className="text-slate-600 dark:text-white/70 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-slate-500 dark:text-white/60 hover:text-letoOrange dark:hover:text-letoTurquoise transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}

            {index < items.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-slate-400 dark:text-white/40" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}