// components/sections/why-choose-us.tsx
// Assumption: 2-column grid on tablet+, single column on mobile
// Design approach: Editorial, typography-led with subtle visual anchors

import { 
  RiSpeedLine, 
  RiToolsLine, 
  RiPriceTag3Line, 
  RiTimeLine, 
  RiShieldCheckLine,
  RiCheckboxCircleLine
} from "@remixicon/react";
import { whyChooseUs } from "@/config/businessInfo";
import { SiteConfig } from "@/config/siteConfig";

// Icon mapping for each benefit
const iconMap: Record<string, typeof RiSpeedLine> = {
  "Rapid 5–15 Minute Onsite Arrival": RiSpeedLine,
  "90% Onsite Repair Completion": RiToolsLine,
  "100% Transparent, Upfront Pricing": RiPriceTag3Line,
  "24/7/365 Emergency Coverage": RiTimeLine,
  "Certified Mechanics & Service Warranty": RiShieldCheckLine,
};

// Color mapping for subtle accent variations
const colorMap: Record<string, string> = {
  "Rapid 5–15 Minute Onsite Arrival": "border-primary/20 bg-primary/5",
  "90% Onsite Repair Completion": "border-blue-500/20 bg-blue-500/5",
  "100% Transparent, Upfront Pricing": "border-emerald-500/20 bg-emerald-500/5",
  "24/7/365 Emergency Coverage": "border-purple-500/20 bg-purple-500/5",
  "Certified Mechanics & Service Warranty": "border-amber-500/20 bg-amber-500/5",
};

// Gradient color for number accents
const numberColorMap: Record<string, string> = {
  "Rapid 5–15 Minute Onsite Arrival": "text-primary",
  "90% Onsite Repair Completion": "text-blue-500",
  "100% Transparent, Upfront Pricing": "text-emerald-500",
  "24/7/365 Emergency Coverage": "text-purple-500",
  "Certified Mechanics & Service Warranty": "text-amber-500",
};

export function WhyChooseUs() {
  const { brandName, city } = SiteConfig;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Background System */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/5" />
        
        {/* Dynamic glowing orbs */}
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Sophisticated geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-0 top-0 h-full w-full" 
               style={{
                 backgroundImage: `
                   repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(200,200,200,0.3) 40px, rgba(200,200,200,0.3) 41px),
                   repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(200,200,200,0.3) 40px, rgba(200,200,200,0.3) 41px)
                 `
               }}
          />
        </div>

        {/* Diagonal motion lines */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Floating geometric elements */}
        <div className="absolute left-[5%] top-[15%] hidden opacity-10 lg:block">
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rotate-12 border border-primary/20" />
            <div className="h-8 w-8 -rotate-12 border border-primary/30" />
          </div>
        </div>
        <div className="absolute right-[8%] top-[25%] hidden opacity-10 lg:block">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 -rotate-6 border border-primary/20" />
            <div className="h-6 w-6 rotate-12 border border-primary/30" />
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[10%] hidden opacity-10 lg:block">
          <div className="flex flex-col items-center gap-2">
            <div className="h-20 w-20 rotate-[-20deg] border border-primary/20" />
            <div className="h-10 w-10 rotate-12 border border-primary/30" />
          </div>
        </div>

        {/* Subtle brand accent lines */}
        <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="mt-3 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Why Choose <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">AutoFix</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              The smart choice for mobile car repair in {city}
            </p>
          </div>
        </div>

        {/* Benefits Grid - 2 columns on tablet+, 1 on mobile */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.name] || RiCheckboxCircleLine;
            const colorClass = colorMap[item.name] || "border-primary/10 bg-primary/5";
            const numberColor = numberColorMap[item.name] || "text-primary";
            
            return (
              <div
                key={item.name}
                className="group relative flex gap-5 p-5 transition-all duration-300 hover:translate-x-1 md:p-6"
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 rounded border ${colorClass} transition-opacity duration-300 `} />
                <div className="absolute inset-0 rounded opacity-100 transition-opacity duration-300" 
                     style={{
                       background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 70%)`
                     }}
                />

                {/* Number Badge - Top left corner */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center font-mono text-sm font-bold tracking-tight opacity-20">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 space-y-2">
                  <div className="flex items-start gap-4">
                    {/* Icon with subtle background */}
                    <div className={`flex-shrink-0 rounded border p-2.5 transition-colors duration-300 ${colorClass}`}>
                      <Icon className={`h-5 w-5 ${numberColor}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-semibold leading-tight tracking-tight md:text-lg">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent on hover */}
                <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
                <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / Trust Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded border border-primary/10 bg-primary/5 p-4 md:mt-12 md:p-6">
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="font-medium">Trusted by drivers across {city}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <RiShieldCheckLine className="h-4 w-4 text-primary" />
              <span>Certified Mechanics</span>
            </div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div className="flex items-center gap-1">
              <RiPriceTag3Line className="h-4 w-4 text-primary" />
              <span>Transparent Pricing</span>
            </div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div className="flex items-center gap-1">
              <RiTimeLine className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}