"use client";

import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

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
    <main className="min-h-screen bg-bg-primary">
      <ScrollProgress />
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <section id="hero">
        <Hero onNavigate={scrollToSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
