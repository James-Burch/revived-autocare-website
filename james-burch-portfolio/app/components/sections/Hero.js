"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Cloud,
} from "lucide-react";
import styles from "../../../styles/Hero.module.css";

const roles = [
  { text: "Full-Stack Developer", icon: Code },
  { text: "Data Analyst", icon: Database },
  { text: "DevOps Engineer", icon: Cloud },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Hero({ onNavigate }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animate role switching
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];
  const CurrentIcon = currentRole.icon;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className={styles.content}
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <span>Hi, I'm</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={itemVariants} className={styles.name}>
            James Burch
          </motion.h1>

          {/* Animated role */}
          <motion.div variants={itemVariants} className={styles.roleContainer}>
            <span className={styles.rolePrefix}>I'm a</span>
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.roleWrapper}
            >
              <CurrentIcon className={styles.roleIcon} />
              <span className={styles.roleText}>{currentRole.text}</span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className={styles.description}>
            Passionate about building intelligent solutions with{" "}
            <span className={styles.highlight}>Python & Machine Learning</span>,
            creating seamless user experiences with{" "}
            <span className={styles.highlight}>React & Next.js</span>, and
            automating workflows with{" "}
            <span className={styles.highlight}>DevOps practices</span>.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Months Learning</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className={styles.cta}>
            <button
              onClick={() => onNavigate("projects")}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              View My Work
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className={styles.social}>
            <a
              href="https://github.com/jamesburch"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jamesburch"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:james@example.com"
              className={styles.socialLink}
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className={styles.floatingElements}>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className={`${styles.floatingElement} ${styles.element1}`}
          >
            <Code size={32} />
          </motion.div>
          <motion.div
            variants={{
              animate: {
                y: [10, -10, 10],
                transition: {
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              },
            }}
            animate="animate"
            className={`${styles.floatingElement} ${styles.element2}`}
          >
            <Database size={28} />
          </motion.div>
          <motion.div
            variants={{
              animate: {
                y: [-15, 15, -15],
                transition: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              },
            }}
            animate="animate"
            className={`${styles.floatingElement} ${styles.element3}`}
          >
            <Cloud size={24} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className={styles.scrollIndicator}
          onClick={() => onNavigate("about")}
        >
          <span className={styles.scrollText}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
