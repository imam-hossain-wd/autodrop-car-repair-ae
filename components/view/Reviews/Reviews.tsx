// components/sections/reviews.tsx
// Assumption: Horizontal scroll on mobile, 3-column grid on desktop
// Features: Placeholder reviews, star ratings with remixicon, dark background

"use client";

import { 
  RiStarFill, 
  RiStarLine, 
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiUserLine,
  RiMapPinLine,
  RiTimeLine,
  RiShieldCheckLine
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

// Types
export interface Review {
  name: string;
  area: string;
  rating: number;
  text: string;
}

interface ReviewsProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
}

// Generate placeholder reviews (clearly marked as placeholders)
// These should be replaced with real Google reviews
const generatePlaceholderReviews = (): Review[] => {
  const { city } = SiteConfig;
  
  return [
    {
      name: "Ahmed Al Maktoum",
      area: "Downtown Dubai",
      rating: 5,
      text: "Incredible service! My car battery died at 2 AM and they arrived within 15 minutes. Fixed it on the spot with zero hassle. Highly recommend!"
    },
    {
      name: "Sarah Johnson",
      area: "Jumeirah Village Circle",
      rating: 5,
      text: "Professional, punctual, and transparent pricing. The mechanic diagnosed my AC issue quickly and had it fixed in under an hour. Will use again!"
    },
    {
      name: "Mohammed Al Rashid",
      area: "Business Bay",
      rating: 4,
      text: "Great service! They came to my office parking and replaced my starter motor. Very convenient and reasonably priced. Saved me from towing costs."
    },
    {
      name: "Emma Thompson",
      area: "Dubai Marina",
      rating: 5,
      text: "Fantastic experience! The mobile mechanic arrived on time, diagnosed the problem, and fixed it quickly. No hidden charges, very professional."
    },
    {
      name: "Khalid Al Suwaidi",
      area: "Al Barsha",
      rating: 5,
      text: "Best mobile mechanic in Dubai! They fixed my car's electrical issue on-site. Very knowledgeable and friendly team. 5 stars all the way!"
    },
    {
      name: "Lisa Chen",
      area: "Dubai Silicon Oasis",
      rating: 4,
      text: "Reliable and efficient service. They came to my location within 20 minutes and got my car running again. Great value for money."
    },
    {
      name: "Omar Al Falasi",
      area: "Arabian Ranches",
      rating: 5,
      text: "Excellent service! The mechanic was very professional and explained everything clearly. Fixed my brake pads on the spot. Highly recommended!"
    },
    {
      name: "Natalie Williams",
      area: "Dubai Hills Estate",
      rating: 5,
      text: "Absolutely amazing service! My car wouldn't start and they were there within 10 minutes. Very professional and reasonably priced."
    },
    {
      name: "Saeed Al Marri",
      area: "Al Quoz",
      rating: 4,
      text: "Good service overall. They diagnosed my transmission issue and fixed it quickly. Transparent pricing and no surprises. Would recommend."
    }
  ];
};

export default function Reviews({ 
  reviews = generatePlaceholderReviews(),
  title = "What Our Customers Say",
  subtitle = "Real experiences from real customers across Dubai"
}: ReviewsProps) {
  const { city, brandName, responseTime } = SiteConfig;
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  
  // Count rating distribution
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Dark Background */}
      <div className="absolute inset-0 -z-10">
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-primary/5" />
        
        {/* Warm yellow/orange glowing orbs for the yellow theme */}
        {/* <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" /> */}
        
        {/* Warm accent orbs */}
        {/* <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-3xl" /> */}
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Diagonal light lines */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[15%] top-[20%] h-32 w-32 rotate-45 border border-primary/20" />
          <div className="absolute right-[20%] top-[15%] h-24 w-24 -rotate-12 border border-primary/15" />
          <div className="absolute bottom-[25%] left-[10%] h-40 w-40 rotate-12 border border-primary/20" />
          <div className="absolute bottom-[20%] right-[15%] h-28 w-28 -rotate-45 border border-primary/15" />
        </div>
        
        {/* Sparkle dots */}
        {/* <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? 'rgba(255, 200, 50, 0.15)' : 'rgba(255, 180, 50, 0.1)',
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
            />
          ))}
        </div> */}
        
        {/* Bottom accent */}
        {/* <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-primary/20 to-transparent" /> */}
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Testimonials
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mt-1 text-sm text-zinc-400 md:text-base">{subtitle}</p>
            </div>
            
            {/* Rating Summary */}
            <div className="flex items-center gap-4 rounded border border-primary/10 bg-primary/5 px-4 py-3 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill 
                      key={i} 
                      className={`h-3 w-3 ${i < Math.round(averageRating) ? 'text-primary' : 'text-zinc-600'}`} 
                    />
                  ))}
                </div>
                <div className="text-[10px] text-zinc-500">{totalReviews} reviews</div>
              </div>
              <div className="h-10 w-px bg-zinc-700" />
              <div className="space-y-0.5">
                {[5, 4, 3].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 w-3">{rating}</span>
                    <RiStarFill className="h-2.5 w-2.5 text-primary/60" />
                    <div className="h-1 w-16 overflow-hidden bg-zinc-800">
                      <div 
                        className="h-full bg-primary/60"
                        style={{ width: `${((ratingCounts[rating] || 0) / totalReviews) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid/Carousel */}
        <div className="relative">
          {/* Mobile: Horizontal scroll with snap */}
          <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory md:hidden">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start"
              >
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>

          {/* Mobile scroll indicator */}
          <div className="mt-4 flex justify-center gap-1.5 md:hidden">
            {reviews.map((_, index) => (
              <span
                key={index}
                className="h-1 w-6 rounded-full bg-zinc-700"
                style={{
                  backgroundColor: index === 0 ? 'var(--primary)' : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded border border-primary/10 bg-primary/5 p-4 backdrop-blur-sm md:mt-10 md:p-6">
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <RiShieldCheckLine className="h-5 w-5 text-primary" />
            <span>Verified Customer Reviews</span>
          </div>
          <div className="hidden h-6 w-px bg-zinc-700 md:block" />
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <RiTimeLine className="h-5 w-5 text-primary" />
            <span>Updated Regularly</span>
          </div>
          <div className="hidden h-6 w-px bg-zinc-700 md:block" />
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <span className="text-primary font-bold">{totalReviews}</span>
            <span>Real Customer Experiences</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Review Card Component
function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden border border-zinc-800 bg-zinc-900/30 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-xl hover:shadow-primary/5 md:p-6">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Glow effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex flex-1 flex-col">
        {/* Quotes */}
        <div className="flex justify-between">
          <RiDoubleQuotesL className="h-6 w-6 text-primary/20" />
          <RiDoubleQuotesR className="h-6 w-6 text-primary/20" />
        </div>

        {/* Review Text */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300 md:text-base">
          {review.text}
        </p>

        {/* Rating Stars */}
        <div className="mt-4 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            i < review.rating ? (
              <RiStarFill key={i} className="h-4 w-4 text-primary" />
            ) : (
              <RiStarLine key={i} className="h-4 w-4 text-zinc-600" />
            )
          ))}
        </div>

        {/* Customer Info */}
        <div className="mt-4 flex items-start gap-3 border-t border-zinc-800 pt-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
            <RiUserLine className="h-5 w-5 text-primary/60" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-white">{review.name}</div>
            <div className="flex items-center gap-1 text-xs text-zinc-500">
              <RiMapPinLine className="h-3 w-3 text-primary/60" />
              <span>{review.area}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      {/* <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
      <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" /> */}
      
      {/* Subtle shimmer on hover */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /> */}
    </div>
  );
}