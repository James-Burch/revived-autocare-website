import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Button } from "./";

interface ChatWidgetProps {
  className?: string;
  autoOpenDelay?: number; // Allow customization of delay
}

const ChatWidget: React.FC<ChatWidgetProps> = ({
  className = "",
  autoOpenDelay = 3000,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  // Memoized toggle function to prevent recreation
  const toggleChat = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Create portal container - stable creation
  useEffect(() => {
    // Check if container already exists
    let container = document.getElementById("chat-widget-portal-root");

    if (!container) {
      // Create new container
      container = document.createElement("div");
      container.id = "chat-widget-portal-root";

      // CRITICAL: Set styles directly on the element to bypass ALL CSS
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

      // Inject directly into body
      document.body.appendChild(container);
    }

    setPortalContainer(container);

    // Cleanup function
    return () => {
      // Only remove if we created it and it's empty
      const existingContainer = document.getElementById(
        "chat-widget-portal-root"
      );
      if (existingContainer && existingContainer.children.length === 0) {
        existingContainer.remove();
      }
    };
  }, []); // Empty dependency array for stable creation

  // Auto-popup logic - separate effect for better reliability
  useEffect(() => {
    if (!portalContainer || hasAutoOpened || isOpen) return;

    console.log("Setting up auto-popup timer..."); // Debug log

    const timer = setTimeout(() => {
      console.log("Auto-opening chat widget now!"); // Debug log
      setIsOpen(true);
      setHasAutoOpened(true);
    }, autoOpenDelay);

    return () => {
      console.log("Clearing auto-popup timer"); // Debug log
      clearTimeout(timer);
    };
  }, [portalContainer, hasAutoOpened, isOpen, autoOpenDelay]);

  // Handle input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        console.log("Form submitted:", formData);

        // TODO: Replace with actual form submission logic
        // await submitFormToAPI(formData);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Success feedback
        setFormData({ name: "", phone: "", message: "" });
        setIsOpen(false);

        // Optional: Show success message
        // You could add a toast notification here
      } catch (error) {
        console.error("Form submission error:", error);
        // Optional: Show error message
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  // Handle close
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Don't render anything if portal container isn't ready
  if (!portalContainer) {
    return null;
  }

  // Common input styles as object for reuse
  const inputStyles = {
    width: "100%",
    padding: "8px 16px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "inherit",
    background: "white",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "#0ABAB5";
    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(10, 186, 181, 0.1)";
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "#e0e0e0";
    e.currentTarget.style.boxShadow = "none";
  };

  // Render the chat widget using React Portal
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
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
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
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 2147483647,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.1)";
        }}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
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
            animation: "chatSlideIn 0.3s ease-out",
          }}
        >
          {/* Animation keyframes */}
          <style>
            {`
              @keyframes chatSlideIn {
                from {
                  opacity: 0;
                  transform: translateY(20px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}
          </style>

          {/* Chat Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #0ABAB5 0%, #5CDAD6 100%)",
              color: "white",
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "600" }}>
              Noble Mortgage - Quick Enquiry
            </h3>
            <button
              onClick={handleClose}
              aria-label="Close chat"
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
                padding: "0",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
              }}
            >
              ×
            </button>
          </div>

          {/* Chat Content */}
          <div style={{ padding: "24px", background: "white" }}>
            <p
              style={{
                margin: "0 0 24px 0",
                color: "#616161",
                fontSize: "14px",
                lineHeight: "1.4",
              }}
            >
              Get a free mortgage consultation in 24 hours
            </p>

            {/* Chat Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                disabled={isSubmitting}
                style={inputStyles}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
                disabled={isSubmitting}
                style={inputStyles}
              />

              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                rows={3}
                required
                disabled={isSubmitting}
                style={{
                  ...inputStyles,
                  resize: "vertical" as const,
                  minHeight: "70px",
                }}
              />

              <Button
                type="submit"
                variant="primary"
                size="md"
                loading={isSubmitting}
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            #chat-widget-portal-root > div {
              bottom: 16px !important;
              right: 16px !important;
            }
            
            #chat-widget-portal-root > div > div {
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
