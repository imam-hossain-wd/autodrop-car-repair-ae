// app/page.tsx (or a dedicated hero component)

import { SiteConfig } from "@/config/siteConfig";
import { RiArrowRightLine, RiCustomerService2Line, RiTimeLine } from "@remixicon/react";


export default function Hero() {
  const { brandName, description, displayNumber, numberCallLink } = SiteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf6f0] via-white to-[#f3efe8]">
      {/* subtle background pattern (optional) */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* left content */}
          <div className="space-y-6">
            {/* trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Available 24/7 · 5-15 min arrival</span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Mobile Mechanic Dubai
              <span className="block text-primary">At Your Doorstep</span>
            </h1>

            <p className="max-w-lg text-base text-gray-600 sm:text-lg">
              {description}
            </p>

            {/* cta buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={numberCallLink}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <RiCustomerService2Line className="mr-2 h-5 w-5" />
                Call Now: {displayNumber}
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                Our Services
                <RiArrowRightLine className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <RiTimeLine className="h-5 w-5 text-primary" />
                <span className="font-medium">Response: {SiteConfig.responseTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </span>
                <span className="font-medium">4.9/5 · 200+ reviews</span>
              </div>
            </div>
          </div>

          {/* right visual: image + floating cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* main image placeholder — replace with real image */}
              <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl text-primary/30">🔧</span>
                </div>
              </div>

              {/* floating card 1 */}
              <div className="absolute -bottom-3 -left-3 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-100/50 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2 text-green-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Quick response</p>
                    <p className="text-xs text-gray-500">5-15 min arrival</p>
                  </div>
                </div>
              </div>

              {/* floating card 2 */}
              <div className="absolute -right-2 top-6 rounded-xl bg-white p-3 shadow-lg ring-1 ring-gray-100/50 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Certified pros</p>
                    <p className="text-xs text-gray-500">Warranty included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}