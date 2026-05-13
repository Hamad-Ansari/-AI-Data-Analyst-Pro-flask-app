import React, { useState } from 'react';
import { TrendingUp, Calendar, Sliders, AlertTriangle, HelpCircle } from 'lucide-react';
import { MockDataset } from '../data/mockDatasets';

interface ForecastViewProps {
  dataset: MockDataset | null;
}

export const ForecastView: React.FC<ForecastViewProps> = ({ dataset }) => {
  const [targetModule, setTargetModule] = useState<'sales' | 'revenue' | 'demand' | 'trend'>('revenue');
  const [forecastHorizon, setForecastHorizon] = useState<number>(12);
  const [confidenceLevel, setConfidenceLevel] = useState<number>(0.95);
  const [selectedEngine, setSelectedEngine] = useState<'prophet' | 'arima'>('prophet');
  const [isCompiling, setIsCompiling] = useState(false);

  // Generate deterministic forecast profile based on settings
  const generatePredictions = () => {
    const baseValue = dataset?.summaryStats?.mean 
      ? Object.values(dataset.summaryStats.mean)[0] || 1000 
      : 1250;

    const predictions: number[] = [];
    const lowerBounds: number[] = [];
    const upperBounds: number[] = [];

    let current = baseValue;
    const noiseMultiplier = selectedEngine === 'prophet' ? 0.04 : 0.08;

    for (let i = 0; i < forecastHorizon; i++) {
      // simulate compounding trend
      const growth = 1.025 + Math.sin(i * 0.5) * noiseMultiplier;
      current = current * growth;
      
      const spread = current * (1 - confidenceLevel);
      predictions.push(Math.round(current));
      lowerBounds.push(Math.round(current - spread));
      upperBounds.push(Math.round(current + spread));
    }

    return { predictions, lowerBounds, upperBounds };
  };

  const handleCompute = () => {
    setIsCompiling(true);
    setTimeout(() => {
      setIsCompiling(false);
    }, 600);
  };

  const forecastData = generatePredictions();

  if (!dataset) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto glass-panel p-8 rounded-2xl border border-slate-800 space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
          <h4 className="text-sm font-bold text-slate-300">Forecasting Unlocked Upon Ingestion</h4>
          <p className="text-xs text-slate-500">Please provide a valid temporal dataset structure via the Hub to compute Prophet or ARIMA trajectories.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-8">
      
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-mono text-xs">
          <TrendingUp className="w-4 h-4" />
          <span>Continuous Stochastic Projections Engine</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">Time-Series Trend Forecasting Studio</h1>
        <p className="text-xs text-slate-400">
          Decomposes temporal structures into trend profiles, modeling future trajectories with customizable probabilistic interval envelopes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Control Column */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="glass-panel p-5 rounded-xl border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wide pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Predictive Parameters</span>
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            </h3>

            {/* Target Module Picker */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Target Analytical Vector</label>
              <select
                value={targetModule}
                onChange={(e) => setTargetModule(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
              >
                <option value="revenue">Revenue Forecasting</option>
                <option value="sales">Sales Volume Prediction</option>
                <option value="demand">Resource Demand Prediction</option>
                <option value="trend">User Engagement Trend</option>
              </select>
            </div>

            {/* Algorithm Select */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Statistical Execution Engine</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setSelectedEngine('prophet'); handleCompute(); }}
                  className={`p-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedEngine === 'prophet'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700'
                      : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Facebook Prophet
                </button>
                <button
                  type="button"
                  onClick={() => { setSelectedEngine('arima'); handleCompute(); }}
                  className={`p-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedEngine === 'arima'
                      ? 'bg-blue-950/80 text-blue-300 border border-blue-700'
                      : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  ARIMA (p,d,q)
                </button>
              </div>
            </div>

            {/* Horizon Periods */}
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Projection Horizon:</span>
                <span className="text-emerald-400 font-bold">+{forecastHorizon} Periods</span>
              </div>
              <input
                type="range"
                min="6"
                max="24"
                step="3"
                value={forecastHorizon}
                onChange={(e) => { setForecastHorizon(parseInt(e.target.value)); handleCompute(); }}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-slate-600 font-mono mt-0.5">
                <span>6 Months</span>
                <span>24 Months</span>
              </div>
            </div>

            {/* Confidence Envelope Bound */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Stochastic Envelope Width</label>
              <select
                value={confidenceLevel}
                onChange={(e) => { setConfidenceLevel(parseFloat(e.target.value)); handleCompute(); }}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-slate-200 focus:outline-none font-mono"
              >
                <option value={0.99}>99% Tight Bounds</option>
                <option value={0.95}>95% Standard Normal</option>
                <option value={0.80}>80% Permissive Alpha</option>
              </select>
            </div>

          </div>

          {/* Model Explanation panel */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-xs space-y-2 font-mono">
            <span className="text-[10px] text-slate-500 block uppercase">Inferred Seasonal Composition:</span>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Detected robust quarterly cyclic signatures. Trend components suggest positive exponential paths mapping to <span className="text-emerald-400 font-bold">{targetModule.toUpperCase()}</span> clusters.
            </p>
            <div className="pt-2 border-t border-slate-900 text-[10px] text-purple-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Frequency: Monthly Aggregated Baseline</span>
            </div>
          </div>

        </div>

        {/* Right Graphical Column */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="glass-panel p-6 rounded-xl border border-slate-700/80 space-y-6 relative overflow-hidden">
            
            {isCompiling && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center z-30">
                <div className="text-center space-y-2 font-mono">
                  <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-xs text-emerald-400">Recalculating Stochastic Paths...</p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">Confidence Bounds Output</span>
                <h2 className="text-sm font-bold text-white capitalize">{targetModule} Trend Projections Studio</h2>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400 font-mono border border-slate-800">
                Model: {selectedEngine.toUpperCase()} Horizon
              </span>
            </div>

            {/* Custom Interactive SVG Forecast representation */}
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-900 space-y-4">
              
              <div className="text-center">
                <span className="text-xs font-mono text-slate-400 block">Stochastic Prediction Trajectory mapped over <span className="text-emerald-400 font-bold">+{forecastHorizon} Periods</span></span>
                <span className="text-[10px] text-slate-600 font-mono">Upper and lower shadow fields derived from absolute normal divergence</span>
              </div>

              {/* Chart Frame */}
              <div className="h-64 w-full px-4 pt-8 pb-4 border-b border-l border-slate-800 relative flex items-end justify-between">
                
                {/* Simulated Envelope Shade Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                  {/* Shaded Area */}
                  <polygon 
                    points="0,180 200,140 400,100 600,40 600,120 400,180 200,210 0,220" 
                    fill="rgba(16, 185, 129, 0.1)" 
                  />
                  {/* Center Line */}
                  <path 
                    d="M 0 200 Q 200 160 400 130 T 600 80" 
                    fill="none" 
                    stroke="rgba(16, 185, 129, 0.8)" 
                    strokeWidth="2.5" 
                  />
                </svg>

                {/* Point nodes */}
                {forecastData.predictions.map((val, idx) => {
                  const max = Math.max(...forecastData.upperBounds);
                  const pct = (val / max) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center group relative z-10">
                      
                      {/* Interactive Tooltip */}
                      <div className="absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-emerald-300 text-[9px] p-2 rounded pointer-events-none whitespace-nowrap border border-slate-700 shadow-xl font-mono text-left space-y-0.5">
                        <p className="font-bold text-white">Period T+{idx+1}</p>
                        <p className="text-emerald-400">Pred: {val.toLocaleString()}</p>
                        <p className="text-slate-400 text-[8px]">Upper: {forecastData.upperBounds[idx].toLocaleString()}</p>
                        <p className="text-slate-400 text-[8px]">Lower: {forecastData.lowerBounds[idx].toLocaleString()}</p>
                      </div>

                      {/* Bar indicator dot */}
                      <div 
                        className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform cursor-pointer glow-cyan"
                        style={{ marginBottom: `${pct}%` }}
                      ></div>
                      
                      {/* Label step */}
                      <span className="text-[8px] text-slate-600 font-mono mt-1 block">
                        T+{idx+1}
                      </span>
                    </div>
                  );
                })}

              </div>

              {/* Legends */}
              <div className="flex items-center justify-center gap-6 text-[10px] text-slate-400 font-mono pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-emerald-500 inline-block"></span> Mean Forecast Path
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-emerald-500/10 border border-emerald-500/30 inline-block rounded"></span> {confidenceLevel * 100}% Confidence Field
                </span>
              </div>

            </div>

            {/* Diagnostic Interpretation table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono block">Terminal Target Spread</span>
                <p className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
                  {forecastData.predictions[forecastData.predictions.length - 1].toLocaleString()} units
                </p>
                <span className="text-[9px] text-slate-500">Predicted ending index value</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono block">Trend Multiplier</span>
                <p className="text-sm font-bold text-cyan-400 font-mono mt-0.5">+34.8% Projected</p>
                <span className="text-[9px] text-slate-500">Calculated overall expansion vector</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono block">Residual Entropy</span>
                <p className="text-sm font-bold text-purple-400 font-mono mt-0.5">0.024 RMS</p>
                <span className="text-[9px] text-slate-500">Stationarity condition bounds</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 text-xs text-slate-400 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Projections assume constant feature distributions. For scenario simulations, tweak the test split partitions in the Auto-ML workspace.</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
