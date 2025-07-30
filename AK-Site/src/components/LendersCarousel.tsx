import React, { useState, useEffect } from 'react';

interface Lender {
    id: string;
    name: string;
    logo: string; // Path to logo image
    type: 'mortgage' | 'insurance';
}

const LENDERS: Lender[] = [
    // Mortgage Lenders
    { id: 'nationwide', name: 'Nationwide', logo: '/src/assets/lenders/nationwide.png', type: 'mortgage' },
    { id: 'natwest', name: 'NatWest', logo: '/src/assets/lenders/natwest.png', type: 'mortgage' },
    { id: 'barclays', name: 'Barclays', logo: '/src/assets/lenders/barclays.png', type: 'mortgage' },
    { id: 'hsbc', name: 'HSBC', logo: '/src/assets/lenders/hsbc.png', type: 'mortgage' },
    { id: 'santander', name: 'Santander', logo: '/src/assets/lenders/santander.png', type: 'mortgage' },

    // Insurance Providers
    { id: 'aviva', name: 'Aviva', logo: '/src/assets/lenders/aviva.png', type: 'insurance' },
    { id: 'zurich', name: 'Zurich', logo: '/src/assets/lenders/zurich.png', type: 'insurance' },
    { id: 'vitality', name: 'Vitality', logo: '/src/assets/lenders/vitality.png', type: 'insurance' },
    { id: 'lv', name: 'LV=', logo: '/src/assets/lenders/lv.png', type: 'insurance' },
];

const LendersCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-advance carousel
    useEffect(() => {
        if (isMobile) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % LENDERS.length);
            }, 3000); // Change every 3 seconds

            return () => clearInterval(timer);
        }
    }, [isMobile]);

    const nextLender = () => {
        setCurrentIndex((prev) => (prev + 1) % LENDERS.length);
    };

    const prevLender = () => {
        setCurrentIndex((prev) => (prev - 1 + LENDERS.length) % LENDERS.length);
    };

    const getVisibleLenders = () => {
        if (isMobile) {
            // Mobile: Show current + 2 adjacent (with opacity)
            const prev = (currentIndex - 1 + LENDERS.length) % LENDERS.length;
            const next = (currentIndex + 1) % LENDERS.length;
            return [
                { ...LENDERS[prev], position: 'prev' },
                { ...LENDERS[currentIndex], position: 'current' },
                { ...LENDERS[next], position: 'next' }
            ];
        } else {
            // Desktop: Show all
            return LENDERS.map(lender => ({ ...lender, position: 'current' }));
        }
    };

    return (
        <div className="lenders-carousel">
            <div className="lenders-container">
                <div className={`lenders-grid ${isMobile ? 'mobile' : 'desktop'}`}>
                    {getVisibleLenders().map((lender, index) => (
                        <div
                            key={`${lender.id}-${index}`}
                            className={`lender-item ${lender.position}`}
                        >
                            <img
                                src={lender.logo}
                                alt={`${lender.name} logo`}
                                className="lender-logo"
                            />
                        </div>
                    ))}
                </div>

                {isMobile && (
                    <div className="carousel-controls">
                        <button
                            className="carousel-btn prev"
                            onClick={prevLender}
                            aria-label="Previous lender"
                        >
                            ‹
                        </button>
                        <button
                            className="carousel-btn next"
                            onClick={nextLender}
                            aria-label="Next lender"
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LendersCarousel;