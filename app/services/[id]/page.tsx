import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { servicesData } from '@/lib/data'

interface Props {
  params: Promise<{ id: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.id)
  
  return {
    title: `${service?.title} - Mers Holdings LLC`,
    description: service?.description,
  }
}

export default async function ServiceDetail({ params }: Props) {
  const resolvedParams = await params
  const service = servicesData.find((s) => s.slug === resolvedParams.id)

  if (!service) {
    return (
      <main className="min-h-screen w-full bg-white">
        <Navbar />
        <div className="py-24">
          <p className="text-center text-gray-600">Service not found.</p>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden bg-black">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30" />

        <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight uppercase tracking-wider">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              {/* Features */}
              <h2 className="text-2xl font-serif font-bold text-black mb-8 uppercase tracking-widest">
                KEY FEATURES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 bg-black mt-2 shrink-0" />
                    <p className="text-gray-600 text-sm">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gray-50 p-12 rounded-sm">
                <h3 className="text-xl font-serif font-bold text-black mb-4 uppercase tracking-widest">
                  INTERESTED IN THIS SERVICE?
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Contact us today to learn more about how we can help manage your property.
                </p>
                <Link href="/contact">
                  <button className="btn-primary">GET IN TOUCH</button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Service Summary */}
              <div className="mb-12 p-8 border border-gray-200">
                <h3 className="text-lg font-serif font-bold text-black mb-4 uppercase tracking-widest">
                  ABOUT THIS SERVICE
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/services">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c5a07c] hover:text-black transition-colors cursor-pointer">
                    ← BACK TO SERVICES
                  </span>
                </Link>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="text-lg font-serif font-bold text-black mb-6 uppercase tracking-widest">
                    RELATED SERVICES
                  </h3>
                  <div className="space-y-6">
                    {relatedServices.map((related) => (
                      <Link key={related.id} href={`/services/${related.slug}`}>
                        <div className="group cursor-pointer p-4 border border-gray-200 hover:bg-gray-50 transition-colors">
                          <h4 className="text-sm font-serif font-bold text-black mb-2 uppercase tracking-widest group-hover:text-gray-700">
                            {related.title}
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {related.description}
                          </p>
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
