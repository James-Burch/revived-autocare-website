"use client";

import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
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

      {/* Hero Section */}
      <section id="hero" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroGreeting}>👋 Hi, I'm</div>

          <h1 className={styles.heroTitle}>James Burch</h1>

          <div className={styles.heroSubtitle}>
            I'm a <span className={styles.heroRole}>Full-Stack Developer</span>
          </div>

          <p className={styles.heroDescription}>
            Passionate about building intelligent solutions with{" "}
            <span
              className={`${styles.heroHighlight} ${styles.heroHighlightPurple}`}
            >
              Python & Machine Learning
            </span>
            , creating seamless user experiences with{" "}
            <span
              className={`${styles.heroHighlight} ${styles.heroHighlightBlue}`}
            >
              React & Next.js
            </span>
            , and automating workflows with{" "}
            <span
              className={`${styles.heroHighlight} ${styles.heroHighlightGreen}`}
            >
              DevOps practices
            </span>
            .
          </p>

          {/* Stats */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div
                className={`${styles.heroStatNumber} ${styles.heroStatNumberBlue}`}
              >
                15+
              </div>
              <div className={styles.heroStatLabel}>Months Learning</div>
            </div>
            <div className={styles.heroStat}>
              <div
                className={`${styles.heroStatNumber} ${styles.heroStatNumberPurple}`}
              >
                10+
              </div>
              <div className={styles.heroStatLabel}>Projects Built</div>
            </div>
            <div className={styles.heroStat}>
              <div
                className={`${styles.heroStatNumber} ${styles.heroStatNumberGreen}`}
              >
                5+
              </div>
              <div className={styles.heroStatLabel}>Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroButtons}>
            <button
              onClick={() => scrollToSection("projects")}
              className={styles.heroPrimaryBtn}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={styles.heroSecondaryBtn}
            >
              Get In Touch
            </button>
          </div>
        </div>
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
