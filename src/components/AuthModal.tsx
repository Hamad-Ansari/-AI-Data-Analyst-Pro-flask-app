import React, { useState } from 'react';
import { Lock, User, Mail, Building, KeyRound, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onLoginSuccess: (userData: { username: string; role: string; company?: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLoginSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('enterprise_admin');
  const [email, setEmail] = useState('admin@aianalyst.pro');
  const [password, setPassword] = useState('••••••••••••');
  const [company, setCompany] = useState('Acme SaaS Analytics');
  const [role, setRole] = useState('Principal Data Scientist');
  
  const [statusMsg, setStatusMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    // Simulate Secure Flask-Login / WTForms DB mapping validation
    setTimeout(() => {
      if (!username || !password) {
        setStatusMsg({ type: 'error', text: 'Input Validation Failed: Parameters cannot be sparse.' });
        setLoading(false);
        return;
      }

      setStatusMsg({ 
        type: 'success', 
        text: isRegister 
          ? 'SQLAlchemy Row committed successfully. Session generated.' 
          : 'JWT Session cookie signed via secure secret_key.' 
      });

      setTimeout(() => {
        onLoginSuccess({
          username: username.trim(),
          role: role,
          company: company
        });
        onClose();
      }, 1000);
    }, 800);
  };

  const handleAdminBypass = () => {
    onLoginSuccess({
      username: 'Dr. Jane Vance',
      role: 'Chief AI Architect',
      company: 'Global Fintech Corp'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-md rounded-2xl border border-slate-700/80 p-6 relative overflow-hidden shadow-2xl animate-float" style={{ animationDuration: '8s' }}>
        
        {/* Neon decorative stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"></div>

        {/* Header */}
        <div className="text-center pb-6">
          <div className="mx-auto w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {isRegister ? 'Register Platform User' : 'Flask Authenticated Session'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isRegister ? 'Commits to user table with automated PBKDF2 hash' : 'Login using Flask-Login securely stored tokens'}
          </p>
        </div>

        {/* Notifications */}
        {statusMsg && (
          <div className={`mb-4 p-3 rounded-lg text-xs flex items-center gap-2 ${
            statusMsg.type === 'error' 
              ? 'bg-rose-950/80 border border-rose-800 text-rose-200' 
              : 'bg-emerald-950/80 border border-emerald-800 text-emerald-200'
          }`}>
            {statusMsg.type === 'error' ? <ShieldAlert className="w-4 h-4 shrink-0" /> : <CheckCircle className="w-4 h-4 shrink-0" />}
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          
          <div>
            <label className="block text-[11px] font-mono text-slate-400 mb-1">Username Identifier</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-slate-900/90 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="e.g. data_architect"
              />
            </div>
          </div>

          {isRegister && (
            <>
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Corporate Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="user@enterprise.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Organization Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Acme BI Corp"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Assigned RBAC Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Principal Data Scientist">Principal Data Scientist</option>
                  <option value="Chief AI Engineer">Chief AI Engineer</option>
                  <option value="Executive Business Analyst">Executive Business Analyst</option>
                  <option value="Stakeholder Guest">Stakeholder Guest</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-[11px] font-mono text-slate-400 mb-1">Secure Passphrase</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-900/90 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-xs text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span>Validating WSGI Token Stream...</span>
              ) : (
                <>
                  <span>{isRegister ? 'Commit DB Transaction' : 'Authenticate Session'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

        {/* Toggle between Register/Login */}
        <div className="mt-4 pt-4 border-t border-slate-800 text-center flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-[11px] text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isRegister 
              ? 'Already registered? Login to access existing tokens' 
              : "Don't have a schema profile? Register a new instance"}
          </button>

          {/* Quick Sandbox Bypass */}
          <button
            type="button"
            onClick={handleAdminBypass}
            className="mt-2 text-[10px] text-purple-400 bg-purple-950/30 border border-purple-800/30 py-1.5 rounded hover:bg-purple-900/40 transition-colors inline-block mx-auto px-4"
          >
            ⚡ Auto-Bypass via Root Sandbox Identity
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-300 text-xs p-1"
        >
          ✕
        </button>

      </div>
    </div>
  );
};
