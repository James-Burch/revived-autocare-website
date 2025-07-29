import React from 'react';
import { Link } from 'react-router-dom';

// Unified Card Types
type CardVariant = 'basic' | 'service' | 'product' | 'feature';
type CardSize = 'small' | 'medium' | 'large';

interface BaseCardProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: CardVariant;
    size?: CardSize;
    animated?: boolean;
}

// Service Card specific props
interface ServiceCardProps extends BaseCardProps {
    variant: 'service';
    icon?: string;
    title: string;
    description?: string;
    linkTo?: string;
    showActions?: boolean;
}

// Product Card specific props
interface ProductCardProps extends BaseCardProps {
    variant: 'product';
    title: string;
    description?: string;
    rate?: string;
    bestFor?: string;
    specs?: Array<{
        label: string;
        value: string;
    }>;
    actions?: Array<{
        label: string;
        variant: 'primary' | 'outline';
        linkTo?: string;
        onClick?: () => void;
    }>;
}

// Basic card props
interface BasicCardProps extends BaseCardProps {
    variant?: 'basic' | 'feature';
}

type UnifiedCardProps = ServiceCardProps | ProductCardProps | BasicCardProps;

const UnifiedCard: React.FC<UnifiedCardProps> = (props) => {
    const {
        children,
        className = '',
        onClick,
        variant = 'basic',
        size = 'medium',
        animated = true,
    } = props;

    // Base classes
    const baseClasses = [
        'card',
        `card--${variant}`,
        `card--${size}`,
        animated ? 'card--animated' : '',
        className
    ].filter(Boolean).join(' ');

    // Render Service Card
    if (variant === 'service') {
        const { icon, title, description, linkTo, showActions = true } = props as ServiceCardProps;

        const content = (
            <div className="card__inner">
                {icon && (
                    <div className="card__icon">
                        {icon}
                    </div>
                )}
                <h3 className="card__title">{title}</h3>
                {description && (
                    <p className="card__description">{description}</p>
                )}
                {showActions && (
                    <div className="card__actions">
                        <span className="card__action-text">Learn More</span>
                        <span className="card__arrow">→</span>
                    </div>
                )}
                {children}
            </div>
        );

        if (linkTo) {
            return (
                <Link to={linkTo} className={baseClasses}>
                    {content}
                </Link>
            );
        }

        return (
            <div className={baseClasses} onClick={onClick}>
                {content}
            </div>
        );
    }

    // Render Product Card
    if (variant === 'product') {
        const { title, description, rate, bestFor, specs, actions } = props as ProductCardProps;

        return (
            <div className={baseClasses} onClick={onClick}>
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
                                    <Link key={index} to={action.linkTo}>
                                        <button className={`button button--${action.variant} button--small`}>
                                            {action.label}
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        key={index}
                                        className={`button button--${action.variant} button--small`}
                                        onClick={action.onClick}
                                    >
                                        {action.label}
                                    </button>
                                )
                            ))}
                        </div>
                    )}

                    {children}
                </div>
            </div>
        );
    }

    // Render Basic/Feature Card
    return (
        <div className={baseClasses} onClick={onClick}>
            <div className="card__inner">
                {children}
            </div>
        </div>
    );
};

export default UnifiedCard;