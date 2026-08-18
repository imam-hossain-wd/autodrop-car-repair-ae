// app/contact/page.tsx
// Contact Page - Professional, modern contact page with form and map

"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  RiMapPinLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
  RiTimeLine,
  RiSendPlaneLine,
  RiCheckLine,
  RiArrowRightSLine,
  RiCustomerServiceLine,
  RiMessageLine,
  RiBuildingLine,
  RiUserLine,
  RiCalendarLine,
  RiClockwiseLine,
  RiChat1Line
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/siteConfig";



export default function ContactPage() {
  const { 
    brandName, 
    city, 
    location, 
    responseTime,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    streetAddress,
    GMB
  } = SiteConfig;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Contact methods
  const contactMethods = [
    {
      title: "Call Us",
      icon: RiPhoneLine,
      value: displayNumber,
      link: numberCallLink,
      description: "Available 24/7 for emergencies"
    },
    {
      title: "WhatsApp",
      icon: RiWhatsappLine,
      value: "Chat with us",
      link: whatsappCallLink,
      description: "Quick response within minutes"
    },
    {
      title: "Email Us",
      icon: RiMailLine,
      value: email,
      link: `mailto:${email}`,
      description: "We'll respond within 24 hours"
    }
  ];

  // Quick info cards
  const quickInfo = [
    {
      icon: RiMapPinLine,
      label: "Location",
      value: `${location}, ${city}`,
      detail: streetAddress
    },
    {
      icon: RiTimeLine,
      label: "Response Time",
      value: responseTime,
      detail: "Average arrival"
    },
    {
      icon: RiCalendarLine,
      label: "Working Hours",
      value: "24/7",
      detail: "365 days a year"
    },
    {
      icon: RiCustomerServiceLine,
      label: "Service Area",
      value: `All ${city}`,
      detail: "Full coverage"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-200 w-200 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Get in Touch
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Contact <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
              We're here to help 24/7. Reach out to us for immediate assistance or any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative w-full overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Link
                  key={index}
                  href={method.link}
                  className="group relative overflow-hidden rounded border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-primary/30 hover:bg-zinc-900/50 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{method.title}</h3>
                    <p className="text-sm text-primary">{method.value}</p>
                    <p className="mt-1 text-xs text-zinc-500">{method.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-primary/60 transition-all group-hover:text-primary">
                      <span>Contact Now</span>
                      <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary/0 transition-all group-hover:border-primary/20" />
                  <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/0 transition-all group-hover:border-primary/20" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="relative w-full overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {quickInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded border border-zinc-800 bg-zinc-900/30 p-4 text-center"
                >
                  <Icon className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-2 text-xs text-zinc-500">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                  <div className="text-[10px] text-zinc-500">{item.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <div className="rounded border-2 border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm md:p-8">
                <div className="mb-6">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Send a Message
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-white md:text-2xl">
                    Get in <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Touch</span>
                  </h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Fill out the form and we'll get back to you shortly
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                      <RiCheckLine className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">Message Sent!</h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4 border-primary/30 text-primary hover:bg-primary/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <RiUserLine className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded border border-zinc-700 bg-zinc-800/50 px-10 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-primary/50"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <RiMailLine className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded border border-zinc-700 bg-zinc-800/50 px-10 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-primary/50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <RiPhoneLine className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded border border-zinc-700 bg-zinc-800/50 px-10 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-primary/50"
                          placeholder="+971 00 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                        Message
                      </label>
                      <div className="relative">
                        <RiMessageLine className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full rounded border border-zinc-700 bg-zinc-800/50 px-10 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-primary/50 resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <RiSendPlaneLine className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - Map & Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="relative overflow-hidden border-2 border-zinc-800 bg-zinc-900/30">
                {GMB?.embedMap ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={GMB.embedMap}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full"
                      title={`${brandName} - Location Map`}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video w-full bg-linear-to-br from-primary/5 via-zinc-900 to-primary/10">
                    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full border-2 border-primary/10 blur-sm" />
                        <div className="relative rounded-full border-2 border-primary/20 bg-zinc-900/80 p-6 backdrop-blur-sm">
                          <RiMapPinLine className="h-12 w-12 text-primary/60" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">Find Us Here</h3>
                      <p className="mt-2 max-w-sm text-sm text-zinc-400">
                        {streetAddress}, {location}, {city}, {SiteConfig.country}
                      </p>
                      <div className="mt-4 rounded border border-primary/10 bg-primary/5 px-3 py-1.5 text-[10px] text-zinc-500">
                        ℹ️ Add Google Maps embed URL to SiteConfig.GMB.embedMap
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-primary/30" />
                    <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-primary/30" />
                    <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-primary/30" />
                    <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-primary/30" />
                  </div>
                )}
              </div>

              {/* Address & Hours */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <RiBuildingLine className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium text-white">Address</h4>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400">
                    {streetAddress}<br />
                    {location}, {city}<br />
                    {SiteConfig.country}
                  </p>
                </div>
                <div className="rounded border border-zinc-800 bg-zinc-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <RiClockwiseLine className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-medium text-white">Hours</h4>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400">
                    <span className="font-semibold text-primary">24/7</span><br />
                    Available every day<br />
                    Including holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative w-full overflow-hidden bg-zinc-950 py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <RiChat1Line className="h-4 w-4" />
              Need Immediate Assistance?
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              We're Here to <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Help</span> 24/7
            </h2>
            <p className="mt-3 text-zinc-400">
              Whether it's an emergency repair or a simple question, our team is ready to assist you
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                <Link href={numberCallLink}>
                  <RiPhoneLine className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
              <Button  variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-base">
                <Link href={whatsappCallLink}>
                  <RiWhatsappLine className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              {displayNumber} · Available 24/7 · {responseTime} Response
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}