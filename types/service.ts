import { StaticImageData } from "next/image"; // Adjust this import based on what type 'ServiceBanner.batteryReplacement' is (e.g., string if it's an image URL)

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceIntro {
  heading: string;
  subheading: string;
  content: string;
}

export interface ServiceWhyChooseUs {
  heading: string;
  points: string[];
}

export interface ServiceProblemSigns {
  heading: string;
  description: string;
  signs: string[];
}

export interface ServiceProcess {
  heading: string;
  steps: ProcessStep[];
}

export interface ServiceToolsOrProducts {
  heading: string;
  brands: string[];
  note: string;
}

export interface ServiceCTA {
  heading: string;
  description: string;
  buttonText: string;
}

export interface ServiceDetail {
  title: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  popular: boolean;
  features: string[];
  slug: string;
  service_banner: StaticImageData | string; // Use StaticImageData for Next.js imports, or string for URLs
  intro: ServiceIntro;
  whyChooseUs: ServiceWhyChooseUs;
  problemSignsSection: ServiceProblemSigns;
  ourProcess: ServiceProcess;
  toolsOrProducts: ServiceToolsOrProducts;
  ctaSection: ServiceCTA;
  faq: FAQItem[];
}