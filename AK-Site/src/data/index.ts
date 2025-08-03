import image1 from '../assets/images/image1.webp';
import image2 from '../assets/images/image2.webp';
import image3 from '../assets/images/image3.webp';
import image4 from '../assets/images/image4.webp';
import image5 from '../assets/images/image5.webp';
import image6 from '../assets/images/image6.webp';
import apartmentblock from '../assets/images/apartmentblock.webp';
import bridgeimage from '../assets/images/bridgeimage.webp';
import calculatorimage from '../assets/images/mortgagecalculatorimage.webp'


export interface ServiceData {
    id: string;
    title: string;
    description: string;
    icon: string;
    image?: string; // NEW: Optional image path
    link: string;
    category: 'main' | 'additional';
    order: number;
}

export interface ProductData {
    id: string;
    title: string;
    description: string;
    rate: string;
    bestFor: string;
    specs: Array<{
        label: string;
        value: string;
    }>;
    link: string;
    category: string;
    featured: boolean;
}

export interface NavigationData {
    id: string;
    label: string;
    path: string;
    hasDropdown?: boolean;
    dropdownItems?: Array<{
        label: string;
        path: string;
    }>;
}

// ========== SERVICES DATA ==========
export const SERVICES: ServiceData[] = [
    {
        id: 'first-time-buyers',
        title: 'First Time Buyers',
        description: 'Get on the property ladder with our specialist advice and access to exclusive schemes',
        icon: '🏠',
        image: image1,
        link: '/mortgages/first-time-buyers',
        category: 'main',
        order: 1
    },
    {
        id: 'home-mover',
        title: 'Home Mover',
        description: 'Moving up the property ladder? We\'ll find you the best deals for your next home',
        icon: '🔄',
        image: image2,
        link: '/mortgages/home-mover',
        category: 'main',
        order: 2
    },
    {
        id: 'remortgage',
        title: 'Remortgage',
        description: 'Save money with a better deal on your existing property with our remortgage service',
        icon: '💰',
        image: image3,
        link: '/mortgages/remortgage',
        category: 'main',
        order: 3
    },
    {
        id: 'buy-to-let',
        title: 'Buy to Let',
        description: 'Investment property mortgages with competitive rates for landlords and investors',
        icon: '🏢',
        image: image4,
        link: '/mortgages/buy-to-let',
        category: 'main',
        order: 4
    },
    {
        id: 'new-build',
        title: 'New Build',
        description: 'Specialist mortgages for new build properties with developer incentives',
        icon: '🏗️',
        image: image5,
        link: '/mortgages/new-build',
        category: 'main',
        order: 5
    },
    {
        id: 'help-to-buy',
        title: 'Help to Buy',
        description: 'Government schemes to help you buy your first home with a smaller deposit',
        icon: '🤝',
        image: image6,
        link: '/mortgages/help-to-buy',
        category: 'main',
        order: 6
    },
    {
        id: 'bridging-loans',
        title: 'Bridging Loans',
        description: 'Short-term financing solutions to bridge the gap between property transactions',
        icon: '🌉',
        image: bridgeimage,
        link: '/mortgages/bridging-loans',
        category: 'main',
        order: 7
    },
    {
        id: 'limited-companies',
        title: 'Limited Companies',
        description: 'Corporate mortgage solutions for business property purchases',
        icon: '🏛️',
        image: apartmentblock,
        link: '/mortgages/limited-companies',
        category: 'main',
        order: 8
    },
    {
        id: 'calculators',
        title: 'Mortgage Calculators',
        description: 'Free tools to help you understand your mortgage options',
        icon: '🧮',
        image: calculatorimage,
        link: '/calculators',
        category: 'main',
        order: 9
    }
];

// ========== PRODUCTS DATA ==========
export const PRODUCTS: ProductData[] = [
    {
        id: 'residential-mortgage',
        title: 'Residential Mortgage',
        description: 'Standard residential mortgages for home purchases and remortgaging',
        rate: '4.65%',
        bestFor: 'Home buyers and those looking to remortgage',
        specs: [
            { label: 'Max LTV', value: '95%' },
            { label: 'Min. Deposit', value: '5%' },
            { label: 'Credit Score', value: 'Good' }
        ],
        link: '/mortgages/residential-mortgage',
        category: 'residential',
        featured: true
    },
    {
        id: 'first-time-buyer',
        title: 'First Time Buyer',
        description: 'Specialist mortgages and government schemes for first-time buyers',
        rate: '4.89%',
        bestFor: 'Those buying their first home',
        specs: [
            { label: 'Max LTV', value: '95%' },
            { label: 'Min. Deposit', value: '5%' },
            { label: 'Credit Score', value: 'Fair to Good' }
        ],
        link: '/mortgages/first-time-buyer',
        category: 'residential',
        featured: true
    },
    {
        id: 'buy-to-let-mortgage',
        title: 'Buy-to-Let Mortgage',
        description: 'Specialist financing for property investors with competitive rates and flexible terms',
        rate: '5.25%',
        bestFor: 'Property investors and landlords',
        specs: [
            { label: 'Max LTV', value: '75%' },
            { label: 'Min. Deposit', value: '25%' },
            { label: 'Credit Score', value: 'Good to Excellent' }
        ],
        link: '/mortgages/buy-to-let',
        category: 'investment',
        featured: true
    },
    {
        id: 'self-employed-mortgage',
        title: 'Self-Employed Mortgage',
        description: 'Flexible mortgage solutions for contractors, freelancers, and business owners',
        rate: '4.95%',
        bestFor: 'Self-employed and contractors',
        specs: [
            { label: 'Max LTV', value: '85%' },
            { label: 'Min. Deposit', value: '15%' },
            { label: 'Credit Score', value: 'Good' }
        ],
        link: '/mortgages/self-employed',
        category: 'specialist',
        featured: true
    }
];

export const NAVIGATION: NavigationData[] = [
    {
        id: 'home',
        label: 'Home',
        path: '/'
    },
    {
        id: 'mortgages',
        label: 'Mortgages',
        path: '/mortgages',
        hasDropdown: true,
        dropdownItems: [
            { label: 'First Time Buyers', path: '/mortgages/first-time-buyers' },
            { label: 'Home Mover', path: '/mortgages/home-mover' },
            { label: 'Remortgage', path: '/mortgages/remortgage' },
            { label: 'Buy to Let', path: '/mortgages/buy-to-let' },
            { label: 'New Build', path: '/mortgages/new-build' },
            { label: 'Help to Buy', path: '/mortgages/help-to-buy' },
            { label: 'Limited Companies', path: '/mortgages/limited-companies' }
        ]
    },
    {
        id: 'insurance',
        label: 'Insurance',
        path: '/insurance',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Life Insurance', path: '/insurance/life-insurance' },
            { label: 'Income Protection', path: '/insurance/income-protection' },
            { label: 'Critical Illness', path: '/insurance/critical-illness' },
            { label: 'Accident, Sickness & Unemployment', path: '/insurance/accident-sickness-unemployment' },
            { label: 'Home, Buildings & Contents Insurance', path: '/insurance/home-buildings-contents' }
        ]
    },
    {
        id: 'calculators',
        label: 'Calculators',
        path: '/calculators'
    },
    {
        id: 'contact',
        label: 'Contact',
        path: '/contact'
    }
];

// ========== INSURANCE DATA STRUCTURE ==========
export interface InsuranceData {
    id: string;
    title: string;
    description: string;
    keyBenefits: string[];
    whoNeedsIt: string;
    typicalCoverage: string;
    link: string;
    featured: boolean;
    category: 'life' | 'health' | 'property';
}

// ========== INSURANCE PRODUCTS DATA ==========
export const INSURANCE_PRODUCTS: InsuranceData[] = [
    {
        id: 'life-insurance',
        title: 'Life Insurance',
        description: 'Financial protection for your family in the event of your death',
        keyBenefits: [
            'Tax-free lump sum to beneficiaries',
            'Covers mortgage repayment',
            'Income replacement for family',
            'Flexible coverage amounts'
        ],
        whoNeedsIt: 'Anyone with financial dependents or outstanding debts',
        typicalCoverage: '£50,000 - £1,000,000+',
        link: '/insurance/life-insurance',
        featured: true,
        category: 'life'
    },
    {
        id: 'income-protection',
        title: 'Income Protection',
        description: 'Replace up to 70% of your income if you cannot work due to illness or injury',
        keyBenefits: [
            'Monthly payments until retirement',
            'Covers most illnesses and injuries',
            'Own occupation cover available',
            'Inflation protection options'
        ],
        whoNeedsIt: 'Working professionals without adequate sick pay',
        typicalCoverage: '50-70% of gross income',
        link: '/insurance/income-protection',
        featured: true,
        category: 'health'
    },
    {
        id: 'critical-illness',
        title: 'Critical Illness Cover',
        description: 'Lump sum payment following diagnosis of a serious illness',
        keyBenefits: [
            'Covers over 50 critical illnesses',
            'Tax-free lump sum payment',
            'Partial payment options',
            'Additional support services'
        ],
        whoNeedsIt: 'Those wanting financial security during serious illness',
        typicalCoverage: '£25,000 - £500,000+',
        link: '/insurance/critical-illness',
        featured: true,
        category: 'health'
    },
    {
        id: 'accident-sickness-unemployment',
        title: 'Accident, Sickness & Unemployment',
        description: 'Short-term cover for mortgage payments during unemployment or illness',
        keyBenefits: [
            'Covers monthly mortgage payments',
            'Up to 12-24 months coverage',
            'Accident and sickness cover',
            'Involuntary unemployment protection'
        ],
        whoNeedsIt: 'Homeowners concerned about mortgage payment difficulties',
        typicalCoverage: 'Covering the full amount borrowed',
        link: '/insurance/accident-sickness-unemployment',
        featured: false,
        category: 'property'
    },
    {
        id: 'home-buildings-contents',
        title: 'Home, Buildings & Contents Insurance',
        description: 'Comprehensive protection for your property and possessions',
        keyBenefits: [
            'Buildings insurance (often mandatory)',
            'Contents insurance for possessions',
            'Personal liability cover',
            'Alternative accommodation costs'
        ],
        whoNeedsIt: 'All homeowners and many tenants',
        typicalCoverage: 'Rebuild costs + contents value',
        link: '/insurance/home-buildings-contents',
        featured: false,
        category: 'property'
    }
];

// ========== DATA UTILITIES ==========
export const getMainServices = (): ServiceData[] => {
    return SERVICES.filter(service => service.category === 'main').sort((a, b) => a.order - b.order);
};

export const getAdditionalServices = (): ServiceData[] => {
    return SERVICES.filter(service => service.category === 'additional').sort((a, b) => a.order - b.order);
};

export const getFeaturedProducts = (): ProductData[] => {
    return PRODUCTS.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): ProductData[] => {
    return PRODUCTS.filter(product => product.category === category);
};

export const getServiceById = (id: string): ServiceData | undefined => {
    return SERVICES.find(service => service.id === id);
};

export const getProductById = (id: string): ProductData | undefined => {
    return PRODUCTS.find(product => product.id === id);
};

// ========== INSURANCE UTILITY FUNCTIONS ==========
export const getFeaturedInsurance = (): InsuranceData[] => {
    return INSURANCE_PRODUCTS.filter(product => product.featured);
};

export const getInsuranceByCategory = (category: string): InsuranceData[] => {
    return INSURANCE_PRODUCTS.filter(product => product.category === category);
};

export const getInsuranceById = (id: string): InsuranceData | undefined => {
    return INSURANCE_PRODUCTS.find(product => product.id === id);
};