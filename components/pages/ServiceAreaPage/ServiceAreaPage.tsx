// app/area-we-serve/page.tsx
// Service Area Page - Shows all areas we serve with detailed information

import { SiteConfig } from "@/config/siteConfig";
import { 
  RiTimeLine,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiNavigationLine,
  RiArrowRightSLine,
  RiWhatsappLine,
  RiPhoneLine,
  RiCheckLine,
  RiBuildingLine,
  RiHomeLine,
  RiStoreLine,
  RiBankLine,
  RiCommunityLine,

  RiCustomerServiceLine
} from "@remixicon/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


// Area categories with icons and descriptions
const areaCategories = [
  {
    name: "Central Dubai",
    icon: RiBuildingLine,
    areas: ["Downtown Dubai", "Business Bay", "Al Barsha", "Al Quoz"]
  },
  {
    name: "Residential Communities",
    icon: RiHomeLine,
    areas: ["Arabian Ranches", "Dubai Hills Estate", "Jumeirah Village Circle"]
  },
  {
    name: "Business & Commercial",
    icon: RiStoreLine,
    areas: ["Dubai Silicon Oasis", "Dubai Motor City", "Dubailand"]
  }
];

// Area details with coverage information
const areaDetails = [
  {
    name: "Downtown Dubai",
    icon: RiBuildingLine,
    responseTime: "5-10 min",
    coverage: "Full Coverage",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Opera"]
  },
  {
    name: "Business Bay",
    icon: RiBankLine,
    responseTime: "5-10 min",
    coverage: "Full Coverage",
    landmarks: ["Dubai Canal", "Business Bay Metro", "Executive Towers"]
  },
  {
    name: "Dubailand",
    icon: RiCommunityLine,
    responseTime: "10-15 min",
    coverage: "Full Coverage",
    landmarks: ["Global Village", "Dubai Autodrome", "IMG Worlds"]
  },
  {
    name: "Arabian Ranches",
    icon: RiHomeLine,
    responseTime: "10-15 min",
    coverage: "Full Coverage",
    landmarks: ["Al Qudra Road", "Arabian Ranches Golf Club", "Dubai Polo Club"]
  },
  {
    name: "Dubai Silicon Oasis",
    icon: RiBuildingLine,
    responseTime: "10-15 min",
    coverage: "Full Coverage",
    landmarks: ["DSO", "Silicon Park", "Dubai Digital Park"]
  },
  {
    name: "Dubai Motor City",
    icon: RiStoreLine,
    responseTime: "10-15 min",
    coverage: "Full Coverage",
    landmarks: ["Dubai Autodrome", "First Avenue Mall", "GEMS School"]
  },
  {
    name: "Jumeirah Village Circle",
    icon: RiHomeLine,
    responseTime: "10-15 min",
    coverage: "Full Coverage",
    landmarks: ["Circle Mall", "JVC Park", "GEMS School"]
  },
  {
    name: "Dubai Hills Estate",
    icon: RiHomeLine,
    responseTime: "10-15 min",
    coverage: "Full Coverage",
    landmarks: ["Dubai Hills Mall", "Al Khail Road", "Park Heights"]
  },
  {
    name: "Al Barsha",
    icon: RiBuildingLine,
    responseTime: "5-10 min",
    coverage: "Full Coverage",
    landmarks: ["Mall of Emirates", "Al Barsha Park", "Ski Dubai"]
  },
  {
    name: "Al Quoz",
    icon: RiStoreLine,
    responseTime: "5-10 min",
    coverage: "Full Coverage",
    landmarks: ["Alserkal Avenue", "Dubai Bowling Center", "Al Quoz Pond"]
  }
];

export default function ServiceAreaPage() {
  const {  
    city, 
    responseTime, 
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    serviceAreas
  } = SiteConfig;


  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-size-[50px_50px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Service Areas
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Where We <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
              We provide 24/7 mobile car repair services across all major areas of {city}. 
              Our mobile units are strategically positioned for rapid response.
            </p>
          </div>
        </div>
      </section>



      {/* Coverage Map Visualization */}
      <section className="relative w-full overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Coverage Map
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Full <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Coverage</span> Across {city}
            </h2>
            <p className="mt-3 text-zinc-400">
              Our mobile units are strategically positioned to reach you within {responseTime}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areaCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="rounded border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.areas.map((area) => (
                      <span
                        key={area}
                        className="rounded border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Areas Grid */}
      <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -right-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              All Areas
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              We Serve <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Everywhere</span> in {city}
            </h2>
            <p className="mt-3 text-zinc-400">
              No matter where you are in {city}, we'll come to you
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {areaDetails.map((area, index) => {
              const Icon = area.icon;
              return (
                <Link
                  key={index}
                  href={`/area-we-serve/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative overflow-hidden rounded border border-zinc-800 bg-zinc-900/30 p-5 transition-all hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-1 rounded border border-primary/10 bg-primary/5 px-2 py-0.5 text-[10px] text-primary">
                        <RiCheckLine className="h-3 w-3" />
                        {area.coverage}
                      </div>
                    </div>
                    
                    <h3 className="mt-3 text-base font-semibold text-white group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    
                    <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
                      <RiFlashlightLine className="h-3 w-3 text-primary" />
                      <span>Response: {area.responseTime}</span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {area.landmarks.slice(0, 2).map((landmark, i) => (
                        <span key={i} className="text-[10px] text-zinc-500 bg-zinc-800/30 px-2 py-0.5 rounded">
                          {landmark}
                        </span>
                      ))}
                      {area.landmarks.length > 2 && (
                        <span className="text-[10px] text-zinc-500">
                          +{area.landmarks.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-center gap-1 text-xs text-primary/0 transition-all group-hover:text-primary">
                      <span>View Area</span>
                      <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all group-hover:border-primary/20" />
                  <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all group-hover:border-primary/20" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Coverage Section */}
      <section className="relative w-full overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -left-1/4 -bottom-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Why Our Coverage Matters
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Strategic <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Positioning</span> for Rapid Response
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded border border-zinc-800 bg-zinc-900/30 p-6 text-center transition-all hover:border-primary/20">
              <RiNavigationLine className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-white">Strategic Locations</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Mobile units positioned near major highways and arterial roads for fastest response
              </p>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-900/30 p-6 text-center transition-all hover:border-primary/20">
              <RiTimeLine className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-white">{responseTime} Response</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Average arrival time across all areas of {city}
              </p>
            </div>
            <div className="rounded border border-zinc-800 bg-zinc-900/30 p-6 text-center transition-all hover:border-primary/20">
              <RiShieldCheckLine className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-white">100% Coverage</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Full coverage across all residential and commercial districts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <RiCustomerServiceLine className="h-4 w-4" />
              Need Service in Your Area?
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              We're Just <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Minutes Away</span>
            </h2>
            <p className="mt-3 text-zinc-400">
              No matter where you are in {city}, our mobile mechanics will reach you within {responseTime}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                <Link href={numberCallLink}>
                  <RiPhoneLine className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
              <Button  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-base">
                <Link href={whatsappCallLink}>
                  <RiWhatsappLine className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Link>
              </Button>
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