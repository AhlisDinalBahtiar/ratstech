import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotWidgetProps {
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  showChatPrompt: boolean;
  setShowChatPrompt: (show: boolean) => void;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ 
  chatOpen, 
  setChatOpen, 
  showChatPrompt, 
  setShowChatPrompt 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm RatsTech AI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { icon: '💼', text: 'View Services', action: 'services' },
    { icon: '💰', text: 'Get Pricing', action: 'pricing' },
    { icon: '📱', text: 'Contact Us', action: 'contact' },
    { icon: '🚀', text: 'Start Project', action: 'project' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('service') || lowerText === 'services') {
      return "We offer Web Development, AI Chatbot Development, UI/UX Design, and Technology Consulting. Which service interests you most? 🎯";
    }
    if (lowerText.includes('price') || lowerText.includes('pricing') || lowerText === 'pricing') {
      return "Our pricing varies based on project scope. Projects typically range from $5,000 to $50,000+. Would you like to schedule a free consultation to discuss your specific needs? 💼";
    }
    if (lowerText.includes('contact') || lowerText === 'contact') {
      return "You can reach us at ahlzdinal@gmail.com or call +62 812-3456-7890. We're available Mon-Fri 9AM-6PM. Would you like to fill out our contact form? 📞";
    }
    if (lowerText.includes('project') || lowerText === 'project') {
      return "Exciting! 🚀 Let's start your project. Typical timelines are 4-12 weeks. First, we'll schedule a free discovery call. Shall I redirect you to our contact page?";
    }
    if (lowerText.includes('time') || lowerText.includes('timeline')) {
      return "Project timelines vary: Simple websites (4-6 weeks), Complex web apps (8-12 weeks), AI solutions (6-10 weeks). What type of project are you planning? ⏱️";
    }
    if (lowerText.includes('portfolio') || lowerText.includes('work')) {
      return "We've delivered 10+ successful projects across various industries. Check out our portfolio section to see our recent work! Want me to show you specific examples? 🎨";
    }
    
    return "Great question! Our team would love to discuss this with you. Would you like to schedule a free consultation, or do you have any other questions? 😊";
  };

  const handleQuickReply = (action: string) => {
    handleSendMessage(quickReplies.find(q => q.action === action)?.text || '');
  };

  const handleOpenChat = () => {
    setChatOpen(true);
    setShowChatPrompt(false);
  };

  return (
    <>
      {/* Chat Prompt Bubble */}
      {showChatPrompt && !chatOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-bounce">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border-2 border-blue-100 relative">
            <button
              onClick={() => setShowChatPrompt(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <X size={14} />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-sm mb-1">Need help?</p>
                <p className="text-xs text-gray-600 mb-3">
                  Chat with our AI assistant for instant answers!
                </p>
                <button
                  onClick={handleOpenChat}
                  className="text-xs bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Start Chat
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-gray-100 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white">RatsTech AI</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none'
                      : 'bg-white border-2 border-gray-100 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Quick actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply.action)}
                    className="text-xs bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all text-left font-medium flex items-center gap-2"
                  >
                    <span>{reply.icon}</span>
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Powered by RatsTech AI • Response time: ~2s
            </p>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-40 flex items-center justify-center group ${
          chatOpen ? 'rotate-0' : ''
        }`}
      >
        {chatOpen ? (
          <X size={28} className="group-hover:rotate-90 transition-transform" />
        ) : (
          <>
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">1</span>
            </div>
          </>
        )}
      </button>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ChatbotWidget;