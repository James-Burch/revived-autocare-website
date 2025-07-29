import React from 'react';
import { Link } from 'react-router-dom';

type CardVariant = 'basic' | 'service' | 'product' | 'insurance';
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

// Service Card Props with Image Support
interface ServiceCardProps extends BaseCardProps {
    variant: 'service';
    title: string;
    description?: string;
    icon?: string;
    image?: string; // NEW: Image URL
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

// Insurance Card Props
interface InsuranceCardProps extends BaseCardProps {
    variant: 'insurance';
    title: string;
    description?: string;
    keyBenefits?: string[];
    whoNeedsIt?: string;
    typicalCoverage?: string;
    actions?: ActionButton[];
    linkTo?: string;
}

// Basic Card Props
interface BasicCardProps extends BaseCardProps {
    variant?: 'basic';
    children: React.ReactNode;
}

type UnifiedCardProps = ServiceCardProps | ProductCardProps | InsuranceCardProps | BasicCardProps;

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

    // Render Service Card with Image Support
    if (variant === 'service') {
        const { title, description, icon, image, linkTo, showActions = true } = props as ServiceCardProps;

        const serviceContent = (
            <div className="card__inner">
                {/* Image or Icon */}
                {image ? (
                    <div className="card__image">
                        <img src={image} alt={title} />
                    </div>
                ) : icon ? (
                    <div className="card__icon service-icon-new">
                        {icon}
                    </div>
                ) : null}

                <div className="card__content">
                    <h3 className="card__title">{title}</h3>
                    {description && (
                        <p className="card__description">
                            {description}
                        </p>
                    )}
                    {showActions && (
                        <div className="card__actions">
                            <span className="card__action-text">Learn More</span>
                            <span className="card__arrow">→</span>
                        </div>
                    )}
                </div>
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

                    <div className="card__details">
                        {bestFor && (
                            <div className="card__best-for">
                                <strong>Best for:</strong> {bestFor}
                            </div>
                        )}

                        {rate && (
                            <div className="card__rate-badge">From {rate}</div>
                        )}

                        {specs && specs.length > 0 && (
                            <div className="card__specs">
                                {specs.map((spec, index) => (
                                    <div key={index} className="card__spec-row">
                                        <span>{spec.label}:</span>
                                        <span className="card__spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {actions && actions.length > 0 && (
                        <div className="card__actions card__actions--buttons">
                            {actions.map((action, index) => (
                                action.linkTo ? (
                                    <Link key={index} to={action.linkTo} className={`button button--${action.variant}`}>
                                        {action.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={index}
                                        className={`button button--${action.variant}`}
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

    // Render Insurance Card
    if (variant === 'insurance') {
        const { title, description, keyBenefits, whoNeedsIt, typicalCoverage, actions, linkTo } = props as InsuranceCardProps;

        const insuranceContent = (
            <div className="card__inner">
                <h3 className="card__title">{title}</h3>
                {description && <p className="card__description">{description}</p>}

                {typicalCoverage && (
                    <div className="card__coverage">
                        <strong>Typical Coverage:</strong> {typicalCoverage}
                    </div>
                )}

                {keyBenefits && keyBenefits.length > 0 && (
                    <div className="card__benefits">
                        <h4>Key Benefits</h4>
                        <ul>
                            {keyBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {whoNeedsIt && (
                    <div className="card__who-needs">
                        <strong>Who needs this:</strong> {whoNeedsIt}
                    </div>
                )}

                {actions && actions.length > 0 && (
                    <div className="card__actions card__actions--buttons">
                        {actions.map((action, index) => (
                            action.linkTo ? (
                                <Link key={index} to={action.linkTo} className={`button button--${action.variant}`}>
                                    {action.label}
                                </Link>
                            ) : (
                                <button
                                    key={index}
                                    className={`button button--${action.variant}`}
                                    onClick={action.onClick}
                                >
                                    {action.label}
                                </button>
                            )
                        ))}
                    </div>
                )}
            </div>
        );

        if (linkTo) {
            return (
                <Link to={linkTo} className={cardClasses} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {insuranceContent}
                </Link>
            );
        }

        return (
            <div className={cardClasses} onClick={onClick}>
                {insuranceContent}
            </div>
        );
    }

    // Render Basic Card
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