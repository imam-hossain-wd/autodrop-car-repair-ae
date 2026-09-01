// import { Project } from "@/types/project";
// import { RiMapPinLine, RiToolsLine } from "@remixicon/react";
// import Image from "next/image";

// export default function ProjectCard({ project }: { project: Project; index: number }) {
//   return (
//     <div className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-primary/30 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-primary/5">
//       {/* Image Container */}
//       <div className="relative aspect-4/3 overflow-hidden bg-zinc-800">
//         {/* Fallback gradient background if image not loaded */}
//         <div className="absolute inset-0 bg-linear-to-br from-zinc-800 via-zinc-900 to-zinc-950" />
        
//         {/* Decorative geometric overlay */}
//         <div className="absolute inset-0 opacity-[0.05]">
//           <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/20" />
//           <div className="absolute left-1/3 top-1/3 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-12 border border-white/10" />
//         </div>

//         {/* Image placeholder with service icon */}
//         <div className="flex h-full flex-col items-center justify-center p-6 text-center">
//           <div className="rounded-full border border-primary/20 bg-primary/10 p-4">
//             <RiToolsLine className="h-8 w-8 text-primary/60" />
//           </div>
//           <p className="mt-3 text-sm font-medium text-white/60">{project.service}</p>
//           <p className="mt-1 text-xs text-zinc-500">{project.area}</p>
//         </div>

//         {/* Image - Uncomment when actual images are available */}
//         <Image
//           src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwcmVwYWlyfGVufDB8fDB8fHww"
//           alt="project image"
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="(max-width: 768px) 280px, (max-width: 1024px) 33vw, 25vw"
//         />

//         {/* Status badge */}
//         <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded border border-primary/20 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-primary backdrop-blur-sm">
//           <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
//           Completed
//         </div>

//         {/* Hover overlay gradient */}
//         <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-primary md:text-base">
//           {project.title}
//         </h3>
//         <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
//           <span className="inline-flex items-center gap-1">
//             <RiMapPinLine className="h-3 w-3 text-primary/60" />
//             {project.area}
//           </span>
//           <span className="h-3 w-px bg-zinc-700" />
//           <span className="inline-flex items-center gap-1">
//             <RiToolsLine className="h-3 w-3 text-primary/60" />
//             {project.service}
//           </span>
//         </div>

//         {/* Corner accents */}
//         <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
//         <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
//       </div>
//     </div>
//   );
// }


"use client";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  image: StaticImageData | string;
  index: number;
}

export default function ProjectCard({ image, index }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={image}
          alt={`Roadside repair project ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 33vw, 20vw"
        />

        {/* Optional subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}