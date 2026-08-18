import { aboutUs, whyChooseUs } from "@/config/businessInfo";
import { SiteConfig } from "@/config/siteConfig";
import { 
  RiCalendarLine,
  RiMapPinLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiCarLine,
  RiStarLine,
  RiFlashlightLine,
  RiToolsLine,
  RiPriceTag3Line,
  RiArrowRightSLine,
  RiWhatsappLine,
  RiPhoneLine,
  RiTrophyLine,
  RiHeartLine,
  RiRocketLine,
} from "@remixicon/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function AboutPage() {
  const { 
    brandName, 
    city,  
    location, 
    foundedYear, 
    responseTime,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
  } = SiteConfig;

  // Stats for the page
  const stats = [
    { 
      label: "Founded", 
      value: foundedYear, 
      icon: RiCalendarLine,
      description: "Years of excellence"
    },
    { 
      label: "Response Time", 
      value: responseTime, 
      icon: RiTimeLine,
      description: "Average arrival"
    },
    { 
      label: "Customer Satisfaction", 
      value: "98%", 
      icon: RiStarLine,
      description: "Happy customers"
    },
    { 
      label: "Certified Mechanics", 
      value: "100%", 
      icon: RiShieldCheckLine,
      description: "Professional team"
    },
  ];

  // Values
  const values = [
    {
      title: "Excellence",
      icon: RiTrophyLine,
      description: "We deliver dealer-grade service with every repair, using OEM-quality parts and advanced diagnostic tools."
    },
    {
      title: "Transparency",
      icon: RiPriceTag3Line,
      description: "100% upfront pricing with zero hidden fees. You approve the work before we begin."
    },
    {
      title: "Reliability",
      icon: RiShieldCheckLine,
      description: "24/7 emergency coverage with guaranteed response times. We're always here when you need us."
    },
    {
      title: "Innovation",
      icon: RiRocketLine,
      description: "State-of-the-art diagnostic equipment and continuous training to stay ahead of automotive technology."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-primary/5 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              About Us
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Driving Excellence in <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Mobile Auto Repair</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
              {brandName} was built to solve the hassle, delays, and hidden costs of traditional auto repair shops across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center">
                    <div className="rounded-full border border-primary/20 bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="mt-3 text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-zinc-300">{stat.label}</div>
                  <div className="text-xs text-zinc-500">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Our Story
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Who We <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Are</span>
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-400 md:text-lg">
                <p>{aboutUs.para1}</p>
                <p>{aboutUs.para2}</p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <Button  className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/services">
                    Our Services
                    <RiArrowRightSLine className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Visual Card */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden border-2 border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm md:p-8">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/5 blur-2xl" />
                
                <div className="relative space-y-6">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="absolute -inset-4 rounded-full border-2 border-primary/20 blur-sm" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 mx-auto">
                        <RiCarLine className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{brandName}</h3>
                    <p className="mt-1 text-sm text-zinc-400">Mobile Auto Repair Excellence</p>
                  </div>

                  <div className="space-y-3 border-t border-zinc-800 pt-4">
                    <div className="flex items-center gap-3 rounded border border-zinc-800 bg-zinc-900/50 p-3">
                      <RiMapPinLine className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-xs text-zinc-500">Location</div>
                        <div className="text-sm text-white">{location}, {city}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded border border-zinc-800 bg-zinc-900/50 p-3">
                      <RiTimeLine className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-xs text-zinc-500">Response Time</div>
                        <div className="text-sm text-white">{responseTime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded border border-zinc-800 bg-zinc-900/50 p-3">
                      <RiCalendarLine className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-xs text-zinc-500">Founded</div>
                        <div className="text-sm text-white">{foundedYear}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -right-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              What Sets <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Us Apart</span>
            </h2>
            <p className="mt-3 text-zinc-400">
              We combine ultimate convenience with absolute technical excellence
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              // Map icons based on item name
              let Icon = RiShieldCheckLine;
              if (item.name.includes("Rapid") || item.name.includes("Arrival")) Icon = RiFlashlightLine;
              else if (item.name.includes("90%") || item.name.includes("Repair")) Icon = RiToolsLine;
              else if (item.name.includes("Transparent") || item.name.includes("Pricing")) Icon = RiPriceTag3Line;
              else if (item.name.includes("24/7") || item.name.includes("Emergency")) Icon = RiTimeLine;
              else if (item.name.includes("Certified") || item.name.includes("Warranty")) Icon = RiShieldCheckLine;

              return (
                <div
                  key={index}
                  className="group relative rounded border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white md:text-lg">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all group-hover:border-primary/20" />
                  <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all group-hover:border-primary/20" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -left-1/4 -bottom-1/4 h-200 w-200 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our Values
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              The Principles That <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Guide Us</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 rounded border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-primary/20 hover:bg-zinc-900/50"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{value.title}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <RiHeartLine className="h-4 w-4" />
              Ready to Experience the Difference?
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Experience the <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">AutoFix</span> Difference Today
            </h2>
            <p className="mt-3 text-zinc-400">
              Join thousands of satisfied customers who trust us for their mobile car repair needs in {city}
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