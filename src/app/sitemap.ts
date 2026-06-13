// app/sitemap.ts
import { MetadataRoute } from 'next'
import { products, jobs } from './data/content'

const baseUrl = 'https://raflay.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {

  const now = new Date()

  // ── Core static pages ─────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`,          lastModified: now, priority: 1.0, changeFrequency: 'weekly'  },
    { url: `${baseUrl}/products`, lastModified: now, priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${baseUrl}/services`, lastModified: now, priority: 0.9, changeFrequency: 'weekly'  },
    { url: `${baseUrl}/blog`,     lastModified: now, priority: 0.8, changeFrequency: 'weekly'  },
    { url: `${baseUrl}/careers`,  lastModified: now, priority: 0.8, changeFrequency: 'weekly'  },
    { url: `${baseUrl}/team`,     lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
  ]

  // ── Service pages ─────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = [
    'web-development', 'full-stack-development', 'react-development',
    'nextjs-development', 'hire-web-developers', 'web-development-solutions',
    'website-development-company', 'website-design-and-development',
    'web-development-islamabad', 'top-web-development-companies',
    'mobile-app-development', 'ios-app-development', 'android-app-development',
    'ui-ux-design', 'graphic-design', 'logo-design', 'branding-services',
    'motion-graphics', 'video-editing', 'youtube-video-editing', 'vfx-services',
    'ai-development', 'chatbot-development', 'automation-solutions',
    'custom-software-development', 'cloud-hosting', 'aws-services',
    'devops', 'docker-kubernetes',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // ── Blog posts ────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = [
    'aws-vs-azure',
    'best-ai-tools-for-business',
    'how-much-does-a-business-website-cost',
    'how-much-does-a-website-cost',
    'how-much-does-video-editing-cost',
    'how-to-build-a-mobile-app',
    'how-to-grow-your-business-with-mobile-apps',
    'logo-design-best-practices',
    'nextjs-vs-react-which-is-better',
    'nextjs-vs-react',
    'video-editing-for-youtube',
    'video-editing-tips-for-youtube-creators',
    'what-is-devops',
    'what-is-nextjs',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // ── Case studies ──────────────────────────────────────────────
  const caseStudyPages: MetadataRoute.Sitemap = [
    'video-editing-project',
    'ecommerce-website',
    'mobile-app-project',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }))

  // ── Dynamic: products ─────────────────────────────────────────
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }))

  // ── Dynamic: job listings ─────────────────────────────────────
  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.id}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: 'weekly' as const,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...caseStudyPages,
    ...productPages,
    ...jobPages,
  ]
}