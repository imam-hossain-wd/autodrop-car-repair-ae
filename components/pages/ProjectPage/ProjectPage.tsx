
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RiTimeLine,
  RiCarLine,
  RiFlashlightLine,
  RiArrowRightSLine,
  RiStarLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { projectData } from "@/data/projectData";
import { Project } from "@/types/project";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import ProjectModal from "@/components/shared/ProjectModal/ProjectModal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { city, responseTime } = SiteConfig;

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

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeProject();
    if (e.key === "ArrowRight") navigateProject("next");
    if (e.key === "ArrowLeft") navigateProject("prev");
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden bg-zinc-950"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Ultra-Modern Background System */}
      <div className="absolute inset-0 -z-10">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

        {/* Dynamic glowing orbs */}
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[700px] w-[700px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)
              `,
            }}
          />
        </div>

        {/* Geometric accent lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[10%] top-[20%] h-32 w-32 rotate-45 border border-primary/20" />
          <div className="absolute right-[15%] top-[15%] h-24 w-24 -rotate-12 border border-primary/15" />
          <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/15" />
          <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/20" />
        </div>

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-linear-to-l from-transparent via-primary/15 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-linear-to-r from-transparent via-primary/15 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-linear-to-r from-transparent via-primary/15 to-transparent" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-zinc-800/30 bg-linear-to-b from-zinc-900/30 to-transparent">
        <div className="container mx-auto px-4 pt-28 pb-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {projectData.length} Projects Completed
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Our Roadside{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Repairs
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
              Explore our portfolio of professional mobile mechanic services across {city}. 
              Each project showcases our commitment to quality, speed, and customer satisfaction.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5">
                  <RiFlashlightLine className="h-4 w-4 text-primary" />
                </div>
                <span>{responseTime} Response</span>
              </div>
              <div className="hidden h-6 w-px bg-zinc-700 md:block" />
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5">
                  <RiTimeLine className="h-4 w-4 text-primary" />
                </div>
                <span>24/7 Availability</span>
              </div>
              <div className="hidden h-6 w-px bg-zinc-700 md:block" />
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5">
                  <RiCarLine className="h-4 w-4 text-primary" />
                </div>
                <span>{projectData.length}+ Projects</span>
              </div>
              <div className="hidden h-6 w-px bg-zinc-700 md:block" />
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5">
                  <RiStarLine className="h-4 w-4 text-primary" />
                </div>
                <span>5-Star Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="container mx-auto px-4 py-8">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Real cases from our mobile mechanics
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Services
            <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => openProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentIndex={currentIndex}
          totalProjects={projectData.length}
          onClose={closeProject}
          onNavigate={navigateProject}
        />
      )}
    </div>
  );
}