import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    RiPhoneLine,
    RiWhatsappLine,
    RiTimeLine,
    RiMapPinLine,
    RiShieldCheckLine,
    RiFlashlightLine
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export function Hero() {
    const {
        numberCallLink,
        whatsappCallLink,
        responseTime,
        city,
        brandName,
        serviceAreas,
        foundedYear
    } = SiteConfig;

    //   const topAreas = serviceAreas.slice(0, 3).map(area => area.name);

    return (
        <header className="relative w-full overflow-hidden">
            {/* Ultra-Modern Background System */}
            <div className="absolute inset-0 -z-10">
                {/* Main gradient canvas */}
                <div className="absolute inset-0 bg-rose-100" />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/5 via-zinc-900/5 to-primary/10" /> */}

                {/* Dynamic automotive-inspired shapes */}
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="glow1" cx="20%" cy="30%" r="60%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="glow2" cx="80%" cy="70%" r="50%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#glow1)" />
                    <rect width="100%" height="100%" fill="url(#glow2)" />
                </svg>

                {/* Abstract automotive motion lines */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute left-0 top-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent" />
                    <div className="absolute left-1/4 top-1/3 h-[1px] w-3/4 rotate-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute right-1/4 bottom-1/3 h-[1px] w-3/4 -rotate-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <div className="absolute left-1/2 top-1/4 h-[1px] w-1/2 rotate-[160deg] bg-gradient-to-r from-transparent via-foreground to-transparent" />
                </div>

                {/* Geometric composition */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute left-[15%] top-[10%] h-32 w-32 rotate-45 border border-primary/30" />
                    <div className="absolute right-[20%] top-[15%] h-24 w-24 -rotate-12 border border-primary/20" />
                    <div className="absolute bottom-[20%] left-[10%] h-40 w-40 rotate-12 border border-primary/20" />
                    <div className="absolute bottom-[15%] right-[15%] h-28 w-28 -rotate-45 border border-primary/30" />
                    <div className="absolute left-[30%] top-[45%] h-16 w-16 rotate-6 border border-primary/10" />
                    <div className="absolute right-[35%] bottom-[40%] h-20 w-20 -rotate-8 border border-primary/10" />
                </div>

                {/* Subtle grid with perspective */}
                <div className="absolute inset-0 perspective-1000">
                    <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:30px_30px] -translate-y-1/2 scale-y-150" />
                </div>

                {/* Dynamic particle-like elements */}
                {/* <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary/10 bg-primary/5"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.3 + Math.random() * 0.3,
              }}
            />
          ))}
        </div> */}

                {/* Brand color accent gradients */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 right-0 h-1 w-2/3 bg-gradient-to-l from-primary via-primary/50 to-transparent" />
            </div>

            <section className="container relative mx-auto px-4 py-8 md:py-12 lg:py-14">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center space-y-6 md:space-y-4">
                        {/* Status Badge */}
                        <div className="inline-flex w-fit items-center gap-2 rounded border border-primary/30 bg-background/50 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm md:text-sm">
                            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                            <RiFlashlightLine className="h-3 w-3" />
                            <span className="font-mono">Premium Car Repair</span>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                <span className="block">24/7 Mobile Mechanic</span>
                                <span className="block bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                    Comes to You in {responseTime}
                                </span>
                                <span className="block text-xl font-normal ">
                                    Anywhere in {city}
                                </span>
                            </h1>
                            <p className="max-w-xl text-base leading-relaxed  md:text-md">
                                Certified mechanics, transparent upfront pricing, and dealer-grade diagnostics
                                delivered to your location. No towing fees, no workshop waiting.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <Button size="lg" className="group px-6 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 md:px-8">
                                <a href={numberCallLink}>
                                    <RiPhoneLine className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                    Call Now
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="px-6 backdrop-blur-sm md:px-8">
                                <a href={whatsappCallLink}>
                                    <RiWhatsappLine className="mr-2 h-4 w-4" />
                                    WhatsApp Us
                                </a>
                            </Button>
                        </div>

                        {/* Trust Strip */}
                        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm md:gap-6 md:text-base">
                            <div className="flex items-center gap-2">
                                <div className="rounded border border-primary/20 bg-primary/5 p-1 backdrop-blur-sm">
                                    <RiTimeLine className="h-4 w-4 text-primary md:h-5 md:w-5" />
                                </div>
                                <span>24/7 Emergency</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded border border-primary/20 bg-primary/5 p-1 backdrop-blur-sm">
                                    <RiMapPinLine className="h-4 w-4 text-primary md:h-5 md:w-5" />
                                </div>
                                <span>{responseTime} Arrival</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded border border-primary/20 bg-primary/5 p-1 backdrop-blur-sm">
                                    <RiShieldCheckLine className="h-4 w-4 text-primary md:h-5 md:w-5" />
                                </div>
                                <span>Certified Mechanics</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Card */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <Card className="relative w-full max-w-md overflow-hidden border-2 bg-background/80 p-6 shadow-2xl backdrop-blur-md transition-shadow hover:shadow-3xl md:p-8">
                            {/* Card decorative elements */}
                            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full border-2 border-primary/10 bg-primary/5 blur-2xl" />
                            <div className="absolute -bottom-32 -left-32 h-48 w-48 rounded-full border-2 border-primary/10 bg-primary/5 blur-2xl" />
                            <div className="absolute right-0 top-0 h-1 w-1/2 bg-linear-to-l from-primary/30 to-transparent" />

                            <div className="relative space-y-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                            Active Status
                                        </h3>
                                        <p className="flex items-center gap-2 text-md font-semibold">
                                            <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-green-500" />
                                            Available Now
                                        </p>
                                    </div>
                                    <span className="relative rounded border bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-sm">
                                        <span className="absolute -inset-px rounded border border-primary/30" />
                                        {responseTime} Response
                                    </span>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex items-center gap-3 text-sm">
                                        <RiMapPinLine className="h-5 w-5 text-primary" />
                                        <span className="font-medium">Service Areas:</span>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {serviceAreas.map((area) => (
                                            <span
                                                key={area.slug}
                                                className="rounded border bg-muted/30 px-3 py-1 text-xs backdrop-blur-sm"
                                            >
                                                {area.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-medium">Quick Quote:</span>
                                        <span className="text-muted-foreground">
                                            No hidden fees, upfront pricing
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded border border-primary/10 bg-primary/5 p-3 backdrop-blur-sm">
                                            <div className="text-2xl font-bold text-primary">90%</div>
                                            <div className="text-xs text-muted-foreground">Onsite Repairs</div>
                                        </div>
                                        <div className="rounded border border-primary/10 bg-primary/5 p-3 backdrop-blur-sm">
                                            <div className="text-2xl font-bold text-primary">100%</div>
                                            <div className="text-xs text-muted-foreground">Transparent Pricing</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            <RiShieldCheckLine className="h-3 w-3" />
                                            <span>Certified since {foundedYear}</span>
                                        </div>
                                        <span className="font-mono text-primary">{brandName}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </header>
    );
}