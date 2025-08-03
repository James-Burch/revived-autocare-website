// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: 'business' | 'portfolio' | 'ecommerce' | 'custom';
  liveUrl?: string;
  caseStudyUrl?: string;
}

// Template types
export interface Template {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  features: string[];
  techStack: string[];
  demoUrl?: string;
}

// Contact form types
export interface ContactFormData {
  projectType: string;
  budget: string;
  timeline: string;
  businessName: string;
  email: string;
  inspirationLinks?: string;
  additionalInfo?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// EmailJS types for the new package
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  project_type: string;
  budget: string;
  timeline: string;
  business_name: string;
  inspiration_links?: string;
  additional_info?: string;
}
