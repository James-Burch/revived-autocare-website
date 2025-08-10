import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink?: string;
  showContactWidget?: boolean;
  className?: string;
  // New props for background imagery system
  heroVariant?: "home" | "about" | "mortgages" | "insurance" | "contact";
  backgroundImage?: {
    desktop: string;
    tablet?: string;
    mobile?: string;
    alt: string;
  };
  useOverlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  showContactWidget = true,
  className = "",
  heroVariant = "home",
  backgroundImage,
  useOverlay = false,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add("hero-animate-in");

      // Preload critical background image for LCP optimization
      if (backgroundImage?.desktop) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = backgroundImage.desktop;
        document.head.appendChild(link);
      }
    }

    // Optimized parallax effect with requestAnimationFrame
    let rafId: number;
    const handleScroll = () => {
      if (!heroElement) return;

      rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3; // Reduced for better performance
        heroElement.style.transform = `translateY(${rate}px)`;
      });
    };

    // Intersection Observer for lazy loading and animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Start word reveal animations
            const words = entry.target.querySelectorAll(".word-reveal");
            words.forEach((word, index) => {
              (word as HTMLElement).style.animationDelay = `${index * 0.1}s`;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [backgroundImage]);

  const titleWords = title.split(" ");
  const subtitleWords = subtitle?.split(" ") || [];

  // Generate responsive background image HTML
  const renderBackgroundImage = () => {
    if (!backgroundImage) return null;

    return (
      <div className="hero__bg">
        <picture>
          {/* WebP sources for modern browsers */}
          {backgroundImage.mobile && (
            <source
              media="(max-width: 768px)"
              srcSet={`${backgroundImage.mobile.replace(
                /\.(jpg|jpeg|png)$/i,
                ".webp"
              )} 768w`}
              sizes="100vw"
              type="image/webp"
            />
          )}
          {backgroundImage.tablet && (
            <source
              media="(max-width: 1200px)"
              srcSet={`${backgroundImage.tablet.replace(
                /\.(jpg|jpeg|png)$/i,
                ".webp"
              )} 1200w`}
              sizes="100vw"
              type="image/webp"
            />
          )}
          <source
            srcSet={`${backgroundImage.desktop.replace(
              /\.(jpg|jpeg|png)$/i,
              ".webp"
            )} 1920w`}
            sizes="100vw"
            type="image/webp"
          />

          {/* Fallback JPEG/PNG sources */}
          {backgroundImage.mobile && (
            <source
              media="(max-width: 768px)"
              srcSet={`${backgroundImage.mobile} 768w`}
              sizes="100vw"
            />
          )}
          {backgroundImage.tablet && (
            <source
              media="(max-width: 1200px)"
              srcSet={`${backgroundImage.tablet} 1200w`}
              sizes="100vw"
            />
          )}

          <img
            src={backgroundImage.desktop}
            alt={backgroundImage.alt}
            loading="eager"
            decoding="async"
            width="1920"
            height="900"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </picture>
        {useOverlay && <div className="hero__overlay" />}
      </div>
    );
  };

  // Determine hero classes - Always use background image system
  const heroClasses = [
    "hero", // Always use hero class (background image system)
    heroVariant ? `hero--${heroVariant}` : "",
    className,
    !showContactWidget ? "no-widget" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      ref={heroRef}
      className={heroClasses}
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Image System - Always render */}
      {renderBackgroundImage()}

      {/* Hero Content */}
      <div className="container">
        <div
          className={`hero__content ${!showContactWidget ? "no-widget" : ""}`}
        >
          <div className="hero-content-text">
            <h1 id="hero-title" ref={titleRef} className="hero-title">
              {titleWords.map((word, index) => (
                <span
                  key={`title-${index}`}
                  className="word-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}{" "}
                </span>
              ))}
              {subtitle && (
                <>
                  <br />
                  <span className="hero-accent">
                    {subtitleWords.map((word, index) => (
                      <span
                        key={`subtitle-${index}`}
                        className="word-reveal"
                        style={{
                          animationDelay: `${
                            (titleWords.length + index) * 0.1
                          }s`,
                        }}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </span>
                </>
              )}
            </h1>

            <p className="hero-description scroll-animate">{description}</p>

            <div className="hero-buttons scroll-animate">
              <Link
                to={primaryButtonLink}
                aria-label={`${primaryButtonText} - Navigate to ${primaryButtonLink}`}
              >
                <Button
                  variant="primary"
                  size="large"
                  className="btn-modern hover-lift"
                  aria-describedby="primary-button-desc"
                >
                  {primaryButtonText}
                  <span className="btn-icon" aria-hidden="true">
                    →
                  </span>
                </Button>
              </Link>
              {secondaryButtonLink ? (
                <Link
                  to={secondaryButtonLink}
                  aria-label={`${secondaryButtonText} - Navigate to ${secondaryButtonLink}`}
                >
                  <Button
                    variant="secondary"
                    size="large"
                    className="btn-modern gradient-border hover-grow"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="secondary"
                  size="large"
                  className="btn-modern gradient-border hover-grow"
                  onClick={() => {
                    // Handle secondary button action - smooth scroll to contact
                    const element = document.querySelector(
                      "#contact-section, .contact-form-section, .cta-section"
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    } else {
                      // Fallback - scroll to bottom of page
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      });
                    }
                  }}
                  aria-label={`${secondaryButtonText} - Scroll to contact section`}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - only show if no background image */}
      {!backgroundImage && (
        <div className="scroll-indicator-wrapper" aria-hidden="true">
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </div>
      )}

      {/* Hidden descriptions for screen readers */}
      <div className="sr-only">
        <span id="primary-button-desc">
          Primary call-to-action for {primaryButtonText}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
