import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    size = 'medium', 
    children, 
    className = '',
    ...props 
}) => {
    const buttonClasses = `button button-${variant} button-${size} ${className}`.trim();
    
    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;