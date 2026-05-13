import React, { useState } from 'react';
import { 
  Sparkles, 
  UploadCloud, 
  BarChart3, 
  Cpu, 
  TrendingUp, 
  Database, 
  ShieldCheck, 
  Layers, 
  Bot, 
  FileCheck,
  ChevronRight,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (tab: string) => void;
  onLoadMockDataset: (dsId: string) => void;
  activeDatasetName: string | null;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onLoadMockDataset,
  activeDatasetName
}) => {
  const [loadedNotification, setLoadedNotification] = useState<string | null>(null);

  const handleInstantDemoLoad = (dsId: string, name: string) => {
    onLoadMockDataset(dsId);
    setLoadedNotification(`Successfully mounted "${name}" into system active cache!`);
    setTimeout(() => {
      setLoadedNotification(null);
      onNavigate('eda');
    }, 1500);
  };

  return (
    <div className="min-h-screen pb-20">
      
      {/* Background Ambience Patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        
        {loadedNotification && (
          <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-cyan-950/90 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-between shadow-xl animate-bounce">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-medium">{loadedNotification}</span>
            </div>
            <span className="text-xs text-slate-400">Redirecting to EDA Studio...</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-cyan-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen Enterprise Flask Web App Setup</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Automate Your Data Science Pipeline with <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Autonomous LLM Intelligence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Upload complex tabular rows instantly. AI Data Analyst Pro automatically triggers robust Exploratory Data Analysis, infers feature importance, constructs multi-target machine learning evaluations, and forecasts baseline confidence boundaries.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              <button
                onClick={() => onNavigate('upload')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-cyan-950/80 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <UploadCloud className="w-5 h-5" />
                <span>Upload Custom Files</span>
                <ChevronRight className="w-4 h-4 text-cyan-200" />
              </button>

              <div className="w-full sm:w-auto relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <button
                  onClick={() => handleInstantDemoLoad('ds_enterprise_sales_2026', 'SaaS_Global_Metrics_2026.csv')}
                  className="w-full sm:w-auto relative px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700/80"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Mount Demo SaaS Dataset</span>
                </button>
              </div>

            </div>

            {activeDatasetName && (
              <div className="pt-2 text-xs text-slate-400">
                Current session context loaded: <span className="text-cyan-400 font-mono font-bold">{activeDatasetName}</span>
              </div>
            )}

            {/* Micro counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-extrabold text-white">99.4%</p>
                <p className="text-xs text-slate-400 font-medium">Model Validation Acc</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan-400">&lt; 3s</p>
                <p className="text-xs text-slate-400 font-medium">Auto-Schema Infer</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-purple-400">5+ LLMs</p>
                <p className="text-xs text-slate-400 font-medium">Supported Backends</p>
              </div>
            </div>

          </div>

          {/* Right Simulated Dashboard Interactive Visual Preview */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-5 rounded-2xl shadow-2xl border border-slate-700/60 relative overflow-hidden group">
              
              {/* Fake UI chrome header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-900/80 px-2 py-0.5 rounded">
                  Live Flask WSGI Backend Node
                </span>
              </div>

              {/* Graphical Content */}
              <div className="pt-4 space-y-4">
                
                {/* Simulated Chat node notification */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Bot className="w-3.5 h-3.5" />
                    <span>Llama 3 Core Insight Stream</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    "Detected multi-collinearity on column <span className="text-cyan-300 font-mono">Platform_Engagement_Score</span>. Re-balancing weights for future predictive horizons..."
                  </p>
                </div>

                {/* Simulated Chart visual bars */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/50">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2">
                    <span>Feature Covariance Sweep</span>
                    <span className="text-emerald-400 font-mono">Status: OPTIMIZED</span>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-0.5 font-mono">
                        <span>Platform_Engagement_Score</span>
                        <span className="text-cyan-400">0.81 r</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '81%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-0.5 font-mono">
                        <span>Customer_Acquisition_Cost</span>
                        <span className="text-purple-400">0.76 r</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-0.5 font-mono">
                        <span>Support_Tickets_Raised</span>
                        <span className="text-rose-400">-0.42 r</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div className="bg-rose-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated SQL schema tree indicator */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-cyan-800/30 text-xs">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <div>
                      <p className="font-medium text-slate-200 text-[11px]">PostgreSQL Sync Active</p>
                      <p className="text-[9px] text-slate-400">app/models/user.py connected</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-bold bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                    SQLAlchemy v3.1
                  </span>
                </div>

              </div>

              {/* Decorative light flare */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => onNavigate('code')}
                className="text-xs text-slate-400 hover:text-cyan-400 underline font-mono inline-flex items-center gap-1"
              >
                <span>Inspect full Flask backend Python Codebase source view</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Workflow Guidance & Architecture Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Industry-Standard Autonomous Analytics Workflow
          </h2>
          <p className="text-sm text-slate-400">
            Engineered to bridge raw multi-format client uploads directly into interactive business solutions through modular architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          
          {[
            {
              icon: <UploadCloud className="w-6 h-6 text-cyan-400" />,
              step: "Step 01",
              title: "Raw Multi-Format Upload",
              desc: "Drag-and-drop support for high-volume CSVs, Excel tabs, custom JSON trees, SQLite dumps, and standard TXT flat files."
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
              step: "Step 02",
              title: "Autonomous EDA Execution",
              desc: "Instantly extracts shape variables, plots distribution curves, computes covariance tensors, and highlights extreme outliers."
            },
            {
              icon: <Cpu className="w-6 h-6 text-purple-400" />,
              step: "Step 03",
              title: "Zero-Shot Auto-ML sweep",
              desc: "Detects regression versus target label categorization automatically. Simulates Hyperparameter configurations across LightGBM & XGBoost."
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
              step: "Step 04",
              title: "Prophet Future Forecast",
              desc: "Extends sequential indices over configurable calendar horizons alongside strict statistical upper and lower uncertainty buffers."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-xl hover:border-slate-600 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">{item.step}</span>
                </div>
                <h3 className="text-base font-bold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>System Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Technical Highlights Accordion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Full Stack Flask &amp; React Ecosystem</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Emulating real cloud execution pipelines. Review fully structured Python routing modules, preconfigured SQLAlchemy entities, locked container definitions, and active documentation directly in your workspace.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Supported AI Model Matrix</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seamless abstraction layer optimized for OpenRouter, Hugging Face endpoints, and local transformer binaries. Toggle response architectures interactively to audit raw statistical descriptions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">Automated Stakeholder PDFs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transforms exploratory deep-dives into elegant, board-ready executive reviews and granular spreadsheet archives. Exportable locally for high-impact strategy distribution.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Live Business Case studies Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="border-t border-slate-800/80 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest">Enterprise Ready Solution</h4>
            <p className="text-xs text-slate-500 mt-1">Built using production standards for Flask WSGI backends, PostgreSQL mapping, and React state mechanics.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('upload')}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors border border-slate-700"
            >
              Start Pipeline Engine
            </button>
            <button
              onClick={() => onNavigate('code')}
              className="px-4 py-2 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/50 text-xs text-cyan-300 transition-colors border border-cyan-800/50"
            >
              Browse Complete Repo Source
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
