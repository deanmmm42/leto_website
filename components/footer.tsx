import {} from "lucide-react"
import Link from "next/link"
import { LetoBrandText } from "./leto-brand-text"
import Image from "next/image"
import { footer } from "@/config/text"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#020210] border-t border-gray-200 dark:border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <div className="flex items-center">
                <Image src="/images/logo.png" alt="Leto AI" width={120} height={40} className="h-10 w-auto mb-4" />
              </div>
            </Link>
            <p className="text-slate-800 dark:text-white/80 font-medium mb-2">{footer.companyName}</p>
            <p className="text-slate-600 dark:text-white/60 mb-6">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{footer.home.title}</h3>
            <ul className="space-y-2">
              {footer.home.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{footer.solutions.title}</h3>
            <ul className="space-y-2">
              {footer.solutions.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{footer.blog.title}</h3>
            <ul className="space-y-2">
              {footer.blog.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{footer.resources.title}</h3>
            <ul className="space-y-2">
              {footer.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-white/60 mb-4 md:mb-0">
            {footer.legal.copyright} | <a
              href={footer.legal.icp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {footer.legal.icp.text}
            </a>
          </p>
          <div className="flex space-x-6">
            {footer.legal.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
