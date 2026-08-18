// app/services/page.tsx
// Services page showing all services with full details


import { SiteConfig } from "@/config/siteConfig";
import { RiToolsLine } from "@remixicon/react";
import {services} from "@/data/services/services"
import { FeaturedServices } from "./FeaturedServices";


export const metadata = {
  title: `All Services | ${SiteConfig.brandName}`,
  description: `Explore our complete range of mobile car repair services in ${SiteConfig.city}. From battery replacement to full diagnostics, we come to you.`,
  alternates: {
    canonical: `${SiteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero for services page */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Professional mobile car repair services delivered to your doorstep across {SiteConfig.city}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {SiteConfig.responseTime} response
            </span>
            <span className="h-4 w-px bg-zinc-700" />
            <span className="inline-flex items-center gap-1">
              <RiToolsLine className="h-4 w-4 text-primary" />
              {services.length} services available
            </span>
          </div>
        </div>
      </section>

      <FeaturedServices showAll={true} />
    </main>
  );
}