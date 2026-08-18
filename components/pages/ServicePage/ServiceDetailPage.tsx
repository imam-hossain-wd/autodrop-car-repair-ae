// components/pages/ServicePage/ServicePage.tsx
"use client";

import Link from "next/link";
import { 
  RiArrowLeftSLine,
  RiCheckLine,
  RiTimeLine,
  RiMapPinLine,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiArrowRightSLine,
  RiWhatsappLine,
  RiPhoneLine,
  RiCustomerServiceLine,
  RiCarLine,
  RiToolsLine,
  RiPriceTag3Line,
  RiStarLine,
  RiAwardLine,
  RiThumbUpLine,
  RiArrowDownSLine,
  RiArrowUpSLine
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import { ServiceDetail } from "@/types/service";
import { useState } from "react";

// Helper to get features from service data
const getFeaturesFromService = (service: ServiceDetail): string[] => {
  return service.features || [];
};

interface ServicePageProps {
  service: ServiceDetail;
}

export default function ServiceDetailPage({ service }: ServicePageProps) {
  const { city, responseTime, brandName, displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Get related services (excluding current)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  // Get features
  const features = getFeaturesFromService(service);

  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-primary mb-6"
          >
            <RiArrowLeftSLine className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Available Now
                </div>
                {service.popular && (
                  <div className="inline-flex items-center gap-2 rounded border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-500">
                    <RiStarLine className="h-3 w-3" />
                    Popular
                  </div>
                )}
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                {service.name} in <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{city}</span>
              </h1>
              <p className="mt-4 text-base text-zinc-400 md:text-lg">
                {service.intro?.content || `Professional ${service.name} services delivered to your doorstep. Our certified mechanics come to you with advanced diagnostic tools and OEM-quality parts.`}
              </p>

              {/* Quick Stats */}
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
                  <RiPhoneLine className="h-5 w-5" />
                  Call Now
                </Link>
                <Link
                  href={whatsappCallLink}
                  className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
                >
                  <RiWhatsappLine className="h-5 w-5" />
                  WhatsApp Us
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Card */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden border-2 border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
                
                {/* Service Icon Large */}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full border-2 border-primary/20 blur-sm" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                      <RiCarLine className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{service.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">Mobile service in {city}</p>
                  
                  {/* Key metrics */}
                  <div className="mt-4 grid w-full grid-cols-2 gap-2 border-t border-zinc-800 pt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">100%</div>
                      <div className="text-[10px] text-zinc-500">Transparent Pricing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">90%</div>
                      <div className="text-[10px] text-zinc-500">Onsite Repairs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Features
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                What's Included
              </h2>
              <p className="mt-2 text-zinc-400">
                Everything you get with our {service.name} service
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <RiCheckLine className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {service.whyChooseUs?.points && service.whyChooseUs.points.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -right-1/4 -bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {service.whyChooseUs.heading || "Why Choose AutoFix?"}
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {service.whyChooseUs.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <RiAwardLine className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-zinc-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problem Signs Section */}
      {service.problemSignsSection?.signs && service.problemSignsSection.signs.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Warning Signs
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {service.problemSignsSection.heading || "Signs You Need This Service"}
              </h2>
              <p className="mt-2 text-zinc-400">
                {service.problemSignsSection.description || "Watch out for these warning signs"}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {service.problemSignsSection.signs.map((sign, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <RiFlashlightLine className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <span className="text-sm text-zinc-300">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {service.ourProcess?.steps && service.ourProcess.steps.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -right-1/4 -bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Process
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {service.ourProcess.heading || "How It Works"}
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.ourProcess.steps.map((step: any, index: number) => (
                <div
                  key={index}
                  className="relative rounded border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools & Products Section */}
      {service.toolsOrProducts?.brands && service.toolsOrProducts.brands.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Premium Quality
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {service.toolsOrProducts.heading || "Tools & Products We Use"}
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {service.toolsOrProducts.brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <RiToolsLine className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-zinc-300">{brand}</span>
                </div>
              ))}
            </div>
            {service.toolsOrProducts.note && (
              <div className="mt-4 rounded border border-primary/10 bg-primary/5 p-4 text-center text-sm text-zinc-400">
                {service.toolsOrProducts.note}
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                FAQ
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-3">
              {service.faq.map((item: any, index: number) => (
                <div
                  key={index}
                  className="rounded border border-zinc-800 bg-zinc-900/30 overflow-hidden transition-colors hover:border-primary/20"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-zinc-800/30 md:p-6"
                  >
                    <h4 className="font-semibold text-white pr-4">{item.question}</h4>
                    {expandedFaq === index ? (
                      <RiArrowUpSLine className="h-5 w-5 flex-shrink-0 text-primary" />
                    ) : (
                      <RiArrowDownSLine className="h-5 w-5 flex-shrink-0 text-primary" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="border-t border-zinc-800 p-4 md:p-6">
                      <p className="text-sm text-zinc-400">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {service.ctaSection && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
            <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-1/4 -bottom-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                <RiCustomerServiceLine className="h-4 w-4" />
                24/7 Emergency Service
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {service.ctaSection.heading || `Need ${service.name} Right Now?`}
              </h2>
              <p className="mt-3 text-zinc-400">
                {service.ctaSection.description || `Our certified mechanics are ready to assist you anywhere in ${city}. Call us now for immediate service.`}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={numberCallLink}
                  className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  <RiPhoneLine className="h-5 w-5" />
                  {service.ctaSection.buttonText || "Call Now"}
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
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="relative w-full overflow-hidden py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
            <div className="absolute -right-1/4 -top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Related
                </span>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  You Might Also Need
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
              >
                View All
                <RiArrowRightSLine className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.slug}
                  name={relatedService.name}
                  slug={relatedService.slug}
                  features={getFeaturesFromService(relatedService).slice(0, 3)}
                  variant="compact"
                  showFeatures={true}
                  showArrow={true}
                  defaultExpanded={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}