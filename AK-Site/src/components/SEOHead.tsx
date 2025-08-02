import { useEffect } from 'react';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    serviceType?: string;
    city?: string;
    noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = "UK Mortgage Broker | Expert Mortgage Advice | Noble Mortgages",
    description = "Leading UK mortgage broker offering expert advice for first-time buyers, remortgages & buy-to-let. Access to 90+ lenders, free consultation. FCA regulated.",
    keywords = "UK mortgage broker, mortgage advisor, first time buyer mortgage, remortgage deals, buy to let mortgage",
    canonical,
    ogImage = "https://mortgageuk.netlify.app/images/noble-mortgages-og-image.jpg",
    serviceType,
    city,
    noindex = false
}) => {
    useEffect(() => {
        // Build location-specific title and description
        const locationTitle = city ? `${title} | ${city}` : title;
        const locationDescription = city ? `${description} Serving ${city} and surrounding areas.` : description;

        // Update document title
        document.title = locationTitle;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, property?: boolean) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector) as HTMLMetaElement;

            if (!meta) {
                meta = document.createElement('meta');
                if (property) {
                    meta.setAttribute('property', name);
                } else {
                    meta.setAttribute('name', name);
                }
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Update basic meta tags
        updateMetaTag('description', locationDescription);
        updateMetaTag('keywords', keywords);
        updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

        // Update Open Graph tags
        updateMetaTag('og:title', locationTitle, true);
        updateMetaTag('og:description', locationDescription, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', 'website', true);
        updateMetaTag('og:locale', 'en_GB', true);

        // Update Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', locationTitle);
        updateMetaTag('twitter:description', locationDescription);
        updateMetaTag('twitter:image', ogImage);

        // Update canonical URL if provided
        if (canonical) {
            let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.setAttribute('rel', 'canonical');
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute('href', canonical);
        }

        // Add service-specific structured data
        if (serviceType) {
            const existingScript = document.querySelector('#service-schema');
            if (existingScript) {
                existingScript.remove();
            }

            const serviceSchema = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": serviceType,
                "provider": {
                    "@type": "FinancialService",
                    "name": "Noble Mortgages",
                    "url": "https://mortgageuk.netlify.app"
                },
                "areaServed": city ? {
                    "@type": "City",
                    "name": city
                } : {
                    "@type": "Country",
                    "name": "United Kingdom"
                },
                "serviceType": "Financial Advisory Services",
                "description": locationDescription
            };

            const script = document.createElement('script');
            script.id = 'service-schema';
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(serviceSchema);
            document.head.appendChild(script);
        }

        // Add FAQ structured data for service pages
        if (serviceType) {
            const existingFAQScript = document.querySelector('#faq-schema');
            if (existingFAQScript) {
                existingFAQScript.remove();
            }

            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `How much does ${serviceType.toLowerCase()} cost?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our mortgage advice is completely free to you. We are paid by the lender once your mortgage completes, with no fees charged to our clients."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `How long does the ${serviceType.toLowerCase()} process take?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically 2-6 weeks from application to completion. We streamline the process by handling all paperwork and liaising with lenders directly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Do you offer ${serviceType.toLowerCase()} advice in ${city || 'my area'}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes, we provide ${serviceType.toLowerCase()} advice across the UK${city ? `, including ${city}` : ''}. Contact us for a free consultation.`
                        }
                    }
                ]
            };

            const faqScript = document.createElement('script');
            faqScript.id = 'faq-schema';
            faqScript.type = 'application/ld+json';
            faqScript.textContent = JSON.stringify(faqSchema);
            document.head.appendChild(faqScript);
        }

    }, [title, description, keywords, canonical, ogImage, serviceType, city, noindex]);

    // This component doesn't render anything visible
    return null;
};

export default SEOHead;