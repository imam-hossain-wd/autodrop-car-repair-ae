// app/projects/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiTimeLine,
  RiCarLine,
  RiFlashlightLine,
  RiMapPinLine,
  RiCheckLine,
  RiCloseLine,
  RiZoomInLine,
  RiGridLine,
  RiLayout2Line,
  RiFilterLine,
  RiSearchLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { projectImages } from "@/utils/assets";
import { cn } from "@/lib/utils";

// Types
interface Project {
  id: number;
  image: StaticImageData | string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
}

// Generate project data from images
const generateProjects = (): Project[] => {
  const categories = [
    "Battery Replacement",
    "Jump Start",
    "AC Repair",
    "Brake Repair",
    "Engine Diagnostic",
    "Transmission Repair",
    "Oil Change",
    "Tire Change",
    "Electrical Repair",
    "Cooling System",
    "Starter Motor",
    "Alternator Repair",
  ];

  const locations = [
    "Downtown Dubai",
    "Dubai Marina",
    "Jumeirah",
    "Al Barsha",
    "Business Bay",
    "Dubai Hills",
    "Arabian Ranches",
    "Dubai Silicon Oasis",
  ];

  const titles = [
    "Emergency Battery Replacement",
    "Rapid Jump Start Service",
    "Full AC System Repair",
    "Complete Brake Overhaul",
    "Advanced Engine Diagnostic",
    "Transmission Fluid Change",
    "Premium Oil Service",
    "Tire Replacement & Balance",
    "Electrical System Repair",
    "Cooling System Flush",
    "Starter Motor Replacement",
    "Alternator Repair Service",
  ];

  const descriptions = [
    "Our certified mechanic arrived within 12 minutes and replaced the dead battery with a premium OEM-grade unit. The customer was back on the road in under 30 minutes.",
    "Quick jump start service performed at a customer's office parking in Business Bay. The car was running perfectly within 15 minutes of our arrival.",
    "Full AC system diagnosis and repair performed on-site. The customer saved over 500 AED compared to dealership costs and didn't need towing.",
    "Complete brake pad and rotor replacement performed at the customer's home in Jumeirah. All work completed within 1.5 hours with full warranty.",
    "Advanced computer diagnostic performed to identify engine warning light issues. Fixed faulty sensor and cleared all error codes.",
    "Transmission fluid flush and filter replacement performed at Arabian Ranches. Smooth shifting restored with OEM-spec fluids.",
    "Premium synthetic oil change with filter replacement and full vehicle inspection. Completed in just 35 minutes at the customer's location.",
    "Flat tire replacement with new premium tire and full wheel balancing. Customer was able to continue their journey within 20 minutes.",
    "Complete electrical system diagnostic and repair. Identified faulty wiring and replaced damaged components on-site.",
    "Full cooling system flush and radiator inspection. Prevented potential engine damage with professional maintenance.",
    "Starter motor replacement performed at a customer's home in Dubai Marina. The vehicle started perfectly on the first attempt.",
    "Alternator repair and belt replacement performed on-site. Customer saved money on towing and dealership costs.",
  ];

  return projectImages.map((image, index) => ({
    id: index + 1,
    image,
    title: titles[index % titles.length],
    category: categories[index % categories.length],
    location: locations[index % locations.length],
    date: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    description: descriptions[index % descriptions.length],
  }));
};

export default function ProjectsPage() {
  const [projects] = useState(generateProjects());
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, projects]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const { brandName, responseTime, city } = SiteConfig;

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Background System */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

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

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[10%] top-[20%] h-32 w-32 rotate-45 border border-primary/20" />
          <div className="absolute right-[15%] top-[15%] h-24 w-24 -rotate-12 border border-primary/15" />
          <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/15" />
          <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Our Work
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Recent Roadside{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Repairs
              </span>
            </h1>
            <p className="mt-4 text-base text-zinc-400 md:text-lg">
              Browse through our recent mobile mechanic projects across {city}.
              Each case showcases our commitment to quality, speed, and customer satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <RiFlashlightLine className="h-4 w-4 text-primary" />
                {responseTime} response time
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="inline-flex items-center gap-1.5">
                <RiTimeLine className="h-4 w-4 text-primary" />
                24/7 Availability
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="inline-flex items-center gap-1.5">
                <RiCarLine className="h-4 w-4 text-primary" />
                {projects.length}+ Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="sticky top-0 z-30 border-b border-zinc-800/50 bg-zinc-900/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <RiSearchLine className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-10 py-2.5 text-sm text-white placeholder-zinc-400 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <RiCloseLine className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* View Toggle */}
              <div className="flex rounded-lg border border-zinc-700 bg-zinc-800/50 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "rounded-md p-1.5 transition-colors",
                    viewMode === "grid"
                      ? "bg-primary/20 text-primary"
                      : "text-zinc-400 hover:text-white"
                  )}
                  aria-label="Grid view"
                >
                  <RiGridLine className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "rounded-md p-1.5 transition-colors",
                    viewMode === "list"
                      ? "bg-primary/20 text-primary"
                      : "text-zinc-400 hover:text-white"
                  )}
                  aria-label="List view"
                >
                  <RiLayout2Line className="h-4 w-4" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 pr-10 text-sm text-white outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-zinc-900">
                      {category}
                    </option>
                  ))}
                </select>
                <RiFilterLine className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-zinc-400">
            Showing <span className="text-white font-medium">{filteredProjects.length}</span> projects
            {selectedCategory !== "All" && (
              <span className="text-primary"> in {selectedCategory}</span>
            )}
          </p>
          {filteredProjects.length === 0 && (
            <p className="text-sm text-zinc-400">No projects found</p>
          )}
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <div
            className={cn(
              "gap-4 md:gap-5",
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col"
            )}
          >
            {currentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
                onView={(project) => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-zinc-800/50 p-6">
              <RiCarLine className="h-12 w-12 text-zinc-600" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-white">No projects found</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2 md:mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={cn(
                "rounded-lg border border-zinc-700 p-2 transition-colors",
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-zinc-800 hover:border-primary/30"
              )}
            >
              <RiArrowLeftSLine className="h-5 w-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm transition-colors",
                  page === currentPage
                    ? "bg-primary text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                )}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={cn(
                "rounded-lg border border-zinc-700 p-2 transition-colors",
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-zinc-800 hover:border-primary/30"
              )}
            >
              <RiArrowRightSLine className="h-5 w-5" />
            </button>
          </div>
        )}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

// Project Card Component
function ProjectCard({
  project,
  viewMode,
  onView,
}: {
  project: Project;
  viewMode: "grid" | "list";
  onView: (project: Project) => void;
}) {
  const { image, title, category, location, date, description } = project;

  if (viewMode === "list") {
    return (
      <div className="group flex flex-col gap-4 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-lg hover:shadow-primary/5 md:flex-row md:items-center">
        <div className="relative h-32 w-full overflow-hidden rounded-lg bg-zinc-800 md:h-24 md:w-48 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-white group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{description}</p>
            </div>
            <button
              onClick={() => onView(project)}
              className="flex-shrink-0 rounded-lg border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              View Details
            </button>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1">
              <RiMapPinLine className="h-3 w-3" />
              {location}
            </span>
            <span className="h-3 w-px bg-zinc-700" />
            <span className="inline-flex items-center gap-1">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">
                {category}
              </span>
            </span>
            <span className="h-3 w-px bg-zinc-700" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 transition-all duration-300 hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge */}
        <div className="absolute left-3 top-3 z-10 rounded bg-black/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
          {category}
        </div>

        {/* View Button */}
        <button
          onClick={() => onView(project)}
          className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          <div className="rounded-full bg-primary/20 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-primary/30">
            View Details
          </div>
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <RiMapPinLine className="h-3 w-3" />
            {location}
          </span>
          <span className="h-3 w-px bg-zinc-700" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

// Project Modal Component
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { image, title, category, location, date, description } = project;

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white/70 transition-colors hover:bg-black/70 hover:text-white"
        >
          <RiCloseLine className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full bg-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-white md:text-2xl">{title}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-1">
                  <RiMapPinLine className="h-4 w-4" />
                  {location}
                </span>
                <span className="h-4 w-px bg-zinc-700" />
                <span className="inline-flex items-center gap-1">
                  <span className="rounded bg-primary/10 px-2.5 py-0.5 text-primary">
                    {category}
                  </span>
                </span>
                <span className="h-4 w-px bg-zinc-700" />
                <span>{date}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
                View Project
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-zinc-800 pt-4 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <RiCheckLine className="h-4 w-4 text-green-500" />
              <span>On-site repair completed</span>
            </div>
            <div className="flex items-center gap-2">
              <RiTimeLine className="h-4 w-4 text-primary" />
              <span>Quick response time</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCarLine className="h-4 w-4 text-primary" />
              <span>OEM quality parts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}