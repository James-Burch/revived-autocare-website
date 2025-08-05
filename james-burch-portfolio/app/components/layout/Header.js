"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import styles from "../../../styles/components/Header.module.css";

const navigation = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

export default function Header({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (href) => {
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => handleNavClick("hero")}>
          <span className={styles.logoText}>JB</span>
          <span className={styles.logoSubtext}>Developer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`${styles.navLink} ${
                activeSection === item.href ? styles.active : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileToggle}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`${styles.mobileNavLink} ${
                activeSection === item.href ? styles.active : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
