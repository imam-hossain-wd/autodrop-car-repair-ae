// import { SiteConfig } from "@/config/siteConfig";

// export default function SchemaScript() {
//     const schemaData = {
//         "@context": "https://schema.org",
//         "@graph": [
//             {
//                 "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService"],
//                 "@id": `${SiteConfig.url}/#organization`,
//                 "name": SiteConfig.brandName,
//                 "url": SiteConfig.url,
//                 "logo": SiteConfig.logo,
//                 "image": SiteConfig.ogImage,
//                 "description": SiteConfig.description,
//                 "telephone": SiteConfig.displayNumber,
//                 "email": SiteConfig.email,
//                 "priceRange": "$$",
//                 "foundingDate": SiteConfig.foundedYear,
//                 "hasMap": SiteConfig.GMB.mapsLink || SiteConfig.mapsLink,
//                 "sameAs": SiteConfig.socialLinks.map((s) => s.href),
//                 "address": {
//                     "@type": "PostalAddress",
//                     "streetAddress": SiteConfig.streetAddress || SiteConfig.location,
//                     "addressLocality": SiteConfig.addressLocality,
//                     "addressRegion": SiteConfig.addressRegion,
//                     "addressCountry": SiteConfig.addressCountry,
//                     "postalCode": SiteConfig.postalCode,
//                 },
//                 "geo": {
//                     "@type": "GeoCoordinates",
//                     "latitude": SiteConfig.GMB.latitude,
//                     "longitude": SiteConfig.GMB.longitude,
//                 },
//                 "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
//                     "@type": "OpeningHoursSpecification",
//                     "dayOfWeek": item.day,
//                     "opens": item.hours === "24 Hours" ? "00:00" : "08:00",
//                     "closes": item.hours === "24 Hours" ? "23:59" : "20:00",
//                 })),
//                 "areaServed": SiteConfig.serviceAreas.map((area) => ({
//                     "@type": "AdministrativeArea",
//                     "name": `${area.name}, ${SiteConfig.city}`,
//                 })),
//                 "aggregateRating": {
//                     "@type": "AggregateRating",
//                     "ratingValue": "4.9",
//                     "reviewCount": "250",
//                     "bestRating": "5",
//                     "worstRating": "1",
//                 },
//                 "hasOfferCatalog": {
//                     "@type": "OfferCatalog",
//                     "name": "24/7 Mobile Car Repair Services",
//                     "itemListElement": SiteConfig.services.map((service) => ({
//                         "@type": "Offer",
//                         "itemOffered": {
//                             "@type": "Service",
//                             "name": service.name,
//                             "url": `${SiteConfig.url}/services/${service.slug}`,
//                             "description": `${service.name} service in ${SiteConfig.city} by ${SiteConfig.brandName}`,
//                         },
//                     })),
//                 },
//             },
//             {
//                 "@type": "WebSite",
//                 "@id": `${SiteConfig.url}/#website`,
//                 "url": SiteConfig.url,
//                 "name": SiteConfig.brandName,
//                 "publisher": {
//                     "@id": `${SiteConfig.url}/#organization`,
//                 },
//             },
//         ],
//     };

//     return (
//         <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
//         />
//     );
// }

import { SiteConfig } from "@/config/siteConfig";

export default function SchemaScript() {
    const orgId = `${SiteConfig.url}/#organization`;
    const websiteId = `${SiteConfig.url}/#website`;

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService"],
                "@id": orgId,
                "name": SiteConfig.brandName,
                "legalName": SiteConfig.brandName,
                "url": SiteConfig.url,
                "logo": {
                    "@type": "ImageObject",
                    "@id": `${SiteConfig.url}/#logo`,
                    "url": SiteConfig.logo,
                    "caption": SiteConfig.brandName,
                },
                "image": [
                    SiteConfig.ogImage || SiteConfig.logo
                ],
                "description": SiteConfig.description,
                "telephone": SiteConfig.displayNumber,
                "email": SiteConfig.email,
                "priceRange": "$$",
                "currenciesAccepted": "AED, USD",
                "paymentAccepted": "Cash, Credit Card, Debit Card",
                "foundingDate": SiteConfig.foundedYear ? String(SiteConfig.foundedYear) : undefined,
                "hasMap": SiteConfig.GMB?.mapsLink || SiteConfig.mapsLink,
                "sameAs": SiteConfig.socialLinks?.map((s) => s.href) || [],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": SiteConfig.streetAddress || SiteConfig.location || "",
                    "addressLocality": SiteConfig.addressLocality || SiteConfig.city || "",
                    "addressRegion": SiteConfig.addressRegion || "",
                    "addressCountry": SiteConfig.addressCountry || "AE",
                    "postalCode": SiteConfig.postalCode || "",
                },
                "geo": SiteConfig.GMB?.latitude ? {
                    "@type": "GeoCoordinates",
                    "latitude": Number(SiteConfig.GMB.latitude),
                    "longitude": Number(SiteConfig.GMB.longitude),
                } : undefined,
                "areaServed": [
                    ...(SiteConfig.serviceAreas || []).map((area) => ({
                        "@type": "AdministrativeArea",
                        "name": `${area.name}, ${SiteConfig.city || ""}`.trim(),
                    })),
                    SiteConfig.GMB?.latitude ? {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": Number(SiteConfig.GMB.latitude),
                            "longitude": Number(SiteConfig.GMB.longitude),
                        },
                        "geoRadius": "50000", // 50km Service Radius for Mobile/Emergency units
                    } : null
                ].filter(Boolean),
                "openingHoursSpecification": (SiteConfig.operatingHours || []).map((item) => ({
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": item.day,
                    "opens": item.hours === "24 Hours" ? "00:00" : "08:00",
                    "closes": item.hours === "24 Hours" ? "23:59" : "20:00",
                })),
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": SiteConfig.displayNumber,
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Arabic"],
                        "option": ["247Service", "TollFree"],
                        "areaServed": SiteConfig.city || "Dubai",
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "250",
                    "bestRating": "5",
                    "worstRating": "1",
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "@id": `${SiteConfig.url}/#catalog`,
                    "name": "24/7 Mobile Car Repair & Emergency Services",
                    "itemListElement": (SiteConfig.services || []).map((service, index) => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "@id": `${SiteConfig.url}/services/${service.slug}/#service`,
                            "name": service.name,
                            "serviceType": "Automotive Repair",
                            "url": `${SiteConfig.url}/services/${service.slug}`,
                            "description": `${service.name} service in ${SiteConfig.city || ""} by ${SiteConfig.brandName}`,
                            "provider": {
                                "@id": orgId
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": SiteConfig.city || "Dubai"
                            }
                        },
                        "position": index + 1
                    })),
                },
            },
            {
                "@type": "WebSite",
                "@id": websiteId,
                "url": SiteConfig.url,
                "name": SiteConfig.brandName,
                "description": SiteConfig.description,
                "publisher": {
                    "@id": orgId,
                },
                "inLanguage": "en-US",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}