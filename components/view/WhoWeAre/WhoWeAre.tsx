import { Card } from "@/components/ui/card";
import { 
  RiCalendarLine, 
  RiMapPinLine,  
  RiShieldCheckLine,
  RiCarLine,
  RiCustomerServiceLine,
  RiBuildingLine,
  RiClockwiseFill
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { aboutUs } from "@/config/businessInfo";

export function WhoWeAre() {
  const { foundedYear, city, country, location, responseTime } = SiteConfig;
  const { para1, para2 } = aboutUs;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full border-2 border-primary/5 bg-primary/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full border-2 border-primary/5 bg-primary/5 blur-3xl" />
        
        {/* Diagonal accent line */}
        <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-5">
        {/* Section Header */}
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              About Us
            </span>
            <div className="h-px w-60 bg-primary" />
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left Column - Text Content (60% on desktop) */}
          <div className="space-y-5 lg:col-span-3 lg:space-y-6">
            <div className="space-y-4 text-sm leading-relaxed  md:text-base text-gray-700">
              <p className="max-w-2xl">{para1}</p>
              <p className="max-w-2xl">{para2}</p>
            </div>

            {/* Brand Highlights - Mobile visible only */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="rounded border border-primary/10 bg-primary/5 p-4">
                <div className="text-lg font-bold text-primary">{foundedYear}</div>
                <div className="text-xs text-muted-foreground">Founded</div>
              </div>
              <div className="rounded border border-primary/10 bg-primary/5 p-4">
                <div className="text-md font-bold text-primary">{responseTime}</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Stats Block (40% on desktop) */}
          <div className="lg:col-span-2">
            <Card className="relative h-full overflow-hidden border-2 p-6 shadow-lg md:p-8">
              {/* Card decorative elements */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border-2 border-primary/10 bg-primary/5 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full border-2 border-primary/10 bg-primary/5 blur-2xl" />
              <div className="absolute right-0 top-0 h-1 w-1/3 bg-gradient-to-l from-primary/30 to-transparent" />

              <div className="relative space-y-6">
                {/* Founding Story Callout */}
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-3">
                    <RiCalendarLine className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Founded
                    </span>
                  </div>
                  <div className="mt-1 text-2xl font-bold md:text-3xl">
                    {foundedYear}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <RiMapPinLine className="h-4 w-4" />
                    <span>{city}, {country}</span>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="border-t pt-6">
                  <div className="space-y-2 text-sm text-gray-700">

                    <div className="flex items-start gap-3">
                      <RiClockwiseFill className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="">
                        {responseTime} Response Time
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <RiShieldCheckLine className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="">
                        100% Certified Mechanic
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <RiCarLine className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="">
                        Fully equipped mobile garage
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <RiCustomerServiceLine className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="">
                        24/7/365 emergency coverage
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <RiBuildingLine className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="">
                        Headquartered in {location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 rounded bg-primary/5 px-3 py-2 text-xs">
                    <RiShieldCheckLine className="h-4 w-4 text-primary" />
                    <span className="font-medium">Dealer-grade service with OEM-quality parts</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}