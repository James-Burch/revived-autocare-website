import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './';

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
    className = ''
}) => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.classList.add('hero-animate-in');
        }

        const handleScroll = () => {
            if (!heroElement) return;
            const scrolled = window.scrollY;
            const rate = scrolled * -0.5;
            heroElement.style.transform = `translateY(${rate}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const titleWords = title.split(' ');
    const subtitleWords = subtitle?.split(' ') || [];

    return (
        <section ref={heroRef} className={`hero-new ${className}`}>
            {/* Animated background elements */}
            <div className="hero-background-animation">
                <div className="floating-gradient gradient-1"></div>
                <div className="floating-gradient gradient-2"></div>
                <div className="floating-gradient gradient-3"></div>
            </div>

            <div className="container">
                <div className={`hero-content-new ${!showContactWidget ? 'no-widget' : ''}`}>
                    <div className="hero-text-new">
                        <h1>
                            {titleWords.map((word, index) => (
                                <span 
                                    key={`title-${index}`}
                                    className="word-reveal"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {word}{' '}
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
                                                style={{ animationDelay: `${(titleWords.length + index) * 0.1}s` }}
                                            >
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </span>
                                </>
                            )}
                        </h1>
                        
                        <p className="hero-description-animated">
                            {description}
                        </p>
                        
                        <div className="hero-buttons-new hero-buttons-animated">
                            <Link to={primaryButtonLink}>
                                <Button 
                                    variant="primary" 
                                    size="large"
                                    className="btn-modern hover-lift"
                                >
                                    {primaryButtonText}
                                    <span className="btn-icon">→</span>
                                </Button>
                            </Link>
                            {secondaryButtonLink ? (
                                <Link to={secondaryButtonLink}>
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
                                >
                                    {secondaryButtonText}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator-wrapper">
                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span className="scroll-text">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;