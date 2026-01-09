import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am your CU Information Pal. Ask me anything about campus life!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        if (!process.env.API_KEY) {
             setMessages(prev => [...prev, { role: 'model', text: 'Error: API Key missing. Please configure the environment.' }]);
             setIsLoading(false);
             return;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const systemInstruction = `You are a helpful student assistant bot for Covenant University called 'CU Dispatch Bot'. 
        You are friendly, concise, and use student-friendly language (sometimes slightly informal but respectful).
        You know about: Lecture timetables, Exam schedules, Chapel service times, Cafeteria locations, and Library resources.
        If asked about something specific like "Where is the library", give a plausible specific answer relevant to a university campus.`;

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: input,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        
        const text = response.text || "I'm having a little trouble thinking right now. Try again?";
        setMessages(prev => [...prev, { role: 'model', text: text }]);

    } catch (error) {
        console.error("Chat error", error);
        setMessages(prev => [...prev, { role: 'model', text: "Oops! I lost my connection. Please try asking again." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rotate-90 scale-0' : 'scale-100'} absolute bottom-0 right-0 bg-black text-white p-4 rounded-none shadow-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 z-10`}
      >
        <MessageSquare size={26} />
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-0 right-0 transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}>
          <div className="w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-none shadow-2xl overflow-hidden border border-gray-200 flex flex-col font-sans">
            
            {/* Header */}
            <div className="bg-gray-900 p-5 flex items-center justify-between shadow-md z-10">
              <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-none flex items-center justify-center border border-white/10">
                      <Bot size={20} className="text-white" />
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-base tracking-tight">CU Pal</h3>
                      <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                          <span className="text-gray-300 text-xs font-medium">Always active</span>
                      </div>
                  </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-none">
                  <Minimize2 size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                      className={`max-w-[85%] px-5 py-3 rounded-none text-[15px] leading-relaxed shadow-sm ${
                          msg.role === 'user' 
                          ? 'bg-black text-white' 
                          : 'bg-white border border-gray-100 text-gray-700'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                  <div className="flex justify-start">
                      <div className="bg-white border border-gray-100 px-5 py-3 rounded-none shadow-sm flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                          <span className="text-gray-400 text-sm">Thinking...</span>
                      </div>
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-none px-2 py-2 border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all duration-200">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about timetables, exams..."
                  className="flex-1 bg-transparent focus:outline-none text-gray-700 px-3 py-2 font-medium"
                />
                <button 
                  onClick={handleSend} 
                  disabled={isLoading || !input.trim()} 
                  className={`p-3 rounded-none transition-all ${input.trim() ? 'bg-black text-white shadow-md hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-center mt-2">
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">AI Powered Assistant</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ChatWidget;