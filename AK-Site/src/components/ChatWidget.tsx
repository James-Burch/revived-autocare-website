import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./";

interface ChatWidgetProps {
  className?: string;
  autoOpenDelay?: number;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  className = "",
  autoOpenDelay = 3000,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );
  const [isDismissed, setIsDismissed] = useState(false);

  // Refs for focus management
  const firstInputRef = useRef<HTMLInputElement>(null);
  const chatToggleRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Session management - PRD requirement
  useEffect(() => {
    const sessionDismissed = sessionStorage.getItem("chat-widget-dismissed");
    const sessionAutoOpened = sessionStorage.getItem("chat-widget-auto-opened");

    if (sessionDismissed === "true") {
      setIsDismissed(true);
    }
    if (sessionAutoOpened === "true") {
      setHasAutoOpened(true);
    }
  }, []);

  // Form validation - PRD requirement
  const validateForm = useCallback((): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Phone validation - UK phone pattern
    const phonePattern =
      /^(?:(?:\+44\s?|0)(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{4}|\d{4}\s?\d{6}))$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!phonePattern.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid UK phone number";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    } else if (formData.message.trim().length > 500) {
      errors.message = "Message must be less than 500 characters";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  }, [formData]);

  // Real-time validation
  const validateField = useCallback(
    (fieldName: keyof FormData, value: string) => {
      const errors = { ...validationErrors };

      switch (fieldName) {
        case "name":
          if (!value.trim()) {
            errors.name = "Name is required";
          } else if (value.trim().length < 2) {
            errors.name = "Name must be at least 2 characters";
          } else {
            delete errors.name;
          }
          break;
        case "phone":
          const phonePattern =
            /^(?:(?:\+44\s?|0)(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{4}|\d{4}\s?\d{6}))$/;
          if (!value.trim()) {
            errors.phone = "Phone number is required";
          } else if (!phonePattern.test(value.replace(/\s/g, ""))) {
            errors.phone = "Please enter a valid UK phone number";
          } else {
            delete errors.phone;
          }
          break;
        case "message":
          if (!value.trim()) {
            errors.message = "Message is required";
          } else if (value.trim().length < 10) {
            errors.message = "Message must be at least 10 characters";
          } else if (value.trim().length > 500) {
            errors.message = "Message must be less than 500 characters";
          } else {
            delete errors.message;
          }
          break;
      }

      setValidationErrors(errors);
    },
    [validationErrors]
  );

  // Memoized toggle function with session management
  const toggleChat = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      setIsDismissed(false);
      sessionStorage.removeItem("chat-widget-dismissed");

      // Focus first input when opening
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 300); // After animation completes
    } else {
      handleClose();
    }
  }, [isOpen]);

  // Enhanced close handler with session management
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsDismissed(true);
    sessionStorage.setItem("chat-widget-dismissed", "true");

    // Return focus to toggle button
    setTimeout(() => {
      chatToggleRef.current?.focus();
    }, 100);
  }, []);

  // Create portal container with enhanced security
  useEffect(() => {
    let container = document.getElementById("chat-widget-portal-root");

    if (!container) {
      container = document.createElement("div");
      container.id = "chat-widget-portal-root";
      container.className = "chat-widget-portal";

      // Enhanced security styles
      container.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        pointer-events: none !important;
        z-index: 2147483647 !important;
        isolation: isolate !important;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      `;

      document.body.appendChild(container);
    }

    setPortalContainer(container);

    return () => {
      const existingContainer = document.getElementById(
        "chat-widget-portal-root"
      );
      if (existingContainer && existingContainer.children.length === 0) {
        existingContainer.remove();
      }
    };
  }, []);

  // Auto-popup with enhanced session management - PRD requirement
  useEffect(() => {
    if (!portalContainer || hasAutoOpened || isOpen || isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
      sessionStorage.setItem("chat-widget-auto-opened", "true");

      // Focus first input after auto-open
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 300);
    }, autoOpenDelay);

    return () => clearTimeout(timer);
  }, [portalContainer, hasAutoOpened, isOpen, isDismissed, autoOpenDelay]);

  // Focus trap for accessibility - PRD requirement
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key === "Tab") {
        const chatWindow = chatWindowRef.current;
        if (!chatWindow) return;

        const focusableElements = chatWindow.querySelectorAll(
          'button, input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Handle input changes with validation
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof FormData;

      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));

      // Real-time validation after user stops typing
      setTimeout(() => {
        validateField(fieldName, value);
      }, 300);
    },
    [validateField]
  );

  // Enhanced form submission with validation - PRD requirement
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        // Focus first error field
        const firstErrorField = Object.keys(validationErrors)[0];
        const errorElement = chatWindowRef.current?.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLElement;
        errorElement?.focus();
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        // TODO: Replace with actual API endpoint
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Success
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", message: "" });
        setValidationErrors({});

        // Auto-close after success
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validationErrors, validateForm]
  );

  // Enter key submission - PRD requirement
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (
        e.key === "Enter" &&
        !e.shiftKey &&
        e.target !== chatWindowRef.current?.querySelector("textarea")
      ) {
        e.preventDefault();
        handleSubmit(e as any);
      }
    },
    [handleSubmit]
  );

  if (!portalContainer) {
    return null;
  }

  // Enhanced input styles
  const inputStyles = {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
    background: "white",
    boxSizing: "border-box" as const,
    transition: "all 0.2s ease",
    outline: "none",
  };

  const getInputStyles = (fieldName: keyof FormData) => ({
    ...inputStyles,
    borderColor: validationErrors[fieldName] ? "#dc2626" : "#e0e0e0",
    boxShadow: validationErrors[fieldName]
      ? "0 0 0 3px rgba(220, 38, 38, 0.1)"
      : "none",
  });

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!validationErrors[e.target.name as keyof FormData]) {
      e.currentTarget.style.borderColor = "#0ABAB5";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(10, 186, 181, 0.1)";
    }
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!validationErrors[e.target.name as keyof FormData]) {
      e.currentTarget.style.borderColor = "#e0e0e0";
      e.currentTarget.style.boxShadow = "none";
    }
  };

  return createPortal(
    <div
      style={{
        position: "absolute",
        bottom: "24px",
        right: "24px",
        pointerEvents: "auto",
        zIndex: 2147483647,
        fontFamily: "inherit",
      }}
      className={className}
    >
      {/* Chat Toggle Button with enhanced animations */}
      <button
        ref={chatToggleRef}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className="chat-toggle-button"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0ABAB5 0%, #5CDAD6 100%)",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow:
            "0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 2147483647,
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.1)";
          }
        }}
      >
        <span
          style={{
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
          }}
        >
          {isOpen ? "×" : "💬"}
        </span>
      </button>

      {/* Chat Window with enhanced animations */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="chat-window"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-header"
          style={{
            position: "absolute",
            bottom: "70px",
            right: "0",
            width: "350px",
            maxWidth: "calc(100vw - 2rem)",
            background: "white",
            borderRadius: "16px",
            boxShadow:
              "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08)",
            border: "1px solid #eeeeee",
            overflow: "hidden",
            zIndex: 2147483647,
            animation: "chatEnter 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Enhanced animation styles */}
          <style>
            {`
              @keyframes chatEnter {
                from {
                  opacity: 0;
                  transform: translateY(20px) scale(0.8);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }

              @keyframes chatExit {
                from {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
                to {
                  opacity: 0;
                  transform: translateY(20px) scale(0.8);
                }
              }

              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-2px); }
                75% { transform: translateX(2px); }
              }

              .error-input {
                animation: shake 0.5s ease-in-out;
              }

              /* Reduced motion support */
              @media (prefers-reduced-motion: reduce) {
                .chat-window {
                  animation: none !important;
                }
                .chat-toggle-button {
                  transition: none !important;
                }
                .error-input {
                  animation: none !important;
                }
              }
            `}
          </style>

          {/* Chat Header */}
          <div
            id="chat-header"
            style={{
              background: "linear-gradient(135deg, #0ABAB5 0%, #5CDAD6 100%)",
              color: "white",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                Get Expert Advice
              </h3>
              <p style={{ margin: 0, fontSize: "12px", opacity: 0.9 }}>
                We typically respond within minutes
              </p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close chat"
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "4px",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              ×
            </button>
          </div>

          {/* Chat Content */}
          <div style={{ padding: "24px" }}>
            {submitStatus === "success" ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <h4 style={{ margin: "0 0 8px 0", color: "#059669" }}>
                  Message Sent!
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <p
                  style={{
                    margin: "0 0 20px 0",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  Tell us about your mortgage or insurance needs and we'll get
                  back to you with expert advice.
                </p>

                <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
                  {/* Name Field */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      htmlFor="chat-name"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      ref={firstInputRef}
                      id="chat-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      disabled={isSubmitting}
                      className={validationErrors.name ? "error-input" : ""}
                      style={getInputStyles("name")}
                      aria-describedby={
                        validationErrors.name ? "name-error" : undefined
                      }
                      required
                    />
                    {validationErrors.name && (
                      <div
                        id="name-error"
                        role="alert"
                        style={{
                          color: "#dc2626",
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        {validationErrors.name}
                      </div>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      htmlFor="chat-phone"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="chat-phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g., 07123 456789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      disabled={isSubmitting}
                      className={validationErrors.phone ? "error-input" : ""}
                      style={getInputStyles("phone")}
                      aria-describedby={
                        validationErrors.phone ? "phone-error" : undefined
                      }
                      required
                    />
                    {validationErrors.phone && (
                      <div
                        id="phone-error"
                        role="alert"
                        style={{
                          color: "#dc2626",
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        {validationErrors.phone}
                      </div>
                    )}
                  </div>

                  {/* Message Field */}
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      htmlFor="chat-message"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="chat-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      disabled={isSubmitting}
                      className={validationErrors.message ? "error-input" : ""}
                      style={{
                        ...getInputStyles("message"),
                        resize: "vertical",
                        minHeight: "70px",
                        maxHeight: "120px",
                      }}
                      aria-describedby={
                        validationErrors.message ? "message-error" : undefined
                      }
                      required
                    />
                    {validationErrors.message && (
                      <div
                        id="message-error"
                        role="alert"
                        style={{
                          color: "#dc2626",
                          fontSize: "12px",
                          marginTop: "4px",
                        }}
                      >
                        {validationErrors.message}
                      </div>
                    )}
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#9ca3af",
                        marginTop: "4px",
                      }}
                    >
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  {submitStatus === "error" && (
                    <div
                      role="alert"
                      style={{
                        color: "#dc2626",
                        fontSize: "14px",
                        marginBottom: "16px",
                        padding: "8px 12px",
                        backgroundColor: "#fef2f2",
                        border: "1px solid #fecaca",
                        borderRadius: "6px",
                      }}
                    >
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="medium"
                    loading={isSubmitting}
                    fullWidth
                    disabled={Object.keys(validationErrors).length > 0}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .chat-widget-portal > div {
              bottom: 16px !important;
              right: 16px !important;
            }
            
            .chat-window {
              width: calc(100vw - 2rem) !important;
              right: -10px !important;
              bottom: 60px !important;
              max-width: 320px !important;
            }
          }
        `}
      </style>
    </div>,
    portalContainer
  );
};

export default ChatWidget;
