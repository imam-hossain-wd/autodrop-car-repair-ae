import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    RiPhoneLine,
    RiWhatsappLine,
    RiTimeLine,
    RiMapPinLine,
    RiShieldCheckLine,
    RiArrowRightLine,
    RiFlashlightLine,
    RiCarLine,
    RiCheckDoubleLine,
    RiRoadMapLine
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import Link from "next/link";


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

    return (
        <header className="relative w-full overflow-hidden mt-10">
            {/* Ultra-Modern Background System */}
            <div className="absolute inset-0 -z-10">
                {/* Main gradient canvas with depth */}
                <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-neutral-950 to-black/95" />

                {/* Dynamic animated gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-primary/3" />

                {/* Glowing orbs with animation */}
                <div className="absolute -right-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
                <div className="absolute -left-1/4 -bottom-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl animate-pulse-slower" />
                <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute right-1/3 top-1/4 h-75 w-75 rounded-full bg-yellow-500/5 blur-3xl animate-pulse-slow" />

                {/* Abstract automotive-inspired shapes */}
                <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                    <line x1="20%" y1="40%" x2="80%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.5" />
                    <line x1="15%" y1="60%" x2="85%" y2="60%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
                    <line x1="25%" y1="80%" x2="75%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.5" />
                    <path d="M 30 10 L 50 90" stroke="url(#lineGrad)" strokeWidth="0.5" opacity="0.3" />
                    <path d="M 70 10 L 50 90" stroke="url(#lineGrad)" strokeWidth="0.5" opacity="0.3" />
                </svg>

                {/* Geometric composition - enhanced */}
                <div className="absolute inset-0 opacity-[0.05]">
                    <div className="absolute left-[10%] top-[8%] h-40 w-40 rotate-45 border border-primary/30" />
                    <div className="absolute right-[15%] top-[12%] h-28 w-28 -rotate-12 border border-primary/20" />
                    <div className="absolute bottom-[25%] left-[8%] h-48 w-48 rotate-12 border border-primary/20" />
                    <div className="absolute bottom-[20%] right-[12%] h-32 w-32 -rotate-45 border border-primary/30" />
                    <div className="absolute left-[40%] top-[50%] h-20 w-20 rotate-6 border border-primary/10" />
                    <div className="absolute right-[30%] bottom-[45%] h-24 w-24 -rotate-8 border border-primary/10" />

                    {/* Additional accent shapes */}
                    <div className="absolute left-[55%] top-[15%] h-12 w-12 rotate-12 border border-primary/15" />
                    <div className="absolute right-[45%] bottom-[20%] h-16 w-16 -rotate-15 border border-primary/15" />
                </div>

                {/* Premium grid with perspective */}
                <div className="absolute inset-0 perspective-1000">
                    <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-size-[50px_50px]" />
                    <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-size-[25px_25px] -translate-y-1/3 scale-y-150" />
                </div>

                {/* Premium brand accent gradients */}
                <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 right-0 h-1 w-2/3 bg-linear-to-l from-primary via-primary/50 to-transparent" />
                <div className="absolute left-0 top-1/2 h-32 w-32 bg-linear-to-r from-primary/5 to-transparent blur-2xl" />
                <div className="absolute right-0 bottom-1/2 h-32 w-32 bg-linear-to-l from-primary/5 to-transparent blur-2xl" />
            </div>

            <section className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                        {/* Brand Badge - Premium */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
                            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <RiFlashlightLine className="h-3.5 w-3.5" />
                            <span className="tracking-wider uppercase">24/7 Emergency Service</span>
                        </div>

                        <div className="space-y-4 md:space-y-5">
                            <h1 className="text-2xl font-bold leading-normal text-white md:text-5xl">
                                <span className="block">24/7 AutoDrop Car Repair and Mobile <span className="text-primary">Mechanic</span></span>
                                <span className="block bg-linear-to-r from-primary via-yellow-400 to-primary/70 bg-clip-text text-transparent my-1">
                                     Services in Dubai
                                </span>
                                <span className="block mt-2 text-lg lg:text-2xl font-normal text-white/80">
                                    Comes to You in <span className="text-primary font-semibold">{responseTime}</span>
                                    <span className="block text-lg text-white md:text-xl">
                                        Anywhere in {city}
                                    </span>
                                </span>
                            </h1>

                            <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Certified mechanics, transparent upfront pricing, and dealer-grade diagnostics
                                delivered to your location. <span className="text-white/90">No towing fees, no workshop waiting.</span>
                            </p>
                        </div>

                        {/* CTA Buttons - Enhanced */}
                        {/* <div className="flex flex-wrap gap-2 md:gap-4">
                            <Button
                                size="lg"
                                className="relative overflow-hidden bg-primary px-4 py-4 lg:px-8 lg:py-6 text-base font-semibold text-black"
                            >
                                <span className="absolute inset-0 bg-linear-to-r from-primary via-yellow-300 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Link className="relative flex items-center" href={numberCallLink}>
                                    <RiPhoneLine className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                    Call Now
                                    <RiArrowRightLine className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group border-primary/30 bg-white/5 px-4 py-4 lg:px-8 lg:py-6 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/50 "
                            >
                                <Link className="flex items-center hover:text-primary" href={whatsappCallLink}>
                                    <RiWhatsappLine className="mr-2 h-5 w-5 text-primarygroup-hover:scale-110 transition-transform" />
                                    WhatsApp Us
                                </Link>
                            </Button>
                        </div> */}

                        {/* Trust Strip - Premium */}
                        <div className="flex flex-wrap items-center gap-6 pt- text-sm text-white/80 md:text-base">
                            <div className="flex items-center gap-2.5">
                                <div className="rounded-full border border-primary/20 bg-primary/10 p-2 backdrop-blur-sm">
                                    <RiTimeLine className="h-4 w-4 text-primary md:h-5 md:w-5" />
                                </div>
                                <div>
                                    <span className="block font-medium text-white">24/7 Emergency</span>
                                    <span className="text-xs text-white/50">Always available</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="rounded-full border border-primary/20 bg-primary/10 p-2 backdrop-blur-sm">
                                    <RiMapPinLine className="h-4 w-4 text-primary md:h-5 md:w-5" />
                                </div>
                                <div>
                                    <span className="block font-medium text-white">{responseTime} Arrival</span>
                                    <span className="text-xs text-white/50">Rapid response</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="rounded-full border border-primary/20 bg-primary/10 p-2 backdrop-blur-sm">
                                    <RiShieldCheckLine className="h-4 w-4 text-primary md:h-5 md:w-5" />
                                </div>
                                <div>
                                    <span className="block font-medium text-white">Certified Mechanics</span>
                                    <span className="text-xs text-white/50">Expert team</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Card - Premium Enhanced */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <Card className="group relative w-full max-w-md overflow-hidden border border-white/10 bg-white/5 p-8">
                        {/* <Card className="group relative w-full max-w-md overflow-hidden border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-primary/20 hover:scale-[1.02]"> */}
                            {/* Card premium decorative elements */}
                            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                            <div className="absolute -bottom-32 -left-32 h-48 w-48 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-700" />

                            {/* Animated border glow */}
                            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Corner accents */}
                            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary/30" />
                            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/30" />
                            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary/30" />
                            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/30" />

                            <div className="relative space-y-5">
                                {/* Status Header - Premium */}
                                <div className="flex items-start justify-between">
                                    <div className="space-y-0.5">
                                        {/* <span className="text-xs font-medium uppercase tracking-wider text-primary/70">
                                            Service Status
                                        </span> */}
                                        <p className="flex items-center gap-2 text-md md:text-lg font-semibold text-white">
                                            <span className="inline-block h-3 w-3 rounded-full bg-primary animate-pulse" />
                                            Available Now
                                        </p>
                                    </div>
                                    <span className="relative rounded-full bg-primary px-4 py-1 md:py-1.5 text-[11px] md:text-sm font-bold text-black ">
                                        <span className="absolute -inset-px rounded-full border border-primary/30" />
                                        {responseTime} Response
                                    </span>
                                </div>

                                {/* Service Areas - Premium */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2.5 text-sm text-white/80">
                                        <div className="rounded-full bg-primary/10 p-1.5">
                                            <RiRoadMapLine className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="font-medium">Service Areas</span>
                                        <span className="text-xs text-white/40">{serviceAreas.length} locations</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {serviceAreas.map((area) => (
                                            <span
                                                key={area.slug}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                                            >
                                                {area.name}
                                            </span>
                                        ))}
                  
                                    </div>
                                </div>

                                {/* Quick Quote - Premium */}
                                <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                                    <RiCheckDoubleLine className="h-4 w-4 text-primary" />
                                    <span className="text-sm text-white/80">
                                        <span className="font-medium text-white">Quick Quote:</span>
                                        No hidden fees, upfront pricing
                                    </span>
                                </div>

                                {/* Stats Grid - Premium */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="group/stat relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5">
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                                        <div className="relative">
                                            <div className="text-2xl font-bold text-primary">90%</div>
                                            <div className="text-xs text-white/60">Onsite Repairs</div>
                                            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
                                                <div className="h-full w-[90%] rounded-full bg-primary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group/stat relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary/5">
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                                        <div className="relative">
                                            <div className="text-2xl font-bold text-primary">100%</div>
                                            <div className="text-xs text-white/60">Transparent Pricing</div>
                                            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
                                                <div className="h-full w-full rounded-full bg-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer - Premium */}
                                <div className=" hidden md:flex items-center justify-between border-t border-white/10 pt-">
                                    <div className="flex items-center gap-2 text-xs text-white/60">
                                        <RiShieldCheckLine className="h-3.5 w-3.5 text-primary" />
                                        <span>Certified since {foundedYear}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RiCarLine className="h-3.5 w-3.5 text-primary/60" />
                                        <span className="font-mono text-xs text-primary/80">{brandName}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CSS Animations */}
            {/* <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(2deg); }
                    66% { transform: translateY(5px) rotate(-1deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.1); opacity: 0.5; }
                }
                @keyframes pulse-slower {
                    0%, 100% { transform: scale(1); opacity: 0.2; }
                    50% { transform: scale(1.15); opacity: 0.4; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
                .animate-pulse-slower {
                    animation: pulse-slower 8s ease-in-out infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style> */}
        </header>
    );
}