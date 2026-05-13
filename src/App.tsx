import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { UploadView } from './components/UploadView';
import { EDAView } from './components/EDAView';
import { ChatAssistant } from './components/ChatAssistant';
import { AutoMLView } from './components/AutoMLView';
import { ForecastView } from './components/ForecastView';
import { ReportGenerator } from './components/ReportGenerator';
import { CodeTreeViewer } from './components/CodeTreeViewer';
import { AuthModal } from './components/AuthModal';
import { SAMPLE_DATASETS, MockDataset } from './data/mockDatasets';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('landing');
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  
  // Loaded Dataset state
  const [activeDataset, setActiveDataset] = useState<MockDataset | null>(SAMPLE_DATASETS[0]);
  
  // Authenticated user state
  const [user, setUser] = useState<{ username: string; role: string; company?: string } | null>({
    username: 'Enterprise Architect',
    role: 'Principal Data Scientist',
    company: 'Acme AI Corp'
  });

  const handleDatasetLoaded = (dataset: MockDataset) => {
    setActiveDataset(dataset);
    // Switch smoothly to EDA view to allow immediate analysis
    setCurrentTab('eda');
  };

  const handleLoadMockDatasetById = (dsId: string) => {
    const found = SAMPLE_DATASETS.find(d => d.id === dsId);
    if (found) {
      setActiveDataset(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      
      {/* Background Ambience particles/lights */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-slate-900/40 via-transparent to-transparent pointer-events-none z-0"></div>
      
      {/* Dynamic Navbar */}
      <Navbar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        user={user}
        onLogout={() => setUser(null)}
        onShowAuth={() => setShowAuthModal(true)}
        activeDatasetName={activeDataset?.originalName || null}
      />

      {/* Global Status Toast Indicator */}
      <div className="bg-slate-950 border-b border-slate-900 py-1.5 px-4 text-center z-40 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Flask Server Node: <strong className="text-slate-300">gunicorn v22.0</strong></span>
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            <Terminal className="w-3 h-3 text-purple-400" />
            <span>DB Cache Engine: <strong className="text-purple-300">SQLAlchemy ORM v3.1</strong></span>
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-cyan-400">
            Active Dataset Array: <strong>{activeDataset ? activeDataset.originalName : 'None Bound'}</strong>
          </span>
        </div>
      </div>

      {/* Primary Content Router Container */}
      <main className="flex-1 relative z-10">
        {currentTab === 'landing' && (
          <LandingPage 
            onNavigate={setCurrentTab} 
            onLoadMockDataset={handleLoadMockDatasetById}
            activeDatasetName={activeDataset?.originalName || null}
          />
        )}

        {currentTab === 'upload' && (
          <UploadView 
            onDatasetLoaded={handleDatasetLoaded}
            activeDataset={activeDataset}
          />
        )}

        {currentTab === 'eda' && (
          <EDAView 
            dataset={activeDataset}
          />
        )}

        {currentTab === 'automl' && (
          <AutoMLView 
            dataset={activeDataset}
          />
        )}

        {currentTab === 'forecast' && (
          <ForecastView 
            dataset={activeDataset}
          />
        )}

        {currentTab === 'chat' && (
          <ChatAssistant 
            dataset={activeDataset}
          />
        )}

        {currentTab === 'reports' && (
          <ReportGenerator 
            dataset={activeDataset}
            user={user}
          />
        )}

        {currentTab === 'code' && (
          <CodeTreeViewer />
        )}
      </main>

      {/* Global Client Authentication Layer */}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={(userData) => setUser(userData)}
        />
      )}

      {/* Corporate Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 px-4 text-xs text-slate-500 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-cyan-400 font-bold border border-slate-800">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-300 tracking-tight">AI Data Analyst Pro Platform</span>
            <span className="text-[10px] text-slate-600 font-mono">v1.2.0-Prod</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono">
            <span>Flask REST APIs</span>
            <span>•</span>
            <span>OpenRouter Streams</span>
            <span>•</span>
            <span>Pandas/NumPy Buffers</span>
            <span>•</span>
            <span>Plotly Vectors</span>
          </div>

          <div>
            <p className="text-[10px] text-slate-600 text-center sm:text-right">
              Designed for Enterprise Data Engineering &amp; Autonomous Machine Learning Operations.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
