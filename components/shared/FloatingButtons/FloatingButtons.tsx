

import Link from "next/link";
import { RiPhoneLine, RiWhatsappLine } from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function FloatingButtons() {
  const { numberCallLink, whatsappCallLink } = SiteConfig;

  return (
    <>
      {/* Mobile + Tablet */}
      <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
        <div className="flex w-full border-t border-white/10 bg-black/90 backdrop-blur-xl">
          {/* Call Now */}
          <Link
            href={numberCallLink}
            aria-label="Call Now"
            className="
              group relative flex w-1/2 items-center justify-center gap-2
              overflow-hidden
              bg-primary
              px-4 py-4
              font-semibold text-black
              transition-all duration-300
              active:scale-[0.98]
            "
          >
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <RiPhoneLine className="relative h-5 w-5 shrink-0" />

            <span className="relative text-sm font-bold tracking-wide sm:text-base">
              Call Now
            </span>
          </Link>

          {/* WhatsApp */}
          <Link
            href={whatsappCallLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="
              group relative flex w-1/2 items-center justify-center gap-2
              overflow-hidden
              bg-[#25D366]
              px-4 py-4
              font-semibold text-white
              transition-all duration-300
              active:scale-[0.98]
            "
          >
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <RiWhatsappLine className="relative h-5 w-5 shrink-0" />

            <span className="relative text-sm font-bold tracking-wide sm:text-base">
              WhatsApp
            </span>
          </Link>
        </div>
      </div>

      {/* Large Screen */}
      <div className="fixed bottom-20 right-6 z-50 hidden flex-col gap-3 lg:flex xl:right-8">
        {/* Call Icon */}
        <Link
          href={numberCallLink}
          aria-label="Call Now"
          title="Call Now"
          className="
            group relative flex h-14 w-14 items-center justify-center
            overflow-hidden rounded-full
            border border-primary/30
            bg-primary
            text-black
            shadow-[0_8px_30px_rgba(253,199,0,0.22)]
            transition-all duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_12px_40px_rgba(253,199,0,0.35)]
            active:scale-95
          "
        >
          <span className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <RiPhoneLine className="relative h-6 w-6" />

          {/* subtle pulse */}
          <span className="absolute inset-0 -z-10 animate-ping rounded-full border border-primary/20 opacity-30" />
        </Link>

        {/* WhatsApp Icon */}
        <Link
          href={whatsappCallLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="
            group relative flex h-14 w-14 items-center justify-center
            overflow-hidden rounded-full
            border border-[#25D366]/40
            bg-[#25D366]
            text-white
            shadow-[0_8px_30px_rgba(37,211,102,0.2)]
            transition-all duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:bg-[#20bd5a]
            hover:shadow-[0_12px_40px_rgba(37,211,102,0.32)]
            active:scale-95
          "
        >
          <RiWhatsappLine className="relative h-6 w-6" />
        </Link>
      </div>
    </>
  );
}