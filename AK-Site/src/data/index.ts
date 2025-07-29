export interface ServiceData {
    id: string;
    title: string;
    description: string;
    icon: string;
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
        link: '/products/first-time-buyers',
        category: 'main',
        order: 1
    },
    {
        id: 'home-mover',
        title: 'Home Mover',
        description: 'Moving up the property ladder? We\'ll find you the best deals for your next home',
        icon: '🔄',
        link: '/products/home-mover',
        category: 'main',
        order: 2
    },
    {
        id: 'remortgage',
        title: 'Remortgage',
        description: 'Save money with a better deal on your existing property with our remortgage service',
        icon: '💰',
        link: '/products/remortgage',
        category: 'main',
        order: 3
    },
    {
        id: 'buy-to-let',
        title: 'Buy to Let',
        description: 'Investment property mortgages with competitive rates for landlords and investors',
        icon: '🏢',
        link: '/products/buy-to-let',
        category: 'main',
        order: 4
    },
    {
        id: 'new-build',
        title: 'New Build',
        description: 'Specialist mortgages for new build properties with developer incentives',
        icon: '🏗️',
        link: '/products/new-build',
        category: 'main',
        order: 5
    },
    {
        id: 'help-to-buy',
        title: 'Help to Buy',
        description: 'Government schemes to help you buy your first home with a smaller deposit',
        icon: '🤝',
        link: '/products/help-to-buy',
        category: 'main',
        order: 6
    },
    // Additional services (2-card grid)
    {
        id: 'limited-companies',
        title: 'Limited Companies',
        description: 'Corporate mortgage solutions for business property purchases',
        icon: '🏛️',
        link: '/products/limited-companies',
        category: 'additional',
        order: 7
    },
    {
        id: 'calculators',
        title: 'Mortgage Calculators',
        description: 'Free tools to help you understand your mortgage options',
        icon: '🧮',
        link: '/calculators',
        category: 'additional',
        order: 8
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
        link: '/products/residential-mortgage',
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
        link: '/products/first-time-buyer',
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
        link: '/products/buy-to-let',
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
        link: '/products/self-employed',
        category: 'specialist',
        featured: true
    }
];

// ========== NAVIGATION DATA ==========
export const NAVIGATION: NavigationData[] = [
    {
        id: 'home',
        label: 'Home',
        path: '/'
    },
    {
        id: 'products',
        label: 'Products',
        path: '/products',
        hasDropdown: true,
        dropdownItems: [
            { label: 'First Time Buyers', path: '/products/first-time-buyers' },
            { label: 'Home Mover', path: '/products/home-mover' },
            { label: 'Remortgage', path: '/products/remortgage' },
            { label: 'Buy to Let', path: '/products/buy-to-let' },
            { label: 'New Build', path: '/products/new-build' },
            { label: 'Help to Buy', path: '/products/help-to-buy' },
            { label: 'Limited Companies', path: '/products/limited-companies' }
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