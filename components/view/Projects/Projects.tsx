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
import { useState } from "react";
import ProjectModal from "@/components/shared/ProjectModal/ProjectModal";


export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
      const [currentIndex, setCurrentIndex] = useState(0);
    const { city } = SiteConfig;

      const openProject = (project: Project) => {
    const index = projectData.findIndex((p) => p.title === project.title);
    setCurrentIndex(index >= 0 ? index : 0);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const navigateProject = (direction: "next" | "prev") => {
    if (direction === "next" && currentIndex < projectData.length - 1) {
      const next = projectData[currentIndex + 1];
      setCurrentIndex(currentIndex + 1);
      setSelectedProject(next);
    }
    if (direction === "prev" && currentIndex > 0) {
      const prev = projectData[currentIndex - 1];
      setCurrentIndex(currentIndex - 1);
      setSelectedProject(prev);
    }
  };



    return (
          <section className="relative w-full overflow-hidden bg-zinc-950">
                {/* Background (same as before) */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
                    <div className="absolute -left-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/15 blur-3xl" />
                    <div className="absolute -bottom-1/4 -right-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
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
                    <div className="absolute inset-0 opacity-[0.04]">
                        <div className="absolute left-[10%] top-[15%] h-32 w-32 rotate-45 border border-primary/30" />
                        <div className="absolute right-[15%] top-[20%] h-24 w-24 -rotate-12 border border-primary/20" />
                        <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/20" />
                        <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/30" />
                    </div>
                    <div className="absolute inset-0 opacity-[0.05]">
                        <div className="absolute left-0 top-1/3 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                        <div className="absolute right-0 top-2/3 h-px w-3/4 bg-linear-to-l from-transparent via-primary/20 to-transparent" />
                        <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                        <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 h-20 w-full bg-linear-to-t from-primary/5 to-transparent" />
                </div>

                <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
                    {/* Section Header */}
                    <div className="mb-8 md:mb-10">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                                Recent Work
                            </span>
                            <div className="h-px flex-1 bg-linear-to-r from-primary/30 to-transparent" />
                        </div>
                        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                                Recent Roadside <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Fixes</span>
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
                            Click any project to view details. Real cases from our mobile mechanics across {city}
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                        {projectData.map((project: Project, index: number) => (
                               <ProjectCard
                                         key={index}
                                         project={project}
                                         index={index}
                                         onClick={() => openProject(project)}
                                       />
                        ))}
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
                      {selectedProject && (
                        <ProjectModal
                          project={selectedProject}
                          currentIndex={currentIndex}
                          totalProjects={projectData.length}
                          onClose={closeProject}
                          onNavigate={navigateProject}
                        />
                      )}
            </section>
    );
}