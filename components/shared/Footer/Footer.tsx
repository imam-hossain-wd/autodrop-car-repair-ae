// components/Footer.tsx
"use client";

import {
    RiFacebookCircleFill,
    RiInstagramFill,
    RiPinterestFill,
    RiYoutubeFill,
    RiMapPinLine,
    RiPhoneLine,
    RiMailLine,
    RiWhatsappLine,
    RiArrowRightLine,
    RiShieldCheckLine,
    RiTimeLine,
    RiStarLine,
    RiCarLine,
    RiRoadsterLine,
    RiBuildingLine,
    RiGlobalLine,
} from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import { SiteConfig } from "@/config/siteConfig";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {
        brandName,
        description,
        displayNumber,
        email,
        location,
        streetAddress,
        city,
        country,
        navItems,
        footerhrefs,
        socialLinks,
        serviceAreas,
        operatingHours,
        services,
    } = SiteConfig;

    // Quick links from navItems (excluding Home and Blog)
    const quickLinks = navItems.filter(
        (item) => item.name !== "Home" && item.name !== "Blog"
    );

    // Get today's hours
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const todayHours = operatingHours.find((h) => h.day === today)?.hours || "24 Hours";

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-red-600/5 blur-3xl" />
                <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-3xl" />
                <div className="absolute top-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%2260%22%20height=%2260%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2060%200%20L%200%200%200%2060%22%20fill=%22none%22%20stroke=%22rgba(255,255,255,0.02)%22%20stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-50" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-5">
                        {/* Logo/Brand */}
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                {brandName}
                            </span>
                            <span className="mt-1 block text-xs font-medium text-red-400">
                                Mobile Mechanic Dubai
                            </span>
                        </Link>

                        <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
                            {description}
                        </p>



                        {/* Contact Info */}
                        <div className="space-y-2.5">
                            <Link
                                href={`tel:${SiteConfig.numberCallLink}`}
                                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-red-400 group"
                            >
                                <div className="rounded-lg bg-red-500/10 p-1.5 group-hover:bg-red-500/20 transition-colors">
                                    <RiPhoneLine className="h-3.5 w-3.5 text-red-400" />
                                </div>
                                <span>{displayNumber}</span>
                            </Link>
                            <Link
                                href={`mailto:${email}`}
                                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-red-400 group"
                            >
                                <div className="rounded-lg bg-red-500/10 p-1.5 group-hover:bg-red-500/20 transition-colors">
                                    <RiMailLine className="h-3.5 w-3.5 text-red-400" />
                                </div>
                                <span>{email}</span>
                            </Link>
                            <div className="flex items-start gap-3 text-sm text-neutral-400 group">
                                <div className="rounded-lg bg-red-500/10 p-1.5 group-hover:bg-red-500/20 transition-colors mt-0.5">
                                    <RiMapPinLine className="h-3.5 w-3.5 text-red-400" />
                                </div>
                                <span>
                                    {streetAddress}, {location}, {city}, {country}
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2 pt-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                if (!social.href) return null;
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-white/5 p-2.5 text-neutral-400 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-0.5"
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </Link>
                                );
                            })}
                            <Link
                                href={SiteConfig.whatsappCallLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-white/5 p-2.5 text-neutral-400 transition-all duration-300 hover:bg-green-500/20 hover:text-green-400 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5"
                                aria-label="WhatsApp"
                            >
                                <RiWhatsappLine className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                            Our Services
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                                    >
                                        <div className="h-1 w-1 rounded-full bg-red-400/30 group-hover:bg-red-400 transition-colors" />
                                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                            {service.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Service Areas */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                            Service Areas
                        </h3>
                        <ul className="space-y-2">
                            {serviceAreas.map((area) => (
                                <li key={area.slug}>
                                    <Link
                                        href={`/area-we-serve/${area.slug}`}
                                        className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                                    >
                                        <div className="h-1 w-1 rounded-full bg-blue-400/30 group-hover:bg-blue-400 transition-colors" />
                                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                            {area.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Quick Links & Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                                    >
                                        <RiArrowRightLine className="h-3 w-3 text-neutral-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all duration-300" />
                                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                            {footerhrefs.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                                    >
                                        <RiArrowRightLine className="h-3 w-3 text-neutral-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all duration-300" />
                                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Operating Hours */}
                        <div className="mt-6">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                Operating Hours
                            </h4>
                            <div className="mt-3 space-y-1">
                                {operatingHours.map((day) => (
                                    <div
                                        key={day.day}
                                        className="flex items-center justify-between text-xs"
                                    >
                                        <span className="text-neutral-500">{day.day}</span>
                                        <span className="text-emerald-400">{day.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-6 pb-4">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        {/* Copyright */}
                        <div className="text-center text-xs text-neutral-500 sm:text-left">
                            © {currentYear} {brandName}. All rights reserved.
                            <span className="mx-2 hidden sm:inline">|</span>
                            <span className="block sm:inline">
                                Mobile Mechanic Dubai, UAE
                            </span>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-neutral-500">
                            <span className="flex items-center gap-1.5">
                                <RiShieldCheckLine className="h-3 w-3 text-emerald-400" />
                                Licensed & Insured
                            </span>
                            <span className="flex items-center gap-1.5">
                                <RiTimeLine className="h-3 w-3 text-emerald-400" />
                                24/7 Service
                            </span>
                            <span className="flex items-center gap-1.5">
                                <RiStarLine className="h-3 w-3 text-yellow-400" />
                                4.9/5 Rating
                            </span>
                            <span className="flex items-center gap-1.5">
                                <RiRoadsterLine className="h-3 w-3 text-emerald-400" />
                                5-15 Min Response
                            </span>
                        </div>

                        {/* Region */}
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <RiGlobalLine className="h-3.5 w-3.5" />
                            <span>Dubai, UAE</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;