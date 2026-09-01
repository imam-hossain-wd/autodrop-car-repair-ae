"use client";

import { useState, useEffect, useCallback } from "react";
import {
  RiStarFill,
  RiStarLine,
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiUserLine,
  RiMapPinLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { Review, ReviewsProps } from "@/types/card";
import ReviewCard from "@/components/shared/Card/ReviewCard";



// Generate placeholder reviews
const generatePlaceholderReviews = (): Review[] => {
  return [
    {
      name: "Ahmed Al Maktoum",
      area: "Downtown Dubai",
      rating: 5,
      text: "Incredible service! My car battery died at 2 AM and they arrived within 15 minutes. Fixed it on the spot with zero hassle. Highly recommend!",
    },
    {
      name: "Sarah Johnson",
      area: "Jumeirah Village Circle",
      rating: 5,
      text: "Professional, punctual, and transparent pricing. The mechanic diagnosed my AC issue quickly and had it fixed in under an hour. Will use again!",
    },
    {
      name: "Mohammed Al Rashid",
      area: "Business Bay",
      rating: 4,
      text: "Great service! They came to my office parking and replaced my starter motor. Very convenient and reasonably priced. Saved me from towing costs.",
    },
    {
      name: "Emma Thompson",
      area: "Dubai Marina",
      rating: 5,
      text: "Fantastic experience! The mobile mechanic arrived on time, diagnosed the problem, and fixed it quickly. No hidden charges, very professional.",
    },
    {
      name: "Khalid Al Suwaidi",
      area: "Al Barsha",
      rating: 5,
      text: "Best mobile mechanic in Dubai! They fixed my car's electrical issue on-site. Very knowledgeable and friendly team. 5 stars all the way!",
    },
    {
      name: "Lisa Chen",
      area: "Dubai Silicon Oasis",
      rating: 4,
      text: "Reliable and efficient service. They came to my location within 20 minutes and got my car running again. Great value for money.",
    },
    {
      name: "Omar Al Falasi",
      area: "Arabian Ranches",
      rating: 5,
      text: "Excellent service! The mechanic was very professional and explained everything clearly. Fixed my brake pads on the spot. Highly recommended!",
    },
    {
      name: "Natalie Williams",
      area: "Dubai Hills Estate",
      rating: 5,
      text: "Absolutely amazing service! My car wouldn't start and they were there within 10 minutes. Very professional and reasonably priced.",
    },
    {
      name: "Saeed Al Marri",
      area: "Al Quoz",
      rating: 4,
      text: "Good service overall. They diagnosed my transmission issue and fixed it quickly. Transparent pricing and no surprises. Would recommend.",
    },
  ];
};

export default function Reviews({
  reviews = generatePlaceholderReviews(),
  title = "What Our Customers Say",
  subtitle = "Real experiences from real customers across Dubai",
  autoplay = true,
  autoplayInterval = 4000,
}: ReviewsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Configure Embla with responsive breakpoints
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 1,
      },
      "(min-width: 1024px)": {
        slidesToScroll: 1,
      },
      "(min-width: 1280px)": {
        slidesToScroll: 1,
      },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Update slides per view on resize
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesPerView(4);
      else if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  // Count rating distribution
  const ratingCounts = reviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>,
  );

  // Calculate number of slides for dots (client-side only)
  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Dark Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-primary/5" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
          <div className="absolute left-1/4 top-0 h-px w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute right-1/4 bottom-0 h-px w-1/2 -rotate-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[15%] top-[20%] h-32 w-32 rotate-45 border border-primary/20" />
          <div className="absolute right-[20%] top-[15%] h-24 w-24 -rotate-12 border border-primary/15" />
          <div className="absolute bottom-[25%] left-[10%] h-40 w-40 rotate-12 border border-primary/20" />
          <div className="absolute bottom-[20%] right-[15%] h-28 w-28 -rotate-45 border border-primary/15" />
        </div>
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
              <p className="mt-1 text-sm text-zinc-400 md:text-base">
                {subtitle}
              </p>
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
                      className={`h-3 w-3 ${i < Math.round(averageRating) ? "text-primary" : "text-zinc-600"}`}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-zinc-500">
                  {totalReviews} reviews
                </div>
              </div>
              <div className="h-10 w-px bg-zinc-700" />
              <div className="space-y-0.5">
                {[5, 4, 3].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 w-3">
                      {rating}
                    </span>
                    <RiStarFill className="h-2.5 w-2.5 text-primary/60" />
                    <div className="h-1 w-16 overflow-hidden bg-zinc-800">
                      <div
                        className="h-full bg-primary/60"
                        style={{
                          width: `${((ratingCounts[rating] || 0) / totalReviews) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full px-2 md:basis-1/2 md:px-3 xl:basis-1/4"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex",
              "h-10 w-10 items-center justify-center rounded-full",
              "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700",
              "text-zinc-300 transition-all duration-300",
              "hover:bg-primary/20 hover:border-primary/30 hover:text-primary",
              "focus:outline-none focus:ring-2 focus:ring-primary/50",
              !prevBtnEnabled && "opacity-50 cursor-not-allowed",
            )}
            disabled={!prevBtnEnabled}
          >
            <RiArrowLeftSLine className="h-6 w-6" />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex",
              "h-10 w-10 items-center justify-center rounded-full",
              "bg-zinc-800/80 backdrop-blur-sm border border-zinc-700",
              "text-zinc-300 transition-all duration-300",
              "hover:bg-primary/20 hover:border-primary/30 hover:text-primary",
              "focus:outline-none focus:ring-2 focus:ring-primary/50",
              !nextBtnEnabled && "opacity-50 cursor-not-allowed",
            )}
            disabled={!nextBtnEnabled}
          >
            <RiArrowRightSLine className="h-6 w-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index * slidesPerView)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex >= index * slidesPerView &&
                  selectedIndex < (index + 1) * slidesPerView
                  ? "w-8 bg-primary"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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


