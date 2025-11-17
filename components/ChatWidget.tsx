
'use client';

import { useState } from 'react';
import { Button } from './ui/button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: 'user',
      content: input
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Here you would typically make an API call to your chat service
    // For now, we'll just add a placeholder response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: 'Thank you for your message. Our AI assistant will respond shortly.'
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700"
      >
        💬
      </Button>
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold">AI Assistant</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-purple-600 text-white ml-auto max-w-[70%]'
                    : 'bg-gray-800 text-gray-200 mr-auto max-w-[70%]'
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
