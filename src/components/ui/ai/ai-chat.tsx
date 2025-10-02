'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: number;
  isTyping?: boolean;
};

type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
};

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 420, y: 80 });
  const dragStartPos = useRef({ x: 0, y: 0 });

  // Load conversations from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aiChatConversations');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConversations(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        console.error('Failed to parse conversations', e);
      }
    }
  }, []);

  // Save conversations to localStorage
  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem('aiChatConversations', JSON.stringify(conversations));
    }
  }, [conversations]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentConversation?.messages, isOpen, isMinimized]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized, currentConversationId]);

  const currentConversation = conversations.find(c => c.id === currentConversationId) || null;

  // Mock AI response - replace with actual API call
  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple response logic - replace with actual AI model call
    const responses = [
      "I understand you're asking about: " + userMessage + ". How can I assist you further?",
      "That's an interesting question about " + userMessage.split(' ').slice(0, 3).join(' ') + ". Let me help with that.",
      "I can provide information about " + userMessage.split(' ').slice(0, 2).join(' ') + ". What would you like to know?",
      "Thanks for your message. I'm here to help with " + userMessage.split(' ')[0] + "."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const startNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    
    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversationId(newConversation.id);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !currentConversation) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: Date.now(),
    };
    
    // Add user message
    setConversations(prev => prev.map(conv => 
      conv.id === currentConversationId 
        ? { ...conv, messages: [...conv.messages, userMessage], updatedAt: Date.now() }
        : conv
    ));
    
    setInput('');
    setIsLoading(true);
    
    try {
      const aiResponse = await getAIResponse(userMessage.content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: 'assistant',
        timestamp: Date.now(),
      };
      
      // Add AI response
      setConversations(prev => prev.map(conv => 
        conv.id === currentConversationId 
          ? { ...conv, messages: [...conv.messages, assistantMessage], updatedAt: Date.now() }
          : conv
      ));
    } catch (error) {
      console.error('Failed to get AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startDrag = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', stopDrag);
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStartPos.current.x;
    const newY = e.clientY - dragStartPos.current.y;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - 400;
    const maxY = window.innerHeight - 100;
    
    setPosition({
      x: Math.max(20, Math.min(newX, maxX)),
      y: Math.max(20, Math.min(newY, maxY)),
    });
  };

  const stopDrag = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', stopDrag);
  };

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen && !currentConversationId && conversations.length === 0) {
      startNewConversation();
    }
  };

  const selectConversation = (id: string) => {
    setCurrentConversationId(id);
    setIsMinimized(false);
  };

  const deleteConversation = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    
    setConversations(prev => {
      const newConversations = prev.filter(c => c.id !== id);
      
      // If we deleted the current conversation, select the next one or create a new one
      if (currentConversationId === id) {
        setCurrentConversationId(newConversations[0]?.id || null);
      }
      
      return newConversations;
    });
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Don't render anything if not in the browser
  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={cn(
          'fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transition-all hover:from-purple-700 hover:to-blue-700 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25',
          isOpen && 'hidden'
        )}
        aria-label="Open AI Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={cn(
            'fixed z-50 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-background/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/50 transition-all',
            isMinimized ? 'h-12 w-64' : 'h-[600px] w-full max-w-md',
            isDragging ? 'cursor-grabbing' : 'cursor-move'
          )}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseDown={startDrag}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 bg-background/80 dark:bg-gradient-to-r dark:from-gray-800/80 dark:to-gray-900/80 p-3">
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {currentConversation?.title || 'AI Assistant'}
              </h3>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors dark:hover:bg-gray-700/50 dark:hover:text-white"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
              >
                {isMinimized ? '+' : '-'}
              </button>
              <button
                onClick={toggleChat}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors dark:hover:bg-gray-700/50 dark:hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Sidebar */}
              <div className="flex h-full overflow-hidden">
                <div className="w-48 border-r border-border/50 bg-background/30 dark:bg-gray-800/30">
                  <div className="p-3">
                    <Button
                      onClick={startNewConversation}
                      size="sm"
                      className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg"
                      variant="outline"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      New Chat
                    </Button>
                  </div>
                  <div className="mt-2 overflow-y-auto">
                    {conversations.map(conv => (
                      <div
                        key={conv.id}
                        onClick={() => selectConversation(conv.id)}
                        className={cn(
                          'group relative flex cursor-pointer items-center justify-between px-3 py-2.5 text-sm hover:bg-foreground/10 transition-colors rounded-lg mx-2',
                          currentConversationId === conv.id 
                            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-foreground border border-border/40' 
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        <span className="truncate">
                          {conv.title || 'New Chat'}
                        </span>
                        <button
                          onClick={e => deleteConversation(e, conv.id)}
                          className="invisible ml-2 rounded p-1 text-muted-foreground hover:bg-foreground/10 hover:text-foreground group-hover:visible transition-all dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex flex-1 flex-col bg-background/50 dark:bg-gray-900/50">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4">
                    {currentConversation?.messages.length ? (
                      <div className="space-y-4">
                        {currentConversation.messages.map(message => (
                          <div
                            key={message.id}
                            className={cn(
                              'flex',
                              message.role === 'user' ? 'justify-end' : 'justify-start'
                            )}
                          >
                            <div
                              className={cn(
                                'max-w-[80%] rounded-2xl px-4 py-3 shadow-lg',
                                message.role === 'user'
                                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                  : 'bg-muted text-foreground border border-border/50 dark:bg-gray-800/80 dark:text-gray-100 dark:border-gray-700/50'
                              )}
                            >
                              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                                {message.content}
                              </div>
                              <div
                                className={cn(
                                  'mt-2 text-xs opacity-70',
                                  message.role === 'user' ? 'text-purple-100' : 'text-muted-foreground'
                                )}
                              >
                                {formatTime(message.timestamp)}
                              </div>
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-2xl border border-border/50 dark:bg-gray-800/50 dark:border-gray-700/50">
                            <div className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.3s]" />
                            <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                            <div className="h-2 w-2 animate-bounce rounded-full bg-purple-500" />
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                        <div className="mb-4 p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-border/40">
                          <Bot className="h-12 w-12 text-purple-400" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">How can I help you today?</h3>
                        <p className="text-sm text-muted-foreground">Ask me anything about your application or data.</p>
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-border/50 p-4 bg-background/30 dark:bg-gray-800/30">
                    <div className="relative">
                      <Textarea
                        ref={inputRef}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="min-h-[60px] max-h-32 resize-none pr-12 bg-background/80 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-purple-500/50 focus:ring-purple-500/20 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-400 dark:border-gray-600/50"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!input.trim() || isLoading}
                        size="icon"
                        className="absolute bottom-2 right-2 h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      AI Assistant may produce inaccurate information.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
