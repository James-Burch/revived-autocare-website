// Animation variants for Framer Motion
// Following PRD animation principles: purposeful, subtle, performant, accessible

// Basic fade animations
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Scale animations
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export const scaleOnHover = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

// Stagger animations for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Text animations
export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const textStagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const letterReveal = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Card hover animations
export const cardHover = {
  hover: {
    y: -4,
    boxShadow:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// Button animations
export const buttonHover = {
  hover: {
    y: -1,
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { y: 0, scale: 0.98 },
};

// Progress bar animation
export const progressBar = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
};

// Skill bar animations
export const skillBar = (percentage) => ({
  initial: { width: 0 },
  animate: { width: `${percentage}%` },
  transition: { duration: 1, ease: "easeOut", delay: 0.2 },
});

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Scroll reveal animation with intersection observer
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, margin: "-50px" },
};

// Navbar animations
export const navbarSlide = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Mobile menu animations
export const mobileMenuSlide = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const mobileMenuOverlay = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const loadingDots = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Form animations
export const formSlideUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Hero text animation
export const heroText = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

// Gradient animation for text
export const gradientShift = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Typing animation effect
export const typewriter = {
  initial: { width: 0 },
  animate: {
    width: "100%",
    transition: { duration: 2, ease: "steps(20)" },
  },
};

// Parallax scroll animation
export const parallaxFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Counter animation for numbers
export const counterAnimation = (from, to, duration = 2) => ({
  initial: { count: from },
  animate: {
    count: to,
    transition: { duration, ease: "easeOut" },
  },
});

// Image reveal animation
export const imageReveal = {
  initial: { scale: 1.1, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Contact form success animation
export const successCheckmark = {
  initial: { scale: 0, rotate: 0 },
  animate: {
    scale: 1,
    rotate: 360,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
