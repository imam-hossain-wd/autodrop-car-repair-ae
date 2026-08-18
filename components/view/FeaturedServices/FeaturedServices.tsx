// components/view/FeaturedServices/FeaturedServices.tsx
"use client";

import Link from "next/link";
import { 
  RiToolsLine,
  RiArrowRightSLine,
  RiFlashlightLine
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";

// Define featured services - using actual service slugs from your data
const FEATURED_SERVICE_SLUGS = [
  "battery-replacement", // Make sure this matches your actual slug
  "jump-start",
  "computer-diagnostic",
  "alternator-repair",
  "fuel-pump-repair",
  "starter-motor-repair",
  "ac-repair",
  "brake-pad-repair"
];

// Helper to get features from service data
const getFeaturesFromService = (service: any): string[] => {
  return service.features || [];
};

interface FeaturedServicesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function FeaturedServices({ 
  title = "Featured Services",
  subtitle = "Our most popular mobile repair services with transparent pricing",
  limit = 8
}: FeaturedServicesProps) {
  const { city, responseTime, brandName } = SiteConfig;
  
  // Get featured services - filter by matching slugs
  const featuredServices = services
    .filter(service => {
      // Check if service slug matches any in FEATURED_SERVICE_SLUGS
      // Also handle partial matches just in case
      return FEATURED_SERVICE_SLUGS.some(slug => 
        service.slug === slug || 
        service.slug.includes(slug) || 
        slug.includes(service.slug)
      );
    })
    .slice(0, limit);

  // If no services found with the exact slugs, show first 8 services as fallback
  const displayServices = featuredServices.length > 0 ? featuredServices : services.slice(0, limit);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-primary/8" />
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Featured
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {responseTime} response
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1">
                <RiToolsLine className="h-4 w-4 text-primary" />
                {displayServices.length} featured
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayServices.map((service) => (
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

        {/* View All Services Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-8 py-3.5 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10"
          >
            View All Services
            <RiArrowRightSLine className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}