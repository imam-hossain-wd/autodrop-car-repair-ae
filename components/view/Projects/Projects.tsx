
"use client";
import Link from "next/link";
import {
    RiTimeLine,
    RiArrowRightSLine,
    RiCarLine,
    RiFlashlightLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { Project } from "@/types/project";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { projectData } from "@/data/projectData";





export function Projects() {
    const { city } = SiteConfig;

    return (
        <section className="relative w-full overflow-hidden bg-zinc-950">
            {/* Ultra-Modern Dark Background System */}
            <div className="absolute inset-0 -z-10">
                {/* Base dark gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

                {/* Dynamic glowing orbs with primary accent */}
                <div className="absolute -left-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -bottom-1/4 -right-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `
                   repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px),
                   repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)
                 `
                        }}
                    />
                </div>

                {/* Geometric elements */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute left-[10%] top-[15%] h-32 w-32 rotate-45 border border-primary/30" />
                    <div className="absolute right-[15%] top-[20%] h-24 w-24 -rotate-12 border border-primary/20" />
                    <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/20" />
                    <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/30" />
                </div>

                {/* Diagonal accent lines */}
                <div className="absolute inset-0 opacity-[0.05]">
                    <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
                    <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>


                {/* Brand accent glow at bottom */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-primary/5 to-transparent" />
            </div>

            <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
                {/* Section Header */}
                <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Recent Work
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>
                    <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                            Recent Roadside <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Fixes</span>
                        </h2>
                        <div className="flex items-center gap-3 text-sm text-zinc-400">
                            <span className="inline-flex items-center gap-1">
                                <RiFlashlightLine className="h-4 w-4 text-primary" />
                                Real roadside repairs
                            </span>
                            <span className="h-4 w-px bg-zinc-700" />
                            <span className="inline-flex items-center gap-1">
                                <RiTimeLine className="h-4 w-4 text-primary" />
                                {SiteConfig.responseTime} response
                            </span>
                        </div>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-zinc-400 md:text-base">
                        Real cases from our mobile mechanics across {city}
                    </p>
                </div>

                {/* Projects Grid/Carousel */}
                <div className="relative">
                    {/* Mobile: Horizontal scroll with snap */}
                    <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory md:hidden">
                        {projectData.map((project: Project, index: number) => (
                            <div
                                key={index}
                                className="min-w-70 shrink-0 snap-start"
                            >
                                <ProjectCard project={project} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Grid layout */}
                    <div className="hidden grid-cols-2 gap-5 md:grid lg:grid-cols-5">
                        {projectData.map((project: Project, index: number) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>

                    {/* Mobile scroll indicator */}
                    {/* <div className="mt-4 flex justify-center gap-1.5 md:hidden">
            {projectData.map((_: any, index: Key | null | undefined) => (
              <span
                key={index}
                className="h-1 w-6 rounded-full bg-zinc-700"
                style={{
                  backgroundColor: index === 0 ? 'var(--primary)' : undefined,
                }}
              />
            ))}
          </div> */}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded border border-primary/10 bg-primary/5 p-4 backdrop-blur-sm md:mt-10 md:p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full border border-primary/20 bg-zinc-900/50 p-2">
                            <RiCarLine className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">See more of our work</p>
                            <p className="text-xs text-zinc-400">Real stories from real customers</p>
                        </div>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 rounded border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                        View All Projects
                        <RiArrowRightSLine className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}