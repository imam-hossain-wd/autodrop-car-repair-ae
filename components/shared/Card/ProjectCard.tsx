

import { Project } from "@/types/project";
import { RiMapPinLine, RiToolsLine } from "@remixicon/react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void; // Make onClick optional
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-primary/30 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-zinc-800">
        {/* Fallback gradient background if image not loaded */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-800 via-zinc-900 to-zinc-950" />
        
        {/* Decorative geometric overlay */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/20" />
          <div className="absolute left-1/3 top-1/3 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 border border-white/10" />
        </div>

        {/* Image placeholder with service icon */}
        <div className="flex h-full flex-col items-center justify-center p-6 text-center">
          <div className="rounded-full border border-primary/20 bg-primary/10 p-4">
            <RiToolsLine className="h-8 w-8 text-primary/60" />
          </div>
          <p className="mt-3 text-sm font-medium text-white/60">{project.service}</p>
          <p className="mt-1 text-xs text-zinc-500">{project.area}</p>
        </div>

        {/* Image */}
        <Image
          src={project.image}
          alt={`Project: ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Status badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded border border-primary/20 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-primary backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Completed
        </div>

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* View overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            View Details
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
          <RiMapPinLine className="h-3 w-3 flex-shrink-0 text-primary/60" />
          <span className="truncate">{project.area}</span>
        </div>

        {/* Corner accents */}
        <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
      </div>
    </div>
  );
}

