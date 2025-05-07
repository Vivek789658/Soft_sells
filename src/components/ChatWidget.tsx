import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

type Message = {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

const MOCK_RESPONSES: { [key: string]: string } = {
    'how do i sell my license': 'To sell your license, simply click the "Get a Free Valuation" button and fill out our form. Our team will review your license details and provide you with a fair market value within 24 hours.',
    'what types of licenses': 'We accept various types of software licenses including Business Software, Creative Suite, Development Tools, Productivity Suite, and Enterprise Solutions. You can select your license type in the valuation form.',
    'how long does it take': 'The entire process typically takes 1-3 business days from submission to payment. We aim to provide valuations within 24 hours, and once you accept our offer, payment is processed within 1-2 business days.',
    'is it secure': 'Yes, we use bank-level encryption and verification processes to keep your data and transactions safe. All license transfers are handled securely through our platform.',
    'what documents do i need': 'You\'ll need your license key, proof of purchase, and any relevant documentation that shows you own the license. Our team will guide you through the specific requirements during the valuation process.',
};

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: '👋 Hi! I\'m your SoftSell assistant. How can I help you today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            const query = inputValue.toLowerCase();
            let response = 'I\'m not sure about that. Could you please contact our support team for more specific information?';

            // Check for matching keywords in mock responses
            for (const [key, value] of Object.entries(MOCK_RESPONSES)) {
                if (query.includes(key)) {
                    response = value;
                    break;
                }
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: response,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                className="fixed bottom-6 left-6 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors z-50"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle chat"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 left-6 w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Bot className="h-6 w-6 text-primary-600" />
                                <h3 className="font-semibold">SoftSell Assistant</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user'
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-2 mb-1">
                                            {message.sender === 'bot' ? (
                                                <Bot className="h-4 w-4 text-primary-600" />
                                            ) : (
                                                <User className="h-4 w-4 text-white" />
                                            )}
                                            <span className="text-xs opacity-75">
                                                {message.sender === 'user' ? 'You' : 'Assistant'}
                                            </span>
                                        </div>
                                        <p className="text-sm">{message.content}</p>
                                        <span className="text-xs opacity-75 mt-1 block">
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex space-x-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                                />
                                <button
                                    onClick={handleSend}
                                    className="p-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                                    disabled={!inputValue.trim()}
                                >
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Try asking: "How do I sell my license?" or "What types of licenses do you accept?"
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget; 