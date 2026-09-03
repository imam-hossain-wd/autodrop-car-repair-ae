import type { RemixiconComponentType } from "@remixicon/react";

// Use Remixicon's exact component type
export type IconType = RemixiconComponentType;

export interface ServiceItem {
  name: string;
  slug: string;
}

export interface ServiceAreaItem {
  name: string;
  slug: string;
}

export interface OperatingHour {
  day: string;
  hours: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: IconType;
  href: string;
}

export interface ContactLink {
  name: string;
  icon: IconType;
  href: string;
}

export interface GMBConfig {
  PlaceID: string;
  CID: string;
  BusinessProfileID: string;
  mapsLink: string;
  embedMap: string;
  latitude: string | number;
  longitude: string | number;
}

export interface SiteConfigType {
  authorName: string;
  brandName: string;
  url: string;
  email: string;
  description: string;
  displayNumber: string;
  ogImage: string;
  foundedYear: string;
  numberCallLink: string;
  whatsappCallLink: string;
  mapsLink: string;
  location: string;
  logo: string;

  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode: string;
  streetAddress: string;
  city: string;
  country: string;
  founded: number;
  responseTime: string;
  GMB: GMBConfig;
  services: ServiceItem[];
  serviceAreas: ServiceAreaItem[];
  operatingHours: OperatingHour[];
  navItems: NavItem[];
  footerhrefs: FooterLink[];
  socialLinks: SocialLink[];
  contactLinks: ContactLink[];
}
