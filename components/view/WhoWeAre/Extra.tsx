// components/sections/hero.tsx
// Adapted to use the dark ambient gradient and glassmorphism design system
// while maintaining sharp corners (radius 0) per the master design rules.

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  RiWhatsappFill, 
  RiPhoneFill, 
  RiShieldCheckFill, 
  RiTimerFlashFill, 
  RiTimeFill,
  RiMapPinFill
} from '@remixicon/react';
import { SiteConfig } from '@/config/siteConfig';

export default function Extra() {
  const trustStats = [
    { icon: RiTimerFlashFill, label: `${SiteConfig.responseTime} Arrival` },
    { icon: RiTimeFill, label: '24/7 Emergency' },
    { icon: RiShieldCheckFill, label: 'Certified Mechanics' },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-rose-950 via-rose-900 to-neutral-950 py-10 md:py-12 lg:py-14">
      
      {/* Dark Ambient Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient Glow Effects */}
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-3xl" />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Copy */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white">
              24/7 Mobile Mechanic in {SiteConfig.city}
              <span className="block mt-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                We Come to You in {SiteConfig.responseTime}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
              Certified mechanics deliver transparent pricing and dealer-grade repairs directly to your location — no towing fees, no workshop wait times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white border-0 shadow-lg shadow-red-600/20 hover:from-red-700 hover:to-red-700"
              >
                <Link href={SiteConfig.numberCallLink} className="flex items-center gap-2 font-semibold">
                  <RiPhoneFill className="w-5 h-5" />
                  Call Now
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                <Link href={SiteConfig.whatsappCallLink} className="flex items-center gap-2 font-semibold">
                  <RiWhatsappFill className="w-5 h-5" />
                  WhatsApp Us
                </Link>
              </Button>
            </div>

            {/* Trust Strip - ONE per page */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5">
              {trustStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-neutral-400">
                  <stat.icon className="w-4 h-4 text-red-400" />
                  <span className="font-medium text-white">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Live Status Card (Glassmorphism) */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md border border-white/10 bg-white/5 p-6 space-y-4 backdrop-blur-sm shadow-2xl">
              
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <h3 className="text-xl font-heading font-bold text-white">Service Status</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-neutral-400">Service Area</span>
                  <span className="text-base font-bold text-white">{SiteConfig.location}, {SiteConfig.city}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-neutral-400">Response Time</span>
                  <span className="text-base font-bold text-red-400">{SiteConfig.responseTime}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-neutral-400">Availability</span>
                  <span className="text-base font-bold text-white">24 Hours</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-neutral-400">Headquarters</span>
                  <div className="flex items-center gap-2 text-base font-bold text-white">
                    <RiMapPinFill className="w-4 h-4 text-red-400" />
                    {SiteConfig.streetAddress}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-neutral-500 text-center font-medium uppercase tracking-wider">
                  Serving all of {SiteConfig.city} and surrounding areas
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}