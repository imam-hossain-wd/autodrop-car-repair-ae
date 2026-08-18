/* eslint-disable react-hooks/set-state-in-effect */
// components/sections/service-map.tsx
// Assumption: Two-column layout on desktop (map left 60%, areas right 40%), stacked on mobile with map first
// Features: Graceful fallback if embedMap is empty, responsive chip grid for service areas

"use client";

import { useState, useEffect } from "react";
import { 
  RiMapPinLine, 
  RiRoadMapLine, 
  RiNavigationLine,
  RiTimeLine,
  RiCheckLine,
  RiArrowRightSLine,
  RiMap2Line,
  RiCompassLine,
  RiBuildingLine,
  RiHomeLine,
  RiStoreLine
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import Link from "next/link";

// Icon mapping for service area types
const areaIconMap: Record<string, React.ElementType> = {
  "Dubailand": RiMap2Line,
  "Arabian Ranches": RiHomeLine,
  "Dubai Silicon Oasis": RiBuildingLine,
  "Dubai Motor City": RiNavigationLine,
  "Jumeirah Village Circle": RiHomeLine,
  "Dubai Hills Estate": RiHomeLine,
  "Business Bay": RiStoreLine,
  "Al Barsha": RiBuildingLine,
  "Al Quoz": RiStoreLine,
  "Downtown Dubai": RiBuildingLine,
};

export function ServiceMap() {
  const { GMB, serviceAreas, brandName, city, responseTime } = SiteConfig;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Split areas into two groups for responsive display
  const midPoint = Math.ceil(serviceAreas.length / 2);
  const firstColumn = serviceAreas.slice(0, midPoint);
  const secondColumn = serviceAreas.slice(midPoint);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Background System */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient with map-inspired colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-primary/8" />
        
        {/* Dynamic glowing orbs */}
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Map-inspired grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(200,200,200,0.2) 60px, rgba(200,200,200,0.2) 61px),
                   repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(200,200,200,0.2) 60px, rgba(200,200,200,0.2) 61px)
                 `
               }}
          />
        </div>

        {/* Geometric navigation-inspired elements */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-[10%] top-[20%] h-32 w-32 rotate-45 border border-primary/30" />
          <div className="absolute right-[15%] top-[15%] h-24 w-24 -rotate-12 border border-primary/20" />
          <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/20" />
          <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/30" />
          
          {/* Compass-like elements */}
          <div className="absolute left-[30%] top-[55%] h-16 w-16 rotate-6 border border-primary/10" />
          <div className="absolute right-[35%] bottom-[45%] h-20 w-20 -rotate-8 border border-primary/10" />
        </div>

        {/* Diagonal motion lines suggesting routes */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Brand accent lines */}
        <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Service Area
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Where We <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Serve</span>
            </h2>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <RiTimeLine className="h-4 w-4 text-primary" />
                {responseTime} response
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1">
                <RiMapPinLine className="h-4 w-4 text-primary" />
                {serviceAreas.length}+ locations
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Left Column - Map (60% on desktop) */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden border-2 bg-background/50">
              {isMounted && GMB?.embedMap ? (
                // Google Maps Embed
                <div className="aspect-video w-full lg:aspect-[4/3]">
                  <iframe
                    src={GMB.embedMap}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    title={`${brandName} - Service Area Map`}
                  />
                </div>
              ) : (
                // Graceful Fallback Placeholder
                <div className="relative aspect-video w-full lg:aspect-[4/3] bg-gradient-to-br from-primary/5 via-background to-primary/10">
                  {/* Decorative map pattern */}
                  <div className="absolute inset-0 opacity-[0.05]">
                    <div className="absolute inset-0" 
                         style={{
                           backgroundImage: `
                             repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(200,200,200,0.3) 40px, rgba(200,200,200,0.3) 41px),
                             repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(200,200,200,0.3) 40px, rgba(200,200,200,0.3) 41px)
                           `
                         }}
                    />
                  </div>

                  {/* Floating geometric shapes */}
                  <div className="absolute left-[10%] top-[15%] h-16 w-16 rotate-12 border border-primary/20" />
                  <div className="absolute right-[15%] top-[25%] h-12 w-12 -rotate-6 border border-primary/20" />
                  <div className="absolute bottom-[20%] left-[20%] h-20 w-20 rotate-45 border border-primary/20" />
                  <div className="absolute right-[20%] bottom-[25%] h-14 w-14 -rotate-12 border border-primary/20" />

                  {/* Center content */}
                  <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="relative">
                      <div className="absolute -inset-8 rounded-full border-2 border-primary/10 blur-sm" />
                      <div className="relative rounded-full border-2 border-primary/20 bg-background/80 p-6 backdrop-blur-sm">
                        <RiMap2Line className="h-12 w-12 text-primary/60" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">Interactive Map Coming Soon</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      We serve all of {city} and surrounding areas. Enter your location for immediate service.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <RiCheckLine className="h-3 w-3 text-primary" />
                        {responseTime} response
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <RiCheckLine className="h-3 w-3 text-primary" />
                        24/7 availability
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <RiCheckLine className="h-3 w-3 text-primary" />
                        Certified mechanics
                      </span>
                    </div>
                    {/* Note for developer */}
                    <div className="mt-4 rounded border border-primary/10 bg-primary/5 px-3 py-1.5 text-[10px] text-muted-foreground/60">
                      ℹ️ Add Google Maps embed URL to SiteConfig.GMB.embedMap
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-primary/30" />
                  <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-primary/30" />
                  <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-primary/30" />
                  <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-primary/30" />
                </div>
              )}

              {/* Map overlay badge */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded border bg-background/90 px-3 py-1.5 text-xs backdrop-blur-sm md:left-6 md:top-6">
                <RiMapPinLine className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium">{serviceAreas.length} Service Locations</span>
              </div>
            </div>
          </div>

          {/* Right Column - Service Areas List (40% on desktop) */}
          <div className="lg:col-span-2">
            <div className="relative h-full">
              {/* Card container */}
              <div className="border-2 bg-background/50 p-4 md:p-6">
                {/* Header with count */}
                <div className="mb-4 flex items-center justify-between border-b pb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Service Areas
                  </h3>
                  <span className="rounded border bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {serviceAreas.length}
                  </span>
                </div>

                {/* Two-column chip grid */}
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {serviceAreas.map((area) => {
                    const Icon = areaIconMap[area.name] || RiMapPinLine;
                    return (
                      <Link
                        key={area.slug}
                        href={`/area-we-serve/${area.slug}`}
                        className="group flex items-center gap-2 rounded border border-transparent px-3 py-2 text-sm transition-all duration-200 hover:border-primary/20 hover:bg-primary/5 hover:pl-4"
                      >
                        <Icon className="h-3.5 w-3.5 flex-shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                        <span className="flex-1 text-muted-foreground transition-colors group-hover:text-foreground">
                          {area.name}
                        </span>
                        <RiArrowRightSLine className="h-4 w-4 flex-shrink-0 text-primary/0 transition-all group-hover:text-primary/60" />
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-4 border-t pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <RiNavigationLine className="h-3.5 w-3.5 text-primary" />
                      <span>Full {city} coverage</span>
                    </div>
                    <Link
                      href="/area-we-serve"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View all areas
                      <RiArrowRightSLine className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick stat bubbles */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded border border-primary/10 bg-primary/5 p-2 text-center">
                  <div className="text-sm font-bold text-primary">{responseTime}</div>
                  <div className="text-[10px] text-muted-foreground">Response</div>
                </div>
                <div className="rounded border border-primary/10 bg-primary/5 p-2 text-center">
                  <div className="text-sm font-bold text-primary">24/7</div>
                  <div className="text-[10px] text-muted-foreground">Availability</div>
                </div>
                <div className="rounded border border-primary/10 bg-primary/5 p-2 text-center">
                  <div className="text-sm font-bold text-primary">100%</div>
                  <div className="text-[10px] text-muted-foreground">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}