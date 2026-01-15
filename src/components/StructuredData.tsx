import React from 'react'

export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://horizonvalleycleaning.com/#organization",
    "name": "Horizon Valley Services LLC",
    "alternateName": "Horizon Valley Cleaning",
    "url": "https://horizonvalleycleaning.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://horizonvalleycleaning.com/HV_logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://horizonvalleycleaning.com/HV_logo.png",
    "description": "Comprehensive property services serving San Francisco, Marin, Sonoma, and Mendocino counties. Expert power washing, window cleaning, gutter cleaning, junk removal, moving services, and tree trimming.",
    "telephone": "+1-559-960-2749",
    "email": "contact@horizonvalleycleaning.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ukiah",
      "addressRegion": "CA",
      "addressCountry": "US",
      "areaServed": [
        {
          "@type": "City",
          "name": "San Francisco",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Marin County",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Sonoma County",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Mendocino County",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        }
      ]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.1502,
      "longitude": -123.2078
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Check",
    "currenciesAccepted": "USD",
    "founder": [
      {
        "@type": "Person",
        "name": "Cody White"
      },
      {
        "@type": "Person",
        "name": "Treyton Scott"
      },
      {
        "@type": "Person",
        "name": "Caleb White"
      },
      {
        "@type": "Person",
        "name": "Hudson Ford"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/horizonvalleyservices",
      "https://www.instagram.com/horizonvalleyservices"
    ]
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Property Maintenance Services",
    "provider": {
      "@id": "https://horizonvalleycleaning.com/#organization"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "San Francisco",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "Marin County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sonoma County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mendocino County"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Washing & Pressure Washing",
            "description": "Professional exterior cleaning for driveways, decks, siding, and more."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Cleaning",
            "description": "Streak-free window cleaning for residential and commercial properties."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gutter Cleaning",
            "description": "Complete gutter cleaning and maintenance to prevent water damage."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal",
            "description": "Fast and efficient junk removal and hauling services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Moving Services",
            "description": "Professional moving services for residential and commercial relocations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tree Trimming",
            "description": "Expert tree trimming and maintenance services."
          }
        }
      ]
    }
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://horizonvalleycleaning.com/#website",
    "url": "https://horizonvalleycleaning.com",
    "name": "Horizon Valley Services LLC",
    "description": "Professional property services in the Bay Area and Northern California",
    "publisher": {
      "@id": "https://horizonvalleycleaning.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://horizonvalleycleaning.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://horizonvalleycleaning.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
