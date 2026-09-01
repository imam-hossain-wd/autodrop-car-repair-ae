import { Review } from "@/types/card";
import {
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiMapPinLine,
  RiStarFill,
  RiStarLine,
  RiUserLine,
} from "@remixicon/react";

export default function ReviewCard({
  review
}: {
  review: Review;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden border border-zinc-800 bg-zinc-900/30 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-xl hover:shadow-primary/5 md:p-6">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="flex justify-between">
          <RiDoubleQuotesL className="h-6 w-6 text-primary/20" />
          <RiDoubleQuotesR className="h-6 w-6 text-primary/20" />
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300 md:text-base">
          {review.text}
        </p>

        <div className="mt-4 flex items-center gap-1">
          {[...Array(5)].map((_, i) =>
            i < review.rating ? (
              <RiStarFill key={i} className="h-4 w-4 text-primary" />
            ) : (
              <RiStarLine key={i} className="h-4 w-4 text-zinc-600" />
            ),
          )}
        </div>

        <div className="mt-4 flex items-start gap-3 border-t border-zinc-800 pt-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
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
    </div>
  );
}
