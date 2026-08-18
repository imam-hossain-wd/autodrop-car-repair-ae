// components/shared/Card/ServiceCard.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  RiBattery2Line,
  RiFlashlightLine,
  RiComputerLine,
  RiSettings4Line,
  RiGasStationLine,
  RiCarLine,
  RiSnowflakeLine,
  RiWindowLine,
  RiDashboardLine,
  RiToolsLine,
  RiBankLine,
  RiBarChart2Line,
  RiShieldFlashLine,
  RiOilLine,
  RiArrowRightSLine,
  RiExchangeLine,
  RiWrenchLine,
  RiPianoLine,
  RiCheckLine,
  RiArrowUpSLine,
  RiArrowDownSLine
} from "@remixicon/react";
import { cn } from "@/lib/utils";

// Icon mapping
const iconMap: Record<string, any> = {
  "Car Battery Replacement": RiBattery2Line,
  "Jump Start Car": RiFlashlightLine,
  "Car Computer Diagnostic": RiComputerLine,
  "Car Alternator Repair": RiSettings4Line,
  "Car Fuel Pump Repair": RiGasStationLine,
  "Car Starter Motor Repair": RiCarLine,
  "Car AC Repair": RiSnowflakeLine,
  "Car Window Motor Repair": RiWindowLine,
  "Radiator Replacement": RiDashboardLine,
  "ABS System Repair": RiBankLine,
  "Brake Pad Repair": RiBarChart2Line,
  "Car Detailing Service": RiShieldFlashLine,
  "Emergency Car Repair": RiFlashlightLine,
  "Car Mechanic Service": RiToolsLine,
  "Oil Change Service": RiOilLine,
  "Car AC Gas Refill Service": RiSnowflakeLine,
  "Car Transmission Repair": RiExchangeLine,
  "Car Service Dubai": RiWrenchLine,
  "Car Repair Dubai": RiPianoLine,
};

const colorMap: Record<string, string> = {
  "Car Battery Replacement": "border-primary/20 bg-primary/5",
  "Jump Start Car": "border-amber-500/20 bg-amber-500/5",
  "Car Computer Diagnostic": "border-blue-500/20 bg-blue-500/5",
  "Car Alternator Repair": "border-purple-500/20 bg-purple-500/5",
  "Car Fuel Pump Repair": "border-red-500/20 bg-red-500/5",
  "Car Starter Motor Repair": "border-orange-500/20 bg-orange-500/5",
  "Car AC Repair": "border-cyan-500/20 bg-cyan-500/5",
  "Car Window Motor Repair": "border-indigo-500/20 bg-indigo-500/5",
  "Radiator Replacement": "border-rose-500/20 bg-rose-500/5",
  "ABS System Repair": "border-emerald-500/20 bg-emerald-500/5",
  "Brake Pad Repair": "border-pink-500/20 bg-pink-500/5",
  "Car Detailing Service": "border-teal-500/20 bg-teal-500/5",
  "Emergency Car Repair": "border-red-500/20 bg-red-500/5",
  "Car Mechanic Service": "border-sky-500/20 bg-sky-500/5",
  "Oil Change Service": "border-lime-500/20 bg-lime-500/5",
  "Car AC Gas Refill Service": "border-cyan-500/20 bg-cyan-500/5",
  "Car Transmission Repair": "border-violet-500/20 bg-violet-500/5",
  "Car Service Dubai": "border-indigo-500/20 bg-indigo-500/5",
  "Car Repair Dubai": "border-primary/20 bg-primary/5",
};

const iconColorMap: Record<string, string> = {
  "Car Battery Replacement": "text-primary",
  "Jump Start Car": "text-amber-500",
  "Car Computer Diagnostic": "text-blue-500",
  "Car Alternator Repair": "text-purple-500",
  "Car Fuel Pump Repair": "text-red-500",
  "Car Starter Motor Repair": "text-orange-500",
  "Car AC Repair": "text-cyan-500",
  "Car Window Motor Repair": "text-indigo-500",
  "Radiator Replacement": "text-rose-500",
  "ABS System Repair": "text-emerald-500",
  "Brake Pad Repair": "text-pink-500",
  "Car Detailing Service": "text-teal-500",
  "Emergency Car Repair": "text-red-500",
  "Car Mechanic Service": "text-sky-500",
  "Oil Change Service": "text-lime-500",
  "Car AC Gas Refill Service": "text-cyan-500",
  "Car Transmission Repair": "text-violet-500",
  "Car Service Dubai": "text-indigo-500",
  "Car Repair Dubai": "text-primary",
};

export interface ServiceCardProps {
  name: string;
  slug: string;
  features?: string[];
  className?: string;
  variant?: "default" | "compact" | "featured";
  showFeatures?: boolean;
  showArrow?: boolean;
  defaultExpanded?: boolean;
}

export function ServiceCard({ 
  name, 
  slug, 
  features = [],
  className, 
  variant = "default",
  showFeatures = true,
  showArrow = true,
  defaultExpanded = false
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const Icon = iconMap[name] || RiToolsLine;
  const colorClass = colorMap[name] || "border-primary/10 bg-primary/5";
  const iconColor = iconColorMap[name] || "text-primary";

  const cardClasses = cn(
    "group relative block overflow-hidden border bg-background/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
    {
      "p-5 md:p-6": variant === "default",
      "p-3 md:p-4": variant === "compact",
      "p-6 md:p-8 border-primary/20 bg-primary/5": variant === "featured",
    },
    className
  );

  const iconWrapperSize = {
    default: "h-14 w-14",
    compact: "h-10 w-10",
    featured: "h-16 w-16",
  };

  const iconInnerSize = {
    default: "h-6 w-6",
    compact: "h-4 w-4",
    featured: "h-7 w-7",
  };

  const textSize = {
    default: "text-sm md:text-base",
    compact: "text-xs md:text-sm",
    featured: "text-base md:text-lg",
  };

  const featuresToShow = features.slice(0, 4);
  const hasMoreFeatures = features.length > 4;

  return (
    <div className={cardClasses}>
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 ${colorClass} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      {/* Glow effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative">
        {/* Header with Icon and Name */}
        <div className="flex items-start gap-4">
          {/* Icon with ring */}
          <div className="relative flex-shrink-0">
            <div className={`absolute inset-0 rounded-full border ${colorClass} opacity-20 blur-sm`} />
            <div className={cn(
              "relative flex items-center justify-center rounded-full border bg-background/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-background/60 group-hover:scale-110",
              iconWrapperSize[variant]
            )}>
              <Icon className={cn(iconInnerSize[variant], iconColor, "transition-transform duration-300")} />
            </div>
          </div>

          {/* Name and Link */}
          <div className="flex-1 min-w-0">
            <Link href={`/services/${slug}`} className="block">
              <h3 className={cn(
                "font-semibold leading-tight tracking-tight text-foreground transition-colors hover:text-primary",
                textSize[variant]
              )}>
                {name}
              </h3>
            </Link>
            
            {showArrow && (
              <Link 
                href={`/services/${slug}`}
                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary/70 transition-all hover:text-primary"
              >
                <span>Learn More</span>
                <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>

        {/* Features Section */}
        {showFeatures && features.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                Key Features
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>

            <div className="space-y-1.5">
              {featuresToShow.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-2 text-xs text-muted-foreground transition-colors group-hover:text-foreground/80"
                >
                  <RiCheckLine className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Expand/Collapse button for more features */}
            {hasMoreFeatures && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary/70 transition-colors hover:text-primary"
              >
                {isExpanded ? (
                  <>
                    <RiArrowUpSLine className="h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <RiArrowDownSLine className="h-4 w-4" />
                    Show {features.length - 4} More Features
                  </>
                )}
              </button>
            )}

            {/* Expanded features */}
            {isExpanded && hasMoreFeatures && (
              <div className="mt-1.5 space-y-1.5 border-t border-primary/10 pt-2">
                {features.slice(4).map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-2 text-xs text-muted-foreground transition-colors group-hover:text-foreground/80"
                  >
                    <RiCheckLine className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-4 pt-3 border-t border-primary/5">
          <Link
            href={`/services/${slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary/30"
          >
            <span>Get This Service</span>
            <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
      <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
      
      {/* Subtle shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  );
}