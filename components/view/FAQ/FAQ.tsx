/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  RiArrowDownSLine,
  RiQuestionLine,
  RiTimeLine,
  RiMapPinLine,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiFlashlightLine,
  RiCustomerServiceLine
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

// FAQ data - Single source of truth
const faqData = [
  {
    id: "faq-1",
    question: "How quickly can you arrive at my location?",
    answer: `We guarantee a rapid ${SiteConfig.responseTime} response time across all of ${SiteConfig.city}. Our mobile service units are strategically positioned near major highways and arterial roads to ensure the fastest emergency roadside response in the region. We operate 24/7/365, including weekends and public holidays.`
  },
  {
    id: "faq-2",
    question: "What areas do you serve in Dubai?",
    answer: `We serve all major areas across ${SiteConfig.city}, including ${SiteConfig.serviceAreas.map(a => a.name).join(", ")}. Our headquarters is located in ${SiteConfig.location}, and we cover the entire city with our mobile service units. No matter where you are in ${SiteConfig.city} - home, office, or roadside - we come to you.`
  },
  {
    id: "faq-3",
    question: "How does your pricing work? Is it transparent?",
    answer: `We provide 100% transparent, upfront pricing with zero hidden call-out fees or unexpected charges. Before any work begins, we provide clear, line-item estimates so you know exactly what to expect. Our commitment to transparent pricing means no surprises - just honest, fair rates for dealer-grade service.`
  },
  {
    id: "faq-4",
    question: "What payment methods do you accept?",
    answer: `We accept all major payment methods for your convenience. This includes cash, credit/debit cards, and bank transfers. Payment is processed upon completion of the repair, after you've approved the work and are satisfied with the service. We believe in complete transparency from start to finish.`
  },
  {
    id: "faq-5",
    question: "What types of vehicles do you service?",
    answer: `Our certified mechanics are multi-brand trained and equipped to handle all makes and models of vehicles. From luxury cars to everyday commuters, we service the full spectrum of vehicles on ${SiteConfig.city}'s roads. Our dealership-level diagnostic scanners and specialized tools allow us to work on any vehicle with precision and expertise.`
  },
  {
    id: "faq-6",
    question: "Is there a warranty on your repairs?",
    answer: `All repairs are executed by certified technicians using original OEM-grade spare parts and are fully backed by our service guarantee for total peace of mind. We stand behind our workmanship and the quality of parts we use. If you experience any issues related to the repair, we'll make it right.`
  },
  {
    id: "faq-7",
    question: "Do you provide 24/7 emergency repair services?",
    answer: `Yes! Vehicle breakdowns happen without warning, which is why our emergency repair team operates round-the-clock across all ${SiteConfig.city} residential and commercial districts, including weekends and public holidays. Whether it's 2 PM or 2 AM, our mobile mechanics are ready to assist you anywhere in ${SiteConfig.city}.`
  },
  {
    id: "faq-8",
    question: "What types of repairs can you do on-site?",
    answer: `We complete 90% of repairs on-site with our fully equipped mobile garage. Our services range from rapid battery replacements and emergency jump starts to complex computer diagnostics, AC gas refills, mechanical repairs, and more. Our mobile units carry dealer-grade diagnostic scanners and specialized tools to handle complex issues on the spot - saving you expensive towing costs.`
  }
];

// Generate JSON-LD FAQPage schema
const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export function FAQ() {
  const { city, responseTime } = SiteConfig;
  
  const [openItem, setOpenItem] = useState<any>("faq-1");

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ultra-Modern Background System */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-primary/8" />
        
        {/* Dynamic glowing orbs */}
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Question mark pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 30%, rgba(200,200,200,0.3) 1px, transparent 1px),
                   radial-gradient(circle at 70% 80%, rgba(200,200,200,0.3) 1px, transparent 1px),
                   radial-gradient(circle at 50% 50%, rgba(200,200,200,0.2) 1px, transparent 1px)
                 `,
                 backgroundSize: '80px 80px, 100px 100px, 60px 60px'
               }}
          />
        </div>

        {/* Geometric shapes */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-[10%] top-[15%] h-32 w-32 rotate-45 border border-primary/30" />
          <div className="absolute right-[15%] top-[20%] h-24 w-24 -rotate-12 border border-primary/20" />
          <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/20" />
          <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/30" />
        </div>

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute right-0 top-2/3 h-px w-3/4 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Brand accent lines */}
        <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Help Center
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Frequently Asked <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Questions</span>
            </h2>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <RiQuestionLine className="h-4 w-4 text-primary" />
                {faqData.length} questions
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1">
                <RiTimeLine className="h-4 w-4 text-primary" />
                Quick answers
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
          {/* FAQ Content - 75% width on desktop */}
          <div className="lg:col-span-3">
            <div className="border-2 bg-background/50 p-4 backdrop-blur-sm md:p-6">
              <Accordion
                // type="single"
                // collapsible
                value={openItem}
                onValueChange={setOpenItem}
                className="space-y-1"
              >
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border border-transparent transition-all duration-200 data-[state=open]:border-primary/20 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="group flex w-full items-center justify-between px-4 py-4 text-left transition-all hover:no-underline md:px-5">
                      <div className="flex items-start gap-3 pr-4">
                        <span className="flex-shrink-0 font-mono text-xs font-bold text-primary/40">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium transition-colors group-hover:text-primary md:text-base">
                          {faq.question}
                        </span>
                      </div>
                      <RiArrowDownSLine className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-5">
                      <div className="relative pl-6 md:pl-8">
                        {/* Decorative line */}
                        <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-primary/30 via-primary/10 to-transparent" />
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Bottom CTA - Still have questions? */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded border border-primary/10 bg-primary/5 p-4 md:mt-6 md:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-primary/20 bg-background/50 p-2">
                  <RiCustomerServiceLine className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Still have questions?</p>
                  <p className="text-xs text-muted-foreground">We're here to help 24/7</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={SiteConfig.numberCallLink}
                  className="inline-flex items-center gap-1.5 rounded border bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Call Now
                </a>
                <a
                  href={SiteConfig.whatsappCallLink}
                  className="inline-flex items-center gap-1.5 rounded border border-primary/20 px-4 py-2 text-xs font-medium transition-colors hover:bg-primary/5"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar - Quick Stats (25% on desktop) */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              <div className="border-2 bg-background/50 p-4 backdrop-blur-sm">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Facts
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm">
                    <RiFlashlightLine className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-medium">{responseTime} Response</div>
                      <div className="text-xs text-muted-foreground">Average arrival time</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm">
                    <RiMapPinLine className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-medium">{SiteConfig.serviceAreas.length}+ Locations</div>
                      <div className="text-xs text-muted-foreground">Across {city}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm">
                    <RiPriceTag3Line className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-medium">100% Transparent</div>
                      <div className="text-xs text-muted-foreground">Upfront pricing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm">
                    <RiShieldCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <div className="font-medium">Certified Mechanics</div>
                      <div className="text-xs text-muted-foreground">OEM-quality parts</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 bg-primary/5 p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Emergency Support</div>
                  <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  <div className="mt-2 text-xs text-muted-foreground">
                    Available every day of the year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema())
        }}
      />
    </section>
  );
}