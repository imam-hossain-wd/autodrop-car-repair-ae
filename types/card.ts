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