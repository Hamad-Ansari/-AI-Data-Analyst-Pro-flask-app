import React from 'react';
import { Database, Sparkles, User, LogOut } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  user: { username: string; role: string } | null;
  onLogout: () => void;
  onShowAuth: () => void;
  activeDatasetName: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  user,
  onLogout,
  onShowAuth,
  activeDatasetName
}) => {
  const navItems = [
    { id: 'landing', label: 'Home Workspace' },
    { id: 'upload', label: 'Data Processing Hub' },
    { id: 'eda', label: 'EDA Studio' },
    { id: 'automl', label: 'Auto-ML Engine' },
    { id: 'forecast', label: 'Trend Forecasting' },
    { id: 'chat', label: 'AI Insights Agent' },
    { id: 'reports', label: 'Stakeholder Reports' },
    { id: 'code', label: 'Flask Repo & Arch' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <div 
            onClick={() => setCurrentTab('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-all duration-300 glow-cyan">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                AI Data Analyst <span className="text-cyan-400">Pro</span>
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Production Environment</span>
              </div>
            </div>
          </div>

          {/* Core Navigation items for larger screens */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-slate-800/90 text-cyan-400 shadow-sm border border-slate-700/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {item.id === 'upload' && activeDatasetName && (
                    <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User state and CTA */}
          <div className="flex items-center gap-3">
            {activeDatasetName && (
              <div 
                onClick={() => setCurrentTab('upload')}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-300 max-w-[140px] truncate cursor-pointer hover:bg-cyan-900/40"
                title="Active dataset loaded"
              >
                <Database className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="truncate">{activeDatasetName}</span>
              </div>
            )}

            {user ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-medium text-slate-200 leading-none">{user.username}</p>
                  <span className="text-[10px] text-purple-400 font-mono">{user.role}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <button 
                  onClick={onLogout}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800/60 transition-colors"
                  title="Logout session"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onShowAuth}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium text-xs tracking-wide transition-all duration-200 shadow-md shadow-cyan-950/50"
              >
                <User className="w-3.5 h-3.5" />
                <span>Client Auth Portal</span>
              </button>
            )}
          </div>

        </div>

        {/* Mobile Horizontal scrolling Sub-Navigation */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 border-t border-slate-800/50 gap-1.5 no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${
                currentTab === item.id 
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-cyan-400 border border-slate-700'
                  : 'text-slate-400 bg-slate-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
};
