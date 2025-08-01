import React from 'react';
import UnifiedCard from './UnifiedCard';
import type { ProductData } from '../data';

interface ProductsGridProps {
    products: ProductData[];
    className?: string;
    showActions?: boolean;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
    products,
    className = '',
    showActions = true
}) => {
    return (
        <section className={`products-grid-section ${className}`}>
            <div className="container">
                <div className="products-grid">
                    {products.map((product) => (
                        <UnifiedCard
                            key={product.id}
                            variant="product"
                            title={product.title}
                            description={product.description}
                            rate={product.rate}
                            bestFor={product.bestFor}
                            specs={product.specs}
                            actions={showActions ? [
                                {
                                    label: 'Key Benefits',
                                    variant: 'primary',
                                    onClick: () => {
                                        // Future: Could open a modal or navigate to benefits page
                                        console.log(`Show benefits for ${product.title}`);
                                    }
                                },
                                {
                                    label: 'Get Quote',
                                    variant: 'outline',
                                    linkTo: '/contact'
                                }
                            ] : undefined}
                            animated={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsGrid;
