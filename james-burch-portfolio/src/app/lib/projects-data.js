// Project data following PRD content prioritization
// Tier 1: ML/Python focus, Tier 2: Full-stack applications, Tier 3: Foundation projects

export const featuredProjects = [
  {
    id: "house-price-prediction",
    title: "House Price Prediction Model",
    subtitle: "Machine Learning & Data Analysis",
    description:
      "Advanced ML model predicting house prices using comprehensive data analysis and feature engineering. Demonstrates proficiency in Python, data science workflows, and predictive modeling.",
    longDescription:
      "Built a comprehensive house price prediction system using Python and scikit-learn. The project involved extensive data cleaning, feature engineering, and model optimization. Implemented multiple algorithms including Random Forest, XGBoost, and Linear Regression, achieving 92% prediction accuracy on test data.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    category: "Machine Learning",
    featured: true,
    tier: 1,
    image: "/images/projects/house-price-prediction.jpg",
    imageAlt:
      "House price prediction dashboard showing model accuracy and visualizations",
    liveUrl: "https://house-price-predictor-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/house-price-prediction",
    metrics: {
      accuracy: "92%",
      dataPoints: "1,460",
      features: "79",
    },
    highlights: [
      "Achieved 92% prediction accuracy on test dataset",
      "Processed 1,460 data points with 79 features",
      "Implemented feature engineering and selection techniques",
      "Created interactive visualizations for model insights",
    ],
    problemStatement:
      "Accurate house price prediction is crucial for both buyers and sellers in the real estate market. Traditional methods often lack precision and fail to account for complex feature interactions.",
    solution:
      "Developed a machine learning pipeline that processes multiple property features, performs advanced feature engineering, and uses ensemble methods to provide highly accurate price predictions.",
    learnings: [
      "Advanced feature engineering techniques",
      "Model validation and cross-validation strategies",
      "Data visualization for business insights",
      "End-to-end ML project workflow",
    ],
  },

  {
    id: "refine-barbers",
    title: "Refine Barbers",
    subtitle: "Full-Stack Application",
    description:
      "Modern barbershop booking platform built with React, TypeScript, and MongoDB. Features real-time availability, customer management, and responsive design for optimal user experience.",
    longDescription:
      "Developed a comprehensive booking system for a local barbershop using modern web technologies. The application handles customer appointments, staff scheduling, and business analytics with a focus on user experience and performance.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],
    category: "Full-Stack Web Development",
    featured: true,
    tier: 1,
    image: "/images/projects/refine-barbers.jpg",
    imageAlt:
      "Refine Barbers booking interface showing appointment calendar and services",
    liveUrl: "https://refine-barbers.vercel.app",
    githubUrl: "https://github.com/yourusername/refine-barbers",
    metrics: {
      users: "150+",
      bookings: "500+",
      uptime: "99.9%",
    },
    highlights: [
      "Real-time appointment booking system",
      "Customer management and history tracking",
      "Responsive design optimized for mobile",
      "Integration with payment processing",
    ],
    problemStatement:
      "Local barbershops often rely on phone bookings, leading to scheduling conflicts, missed appointments, and poor customer experience.",
    solution:
      "Created a digital booking platform that streamlines appointment scheduling, reduces no-shows, and provides customers with 24/7 booking accessibility.",
    learnings: [
      "TypeScript for type-safe development",
      "Real-time data synchronization",
      "User experience design principles",
      "Client-server architecture patterns",
    ],
  },

  {
    id: "data-visualization-dashboard",
    title: "Interactive Data Dashboard",
    subtitle: "Data Analysis & Visualization",
    description:
      "Dynamic dashboard for exploring complex datasets with interactive charts, filters, and real-time updates. Built with D3.js and Python backend for comprehensive data analysis.",
    longDescription:
      "Constructed an interactive data visualization platform that enables users to explore large datasets through dynamic charts, filtering mechanisms, and statistical analysis tools. The dashboard processes real-time data and provides insights through various visualization techniques.",
    technologies: [
      "Python",
      "D3.js",
      "Flask",
      "PostgreSQL",
      "Chart.js",
      "React",
    ],
    category: "Data Visualization",
    featured: true,
    tier: 1,
    image: "/images/projects/data-dashboard.jpg",
    imageAlt:
      "Interactive data dashboard with multiple charts and filtering options",
    liveUrl: "https://data-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/data-dashboard",
    metrics: {
      dataPoints: "100K+",
      charts: "12",
      responseTime: "<200ms",
    },
    highlights: [
      "Real-time data processing and visualization",
      "Interactive filtering and drill-down capabilities",
      "Multiple chart types and customization options",
      "Optimized performance for large datasets",
    ],
    problemStatement:
      "Organizations struggle to gain insights from large datasets due to static reporting tools and lack of interactive exploration capabilities.",
    solution:
      "Developed a dynamic dashboard that transforms raw data into actionable insights through interactive visualizations and real-time analytics.",
    learnings: [
      "Advanced data visualization techniques",
      "Real-time data processing optimization",
      "User interface design for data exploration",
      "Database query optimization",
    ],
  },
];

export const supportingProjects = [
  {
    id: "golf-booking-system",
    title: "Golf Course Booking System",
    subtitle: "Django Web Application",
    description:
      "Comprehensive booking platform for golf courses with tee time management, user authentication, and payment integration.",
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    category: "Web Development",
    featured: false,
    tier: 2,
    image: "/images/projects/golf-booking.jpg",
    imageAlt: "Golf booking system interface",
    liveUrl: "https://golf-booking-demo.herokuapp.com",
    githubUrl: "https://github.com/yourusername/golf-booking",
    highlights: [
      "Django-based backend with user authentication",
      "Payment integration with Stripe API",
      "Responsive design for mobile booking",
      "Admin dashboard for course management",
    ],
  },

  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    subtitle: "React & Design",
    description:
      "Responsive portfolio website showcasing development skills with modern design principles and smooth animations.",
    technologies: ["React", "Next.js", "CSS Modules", "Framer Motion"],
    category: "Frontend Development",
    featured: false,
    tier: 2,
    image: "/images/projects/portfolio-v1.jpg",
    imageAlt: "Previous portfolio website design",
    liveUrl: "https://james-burch-v1.vercel.app",
    githubUrl: "https://github.com/yourusername/portfolio-v1",
    highlights: [
      "Modern, responsive design system",
      "Smooth animations and transitions",
      "95+ Lighthouse performance score",
      "SEO optimized with meta tags",
    ],
  },

  {
    id: "javascript-quiz-game",
    title: "Interactive Quiz Game",
    subtitle: "JavaScript Application",
    description:
      "Dynamic quiz application with multiple categories, scoring system, and progress tracking built with vanilla JavaScript.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage API"],
    category: "Frontend Development",
    featured: false,
    tier: 2,
    image: "/images/projects/quiz-game.jpg",
    imageAlt: "JavaScript quiz game interface",
    liveUrl: "https://js-quiz-game-demo.netlify.app",
    githubUrl: "https://github.com/yourusername/js-quiz-game",
    highlights: [
      "Dynamic question generation",
      "Local storage for progress tracking",
      "Responsive design for all devices",
      "Multiple difficulty levels and categories",
    ],
  },
];

export const allProjects = [...featuredProjects, ...supportingProjects];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Machine Learning",
  "Full-Stack Web Development",
  "Data Visualization",
  "Web Development",
  "Frontend Development",
];

// Technology tags with colors for the skills section
export const techStack = {
  // Frontend
  React: { category: "Frontend", color: "#61DAFB", proficiency: 85 },
  JavaScript: { category: "Frontend", color: "#F7DF1E", proficiency: 70 },
  TypeScript: { category: "Frontend", color: "#3178C6", proficiency: 70 },
  HTML5: { category: "Frontend", color: "#E34F26", proficiency: 95 },
  CSS3: { category: "Frontend", color: "#1572B6", proficiency: 90 },
  "Next.js": { category: "Frontend", color: "#000000", proficiency: 40 },
  "Tailwind CSS": { category: "Frontend", color: "#06B6D4", proficiency: 60 },

  // Backend
  Python: { category: "Backend", color: "#3776AB", proficiency: 70 },
  Django: { category: "Backend", color: "#092E20", proficiency: 50 },
  "Node.js": { category: "Backend", color: "#339933", proficiency: 30 },
  "Express.js": { category: "Backend", color: "#000000", proficiency: 30 },
  Flask: { category: "Backend", color: "#000000", proficiency: 30 },

  // Database
  PostgreSQL: { category: "Database", color: "#336791", proficiency: 50 },
  MongoDB: { category: "Database", color: "#47A248", proficiency: 30 },
  Supabase: { category: "Database", color: "#003B57", proficiency: 50 },

  // Data Science & ML
  Pandas: { category: "Data Science", color: "#150458", proficiency: 85 },
  NumPy: { category: "Data Science", color: "#013243", proficiency: 85 },
  "Scikit-learn": {
    category: "Data Science",
    color: "#F7931E",
    proficiency: 80,
  },
  Matplotlib: { category: "Data Science", color: "#11557C", proficiency: 80 },
  Seaborn: { category: "Data Science", color: "#4C72B0", proficiency: 75 },
  Jupyter: { category: "Data Science", color: "#F37626", proficiency: 85 },

  // Tools & DevOps
  Git: { category: "Tools", color: "#F05032", proficiency: 90 },
  GitHub: { category: "Tools", color: "#181717", proficiency: 90 },
  "VS Code": { category: "Tools", color: "#007ACC", proficiency: 95 },
  Heroku: { category: "Tools", color: "#430098", proficiency: 80 },
  Vercel: { category: "Tools", color: "#000000", proficiency: 85 },
};

// Get projects by tier
export const getProjectsByTier = (tier) => {
  return allProjects.filter((project) => project.tier === tier);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") return allProjects;
  return allProjects.filter((project) => project.category === category);
};

// Get featured projects only
export const getFeaturedProjects = () => {
  return allProjects.filter((project) => project.featured);
};
