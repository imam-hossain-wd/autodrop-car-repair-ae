// app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  RiShieldCheckLine,
  RiLockLine,
  RiDatabaseLine,
  RiCookieLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiGlobalLine,
  RiCheckDoubleLine,
  RiFileShieldLine,
  RiEyeLine,
  RiUserSettingsLine,
  RiServerLine,
  RiShareLine,
  RiAlertLine,
  RiInformationLine,
  RiShieldKeyholeLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function PrivacyPolicyPage() {
  const { brandName, email, displayNumber, city, country, streetAddress, location, url } = SiteConfig;
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
              <RiShieldCheckLine className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Your Privacy
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Matters to Us
              </span>
            </h1>
            <p className="mt-4 text-base text-zinc-400 md:text-lg">
              At {brandName}, we are committed to protecting your personal information 
              and being transparent about how we collect, use, and safeguard your data.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <RiFileShieldLine className="h-4 w-4 text-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span className="h-4 w-px bg-zinc-700" />
              <span className="inline-flex items-center gap-1.5">
                <RiGlobalLine className="h-4 w-4 text-primary" />
                Complies with UAE Data Protection Laws
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
              { id: "introduction", label: "Introduction" },
              { id: "information", label: "Information We Collect" },
              { id: "usage", label: "How We Use Data" },
              { id: "cookies", label: "Cookies" },
              { id: "third-party", label: "Third Parties" },
              { id: "rights", label: "Your Rights" },
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
          {/* Introduction */}
          <div id="introduction" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiInformationLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                {brandName} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your personal information when you visit our website or use our mobile mechanic services 
                in {city}, {country}.
              </p>
              <p>
                We comply with the UAE Data Protection Law and international best practices to ensure 
                your personal information is handled with the highest standards of security and transparency.
              </p>
              <p>
                By using our services or accessing our website, you agree to the collection and use of 
                your information in accordance with this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div id="information" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiDatabaseLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>We collect various types of information to provide and improve our services:</p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <RiUserSettingsLine className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-white">Personal Information</h3>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• Full name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Home or office address</li>
                    <li>• Vehicle information and history</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <RiServerLine className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-white">Technical Data</h3>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                    <li>• IP address and browser type</li>
                    <li>• Device information</li>
                    <li>• Website usage data</li>
                    <li>• Location data (if enabled)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Data */}
          <div id="usage" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiShareLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                <RiCheckDoubleLine className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Service Delivery</h3>
                  <p className="text-sm text-zinc-400">
                    To provide and manage our mobile mechanic services, including scheduling, dispatch, and follow-up.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                <RiEyeLine className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Improvement</h3>
                  <p className="text-sm text-zinc-400">
                    To analyze and improve our services, website functionality, and customer experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                <RiMailLine className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Communication</h3>
                  <p className="text-sm text-zinc-400">
                    To send service updates, promotional offers, and important notifications about your vehicle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                <RiShieldKeyholeLine className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-white">Security</h3>
                  <p className="text-sm text-zinc-400">
                    To protect against fraud, unauthorized access, and ensure the security of our services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div id="cookies" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiCookieLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small files stored on your device that help us understand how you interact with 
                our site.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Essential Cookies</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Required for basic website functionality and security.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                  <h3 className="font-semibold text-white">Analytics Cookies</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
              </div>
              <p className="text-sm text-zinc-400">
                You can control cookie preferences through your browser settings. However, disabling 
                certain cookies may affect the functionality of our website.
              </p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div id="third-party" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiShareLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                We may share your information with trusted third-party service providers to facilitate 
                our services, including:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Payment processors for secure transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Communication platforms for service notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Analytics providers to improve our services</span>
                </li>
              </ul>
              <p>
                We ensure all third-party providers comply with data protection regulations and maintain 
                appropriate security measures.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div id="rights" className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiLockLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Your Data Rights</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>As a customer of {brandName}, you have the following rights regarding your personal data:</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                  <h3 className="font-semibold text-white">Access</h3>
                  <p className="text-sm text-zinc-400">Request a copy of your personal data we hold.</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                  <h3 className="font-semibold text-white">Correction</h3>
                  <p className="text-sm text-zinc-400">Update or correct inaccurate information.</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                  <h3 className="font-semibold text-white">Deletion</h3>
                  <p className="text-sm text-zinc-400">Request deletion of your personal data.</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                  <h3 className="font-semibold text-white">Restriction</h3>
                  <p className="text-sm text-zinc-400">Limit how we use your personal data.</p>
                </div>
              </div>
              <p>
                To exercise these rights, please contact us using the information provided below. 
                We will respond to your request within 30 days.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiShieldKeyholeLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                We implement robust security measures to protect your personal information from 
                unauthorized access, disclosure, alteration, and destruction.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center p-3 rounded-lg border border-zinc-800 bg-zinc-900/30">
                  <RiLockLine className="h-6 w-6 mx-auto text-primary" />
                  <h3 className="mt-1 text-sm font-semibold text-white">Encryption</h3>
                  <p className="text-xs text-zinc-400">256-bit SSL/TLS encryption</p>
                </div>
                <div className="text-center p-3 rounded-lg border border-zinc-800 bg-zinc-900/30">
                  <RiServerLine className="h-6 w-6 mx-auto text-primary" />
                  <h3 className="mt-1 text-sm font-semibold text-white">Secure Storage</h3>
                  <p className="text-xs text-zinc-400">Protected server infrastructure</p>
                </div>
                <div className="text-center p-3 rounded-lg border border-zinc-800 bg-zinc-900/30">
                  <RiShieldCheckLine className="h-6 w-6 mx-auto text-primary" />
                  <h3 className="mt-1 text-sm font-semibold text-white">Compliance</h3>
                  <p className="text-xs text-zinc-400">UAE data protection standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <RiInformationLine className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy 
                or your personal data, please contact us:
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

          {/* Policy Update */}
          <div className="mt-12 rounded-xl border border-primary/10 bg-primary/5 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <RiAlertLine className="h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-white">Policy Updates</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  This Privacy Policy was last updated on {lastUpdated}. We may update this policy 
                  periodically to reflect changes in our practices or legal requirements. We will 
                  notify you of any significant changes through our website or via email.
                </p>
              </div>
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
            <Link href="/terms" className="text-zinc-400 hover:text-primary transition-colors">
              Terms of Service
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