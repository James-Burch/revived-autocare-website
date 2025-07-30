import React, { useState } from 'react';
import { Button } from './';

interface ChatWidgetProps {
    className?: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form or show success message
        setFormData({ name: '', phone: '', message: '' });
        setIsOpen(false);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`chat-widget ${className}`}>
            {/* Chat bubble icon */}
            <button
                className={`chat-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleChat}
                aria-label="Open chat"
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <h3>Hi there!</h3>
                    <p>Questions? We are here to help! Send us a message below.</p>
                </div>

                <form className="chat-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Mobile number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            rows={4}
                            required
                        />
                    </div>

                    <Button type="submit" variant="primary" className="send-button">
                        Send
                    </Button>

                    <p className="form-disclaimer">
                        By sending this message, you expressly consent to receive communications from us.
                        You may opt out at any time.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ChatWidget;