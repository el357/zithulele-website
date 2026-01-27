
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const SystemsAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const responseEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    responseEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (response) scrollToBottom();
  }, [response]);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are the Zithulele Development Advisor. A partner or community member is asking about community-centred development.
        Context: Zithulele Development Collective (ZDC) is a non-profit established in 2026 in South Africa.
        Focus: Education (ECD), Youth/Women empowerment, Community wellbeing, and Environmental stewardship.
        The person asks: "${query}"
        
        Provide a concise, professional, and empathetic perspective (2-3 paragraphs max). Focus on community-led design, ethical engagement, and locally grounded solutions.`,
        config: {
          temperature: 0.7,
        },
      });

      setResponse(result.text || "Our team is currently reviewing program data. Please try again.");
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setResponse("An error occurred during communication. Please contact admin@iksdigitalcommons.com directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white border border-neutral-200 shadow-2xl w-[350px] md:w-[450px] flex flex-col animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest">Development Advisory</span>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">&times;</button>
          </div>
          
          <div className="p-6 h-[400px] overflow-y-auto bg-neutral-50 scrollbar-hide">
            {!response && !isLoading ? (
              <div className="text-neutral-400 text-sm italic leading-relaxed">
                "Ask a question about our community-led development model or program areas for a locally-grounded perspective."
              </div>
            ) : null}

            {isLoading && (
              <div className="flex flex-col space-y-2 animate-pulse">
                <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                <div className="h-4 bg-neutral-200 rounded w-full"></div>
                <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
              </div>
            )}

            {response && (
              <div className="text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap">
                <div className="font-bold mb-4 uppercase text-[10px] tracking-widest text-neutral-400">Advisor Feedback:</div>
                {response}
              </div>
            )}
            <div ref={responseEndRef} />
          </div>

          <form onSubmit={handleConsult} className="p-4 border-t border-neutral-200 bg-white">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about community development..."
              className="w-full text-sm border-none focus:ring-0 px-0 mb-2 bg-transparent"
              autoFocus
            />
            <button 
              disabled={isLoading || !query.trim()}
              className="text-[10px] font-bold uppercase tracking-widest border-b-2 border-black hover:pb-1 transition-all disabled:opacity-30"
            >
              Consult Advisor
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all group"
        >
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SystemsAssistant;
