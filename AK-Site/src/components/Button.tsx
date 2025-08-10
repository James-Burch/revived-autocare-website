import React, { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = "right",
      children,
      className = "",
      disabled,
      href,
      external = false,
      onClick,
      ...props
    },
    ref
  ) => {
    // Build className string
    const baseClasses = "button";
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;
    const fullWidthClass = fullWidth ? "button-full-width" : "";
    const loadingClass = loading ? "button-loading" : "";
    const disabledClass = disabled ? "button-disabled" : "";

    const buttonClasses = [
      baseClasses,
      variantClass,
      sizeClass,
      fullWidthClass,
      loadingClass,
      disabledClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Handle loading state
    const isDisabled = disabled || loading;

    // Handle click events
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }

      // Add ripple effect
      const button = e.currentTarget;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("button-ripple");

      // Remove existing ripples
      const existingRipples = button.querySelectorAll(".button-ripple");
      existingRipples.forEach((r) => r.remove());

      button.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);

      // Call original onClick if provided
      if (onClick) {
        onClick(e);
      }
    };

    // Render content with icon
    const renderContent = () => {
      if (loading) {
        return (
          <>
            <span className="button-spinner" aria-hidden="true" />
            <span className="button-text-hidden">{children}</span>
            <span className="sr-only">Loading...</span>
          </>
        );
      }

      if (icon) {
        return iconPosition === "left" ? (
          <>
            <span className="button-icon button-icon-left" aria-hidden="true">
              {icon}
            </span>
            <span className="button-text">{children}</span>
          </>
        ) : (
          <>
            <span className="button-text">{children}</span>
            <span className="button-icon button-icon-right" aria-hidden="true">
              {icon}
            </span>
          </>
        );
      }

      return <span className="button-text">{children}</span>;
    };

    // If href is provided, render as link-styled button
    if (href) {
      const linkProps = external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {};

      return (
        <a
          href={href}
          className={buttonClasses}
          onClick={loading ? (e) => e.preventDefault() : undefined}
          aria-disabled={isDisabled}
          {...linkProps}
        >
          {renderContent()}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={buttonClasses}
        disabled={isDisabled}
        onClick={handleClick}
        aria-disabled={isDisabled}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
