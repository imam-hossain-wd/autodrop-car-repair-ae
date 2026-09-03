// components/sections/FinalCTA.tsx
"use client";

import Link from "next/link";
import {
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiStarLine,
  RiArrowRightLine,
  RiCustomerService2Line,
  RiCheckDoubleLine,
  RiRoadsterLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function FinalCTA() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    location,
    streetAddress,
    city,
    country,
    responseTime,
    description,
  } = SiteConfig;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        
        {/* Premium gold/amber accent glow */}
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[700px] w-[700px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        
        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,200,100,0.08) 50px, rgba(255,200,100,0.08) 51px),
                repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,200,100,0.08) 50px, rgba(255,200,100,0.08) 51px)
              `,
            }}
          />
        </div>

        {/* Geometric premium accents */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute left-[15%] top-[20%] h-40 w-40 rotate-45 border border-primary/30" />
          <div className="absolute right-[20%] top-[15%] h-32 w-32 -rotate-12 border border-primary/20" />
          <div className="absolute bottom-[25%] left-[10%] h-48 w-48 rotate-12 border border-primary/20" />
          <div className="absolute bottom-[20%] right-[15%] h-36 w-36 -rotate-45 border border-primary/30" />
          
          {/* Diamond accents */}
          <div className="absolute left-[30%] top-[55%] h-12 w-12 rotate-45 border-2 border-primary/10" />
          <div className="absolute right-[35%] bottom-[45%] h-16 w-16 -rotate-12 border-2 border-primary/10" />
        </div>

        {/* Diagonal premium lines */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Premium glow at bottom */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-primary/10 to-transparent" />
        
        {/* Sparkle dots */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? 'rgba(255, 200, 50, 0.15)' : 'rgba(255, 180, 50, 0.08)',
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3,
                animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-8">
        <div className="mx-auto max-w-5xl">
        
          {/* Main Content */}
          <div className="text-center">
            {/* Heading with premium styling */}
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready for{" "}
              <span className="bg-linear-to-r mb-2 from-primary to-primary/70 bg-clip-text text-transparent">
                Professional
              </span>
              <br className="hidden sm:block " />
              <span className="text-white ">Car Repair?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-md">
              Get expert mobile mechanic service at your doorstep. No towing fees, 
              no waiting rooms, just professional repairs wherever you are in {city}.
            </p>


            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
              {/* Call Button - Primary */}
              <Link
                href={numberCallLink}
                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-linear-to-r from-primary to-primary/80 px-8 py-3 shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40 active:scale-[0.98]"
              >
                {/* Animated shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative flex  items-center justify-center gap-3">
                  <RiPhoneLine className="h-5 w-5" />
                  <span>
                    {/* <span className="block text-sm font-medium text-white/70">
                      Call Now
                    </span> */}
                    <span className="block text-base font-bold tracking-tight">
                      {displayNumber}
                    </span>
                  </span>
                  <RiArrowRightLine className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              {/* WhatsApp Button - Secondary */}
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800/50 px-8 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-lg hover:shadow-[#25D366]/10 active:scale-[0.98]"
              >
                <span className="relative flex items-center justify-center gap-3">
                  <RiWhatsappLine className="h-5 w-5 text-[#25D366]" />
                  <span>
   
                    <span className="block text-base font-bold tracking-tight text-white">
                      WhatsApp
                    </span>
                  </span>
                  <span className="flex h-5 items-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                    24/7
                  </span>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-primary/10 bg-primary/5 p-4 backdrop-blur-sm ">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <RiCheckDoubleLine className="h-5 w-5 text-primary" />
                <span>100% Satisfaction</span>
              </div>
              <div className="hidden h-6 w-px bg-zinc-700 md:block" />
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <RiShieldCheckLine className="h-5 w-5 text-primary" />
                <span>Warranty Included</span>
              </div>
              <div className="hidden h-6 w-px bg-zinc-700 md:block" />
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <RiCustomerService2Line className="h-5 w-5 text-primary" />
                <span>Support 24/7</span>
              </div>
              <div className="hidden h-6 w-px bg-zinc-700 md:block" />
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <RiStarLine key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span>Google Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for sparkle animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}