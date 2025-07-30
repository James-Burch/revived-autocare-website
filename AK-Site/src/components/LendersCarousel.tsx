import React, { useState, useEffect } from 'react';

interface Lender {
    name: string;
    logo: string; // URL to logo image
    type: 'mortgage' | 'insurance';
}

interface LendersCarouselProps {
    className?: string;
}

const LendersCarousel: React.FC<LendersCarouselProps> = ({ className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Sample lenders data - replace with your actual lender logos
    const lenders: Lender[] = [
        { name: 'Nationwide', logo: '/images/lenders/nationwide.png', type: 'mortgage' },
        { name: 'NatWest', logo: '/images/lenders/natwest.png', type: 'mortgage' },
        { name: 'Barclays', logo: '/images/lenders/barclays.png', type: 'mortgage' },
        { name: 'HSBC', logo: '/images/lenders/hsbc.png', type: 'mortgage' },
        { name: 'Santander', logo: '/images/lenders/santander.png', type: 'mortgage' },
        { name: 'Aviva', logo: '/images/lenders/aviva.png', type: 'insurance' },
        { name: 'Zurich', logo: '/images/lenders/zurich.png', type: 'insurance' },
        { name: 'Vitality', logo: '/images/lenders/vitality.png', type: 'insurance' },
        { name: 'LV=', logo: '/images/lenders/lv.png', type: 'insurance' },
        { name: 'Halifax', logo: '/images/lenders/halifax.png', type: 'mortgage' }
    ];

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === lenders.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, [currentIndex, isAutoPlaying, lenders.length]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(currentIndex === lenders.length - 1 ? 0 : currentIndex + 1);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(currentIndex === 0 ? lenders.length - 1 : currentIndex - 1);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
    };

    const getVisibleLenders = () => {
        const visible = [];
        const totalLenders = lenders.length;

        // Get previous lender (faded)
        const prevIndex = currentIndex === 0 ? totalLenders - 1 : currentIndex - 1;
        visible.push({ ...lenders[prevIndex], position: 'prev' });

        // Get current lender (main)
        visible.push({ ...lenders[currentIndex], position: 'current' });

        // Get next lender (faded)
        const nextIndex = currentIndex === totalLenders - 1 ? 0 : currentIndex + 1;
        visible.push({ ...lenders[nextIndex], position: 'next' });

        return visible;
    };

    return (
        <div className={`lenders-carousel ${className}`}>
            <div className="lenders-carousel-header">
                <h3>Our Trusted Partners</h3>
                <p>We work with 90+ leading lenders and insurers</p>
            </div>

            <div className="lenders-carousel-container">
                <button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={prevSlide}
                    aria-label="Previous lender"
                >
                    ←
                </button>

                <div className="lenders-display">
                    {getVisibleLenders().map((lender, index) => (
                        <div
                            key={`${lender.name}-${index}`}
                            className={`lender-item ${lender.position}`}
                        >
                            <img
                                src={lender.logo}
                                alt={`${lender.name} logo`}
                                onError={(e) => {
                                    // Fallback for missing images
                                    const target = e.currentTarget;
                                    target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60"><rect width="120" height="60" fill="%23f3f4f6" stroke="%23d1d5db" stroke-width="1"/><text x="60" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="%236b7280">${lender.name}</text></svg>`;
                                }}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={nextSlide}
                    aria-label="Next lender"
                >
                    →
                </button>
            </div>

            <div className="carousel-indicators">
                {lenders.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                            setTimeout(() => setIsAutoPlaying(true), 5000);
                        }}
                        aria-label={`Go to lender ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LendersCarousel;