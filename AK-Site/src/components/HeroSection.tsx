import React from 'react';
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
    return (
        <section className={`hero-new ${className}`}>
            <div className="container">
                <div className={`hero-content-new ${!showContactWidget ? 'no-widget' : ''}`}>
                    <div className="hero-text-new">
                        <h1>
                            {title}
                            {subtitle && (
                                <>
                                    <br />
                                    <span className="hero-accent">{subtitle}</span>
                                </>
                            )}
                        </h1>
                        <p>{description}</p>
                        <div className="hero-buttons-new">
                            <Link to={primaryButtonLink}>
                                <Button variant="primary" size="large">{primaryButtonText}</Button>
                            </Link>
                            {secondaryButtonLink ? (
                                <Link to={secondaryButtonLink}>
                                    <Button variant="secondary" size="large">{secondaryButtonText}</Button>
                                </Link>
                            ) : (
                                <Button variant="secondary" size="large">{secondaryButtonText}</Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;