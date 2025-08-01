import React, { useState } from 'react';
import { Button } from './';

interface ChatWidgetProps {
    className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(true); // Opens immediately on page load
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Handle form submission here
            console.log('Form submitted:', formData);

            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Reset form or show success message
            setFormData({ name: '', phone: '', message: '' });
            setIsOpen(false);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <style>{`
                .chat-widget-container {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    z-index: 1000;
                    font-family: inherit;
                }

                .chat-toggle-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #4db6ac 0%, #80cbc4 100%);
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }

                .chat-toggle-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08);
                }

                .chat-toggle-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    transform: scale(0);
                    transition: transform 0.3s ease;
                }

                .chat-toggle-btn:hover::before {
                    transform: scale(1);
                }

                .chat-window-container {
                    position: absolute;
                    bottom: 70px;
                    right: 0;
                    width: 350px;
                    max-width: calc(100vw - 2rem);
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08);
                    border: 1px solid #eeeeee;
                    overflow: hidden;
                    animation: slideUpChat 0.3s ease-out;
                }

                @keyframes slideUpChat {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .chat-header-container {
                    background: linear-gradient(135deg, #4db6ac 0%, #80cbc4 100%);
                    color: white;
                    padding: 16px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .chat-header-title {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                }

                .chat-close-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    transition: background-color 0.2s ease;
                }

                .chat-close-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                .chat-content-container {
                    padding: 24px;
                }

                .chat-description {
                    margin: 0 0 24px 0;
                    color: #616161;
                    font-size: 14px;
                    line-height: 1.4;
                }

                .chat-form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .chat-input {
                    width: 100%;
                    padding: 8px 16px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 14px;
                    font-family: inherit;
                    background: white;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    box-sizing: border-box;
                }

                .chat-input:focus {
                    outline: none;
                    border-color: #4db6ac;
                    box-shadow: 0 0 0 2px rgba(77, 182, 172, 0.1);
                }

                .chat-textarea {
                    resize: vertical;
                    min-height: 70px;
                    font-family: inherit;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .chat-widget-container {
                        bottom: 16px;
                        right: 16px;
                    }

                    .chat-toggle-btn {
                        width: 50px;
                        height: 50px;
                        font-size: 18px;
                    }

                    .chat-window-container {
                        width: calc(100vw - 2rem);
                        right: -10px;
                        bottom: 60px;
                        max-width: 320px;
                    }

                    .chat-header-container {
                        padding: 12px 16px;
                    }

                    .chat-header-title {
                        font-size: 16px;
                    }

                    .chat-content-container {
                        padding: 16px;
                    }

                    .chat-form-container {
                        gap: 12px;
                    }

                    .chat-input {
                        padding: 8px 12px;
                        font-size: 14px;
                    }
                }
            `}</style>

            <div className={`chat-widget-container ${className}`}>
                <button
                    className="chat-toggle-btn"
                    onClick={toggleChat}
                    aria-label="Toggle chat"
                >
                    {isOpen ? '×' : '💬'}
                </button>

                {isOpen && (
                    <div className="chat-window-container">
                        <div className="chat-header-container">
                            <h3 className="chat-header-title">Noble Mortgage - Quick Enquiry</h3>
                            <button
                                className="chat-close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                            >
                                ×
                            </button>
                        </div>

                        <div className="chat-content-container">
                            <p className="chat-description">
                                Get a free mortgage consultation in 24 hours
                            </p>

                            <form onSubmit={handleSubmit} className="chat-form-container">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="chat-input"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="chat-input"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        required
                                        className="chat-input chat-textarea"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="sm"
                                    loading={isSubmitting}
                                    fullWidth
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ChatWidget;