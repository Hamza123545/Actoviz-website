"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, X, MessageCircle, HelpCircle, Phone, Mail, Sparkles, ArrowUp, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotWidgetProps {
  className?: string;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your Actoviz AI assistant. I can help you learn about our software rental solutions, pricing, and services. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting right now. Please try again later or contact our support team at info@actoviz.com.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatMessage = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  };

  const quickQuestions = [
    "What software solutions do you offer?",
    "Tell me about your LMS",
    "What are your pricing plans?",
    "How does the software rental model work?",
    "Who is your CEO?",
    "Do you offer free consultations?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleOpenChat = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
      setShowWelcome(false);
    }, 200);
  };

  const handleCloseChat = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
      setShowWelcome(true);
    }, 200);
  };

  return (
    <>
      {/* Chat Button with Welcome Message */}
      {!isOpen && (
        <div className={cn("fixed bottom-6 right-6 z-40", className)}>
          {/* Welcome Message */}
          {showWelcome && (
            <div className="absolute bottom-0 right-20 mb-2 animate-fade-in-up">
              <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-xl border border-blue-200 p-4 max-w-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Have questions?</p>
                    <p className="text-xs text-blue-600 font-medium">Ask our AI assistant</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={handleOpenChat} className="text-xs text-primary font-medium">Click here</button>
                    <ArrowRight className="w-4 h-4 text-primary animate-bounce rotate-0" />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Professional Chat Button */}
          <Button
            onClick={handleOpenChat}
            className={cn(
              "w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group relative",
              isAnimating && "scale-105"
            )}
            size="icon"
          >
            {/* Icon */}
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Online Indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
              <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </Button>
        </div>
      )}

      {/* Chat Panel Overlay */}
      {isOpen && (
        <div 
          className={cn(
            "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-all duration-300",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
          onClick={handleCloseChat}
        >
          <div 
            className={cn(
              "absolute bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-secondarymuted flex flex-col overflow-hidden transition-all duration-500 transform",
              isAnimating ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clean Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Actoviz AI Assistant</h3>
                  <div className="text-xs opacity-90 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Online
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                onClick={handleCloseChat}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-b border-secondarymuted bg-muted/20">
                <h4 className="text-sm font-semibold text-primary mb-3">Quick Questions</h4>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left p-2 rounded-lg border border-secondarymuted hover:border-secondary hover:bg-white transition-all duration-200 text-xs"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 animate-fade-in-up",
                    message.role === 'user' ? "justify-end" : "justify-start"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-secondary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                      message.role === 'user'
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "bg-muted text-primary"
                    )}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formatMessage(message.content)
                      }}
                    />
                    <div
                      className={cn(
                        "text-xs mt-1 opacity-70",
                        message.role === 'user' ? "text-white/70" : "text-primary/70"
                      )}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="bg-muted text-primary rounded-2xl px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-secondarymuted bg-white">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our software solutions..."
                  className="flex-1 border-secondarymuted focus:border-secondary"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="bg-secondary hover:bg-secondary/80 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Ask about our LMS, Calling Dialer, AI Chatbot, or Web Development
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
