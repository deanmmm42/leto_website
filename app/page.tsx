import Header from "@/components/header"
import HeroGeometric from "@/components/kokonutui/hero-geometric"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import LatestBlogPostsSection from "@/components/latest-blog-posts-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { getLatestPosts } from "@/lib/blog-posts"

export default function Home() {
  const latestPosts = getLatestPosts(3)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LetoAI",
    "url": "https://www.letoai.tech",
    "logo": "https://www.letoai.tech/images/logo.png",
    "description": "LetoAI专注于AI技术解决方案，提供电商营销、AI教育和全球工具开发服务，为头部企业提供定制化AI解决方案。",
    "foundingDate": "2020",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@letoai.tech",
      "availableLanguage": ["Chinese", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN",
      "addressRegion": "四川省",
      "addressLocality": "成都市"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "电商AI营销解决方案",
            "description": "智能推荐、转化优化、用户画像分析等AI营销服务"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "教育AI评估系统",
            "description": "智能评测、学习分析、个性化推荐等教育AI服务"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "海外AI工具开发",
            "description": "全球化产品设计、本地化优化、市场分析等海外工具服务"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LetoAI",
    "url": "https://www.letoai.tech"
  }

  const latestBlogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "最新博客文章",
    "itemListElement": latestPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.letoai.tech/blog/${post.id}`,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.publishDate,
        "dateModified": post.publishDate,
        "author": {
          "@type": "Organization",
          "name": "LetoAI"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LetoAI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.letoai.tech/images/logo.png"
          }
        },
        "mainEntityOfPage": `https://www.letoai.tech/blog/${post.id}`
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      {latestPosts.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(latestBlogSchema)
          }}
        />
      ) : null}
      <main>
        <Header />
        <HeroGeometric />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <LatestBlogPostsSection posts={latestPosts} />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
