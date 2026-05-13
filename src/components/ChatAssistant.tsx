import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Sparkles, Cpu, Lightbulb } from 'lucide-react';
import { MockDataset } from '../data/mockDatasets';

interface ChatAssistantProps {
  dataset: MockDataset | null;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  modelUsed?: string;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ dataset }) => {
  const [selectedModel, setSelectedModel] = useState<string>('meta-llama/llama-3-70b-instruct');
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const availableModels = [
    { id: 'meta-llama/llama-3-70b-instruct', name: 'Llama 3 (70B Instruct)', tag: 'Free Backend' },
    { id: 'mistralai/mistral-7b-instruct', name: 'Mistral 7B Core', tag: 'Fast Weights' },
    { id: 'google/gemma-7b-it', name: 'Gemma 7B IT', tag: 'Google Open' },
    { id: 'deepseek/deepseek-coder', name: 'DeepSeek Analytics Agent', tag: 'Specialized' },
    { id: 'microsoft/phi-3-mini', name: 'Phi-3 Lightweight Optimized', tag: 'Edge Fast' }
  ];

  const suggestedPrompts = [
    "Explain this dataset like I am an executive stakeholder",
    "What are the highest positive features correlating to revenue?",
    "Detect missing patterns and outline feature imputation mechanics",
    "Recommend optimized machine learning models for forecasting this structure"
  ];

  // Default introductory state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome_1',
      sender: 'ai',
      text: dataset 
        ? `Hello! I have automatically scanned the schema profile for "${dataset.originalName}". I detect ${dataset.cols} variables with an overall dense array index count of ${dataset.rows.toLocaleString()}. How can I accelerate your diagnostic roadmap today?`
        : "Greetings! I am the AI Data Analyst Pro assistant powered by LangChain abstraction layers. Please load a dataset via the Processing Hub on the left so I can assemble feature summaries.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'System Orchestrator'
    }
  ]);

  // Update initial message when dataset context changes
  useEffect(() => {
    if (dataset) {
      setMessages(prev => [
        ...prev,
        {
          id: `context_switch_${Date.now()}`,
          sender: 'ai',
          text: `Context switched to dataset array: "${dataset.originalName}". I have updated my parameter caches.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          modelUsed: selectedModel.split('/')[1] || 'Llama-3'
        }
      ]);
    }
  }, [dataset]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (overrideText?: string) => {
    const textToSend = overrideText || inputQuery;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!overrideText) setInputQuery('');
    setIsTyping(true);

    // Simulate backend LangChain / OpenRouter LLM stream processing
    setTimeout(() => {
      let aiReply = "";
      const lower = textToSend.toLowerCase();

      if (lower.includes('executive') || lower.includes('explain')) {
        aiReply = `**Executive Summary for ${dataset?.originalName || 'uploaded data'}:**\nThis data layer exhibits stable standard deviation thresholds. The primary predictive weights reside in feature covariance pairs. I suggest immediate evaluation using gradient boosted decision trees to optimize secondary target columns without overfitting constraints.`;
      } else if (lower.includes('correlat') || lower.includes('revenue')) {
        aiReply = `Based on the active correlation indices, I detect a Pearson coefficient of **+0.94** between major numerical metrics, signaling multi-collinearity. Consider applying Principal Component Analysis (PCA) or dropping redundant variables before training logistic classifiers.`;
      } else if (lower.includes('miss') || lower.includes('imput')) {
        aiReply = `I flagged **sparse value occurrences** on categorical headers. Using standard interpolation or k-Nearest Neighbors (kNN) imputation will yield lower prediction entropy compared to dropping records entirely.`;
      } else if (lower.includes('model') || lower.includes('forecast')) {
        aiReply = `For time series predictive tracking, **Prophet** provides superior handling of seasonal fluctuations. If modeling multi-class targets, the system defaults to **LightGBM** due to histogram-based execution speeds on arrays larger than 10,000 indices.`;
      } else {
        aiReply = `Received natural language query query string: "${textToSend}". Executing zero-shot similarity sweep on available schema weights... Inference complete. The variance structure shows uniform characteristics suitable for continuous visualization tracking.`;
      }

      const aiMsg: Message = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: availableModels.find(m => m.id === selectedModel)?.name || 'Llama 3 Engine'
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      
      {/* Title block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>OpenRouter &amp; Hugging Face Controller</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Conversational LLM Insights Agent</h1>
          <p className="text-xs text-slate-400">
            Ask questions in natural language. Powered by free parameters configurable via API interfaces.
          </p>
        </div>

        {/* Model dropdown selection */}
        <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800">
          <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
          <div className="text-left">
            <label className="block text-[9px] text-slate-500 uppercase font-mono">Active Inference Backend</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-transparent text-xs text-cyan-300 font-mono font-bold focus:outline-none cursor-pointer"
            >
              {availableModels.map(m => (
                <option key={m.id} value={m.id} className="bg-slate-900 text-slate-200">
                  {m.name} ({m.tag})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
        
        {/* Left Suggested Panel */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-between glass-panel p-4 rounded-xl border border-slate-700/60 overflow-hidden">
          
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-3 pb-2 border-b border-slate-800 uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Diagnostic Prompt Templates</span>
            </div>
            
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Click any verified system inquiry to instantly dispatch query streams against currently loaded metadata buffers.
            </p>

            <div className="space-y-2">
              {suggestedPrompts.map((pText, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(pText)}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-300 transition-all block font-mono line-clamp-2"
                >
                  <span className="text-purple-400 font-bold mr-1.5">→</span>
                  {pText}
                </button>
              ))}
            </div>
          </div>

          {/* Active cache context indicator */}
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-xs space-y-1 font-mono">
            <span className="text-[10px] text-slate-500 block">Context Injector State:</span>
            {dataset ? (
              <div>
                <p className="text-cyan-400 truncate text-[11px] font-bold">{dataset.originalName}</p>
                <p className="text-[10px] text-slate-400">{dataset.cols} Cols mapped to LangChain buffer</p>
              </div>
            ) : (
              <p className="text-amber-500 text-[10px]">No schema mapped. Operating in open conversational mode.</p>
            )}
          </div>

        </div>

        {/* Right Active Chatroom Column */}
        <div className="lg:col-span-8 flex flex-col justify-between glass-panel rounded-xl border border-slate-700/60 overflow-hidden">
          
          {/* Messages window */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <div 
                  key={msg.id}
                  className={`flex gap-3 max-w-2xl ${isAi ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-bold text-xs ${
                    isAi ? 'bg-gradient-to-tr from-cyan-600 to-purple-600 text-white' : 'bg-slate-800 text-cyan-400 border border-slate-700'
                  }`}>
                    {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Bubble */}
                  <div className={`space-y-1 ${isAi ? 'text-left' : 'text-right'}`}>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono justify-start">
                      <span className="font-bold text-slate-400">{isAi ? msg.modelUsed : 'Client Engineer'}</span>
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className={`p-3 rounded-xl text-xs leading-relaxed inline-block ${
                      isAi 
                        ? 'bg-slate-900 border border-slate-800 text-slate-200' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium'
                    }`}>
                      {/* Very basic line splitting formatting */}
                      {msg.text.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className={line.startsWith('**') ? 'font-bold text-cyan-300 my-1' : ''}>
                          {line.replace(/\*\*/g, '')}
                        </p>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}

            {/* Typing animation indicator */}
            {isTyping && (
              <div className="flex gap-3 max-w-md mr-auto">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  <span className="text-[10px] text-slate-500 font-mono ml-1">Streaming transformer blocks...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder={dataset ? `Ask Llama 3 about ${dataset.originalName}...` : "Type diagnostic request string..."}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-4 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isTyping || !inputQuery.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 disabled:opacity-40 transition-opacity shrink-0"
                title="Dispatch inference block"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between pt-2 px-1 text-[10px] text-slate-500 font-mono">
              <span>Endpoints: OpenRouter API / Hugging Face REST</span>
              <button 
                type="button" 
                onClick={() => setMessages(prev => [prev[0]])} 
                className="hover:text-slate-300 underline"
              >
                Reset Chat Cache
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
