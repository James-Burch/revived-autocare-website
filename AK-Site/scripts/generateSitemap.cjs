// File: scripts/generateSitemap.js
// Run with: node scripts/generateSitemap.js

const fs = require('fs');
const path = require('path');

// Your website's base URL
const SITE_URL = 'https://mortgageuk.netlify.app';

// Define your routes with priorities and change frequencies
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/mortgage-calculator', priority: '0.8', changefreq: 'weekly' },
  
  // Mortgage service pages
  { url: '/mortgages/first-time-buyers', priority: '0.9', changefreq: 'monthly' },
  { url: '/mortgages/home-mover', priority: '0.8', changefreq: 'monthly' },
  { url: '/mortgages/remortgage', priority: '0.9', changefreq: 'monthly' },
  { url: '/mortgages/buy-to-let', priority: '0.8', changefreq: 'monthly' },
  { url: '/mortgages/new-build', priority: '0.7', changefreq: 'monthly' },
  { url: '/mortgages/help-to-buy', priority: '0.8', changefreq: 'monthly' },
  { url: '/mortgages/limited-companies', priority: '0.7', changefreq: 'monthly' },
  { url: '/mortgages/bridging-loans', priority: '0.7', changefreq: 'monthly' },
  
  // Insurance pages
  { url: '/insurance/life-insurance', priority: '0.7', changefreq: 'monthly' },
  { url: '/insurance/income-protection', priority: '0.7', changefreq: 'monthly' },
  { url: '/insurance/critical-illness', priority: '0.7', changefreq: 'monthly' },
  { url: '/insurance/accident-sickness-unemployment', priority: '0.6', changefreq: 'monthly' },
  { url: '/insurance/home-buildings-contents', priority: '0.6', changefreq: 'monthly' },
];

// UK cities for location pages (add your target cities)
const targetCities = [
  'london', 'manchester', 'birmingham', 'leeds', 'glasgow', 
  'liverpool', 'newcastle', 'bristol', 'edinburgh', 'cardiff'
];

// Add city-specific pages
targetCities.forEach(city => {
  routes.push({
    url: `/mortgage-broker-${city}`,
    priority: '0.8',
    changefreq: 'monthly'
  });
});

// Generate current date in ISO format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Block staging and test pages
Disallow: /test/
Disallow: /staging/
Disallow: /_netlify/

# Allow important pages
Allow: /mortgages/
Allow: /insurance/
Allow: /contact
Allow: /mortgage-calculator

# Crawl delay (optional - be nice to smaller crawlers)
Crawl-delay: 1`;
};

// Main execution
const main = () => {
  try {
    // Generate sitemap
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    
    // Generate robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);
    console.log('✅ Robots.txt generated successfully at:', robotsPath);
    
    console.log(`📊 Total URLs in sitemap: ${routes.length}`);
    console.log('🚀 Ready for search engine submission!');
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
main();