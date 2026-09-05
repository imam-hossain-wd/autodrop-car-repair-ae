import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  home: {
    title: "Mobile Mechanic Dubai | 24/7 Car Repair & Battery Replacement",
    description:
      "Fast 24/7 mobile car repair & battery replacement in Dubai. 5–30 min arrival for onsite diagnostics, AC repair, & mechanics. We come to you—call now!",
    verification: {
      google: "Ojd1AEXWIAI_xRxpqHZlCQ8xWNVrmUaTE1Dtf24pJZ8",
    },
    // Ojd1AEXWIAI_xRxpqHZlCQ8xWNVrmUaTE1Dtf24pJZ8
    alternates: {
      canonical: SiteConfig.url,
    },
    openGraph: {
      title: "Mobile Mechanic Dubai | 24/7 Car Repair & Battery Replacement",
      description:
        "Fast 24/7 mobile car repair & battery replacement in Dubai. 5–30 min arrival for onsite diagnostics, AC repair, & mechanics. We come to you—call now!",
      url: SiteConfig.url,
      siteName: SiteConfig.brandName,
      images: [{ url: SiteConfig.ogImage, width: 1200, height: 630 }],
      type: "website",
    },
  },

  // Services Main Hub (/services)
  services: {
    title: "Mobile Car Repair Services Dubai | 24/7 Onsite Mechanic",
    description:
      "Comprehensive mobile mechanic services in Dubai. Car battery replacement, diagnostics, brake repair, AC refill & emergency roadside assistance at your doorstep.",
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
  },

  // Area We Serve (/area-we-serve)
  areaWeServe: {
    title:
      "Mobile Car Mechanic Service Areas Dubai | 24/7 Roadside Assistance",
    description:
      "AutoDrop serves Dubai Marina, JLT, Palm Jumeirah, JVC, Al Barsha & key areas. Rapid 15-minute onsite mobile car repair and battery replacement across Dubai.",
    alternates: {
      canonical: `${SiteConfig.url}/area-we-serve`,
    },
  },

  // Projects (/projects)
  projects: {
    title: "Our Repairs & Recent Work | AutoDrop Mobile Mechanic Dubai",
    description:
      "Browse our recent mobile car repairs, complex ECU diagnostics, and battery replacements completed onsite across Dubai Marina, Palm Jumeirah, and JVC.",
    alternates: {
      canonical: `${SiteConfig.url}/projects`,
    },
  },

  // Brands We Serve (/brands)
  brands: {
    title: `Car Repair for All Brands in Dubai | Luxury & Japanese Cars`,
    description: `Certified repair for Toyota, Nissan, BMW, Mercedes, Audi, Ford, & Porsche in Dubai. On-site diagnostics and OEM spare parts with warranty.`,
    alternates: {
      canonical: `${SiteConfig.url}/brands`,
    },
  },

  // Gallery (/gallery)
  gallery: {
    title: `Mobile Car Repair Work Gallery | Real On-Site Photos Dubai`,
    description: `View real photos of our 24/7 mobile mechanics servicing cars across Dubai: battery fixes, AC refilling, computer diagnostics, and emergency repairs.`,
    alternates: {
      canonical: `${SiteConfig.url}/gallery`,
    },
  },

  // Contact Us (/contact)
  contact: {
    title: "Contact 24/7 Mobile Mechanic Dubai | AutoDrop Car Repair",
    description:
      "Need emergency car repair or a battery swap in Dubai? Contact AutoDrop now. Rapid 5-30 minute dispatch to your location anywhere in Dubai.",
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
  },

  // About Us (/about)
  about: {
    title: "About AutoDrop Dubai | Certified Mobile Mechanics Since 2016",
    description:
      "Operating since 2016, AutoDrop is Dubai’s trusted 24/7 mobile mechanic service. Certified technicians, transparent pricing, and dealer-level equipment.",
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
  },

  // Privacy Policy (/privacy)
  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Read the privacy policy for ${SiteConfig.brandName} to understand how we secure your data and service inquiries.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
  },

  // Terms of Service (/terms)
  terms: {
    title: `Terms of Service | ${SiteConfig.brandName}`,
    description: `Review service agreements, warranty coverage, pricing terms, and roadside dispatch policies for ${SiteConfig.brandName}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
  },
};