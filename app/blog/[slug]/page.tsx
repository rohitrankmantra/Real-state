import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { blogData } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return blogData.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params
  const article = blogData.find((a) => a.slug === resolvedParams.slug)

  return {
    title: `${article?.title} - Mers Holdings LLC Blog`,
    description: article?.excerpt,
  }
}

export default async function BlogDetail({ params }: Props) {
  const resolvedParams = await params
  const article = blogData.find((a) => a.slug === resolvedParams.slug)

  if (!article) {
    return (
      <main className="min-h-screen w-full bg-white">
        <Navbar />
        <div className="py-24">
          <p className="text-center text-gray-600">Article not found.</p>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedArticles = blogData
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 2)

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30" />

        <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#c5a07c] uppercase">
                {article.category}
              </span>
              <span className="text-white/60 text-[10px] mx-4">•</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight uppercase tracking-wider">
              {article.title}
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              By {article.author}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-225 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 text-base leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </article>

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-4">
                  SHARE THIS ARTICLE
                </h3>
                <div className="flex gap-6">
                  <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">
                    FACEBOOK
                  </a>
                  <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">
                    TWITTER
                  </a>
                  <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Article Info */}
              <div className="mb-12 p-8 border border-gray-200 sticky top-24">
                <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                  ABOUT THIS ARTICLE
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">
                      CATEGORY
                    </p>
                    <p className="text-gray-600">{article.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">
                      PUBLISHED
                    </p>
                    <p className="text-gray-600">{article.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">
                      AUTHOR
                    </p>
                    <p className="text-gray-600">{article.author}</p>
                  </div>
                </div>
                <Link href="/blog">
                  <span className="block mt-6 text-xs font-bold tracking-[0.3em] uppercase text-[#c5a07c] hover:text-black transition-colors cursor-pointer">
                    ← BACK TO BLOG
                  </span>
                </Link>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-6 uppercase tracking-widest">
                    RELATED ARTICLES
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((related) => (
                      <Link key={related.id} href={`/blog/${related.slug}`}>
                        <div className="group cursor-pointer">
                          <div className="relative h-40 mb-4 overflow-hidden">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <p className="text-[10px] font-bold tracking-[0.2em] text-[#c5a07c] uppercase mb-2">
                            {related.date}
                          </p>
                          <h4 className="text-sm font-serif font-bold text-black group-hover:text-[#c5a07c] transition-colors uppercase tracking-widest line-clamp-2">
                            {related.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
