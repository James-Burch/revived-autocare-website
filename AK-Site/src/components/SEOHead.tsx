import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  serviceType?: string;
  city?: string;
}

interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  canonical,
  noIndex = false,
  breadcrumbs,
  faqData,
  serviceType,
  city,
}) => {
  const location = useLocation();
  const currentUrl = `https://mortgageuk.netlify.app${location.pathname}`;

  // Default values
  const defaultTitle = "Noble Mortgages - Expert Mortgage & Insurance Advice";
  const defaultDescription =
    "Professional mortgage and insurance services with expert advice. Find the best deals on mortgages, life insurance, and protection products across the UK.";
  const defaultImage = "/images/noble-mortgages-og-image.jpg";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const ogImage = image || defaultImage;

  useEffect(() => {
    // Helper function to update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update page title
    document.title = finalTitle;

    // Update basic meta tags
    updateMetaTag("description", finalDescription);
    if (keywords) updateMetaTag("keywords", keywords);
    updateMetaTag("robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Update Open Graph tags
    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", canonical || currentUrl, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:locale", "en_GB", true);
    updateMetaTag("og:site_name", "Noble Mortgages", true);

    // Update Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", finalTitle);
    updateMetaTag("twitter:description", finalDescription);
    updateMetaTag("twitter:image", ogImage);

    // Update canonical URL if provided
    if (canonical) {
      let canonicalLink = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Generate and inject structured data
    const structuredDataArray: StructuredData[] = [];

    // Local Business Schema - PRD Requirement
    const localBusinessSchema: StructuredData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: "Noble Mortgages",
      image: ogImage,
      url: "https://mortgageuk.netlify.app",
      telephone: "+44-1234-567890",
      email: "info@noblemortgages.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Financial Street",
        addressLocality: city || "London",
        addressRegion: "England",
        postalCode: "SW1A 1AA",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      serviceArea: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mortgage and Insurance Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Mortgages",
              description:
                "Expert residential mortgage advice and applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Buy-to-Let Mortgages",
              description: "Specialist buy-to-let mortgage services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Life Insurance",
              description: "Comprehensive life insurance policies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Protection Insurance",
              description: "Income and critical illness protection",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Sarah Johnson",
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Excellent service from Noble Mortgages. They found us a great mortgage deal and made the process smooth and stress-free.",
        },
      ],
    };
    structuredDataArray.push(localBusinessSchema);

    // Add service-specific structured data
    if (serviceType) {
      const existingScript = document.querySelector("#service-schema");
      if (existingScript) {
        existingScript.remove();
      }

      const serviceSchema: StructuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceType,
        provider: {
          "@type": "FinancialService",
          name: "Noble Mortgages",
          url: "https://mortgageuk.netlify.app",
        },
        areaServed: city
          ? {
              "@type": "City",
              name: city,
              containedInPlace: {
                "@type": "Country",
                name: "United Kingdom",
              },
            }
          : {
              "@type": "Country",
              name: "United Kingdom",
            },
        serviceType: serviceType,
        description: finalDescription,
        url: currentUrl,
      };
      structuredDataArray.push(serviceSchema);
    }

    // Breadcrumb Schema - PRD Requirement
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema: StructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `https://mortgageuk.netlify.app${crumb.url}`,
        })),
      };
      structuredDataArray.push(breadcrumbSchema);
    }

    // FAQ Schema - PRD Requirement
    if (faqData && faqData.length > 0) {
      const faqSchema: StructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      structuredDataArray.push(faqSchema);
    }

    // Website Schema
    const websiteSchema: StructuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Noble Mortgages",
      url: "https://mortgageuk.netlify.app",
      description: "Professional mortgage and insurance services across the UK",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://mortgageuk.netlify.app/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      publisher: {
        "@type": "Organization",
        name: "Noble Mortgages",
        logo: {
          "@type": "ImageObject",
          url: "https://mortgageuk.netlify.app/images/logo.png",
        },
      },
    };
    structuredDataArray.push(websiteSchema);

    // Organization Schema
    const organizationSchema: StructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Noble Mortgages",
      url: "https://mortgageuk.netlify.app",
      logo: "https://mortgageuk.netlify.app/images/logo.png",
      image: ogImage,
      description:
        "Leading mortgage and insurance advisors providing expert financial services across the United Kingdom.",
      telephone: "+44-1234-567890",
      email: "info@noblemortgages.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Financial Street",
        addressLocality: city || "London",
        addressRegion: "England",
        postalCode: "SW1A 1AA",
        addressCountry: "GB",
      },
      sameAs: [
        "https://www.facebook.com/noblemortgages",
        "https://www.twitter.com/noblemortgages",
        "https://www.linkedin.com/company/noblemortgages",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+44-1234-567890",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
    };
    structuredDataArray.push(organizationSchema);

    // Remove existing structured data
    const existingSchemas = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingSchemas.forEach((schema) => schema.remove());

    // Inject all structured data
    structuredDataArray.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Additional technical SEO meta tags
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("format-detection", "telephone=no");
    updateMetaTag("theme-color", "#0ABAB5");
    updateMetaTag("msapplication-TileColor", "#0ABAB5");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "default");

    // Preconnect to external domains for performance
    const preconnectDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ];
    preconnectDomains.forEach((domain) => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = domain;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for external resources
    const dnsPrefetchDomains = [
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
    ];
    dnsPrefetchDomains.forEach((domain) => {
      if (
        !document.querySelector(`link[href="${domain}"][rel="dns-prefetch"]`)
      ) {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = domain;
        document.head.appendChild(link);
      }
    });

    // Add hreflang for international SEO if needed
    const currentLang = "en-GB";
    updateMetaTag("language", currentLang);

    let htmlLang = document.querySelector("html");
    if (htmlLang) {
      htmlLang.setAttribute("lang", currentLang);
    }

    // Add manifest link if it exists
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifestLink = document.createElement("link");
      manifestLink.rel = "manifest";
      manifestLink.href = "/manifest.json";
      document.head.appendChild(manifestLink);
    }

    // Add apple touch icons
    const appleTouchIcons = [
      { size: "180x180", href: "/images/apple-touch-icon.png" },
      { size: "152x152", href: "/images/apple-touch-icon-152x152.png" },
      { size: "144x144", href: "/images/apple-touch-icon-144x144.png" },
      { size: "120x120", href: "/images/apple-touch-icon-120x120.png" },
    ];

    appleTouchIcons.forEach((icon) => {
      if (!document.querySelector(`link[sizes="${icon.size}"]`)) {
        const link = document.createElement("link");
        link.rel = "apple-touch-icon";
        link.sizes = icon.size;
        link.href = icon.href;
        document.head.appendChild(link);
      }
    });

    // Add favicon variations
    const favicons = [
      { type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" },
      { type: "image/png", sizes: "16x16", href: "/images/favicon-16x16.png" },
      { type: "image/x-icon", href: "/favicon.ico" },
    ];

    favicons.forEach((favicon) => {
      const selector = favicon.sizes
        ? `link[rel="icon"][sizes="${favicon.sizes}"]`
        : `link[rel="icon"][href="${favicon.href}"]`;

      if (!document.querySelector(selector)) {
        const link = document.createElement("link");
        link.rel = "icon";
        link.type = favicon.type;
        if (favicon.sizes) link.sizes = favicon.sizes;
        link.href = favicon.href;
        document.head.appendChild(link);
      }
    });

    // Performance optimization: preload critical resources
    const criticalResources = [
      { href: "/styles/main.css", as: "style" },
      {
        href: "/fonts/inter-var.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    ];

    criticalResources.forEach((resource) => {
      if (
        !document.querySelector(`link[href="${resource.href}"][rel="preload"]`)
      ) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
        document.head.appendChild(link);
      }
    });
  }, [
    finalTitle,
    finalDescription,
    ogImage,
    keywords,
    canonical,
    noIndex,
    currentUrl,
    breadcrumbs,
    faqData,
    serviceType,
    city,
  ]);

  // This component doesn't render anything visible
  return null;
};

// Helper function to generate breadcrumbs from pathname
export const generateBreadcrumbs = (
  pathname: string
): Array<{ name: string; url: string }> => {
  const paths = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ name: "Home", url: "/" }];

  let currentPath = "";
  paths.forEach((path) => {
    currentPath += `/${path}`;
    const name = path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ name, url: currentPath });
  });

  return breadcrumbs;
};

// Helper function to get page-specific meta data
export const getPageMeta = (pathname: string) => {
  const metaData: { [key: string]: Partial<SEOHeadProps> } = {
    "/": {
      title: "Noble Mortgages - Expert Mortgage & Insurance Advice | UK",
      description:
        "Professional mortgage and insurance services with expert advice. Compare the best mortgage deals, life insurance, and protection products across the UK.",
      keywords:
        "mortgages, mortgage advice, life insurance, protection insurance, UK mortgage broker, financial services",
      serviceType: "Mortgage Advisory Services",
    },
    "/about": {
      title: "About Noble Mortgages - Your Trusted Financial Advisors | UK",
      description:
        "Learn about Noble Mortgages - experienced mortgage and insurance advisors committed to finding you the best financial solutions across the UK.",
      keywords:
        "about noble mortgages, mortgage advisors, financial experts, UK mortgage brokers",
      serviceType: "Financial Advisory Services",
    },
    "/products": {
      title: "Mortgage & Insurance Products - Noble Mortgages | UK",
      description:
        "Explore our comprehensive range of mortgage and insurance products. From residential mortgages to life insurance - find the right solution for you.",
      keywords:
        "mortgage products, insurance products, residential mortgages, buy-to-let, life insurance, protection",
      serviceType: "Financial Products",
    },
    "/contact": {
      title: "Contact Noble Mortgages - Get Expert Financial Advice | UK",
      description:
        "Get in touch with Noble Mortgages for expert mortgage and insurance advice. Free consultations available across the UK.",
      keywords:
        "contact noble mortgages, mortgage consultation, insurance advice, financial consultation",
      serviceType: "Financial Consultation",
    },
    "/calculators": {
      title:
        "Mortgage Calculator - Calculate Your Monthly Payments | Noble Mortgages",
      description:
        "Use our free mortgage calculator to estimate your monthly payments, affordability, and mortgage costs. Get instant calculations.",
      keywords:
        "mortgage calculator, monthly payments, affordability calculator, mortgage costs",
      serviceType: "Mortgage Calculation Tools",
    },
  };

  // Handle dynamic routes
  if (pathname.startsWith("/mortgages/")) {
    const mortgageType = pathname.split("/")[2];
    return {
      title: `${mortgageType
        .replace("-", " ")
        .replace(/\b\w/g, (l) =>
          l.toUpperCase()
        )} Mortgages - Noble Mortgages | UK`,
      description: `Expert ${mortgageType.replace(
        "-",
        " "
      )} mortgage advice and competitive rates. Find the best ${mortgageType.replace(
        "-",
        " "
      )} mortgage deals with Noble Mortgages.`,
      keywords: `${mortgageType} mortgages, ${mortgageType} mortgage rates, ${mortgageType} mortgage advice`,
      serviceType: `${mortgageType
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())} Mortgage Services`,
    };
  }

  if (pathname.startsWith("/insurance/")) {
    const insuranceType = pathname.split("/")[2];
    return {
      title: `${insuranceType
        .replace("-", " ")
        .replace(/\b\w/g, (l) =>
          l.toUpperCase()
        )} Insurance - Noble Mortgages | UK`,
      description: `Comprehensive ${insuranceType.replace(
        "-",
        " "
      )} insurance coverage. Compare quotes and find the best ${insuranceType.replace(
        "-",
        " "
      )} insurance policies.`,
      keywords: `${insuranceType} insurance, ${insuranceType} insurance quotes, ${insuranceType} insurance coverage`,
      serviceType: `${insuranceType
        .replace("-", " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())} Insurance Services`,
    };
  }

  return metaData[pathname] || {};
};

export default SEOHead;
