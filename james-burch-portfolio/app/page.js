"use client";

import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import styles from "../styles/components/Page.module.css";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className={styles.main}>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Animated Hero Section */}
      <section id="hero">
        <Hero onNavigate={scrollToSection} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`${styles.section} ${styles.sectionSecondary}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleBlue}`}>
            About Me
          </h2>
          <p className={styles.sectionDescription}>
            🚀 Amazing about section with interactive animations coming soon...
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${styles.section} ${styles.sectionPrimary}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitlePurple}`}>
            Featured Projects
          </h2>
          <p className={styles.sectionDescription}>
            🎯 Interactive project showcase with alternating layouts and modal
            popups coming soon...
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`${styles.section} ${styles.sectionSecondary}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleGreen}`}>
            Technical Skills
          </h2>
          <p className={styles.sectionDescription}>
            📊 Interactive skills visualization with animated progress bars
            coming soon...
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`${styles.section} ${styles.sectionPrimary}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleOrange}`}>
            Experience
          </h2>
          <p className={styles.sectionDescription}>
            📈 Professional timeline with learning milestones coming soon...
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`${styles.section} ${styles.sectionSecondary}`}
      >
        <div className={styles.sectionContent}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleBlue}`}>
            Get In Touch
          </h2>
          <p className={styles.sectionDescription}>
            📧 Professional contact form with EmailJS integration coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
