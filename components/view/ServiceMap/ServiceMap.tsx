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
  RiStoreLine,
  RiPhoneFill,
  RiArrowRightBoxFill,
  RiMailAddFill,
  RiArrowRightCircleFill,
  RiUserLocationLine,
} from "@remixicon/react";
import { displayNumber, SiteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo/autodrop-logo.png";

// Icon mapping for service area types
const areaIconMap: Record<string, React.ElementType> = {
  Dubailand: RiMap2Line,
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
  const {
    GMB,
    serviceAreas,
    brandName,
    city,
    responseTime,
    location,
    streetAddress,
    displayNumber,
  } = SiteConfig;
  const [isMounted, setIsMounted] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                   repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(200,200,200,0.2) 60px, rgba(200,200,200,0.2) 61px),
                   repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(200,200,200,0.2) 60px, rgba(200,200,200,0.2) 61px)
                 `,
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
          <div className="absolute left-0 top-1/3 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-linear-to-l from-transparent via-primary/50 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Brand accent lines */}
        <div className="absolute bottom-0 left-0 h-px w-2/3 bg-linear-to-r from-primary/30 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-linear-to-l from-primary/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Service Area
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-primary/30 to-transparent" />
          </div>
          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Where We{" "}
              <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Serve
              </span>
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
          
              {/* Map Badge - Top Right */}
              <div className="absolute right-4 top-4 z-10 rounded-lg bg-background/90 px-3 py-1.5 shadow-lg backdrop-blur-sm border border-primary/10">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <RiNavigationLine className="h-3 w-3 text-primary" />
                  <span>GPS: {location}</span>
                </div>
              </div>

              <div className="aspect-video w-full lg:aspect-4/3">
                <iframe
                  title={`${brandName} - Location Map`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14452.479077071097!2d55.15207524234928!3d25.097806744397182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6915f1434d%3A0x316198ea6ee3651e!2sAl%20Sufouh%20-%20Dubai%20Internet%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1788272541573!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  className={cn(
                    "transition-opacity duration-700 h-70 md:h-full",
                    isMapLoaded ? "opacity-100" : "opacity-0",
                  )}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
                {/* <div className=" rounded-lg bg-background/95 px-4 py-3 shadow-lg backdrop-blur-sm border border-primary/10 ">
                  <div className="flex items-start gap-3">
                    <div className="">
                      <Image
                        className="rounded"
                        src={logo}
                        width={120}
                        height={120}
                        alt="AutoDrop Logo"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground truncate md:text-base">
                        {brandName}
                      </p>
                      <p className="text-xs mt-1">
                        Address: {location}, {city}
                      </p>
                      <p className="text-xs mt-1">Phone: {displayNumber}</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Service Areas List (40% on desktop) */}
          <div className="lg:col-span-2">
            <div className="relative h-full">
              {/* Card container */}
              <div className="border-2 bg-background/50 p-4 md:p-6">
                {/* Header with count */}

                <div className="rounded-lg -mt-2 mb-3 border border-primary/10 p-2">
                  <div className="flex items-start gap-3">
                    <div className="">
                      <Image
                        className="rounded"
                        src={logo}
                        width={100}
                        height={100}
                        alt="AutoDrop Logo"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {brandName}
                      </p>
                      <p className="text-xs mt-1">
                        Address: {location}, {city}
                      </p>
                      <p className="text-xs mt-1">Phone: {displayNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between border-b pb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider ">
                    Service Areas
                  </h3>
                  <span className="rounded border px-2 py-0.5 text-xs font-medium text-primary">
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
                        <Icon className="h-3.5 w-3.5 shrink-0 text-primary transition-colors group-hover:text-primary" />
                        <span className="flex-1  transition-colors group-hover:text-foreground">
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
              <div className="mt-3  grid grid-cols-3 gap-2">
                <div className="rounded border border-primary/10  p-2 text-center">
                  <div className="text-sm font-bold text-primary">
                    {responseTime}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Response
                  </div>
                </div>
                <div className="rounded border border-primary/10 bg-primary/5 p-2 text-center">
                  <div className="text-sm font-bold text-primary">24/7</div>
                  <div className="text-[10px] text-muted-foreground">
                    Availability
                  </div>
                </div>
                <div className="rounded border border-primary/10 bg-primary/5 p-2 text-center">
                  <div className="text-sm font-bold text-primary">100%</div>
                  <div className="text-[10px] text-muted-foreground">
                    Coverage
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
