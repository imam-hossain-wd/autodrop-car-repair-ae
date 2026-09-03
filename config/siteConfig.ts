import { SiteConfigType } from "@/types/site";
import { RiFacebookCircleFill, RiInstagramFill, RiMailLine, RiMapPinLine, RiPhoneLine, RiPinterestFill, RiYoutubeFill } from "@remixicon/react";

// brand Name : AutoDrop Car Repair Mechanic Dubai
// Category : Auto Repair Shop 
// Address : 
// Phone Number : 
//  - Jabal Ali First - The Gardens - Dubai - United Arab Emirates
export const SiteConfig:SiteConfigType = {
    authorName: "Md Zahed",
    brandName: "AutoDrop Car Repair Mechanic Dubai",
    url: "https://www.autodropcarrepairdubai.com",
    email: "autodropcarrepair@gmail.com",
    description: "AutoDrop Car Repair Dubai delivers 24/7 fast, reliable mobile car repair and emergency roadside assistance anywhere in Dubai within 5 to 15 minutes. Our certified mobile mechanics come directly to your home, office, or breakdown location with transparent pricing, advanced diagnostics, and guaranteed work.",
    displayNumber: "+971 05 593 0256",
    ogImage:"/",
    foundedYear:"2019",
    numberCallLink: "tel:+971055930256",
    whatsappCallLink: "https://wa.me/971055930256",
    location: "Dubai Internet City",
    streetAddress: ",",
    city: "Dubai",
    country: "UAE",
    founded: 2020,
    responseTime: "5-30 min",
    mapsLink:"",

    GMB: {
        PlaceID: "",
        CID: "",
        BusinessProfileID: "",
        mapsLink: "",
        embedMap: "",
        latitude: "",
        longitude: "",
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
            "name": "Dubailand",
            "slug": "dubailand"
        },
        {
            "name": "Arabian Ranches",
            "slug": "arabian-ranches"
        },
        {
            "name": "Dubai Silicon Oasis",
            "slug": "dubai-silicon-oasis"
        },
        {
            "name": "Dubai Motor City",
            "slug": "dubai-motor-city"
        },
        {
            "name": "Jumeirah Village Circle",
            "slug": "jumeirah-village-circle"
        },
        {
            "name": "Dubai Hills Estate",
            "slug": "dubai-hills-estate"
        },
        {
            "name": "Business Bay",
            "slug": "business-bay"
        },
        {
            "name": "Al Barsha",
            "slug": "al-barsha"
        },
        {
            "name": "Al Quoz",
            "slug": "al-quoz"
        },
        {
            "name": "Downtown Dubai",
            "slug": "downtown-dubai"
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
        { name: "Areas We Serve", href: "/area-we-serve" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
    ],

    footerhrefs: [
        { title: "About Us", href: "/about" },
        { title: "Contact", href: "/contact" },
        { title: "Services", href: "/services" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Sitemap", href: "/sitemap.xml" }
    ],

    socialLinks: [
        { name: "Facebook", icon: RiFacebookCircleFill, href: "" },
        { name: "Instagram", icon: RiInstagramFill, href: "" },
        { name: "Pinterest", icon: RiPinterestFill, href: "" },
        { name: "YouTube", icon: RiYoutubeFill, href: "" }
    ],

    contactLinks: [
        { name: "Map", icon: RiMapPinLine, href: "" },
        { name: "Phone", icon: RiPhoneLine, href: "tel:+" },
        { name: "Email", icon: RiMailLine, href: "mailto:" }
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