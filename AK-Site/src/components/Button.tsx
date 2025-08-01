import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    className?: string;
    as?: 'button' | 'a';
    href?: string;
    target?: string;
    rel?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            loading = false,
            fullWidth = false,
            children,
            className = '',
            disabled,
            as = 'button',
            href,
            target,
            rel,
            ...props
        },
        ref
    ) => {
        // Build class names using your original system
        const classes = [
            'button',
            `button-${variant}`,
            size === 'sm' ? 'button-small' : '',
            size === 'lg' ? 'button-large' : '',
            fullWidth ? 'button-full-width' : '',
            loading ? 'button-loading' : '',
            className
        ]
            .filter(Boolean)
            .join(' ');

        const buttonContent = (
            <>
                {loading && <span className="button-spinner" />}
                <span className={loading ? 'button-text-hidden' : ''}>
                    {children}
                </span>
            </>
        );

        const commonProps = {
            className: classes,
            disabled: disabled || loading,
        };

        if (as === 'a' && href) {
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={disabled ? undefined : href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : rel}
                    {...commonProps}
                    {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {buttonContent}
                </a>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                type="button"
                {...commonProps}
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {buttonContent}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;