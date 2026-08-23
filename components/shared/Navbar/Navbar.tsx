/* eslint-disable react-hooks/set-state-in-effect */
// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  RiMenuLine, 
  RiCloseLine,
  RiCarLine,
  RiMapPinLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiToolsLine,
  RiCustomerServiceLine,
  RiFlashlightLine,
  RiTimeLine
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo/autodrop-logo.png"
import Image from "next/image";

const {displayNumber}= SiteConfig;
// Service categories for mega menu
const serviceCategories = [
  {
    name: "Emergency Services",
    icon: RiFlashlightLine,
    services: services.slice(0, 4)
  },
  {
    name: "Repair Services",
    icon: RiToolsLine,
    services: services.slice(4, 8)
  },
  {
    name: "Maintenance",
    icon: RiCustomerServiceLine,
    services: services.slice(8, 12)
  }
];

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Service Area", href: "/service-area" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega-menu-container')) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 bg-black/95",
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl border-b border-primary/10" 
          : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group"
          >
            {/* <div className="relative flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/20">
              <RiCarLine className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary/20 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-tight text-white md:text-base">
                AutoFix
              </span>
              <span className="block text-[10px] font-medium text-primary/70 tracking-widest uppercase">
                Mobile Mechanic
              </span>
            </div> */}

            <Image src={logo} width={120} height={120}  alt="AutoDrop Logo"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative mega-menu-container"
                onMouseEnter={() => item.hasDropdown && setIsMegaMenuOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsMegaMenuOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <RiArrowDownSLine className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isMegaMenuOpen && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && isMegaMenuOpen && (
                  <div className="absolute left-0 top-full mt-1 w-[700px] overflow-hidden border border-primary/10 bg-black/95 backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {serviceCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div key={category.name}>
                            <div className="flex items-center gap-2 mb-3">
                              <Icon className="h-4 w-4 text-primary" />
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                {category.name}
                              </h4>
                            </div>
                            <div className="space-y-1">
                              {category.services.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="group flex items-center gap-2 rounded px-2 py-1.5 text-sm text-zinc-300 transition-all hover:bg-primary/10 hover:text-white"
                                >
                                  <RiArrowRightSLine className="h-3 w-3 text-primary/0 transition-all group-hover:text-primary" />
                                  <span>{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Mega Menu Footer */}
                    <div className="border-t border-primary/10 bg-primary/5 px-6 py-3">
                      <Link
                        href="/services"
                        className="flex items-center justify-between text-sm text-primary transition-colors hover:text-primary/80"
                      >
                        <span className="font-medium">View All Services</span>
                        <RiArrowRightSLine className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Contact & CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={SiteConfig.numberCallLink}
              className="flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/50"
            >
              <RiPhoneLine className="h-4 w-4" />
              <span className="hidden xl:inline">{SiteConfig?.displayNumber}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded border border-primary/20 text-primary transition-all hover:bg-primary/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <RiCloseLine className="h-5 w-5" />
            ) : (
              <RiMenuLine className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-40 overflow-y-auto bg-black/98 backdrop-blur-xl border-b border-primary/10 transition-all duration-500 lg:hidden",
            isMobileMenuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
          style={{ top: isScrolled ? '4rem' : '4rem' }}
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            {/* Navigation Links */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded px-4 py-3 text-base font-medium transition-all hover:bg-white/5",
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-zinc-300 hover:text-white"
                    )}
                    onClick={() => {
                      if (!item.hasDropdown) setIsMobileMenuOpen(false);
                    }}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <RiArrowDownSLine 
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isServicesDropdownOpen && "rotate-180"
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        }}
                      />
                    )}
                  </Link>

                  {/* Mobile Submenu */}
                  {item.hasDropdown && isServicesDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary/20 pl-4">
                      {services.slice(0, 8).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-2 rounded px-3 py-2 text-sm text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <RiArrowRightSLine className="h-3 w-3 text-primary" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>View All Services</span>
                        <RiArrowRightSLine className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact Buttons */}
            <div className="space-y-3 border-t border-primary/10 pt-6">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <RiTimeLine className="h-4 w-4 text-primary" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={SiteConfig.numberCallLink}
                  className="flex items-center justify-center gap-2 rounded border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
                >
                  <RiPhoneLine className="h-4 w-4" />
                  Call Now
                </Link>
                <Link
                  href={SiteConfig.whatsappCallLink}
                  className="flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <RiWhatsappLine className="h-4 w-4" />
                  WhatsApp
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
                <RiMapPinLine className="h-3 w-3 text-primary/60" />
                <span>Serving all of {SiteConfig.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}