// Simple sitemap generator for your actual pages
// Run with: node scripts/generateSitemap.cjs

const fs = require('fs');
const path = require('path');

// Your website's base URL
const SITE_URL = 'https://mortgageuk.netlify.app';

// Your actual pages only - keep it simple and focused
const routes = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/mortgage-calculator', priority: '0.8', changefreq: 'weekly' },
  
  // Mortgage service pages (your existing routes)
  { url: '/mortgages/first-time-buyers', priority: '0.9', changefreq: 'monthly' },
  { url: '/mortgages/home-mover', priority: '0.8', changefreq: 'monthly' },
  { url: '/mortgages/remortgage', priority: '0.9', changefreq: 'monthly' },
  { url: '/mortgages/buy-to-let', priority: '0.8', changefreq: 'monthly' },
  { url: '/mortgages/new-build', priority: '0.7', changefreq: 'monthly' },
  { url: '/mortgages/help-to-buy', priority: '0.8', changefreq: 'monthly' },
  { url: '/mortgages/limited-companies', priority: '0.7', changefreq: 'monthly' },
  { url: '/mortgages/bridging-loans', priority: '0.7', changefreq: 'monthly' },
  
  // Insurance pages (your existing routes)
  { url: '/insurance/life-insurance', priority: '0.7', changefreq: 'monthly' },
  { url: '/insurance/income-protection', priority: '0.7', changefreq: 'monthly' },
  { url: '/insurance/critical-illness', priority: '0.7', changefreq: 'monthly' },
  { url: '/insurance/accident-sickness-unemployment', priority: '0.6', changefreq: 'monthly' },
  { url: '/insurance/home-buildings-contents', priority: '0.6', changefreq: 'monthly' },
];

// Generate current date
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Generate clean sitemap XML
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

// Generate optimized robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Important pages for mortgage brokers
Allow: /mortgages/
Allow: /insurance/
Allow: /contact
Allow: /mortgage-calculator

# Block admin, test, and development pages
Disallow: /admin/
Disallow: /test/
Disallow: /staging/
Disallow: /_netlify/
Disallow: /api/
Disallow: /.well-known/

# Block search and utility pages
Disallow: /search
Disallow: /404

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay (be nice to smaller crawlers)
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
    console.log('🚀 Clean, focused sitemap ready for search engines!');
    
    // Show the URLs being indexed
    console.log('\n📋 Pages included in sitemap:');
    routes.forEach(route => {
      console.log(`   • ${SITE_URL}${route.url}`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
main();