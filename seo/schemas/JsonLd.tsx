// components/JsonLd.tsx
import React from 'react';

export default function JsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "EmergencyService"],
        "@id": "https://autodropcarrepair.ae/#organization",
        "name": "AutoDrop Car Repair Mobile Mechanic Dubai",
        "alternateName": "AutoDrop Mobile Car Repair",
        "url": "https://autodropcarrepair.ae",
        "logo": "https://autodropcarrepair.ae/logo.png",
        "image": "https://autodropcarrepair.ae/og-image.jpg",
        "description": "AutoDrop provides 24/7 fast, professional mobile car repair and roadside assistance across Dubai within 5 to 30 minutes. Certified mechanics coming directly to your home, office, or breakdown location with transparent pricing.",
        "telephone": "+971500000000",
        "email": "autodropcarrepair@gmail.com",
        "priceRange": "$$",
        "foundingDate": "2016",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dubai Internet City",
          "addressLocality": "Dubai Internet City",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.0947,
          "longitude": 55.1558
        },
        "hasMap": "https://maps.google.com/?q=Dubai+Internet+City",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Dubai Marina" },
          { "@type": "AdministrativeArea", "name": "Jumeirah Lakes Towers" },
          { "@type": "AdministrativeArea", "name": "Barsha Heights" },
          { "@type": "AdministrativeArea", "name": "Al Barsha" },
          { "@type": "AdministrativeArea", "name": "Palm Jumeirah" },
          { "@type": "AdministrativeArea", "name": "Dubai Media City" },
          { "@type": "AdministrativeArea", "name": "Greens & Views" },
          { "@type": "AdministrativeArea", "name": "Jumeirah Village Circle" },
          { "@type": "AdministrativeArea", "name": "Dubai Hills Estate" },
          { "@type": "AdministrativeArea", "name": "Al Quoz Industrial Area" }
        ],
        "sameAs": [
          "https://facebook.com",
          "https://instagram.com",
          "https://x.com",
          "https://youtube.com"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "348",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Marcus Vance" },
            "datePublished": "2026-08-14",
            "reviewBody": "Stranded in JLT basement parking with a dead battery on my BMW X5. AutoDrop arrived in 12 minutes, swapped the battery with a fresh Varta AGM, and did the ECU/BMS registration on the spot. Fantastic service!",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sarah Al-Maktoum" },
            "datePublished": "2026-07-22",
            "reviewBody": "My AC stopped blowing cold air while at Dubai Marina Mall. Called AutoDrop 24/7 line and their technician arrived in less than 20 minutes to refill the AC gas and replace a leaky seal.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://autodropcarrepair.ae/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast can a mobile mechanic arrive at my location in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our mobile units are strategically stationed near major Dubai arteries. We typically arrive at your location within 5 to 30 minutes across Dubai Marina, JLT, Palm Jumeirah, JVC, and Al Barsha."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer 24/7 emergency roadside car repair in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AutoDrop operates 24 hours a day, 7 days a week, 365 days a year across all major Dubai communities for dead batteries, mechanics, and jump starts."
            }
          },
          {
            "@type": "Question",
            "name": "Can you repair my car inside tight basement parking garages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our compact mobile service units are equipped with portable power jump packs and diagnostic units designed specifically to perform onsite repairs inside low-clearance basement parking structures."
            }
          },
          {
            "@type": "Question",
            "name": "What brands of car batteries do you supply and install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We stock 100% original, fresh GCC-spec heat-resistant batteries including Varta, Amaron, Solite, Bosch, and ACDelco, backed by a 12 to 24-month doorstep warranty."
            }
          },
          {
            "@type": "Question",
            "name": "Will replacing my car battery erase my vehicle's ECU settings or clock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Our technicians use a specialized zero-risk memory-saver installation procedure to supply continuous auxiliary power to your ECU during replacement, preserving all vehicle memory and settings."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}