import { SiteConfigType } from "@/types/site";
import { 
    RiFacebookCircleFill, 
    RiInstagramFill, 
    RiMailLine, 
    RiMapPinLine, 
    RiPhoneLine, 
    RiTwitterXFill, 
    RiYoutubeFill 
} from "@remixicon/react";

export const SiteConfig: SiteConfigType = {
    authorName: "AutoDrop Team",
    brandName: "AutoDrop Car Repair Mobile Mechanic Dubai",
    url: "https://autodropcarrepair.ae",
    email: "autodropcarrepair@gmail.com",
    description: "AutoDrop delivers 24/7 fast, reliable mobile car repair and emergency roadside assistance across Dubai within 5 to 30 minutes. Our certified mobile mechanics provide onsite battery replacement, diagnostics, brake repair, and AC service with transparent pricing.",
    displayNumber: "+971 50 000 0000",
    ogImage: "/og-image.jpg",
    logo: "/logo.png",
    foundedYear: "2016",
    numberCallLink: "tel:+971500000000", 
    whatsappCallLink: "https://wa.me/971500000000",
    location: "Dubai Internet City",
    streetAddress: "Dubai Internet City",
    city: "Dubai",
    country: "United Arab Emirates",
    founded: 2016,
    responseTime: "5-30 min",
    mapsLink: "https://maps.google.com/?q=Dubai+Internet+City",
    addressLocality: "Dubai Internet City",
    addressRegion: "Dubai",
    addressCountry: "AE",
    postalCode: "00000",
    GMB: {
        PlaceID: "",
        CID: "",
        BusinessProfileID: "",
        mapsLink: "https://maps.google.com/?q=Dubai+Internet+City",
        embedMap: "",
        latitude: "25.0947",
        longitude: "55.1558",
    },

    services: [
        {
            "name": "Car Battery Replacement",
            "slug": "car-battery-replacement"
        },
        {
            "name": "Jump Start Car",
            "slug": "jump-start-car"
        },
        {
            "name": "Car Computer Diagnostic",
            "slug": "car-computer-diagnostic"
        },
        {
            "name": "Car Alternator Repair",
            "slug": "car-alternator-repair"
        },
        {
            "name": "Car Fuel Pump Repair",
            "slug": "car-fuel-pump-repair"
        },
        {
            "name": "Car Starter Motor Repair",
            "slug": "car-starter-motor-repair"
        },
        {
            "name": "Car AC Repair",
            "slug": "car-ac-repair"
        },
        {
            "name": "Car Window Motor Repair",
            "slug": "car-window-motor-repair"
        },
        {
            "name": "Radiator Replacement",
            "slug": "radiator-replacement"
        },
        {
            "name": "ABS System Repair",
            "slug": "abs-system-repair"
        },
        {
            "name": "Brake Pad Repair",
            "slug": "brake-pad-repair"
        },
        {
            "name": "Car Detailing Service",
            "slug": "car-detailing-service"
        },
        {
            "name": "Emergency Car Repair",
            "slug": "emergency-car-repair"
        },
        {
            "name": "Car Mechanic Service",
            "slug": "car-mechanic-service"
        },
        {
            "name": "Oil Change Service",
            "slug": "oil-change-service"
        },
        {
            "name": "Car AC Gas Refill Service",
            "slug": "car-ac-gas-refill-service"
        },
        {
            "name": "Car Transmission Repair",
            "slug": "car-transmission-repair"
        },
        {
            "name": "Car Service Dubai",
            "slug": "car-service-dubai"
        },
        {
            "name": "Car Repair Dubai",
            "slug": "car-repair-dubai"
        }
    ],

    serviceAreas: [
        {
            "name": "Dubai Marina",
            "slug": "dubai-marina"
        },
        {
            "name": "Jumeirah Lakes Towers (JLT)",
            "slug": "jumeirah-lakes-towers"
        },
        {
            "name": "Barsha Heights (TECOM)",
            "slug": "barsha-heights"
        },
        {
            "name": "Al Barsha",
            "slug": "al-barsha"
        },
        {
            "name": "Palm Jumeirah",
            "slug": "palm-jumeirah"
        },
        {
            "name": "Dubai Media City & Knowledge Park",
            "slug": "dubai-media-city"
        },
        {
            "name": "Greens & Views",
            "slug": "greens-and-views"
        },
        {
            "name": "Jumeirah Village Circle (JVC)",
            "slug": "jumeirah-village-circle"
        },
        {
            "name": "Dubai Hills Estate",
            "slug": "dubai-hills-estate"
        },
        {
            "name": "Al Quoz Industrial Area",
            "slug": "al-quoz"
        }
    ],

    operatingHours: [
        { day: "Saturday", hours: "24 Hours" },
        { day: "Sunday", hours: "24 Hours" },
        { day: "Monday", hours: "24 Hours" },
        { day: "Tuesday", hours: "24 Hours" },
        { day: "Wednesday", hours: "24 Hours" },
        { day: "Thursday", hours: "24 Hours" },
        { day: "Friday", hours: "24 Hours" },
    ],

    navItems: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Areas We Serve", href: "/service-area" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],

    footerhrefs: [
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Services", href: "/services" },
        { title: "Areas We Serve", href: "/area-we-serve" },
        { title: "Projects", href: "/projects" },
        { title: "Sitemap", href: "/sitemap.xml" }
    ],

    socialLinks: [
        { name: "Facebook", icon: RiFacebookCircleFill, href: "https://facebook.com" },
        { name: "Instagram", icon: RiInstagramFill, href: "https://instagram.com" },
        { name: "X (Twitter)", icon: RiTwitterXFill, href: "https://x.com" },
        { name: "YouTube", icon: RiYoutubeFill, href: "https://youtube.com" }
    ],

    contactLinks: [
        { name: "Map", icon: RiMapPinLine, href: "https://maps.google.com/?q=Dubai+Internet+City" },
        { name: "Phone", icon: RiPhoneLine, href: "tel:+971500000000" },
        { name: "Email", icon: RiMailLine, href: "mailto:autodropcarrepair@gmail.com" }
    ]
};

export const {
    contactLinks,
    socialLinks,
    footerhrefs,
    navItems,
    serviceAreas,
    location,
    streetAddress,
    GMB,
    numberCallLink,
    whatsappCallLink,
    operatingHours,
    displayNumber,
    description,
    email,
    url,
    brandName,
    authorName,
    city,
    country
} = SiteConfig;