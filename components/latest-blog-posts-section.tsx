import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import { DescriptionText } from "@/components/description-text"
import { Button } from "@/components/ui/button"
import { home } from "@/config/text"
import type { BlogPost } from "@/lib/blog-posts"
import { getLatestPosts } from "@/lib/blog-posts"

function formatDateLabel(date: string) {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return formatter.format(new Date(date))
}

interface LatestBlogPostsSectionProps {
  posts?: BlogPost[]
}

export default function LatestBlogPostsSection({ posts = getLatestPosts(3) }: LatestBlogPostsSectionProps) {
  const sectionCopy = home.blogSection

  if (!sectionCopy || posts.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby="latest-blog-posts-heading"
      className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50/60 via-white to-orange-50/40 dark:from-[#030315] dark:via-[#04041a] dark:to-[#050522] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-letoOrange/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/5 h-72 w-72 rounded-full bg-letoTurquoise/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="latest-blog-posts-heading"
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {sectionCopy.title}
          </h2>
          {sectionCopy.description ? (
            <DescriptionText
              size="medium"
              className="mt-4 text-slate-600 dark:text-white/70"
            >
              {sectionCopy.description}
            </DescriptionText>
          ) : null}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-white/90 p-8 shadow-lg shadow-letoOrange/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-letoOrange/20 dark:border-white/5 dark:bg-white/10 dark:shadow-black/20"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/60">
                  <span className="rounded-full bg-letoOrange/10 px-3 py-1 text-xs font-medium text-letoOrange dark:bg-letoTurquoise/10 dark:text-letoTurquoise" itemProp="articleSection">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.publishDate} itemProp="datePublished">
                      {formatDateLabel(post.publishDate)}
                    </time>
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-letoOrange dark:text-white dark:group-hover:text-letoTurquoise">
                  <Link href={`/blog/${post.id}`} itemProp="url">
                    <span itemProp="headline">{post.title}</span>
                  </Link>
                </h3>

                <DescriptionText
                  size="small"
                  className="mt-4 text-slate-600 line-clamp-3 dark:text-white/70"
                  itemProp="description"
                >
                  {post.excerpt}
                </DescriptionText>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex flex-wrap gap-2" aria-label="文章标签">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-medium text-letoOrange transition-colors duration-300 hover:text-letoWarmStart dark:text-letoTurquoise dark:hover:text-letoCoolEnd"
                  aria-label={`${post.title} - 阅读全文`}
                >
                  阅读全文
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild variant="ghost" className="gap-2 text-slate-700 hover:text-letoOrange dark:text-white/80 dark:hover:text-letoTurquoise">
            <Link href="/blog">
              {sectionCopy.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
