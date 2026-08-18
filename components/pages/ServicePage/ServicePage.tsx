// app/services/page.tsx
// All Services Page - Shows all services with a beautiful hero section

"use client"
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { 
  RiToolsLine, 
  RiFlashlightLine, 
  RiTimeLine, 
  RiMapPinLine,
  RiCarLine,
  RiShieldCheckLine,
  RiCustomerServiceLine,
  RiAwardLine,
  RiThumbUpLine,
  RiWhatsappLine
} from "@remixicon/react";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import Link from "next/link";

// Helper to get features from service data
const getFeaturesFromService = (service: any): string[] => {
  return service.features || [];
};

export default function ServicesPage() {
  const { city, responseTime, brandName, displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          
          {/* Glowing orbs */}
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Diagonal lines */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
            <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
          
          {/* Geometric shapes */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute left-[15%] top-[20%] h-32 w-32 rotate-45 border border-primary/20" />
            <div className="absolute right-[20%] top-[15%] h-24 w-24 -rotate-12 border border-primary/15" />
            <div className="absolute bottom-[25%] left-[10%] h-40 w-40 rotate-12 border border-primary/20" />
            <div className="absolute bottom-[20%] right-[15%] h-28 w-28 -rotate-45 border border-primary/15" />
          </div>
          
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-primary/5 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {services.length} Services Available
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="mt-4 text-base text-zinc-400 md:text-lg">
                Professional mobile car repair services delivered to your doorstep across {city}. 
                Our certified mechanics come to you with advanced diagnostic tools and OEM-quality parts.
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded border border-zinc-800 bg-zinc-900/50 p-3 text-center">
                  <RiFlashlightLine className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-1 text-sm font-semibold text-white">{responseTime}</div>
                  <div className="text-[10px] text-zinc-500">Response Time</div>
                </div>
                <div className="rounded border border-zinc-800 bg-zinc-900/50 p-3 text-center">
                  <RiMapPinLine className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-1 text-sm font-semibold text-white">{city}</div>
                  <div className="text-[10px] text-zinc-500">Service Area</div>
                </div>
                <div className="rounded border border-zinc-800 bg-zinc-900/50 p-3 text-center">
                  <RiShieldCheckLine className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-1 text-sm font-semibold text-white">Certified</div>
                  <div className="text-[10px] text-zinc-500">Mechanics</div>
                </div>
                <div className="rounded border border-zinc-800 bg-zinc-900/50 p-3 text-center">
                  <RiTimeLine className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-1 text-sm font-semibold text-white">24/7</div>
                  <div className="text-[10px] text-zinc-500">Availability</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={numberCallLink}
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  <RiFlashlightLine className="h-5 w-5" />
                  Call Now
                </Link>
                <Link
                  href={whatsappCallLink}
                  className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
                >
                  <RiCarLine className="h-5 w-5" />
                  WhatsApp Us
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Card */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden border-2 border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm md:p-8">
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
                
                {/* Service Highlights */}
                <div className="relative space-y-6">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="absolute -inset-4 rounded-full border-2 border-primary/20 blur-sm" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 mx-auto">
                        <RiToolsLine className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">Comprehensive Services</h3>
                    <p className="mt-1 text-sm text-zinc-400">All in one place</p>
                  </div>

                  {/* Quick Service Highlights */}
                  <div className="grid grid-cols-2 gap-3 border-t border-zinc-800 pt-4">
                    <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <RiThumbUpLine className="h-4 w-4 text-primary" />
                      <span className="text-xs text-zinc-300">100% Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <RiAwardLine className="h-4 w-4 text-primary" />
                      <span className="text-xs text-zinc-300">Certified Experts</span>
                    </div>
                    <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <RiCustomerServiceLine className="h-4 w-4 text-primary" />
                      <span className="text-xs text-zinc-300">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/50 p-2">
                      <RiMapPinLine className="h-4 w-4 text-primary" />
                      <span className="text-xs text-zinc-300">All {city}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-zinc-800 pt-4 text-center">
                    <p className="text-xs text-zinc-500">
                      <span className="text-primary">{displayNumber}</span> · Available Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              All Services
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Complete <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Mobile Repair</span> Solutions
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-zinc-400">
              Choose from our comprehensive range of professional mobile car repair services
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {services.length} services available
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="inline-flex items-center gap-1">
                <RiTimeLine className="h-4 w-4 text-primary" />
                {responseTime} response
              </span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                features={getFeaturesFromService(service)}
                variant="default"
                showFeatures={true}
                showArrow={true}
                defaultExpanded={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <RiCustomerServiceLine className="h-4 w-4" />
              24/7 Emergency Service
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Need Immediate <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Assistance?</span>
            </h2>
            <p className="mt-3 text-zinc-400">
              Our certified mechanics are ready to assist you anywhere in {city}. 
              Call us now for immediate service.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={numberCallLink}
                className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                <RiFlashlightLine className="h-5 w-5" />
                Call Now
              </Link>
              <Link
                href={whatsappCallLink}
                className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-8 py-3.5 text-sm font-medium text-primary transition-all hover:bg-primary/20"
              >
                <RiWhatsappLine className="h-5 w-5" />
                WhatsApp Us
              </Link>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              {displayNumber} · Available 24/7 · {responseTime} Response
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}