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


// Types
export interface Review {
  name: string;
  area: string;
  rating: number;
  text: string;
}

export interface ReviewsProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}