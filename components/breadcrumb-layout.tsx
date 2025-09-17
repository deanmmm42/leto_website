"use client"

import { usePathname } from "next/navigation"
import Breadcrumb from "@/components/breadcrumb"
import { getBreadcrumbItems } from "@/lib/breadcrumb-config"

interface BreadcrumbLayoutProps {
  pathname?: string
  className?: string
}

export default function BreadcrumbLayout({ pathname, className }: BreadcrumbLayoutProps) {
  const currentPathname = usePathname()
  const breadcrumbItems = getBreadcrumbItems(pathname || currentPathname)

  return (
    <div className={`pt-10 pb-4 ${className || ""}`}>
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  )
}