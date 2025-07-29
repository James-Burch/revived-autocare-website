import React from 'react';
import { Link } from 'react-router-dom';

type CardVariant = 'basic' | 'service' | 'product' | 'feature';
type CardSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface BaseCardProps {
    className?: string;
    onClick?: () => void;
    variant?: CardVariant;
    size?: CardSize;
    animated?: boolean;
}

interface ActionButton {
    label: string;
    variant: ButtonVariant;
    linkTo?: string;
    onClick?: () => void;
}

interface Spec {
    label: string;
    value: string;
}

// Service Card Props
interface ServiceCardProps extends BaseCardProps {
    variant: 'service';
    title: string;
    description?: string;
    icon?: string;
    linkTo?: string;
    showActions?: boolean;
}

// Product Card Props
interface ProductCardProps extends BaseCardProps {
    variant: 'product';
    title: string;
    description?: string;
    rate?: string;
    bestFor?: string;
    specs?: Spec[];
    actions?: ActionButton[];
}

// Basic/Feature Card Props
interface BasicCardProps extends BaseCardProps {
    variant?: 'basic' | 'feature';
    children: React.ReactNode;
}

type UnifiedCardProps = ServiceCardProps | ProductCardProps | BasicCardProps;

const UnifiedCard: React.FC<UnifiedCardProps> = (props) => {
    const {
        className = '',
        onClick,
        variant = 'basic',
        size = 'medium',
        animated = true,
    } = props;

    // Build CSS classes
    const cardClasses = [
        'card',
        `card--${variant}`,
        `card--${size}`,
        animated ? 'card--animated' : '',
        className
    ].filter(Boolean).join(' ');

    // Render Service Card
    if (variant === 'service') {
        const { title, description, icon, linkTo, showActions = true } = props as ServiceCardProps;

        const serviceContent = (
            <div className="card__inner">
                {icon && (
                    <div className="card__icon service-icon-new">
                        {icon}
                    </div>
                )}
                <h3 className="card__title">{title}</h3>
                {description && (
                    <p className="card__description card-description">
                        {description}
                    </p>
                )}
                {showActions && (
                    <div className="card__actions card-actions">
                        <span className="card__action-text learn-more">Learn More</span>
                        <span className="card__arrow arrow-icon">→</span>
                    </div>
                )}
            </div>
        );

        if (linkTo) {
            return (
                <Link to={linkTo} className={cardClasses} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {serviceContent}
                </Link>
            );
        }

        return (
            <div className={cardClasses} onClick={onClick}>
                {serviceContent}
            </div>
        );
    }

    // Render Product Card
    if (variant === 'product') {
        const { title, description, rate, bestFor, specs, actions } = props as ProductCardProps;

        return (
            <div className={cardClasses} onClick={onClick}>
                <div className="card__inner">
                    <h3 className="card__title">{title}</h3>
                    {description && <p className="card__description">{description}</p>}

                    <div className="card__details product-details">
                        {bestFor && (
                            <div className="card__best-for best-for">
                                <strong>Best for:</strong> {bestFor}
                            </div>
                        )}

                        {rate && (
                            <div className="card__rate-badge rate-badge">From {rate}</div>
                        )}

                        {specs && specs.length > 0 && (
                            <div className="card__specs product-specs">
                                {specs.map((spec, index) => (
                                    <div key={index} className="card__spec-row spec-row">
                                        <span>{spec.label}:</span>
                                        <span className="card__spec-value spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {actions && actions.length > 0 && (
                        <div className="card__actions card__actions--buttons product-actions">
                            {actions.map((action, index) => (
                                action.linkTo ? (
                                    <Link key={index} to={action.linkTo}>
                                        <button className={`button button-${action.variant} button-small`}>
                                            {action.label}
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        key={index}
                                        className={`button button-${action.variant} button-small`}
                                        onClick={action.onClick}
                                    >
                                        {action.label}
                                    </button>
                                )
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Render Basic/Feature Card
    const { children } = props as BasicCardProps;
    return (
        <div className={cardClasses} onClick={onClick}>
            <div className="card__inner">
                {children}
            </div>
        </div>
    );
};

export default UnifiedCard;