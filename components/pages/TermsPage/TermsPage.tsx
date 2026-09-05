// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  RiFileTextLine,
  RiShieldCheckLine,
  RiUserSettingsLine,
  RiTimeLine,
  RiMoneyDollarCircleLine,
  RiCheckDoubleLine,
  RiAlertLine,
  RiGlobalLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiChatCheckLine,
  RiCustomerService2Line,
  RiCarLine,
  RiRoadsterLine,
  RiAuctionFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Terms and Conditions | AutoFix Mobile Mechanic Dubai",
  description: "Read our terms and conditions to understand the terms of service for AutoFix Mobile Mechanic Dubai. Clear, fair, and transparent terms for our mobile mechanic services.",
  keywords: "terms and conditions, terms of service, mobile mechanic terms, AutoFix terms, Dubai mechanic terms, service agreement",
  alternates: {
    canonical: "https://www.autofixmechanicdubai.com/terms",
  },
  openGraph: {
    title: "Terms and Conditions | AutoFix Mobile Mechanic Dubai",
    description: "Understand the terms of service for our mobile mechanic services in Dubai.",
    url: "https://www.autofixmechanicdubai.com/terms",
    siteName: "AutoFix Mobile Mechanic Dubai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | AutoFix Mobile Mechanic Dubai",
    description: "Understand the terms of service for our mobile mechanic services in Dubai.",
  },
};

export default function TermsPage() {
  const { brandName, email, displayNumber, city, country, streetAddress, location, url, responseTime } = SiteConfig;
  const currentYear = new Date().getFullYear();
  const lastUpdated = "August 15, 2026";

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Ultra-Modern Background System */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)
              `,
            }}
          />
        </div>

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[10%] top-[20%] h-32 w-32 rotate-45 border border-primary/20" />
          <div className="absolute right-[15%] top-[15%] h-24 w-24 -rotate-12 border border-primary/15" />
          <div className="absolute bottom-[20%] left-[5%] h-40 w-40 rotate-12 border border-primary/15" />
          <div className="absolute bottom-[15%] right-[10%] h-28 w-28 -rotate-45 border border-primary/20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-zinc-800/50 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <RiAuctionFill className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Terms & Conditions
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Our Terms of
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="mt-4 text-base text-zinc-400 md:text-lg">
              Clear, fair, and transparent terms governing the use of {brandName}&apos;s 
              mobile mechanic services in {city}, {country}.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <RiFileTextLine className="h-4 w-4 text-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="inline-flex items-center gap-1.5">
                <RiShieldCheckLine className="h-4 w-4 text-primary" />
                Legally Compliant
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="inline-flex items-center gap-1.5">
                <RiTimeLine className="h-4 w-4 text-primary" />
                {responseTime} Response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-0 z-20 border-b border-zinc-800/50 bg-zinc-900/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {[
              { id: "acceptance", label: "Acceptance" },
              { id: "services", label: "Services" },
              { id: "pricing", label: "Pricing" },
              { id: "responsibilities", label: "Responsibilities" },
              { id: "warranty", label: "Warranty" },
              { id: "liability", label: "Liability" },
              { id: "cancellation", label: "Cancellation" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-primary/10 hover:text-primary md:px-4 md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Acceptance of Terms */}
          <div id="acceptance" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiCheckDoubleLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                By accessing our website, booking our services, or using our mobile mechanic 
                services in {city}, {country}, you agree to be bound by these Terms and Conditions.
              </p>
              <p>
                If you do not agree with any part of these terms, please do not use our services. 
                We reserve the right to update these terms at any time without prior notice.
              </p>
              <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
                <p className="text-sm text-zinc-300">
                  <strong>Effective Date:</strong> These terms are effective as of {lastUpdated} 
                  and apply to all services provided by {brandName}.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div id="services" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiCarLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Our Services</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                {brandName} provides mobile car repair and maintenance services throughout 
                {city}. Our services include but are not limited to:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                  <RiRoadsterLine className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">On-Site Repairs</h3>
                    <p className="text-xs text-zinc-400">Battery, AC, brakes, engine diagnostics</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                  <RiTimeLine className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">Emergency Services</h3>
                    <p className="text-xs text-zinc-400">24/7 roadside assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3 sm:col-span-2">
                  <RiShieldCheckLine className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white">Maintenance Services</h3>
                    <p className="text-xs text-zinc-400">Oil changes, fluid top-ups, routine inspections</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                We reserve the right to modify, suspend, or discontinue any service at any time 
                without prior notice.
              </p>
            </div>
          </div>

          {/* Pricing and Payment */}
          <div id="pricing" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiMoneyDollarCircleLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Pricing and Payment</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                We believe in transparent pricing with no hidden fees. Our pricing structure is 
                designed to be fair and competitive.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Transparent Pricing</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• Upfront quotes before work begins</li>
                    <li>• No hidden call-out charges</li>
                    <li>• Competitive market rates</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Payment Methods</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• Cash on delivery</li>
                    <li>• Bank transfer</li>
                    <li>• Online payment</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                Prices are subject to change without notice. The final price will be confirmed 
                before any work begins.
              </p>
            </div>
          </div>

          {/* Customer Responsibilities */}
          <div id="responsibilities" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiUserSettingsLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Customer Responsibilities</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>As a valued customer, you agree to the following responsibilities:</p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Provide accurate information about your vehicle and its issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ensure safe access to your vehicle for our mechanics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Secure pets and valuables before our arrival</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Notify us of any changes to your location or schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Make payment promptly after service completion</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Warranty and Guarantee */}
          <div id="warranty" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiShieldCheckLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Warranty and Guarantee</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                We stand behind the quality of our work. All repairs and services come with 
                a comprehensive warranty:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Service Warranty</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• 30-day parts warranty</li>
                    <li>• 30-day labor warranty</li>
                    <li>• OEM-quality parts</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Satisfaction Guarantee</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• Quality workmanship</li>
                    <li>• Professional service</li>
                    <li>• Customer satisfaction priority</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                Warranty claims must be reported within 30 days of service completion. 
                Terms and conditions apply.
              </p>
            </div>
          </div>

          {/* Liability Limitation */}
          <div id="liability" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiAuctionFill className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                To the fullest extent permitted by law, {brandName} shall not be liable for:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Indirect, incidental, or consequential damages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Vehicle damage caused by pre-existing conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Loss of use, revenue, or profits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Unauthorized modifications to your vehicle</span>
                </li>
              </ul>
              <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
                <p className="text-sm text-zinc-300">
                  <strong>Note:</strong> Our liability is limited to the total amount paid for 
                  the specific service provided. We recommend comprehensive vehicle insurance 
                  for additional coverage.
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation and Refund */}
          <div id="cancellation" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiChatCheckLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Cancellation and Refund Policy</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>We understand that plans can change. Our cancellation policy is as follows:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Cancellation</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• Free cancellation within 1 hour of booking</li>
                    <li>• 50% charge for cancellations after dispatch</li>
                    <li>• Full charge for no-show</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Refunds</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• Full refund for canceled services</li>
                    <li>• Partial refund for unsatisfactory work</li>
                    <li>• Processed within 7 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiGlobalLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Governing Law</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance 
                with the laws of the United Arab Emirates.
              </p>
              <p>
                Any disputes arising out of or relating to these terms shall be subject to 
                the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                <p className="text-sm text-zinc-400">
                  <RiAlertLine className="inline h-4 w-4 text-primary mr-2" />
                  By using our services, you consent to the exclusive jurisdiction of Dubai courts.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiCustomerService2Line className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                If you have any questions about these Terms and Conditions, please don't 
                hesitate to contact us:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <RiPhoneLine className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <a href={`tel:${SiteConfig.numberCallLink}`} className="text-zinc-400 hover:text-primary transition-colors">
                        {displayNumber}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <RiMailLine className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a href={`mailto:${email}`} className="text-zinc-400 hover:text-primary transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 sm:col-span-2">
                  <div className="flex items-center gap-2">
                    <RiMapPinLine className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-zinc-400">
                        {streetAddress}, {location}, {city}, {country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                We aim to respond to all inquiries within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-zinc-800 pt-8 text-sm">
            <Link href="/" className="text-zinc-400 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-zinc-700">|</span>
            <Link href="/about" className="text-zinc-400 hover:text-primary transition-colors">
              About Us
            </Link>
            <span className="text-zinc-700">|</span>
            <Link href="/services" className="text-zinc-400 hover:text-primary transition-colors">
              Services
            </Link>
            <span className="text-zinc-700">|</span>
            <Link href="/privacy" className="text-zinc-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-700">|</span>
            <Link href="/sitemap.xml" className="text-zinc-400 hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}