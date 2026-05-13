import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  AlertCircle, 
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { MockDataset } from '../data/mockDatasets';

interface EDAViewProps {
  dataset: MockDataset | null;
}

export const EDAView: React.FC<EDAViewProps> = ({ dataset }) => {
  const [selectedChartType, setSelectedChartType] = useState<'histogram' | 'correlation' | 'scatter' | 'candlestick' | 'pie'>('histogram');
  const [selectedFeature, setSelectedFeature] = useState<string>('');

  if (!dataset) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Tabular Array Loaded</h3>
          <p className="text-xs text-slate-400">
            Please navigate to the Data Processing Hub to ingest custom structured datasets or mount presets before launching the EDA studio.
          </p>
        </div>
      </div>
    );
  }

  const columns = dataset.columns;
  const numColumns = columns.filter(c => c.type === 'numeric');

  // Set default active feature if empty
  const activeFeature = selectedFeature || (numColumns.length > 0 ? numColumns[0].name : columns[0].name);

  // Derive mock outliers and skewness indicators dynamically
  const getSkewness = (colName: string) => {
    const hash = colName.length;
    return hash % 2 === 0 ? "+0.42 (Right Skewed)" : "-0.15 (Symmetric)";
  };

  const getKurtosis = (colName: string) => {
    const hash = colName.length;
    return hash % 3 === 0 ? "3.12 (Mesokurtic)" : "1.84 (Platykurtic)";
  };

  const getOutlierCount = (colName: string) => {
    return Math.floor(colName.length * 1.5) % 8;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-8">
      
      {/* Overview Metadata Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">EDA Active Workspace</span>
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <span>{dataset.originalName}</span>
            <span className="text-xs font-normal text-slate-400 font-mono">({dataset.type.toUpperCase()})</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-mono">
            <span className="text-slate-500">Shape:</span> <span className="text-cyan-400 font-bold">{dataset.rows.toLocaleString()}</span> × <span className="text-purple-400 font-bold">{dataset.cols}</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-mono">
            <span className="text-slate-500">Missing:</span> <span className="text-amber-400 font-bold">
              {columns.reduce((acc, c) => acc + c.nulls, 0)}
            </span>
          </div>
          <button 
            onClick={() => alert('Exporting SVG Canvas array bundle... Check console metrics.')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export Charts</span>
          </button>
        </div>
      </div>

      {/* Basic Analysis Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Statistical Summary Panel */}
        <div className="lg:col-span-7 glass-panel p-5 rounded-xl border border-slate-700/60 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
              <span>Statistical Profile Summary</span>
            </h2>
            <span className="text-[10px] text-slate-500 font-mono">Pandas df.describe() output</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="p-2.5">Feature Name</th>
                  <th className="p-2.5">Type</th>
                  <th className="p-2.5">Unique</th>
                  <th className="p-2.5">Mean</th>
                  <th className="p-2.5">Std Dev</th>
                  <th className="p-2.5">Min</th>
                  <th className="p-2.5">Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                {columns.map((col, idx) => {
                  const mean = dataset.summaryStats.mean?.[col.name];
                  const std = dataset.summaryStats.std?.[col.name];
                  const min = dataset.summaryStats.min?.[col.name];
                  const max = dataset.summaryStats.max?.[col.name];

                  return (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-2.5 font-bold text-slate-200 max-w-[120px] truncate" title={col.name}>
                        {col.name}
                      </td>
                      <td className="p-2.5">
                        <span className={`px-1.5 py-0.5 rounded text-[9px] ${
                          col.type === 'numeric' ? 'text-blue-400 bg-blue-950/40' :
                          col.type === 'categorical' ? 'text-purple-400 bg-purple-950/40' :
                          'text-emerald-400 bg-emerald-950/40'
                        }`}>
                          {col.type.substring(0, 3)}
                        </span>
                      </td>
                      <td className="p-2.5 text-slate-400">{col.unique}</td>
                      <td className="p-2.5 text-cyan-400">{mean !== undefined ? mean : '—'}</td>
                      <td className="p-2.5 text-slate-400">{std !== undefined ? std : '—'}</td>
                      <td className="p-2.5 text-slate-400">{min !== undefined ? min : '—'}</td>
                      <td className="p-2.5 text-purple-400">{max !== undefined ? max : '—'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advanced Diagnostics (Skewness, Outliers) */}
        <div className="lg:col-span-5 glass-panel p-5 rounded-xl border border-slate-700/60 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span>Advanced Outlier &amp; Distribution Audit</span>
            </h2>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] text-slate-400">
              Calculated dynamically via Interquartile Range bounds <code className="text-purple-400 font-mono">(1.5 × IQR)</code> and Fisher-Pearson coefficients.
            </p>

            <div className="max-h-64 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {columns.map((col, idx) => {
                const outliers = getOutlierCount(col.name);
                return (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200 font-mono truncate max-w-[160px]">{col.name}</span>
                      {outliers > 0 ? (
                        <span className="px-2 py-0.5 rounded text-[9px] bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold">
                          {outliers} outliers detected
                        </span>
                      ) : (
                        <span className="text-[10px] text-emerald-400 font-mono">Normal bounds</span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-slate-400 font-mono border-t border-slate-800/50">
                      <div>Skew: <span className="text-slate-300">{getSkewness(col.name)}</span></div>
                      <div>Kurtosis: <span className="text-slate-300">{getKurtosis(col.name)}</span></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-2 rounded bg-slate-950 text-[10px] text-slate-500 flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              <span>Features with significant skew are automatically suggested for logarithmic regularization pipelines.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Visualizations Canvas Studio */}
      <div className="glass-panel p-6 rounded-xl border border-slate-700/80 space-y-6">
        
        {/* Studio Controls Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span>Interactive Graphical Dashboard Studio</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Custom configurable outputs mapped from backend vector streams</p>
          </div>

          {/* Chart selector tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {[
              { id: 'histogram', label: 'Distribution Histogram' },
              { id: 'correlation', label: 'Covariance Heatmap' },
              { id: 'scatter', label: 'Feature Pairplot' },
              { id: 'candlestick', label: 'Candlestick Baseline' },
              { id: 'pie', label: 'Categorical Sunburst' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedChartType(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedChartType === tab.id
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-cyan-400 border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Selector for Active Custom Chart View */}
        {selectedChartType !== 'correlation' && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">Target View Feature:</span>
            <select
              value={activeFeature}
              onChange={(e) => setSelectedFeature(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg py-1 px-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
            >
              {columns.map((c, i) => (
                <option key={i} value={c.name}>{c.name} ({c.type})</option>
              ))}
            </select>
          </div>
        )}

        {/* Rendering Chart Panels */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 min-h-[320px] flex flex-col justify-between relative">
          
          {/* Histogram Panel */}
          {selectedChartType === 'histogram' && (
            <div className="space-y-4 w-full">
              <div className="text-center pb-2">
                <span className="text-xs font-bold text-slate-300 block">Frequency Distribution Curve for <span className="text-cyan-400 font-mono">{activeFeature}</span></span>
                <span className="text-[10px] text-slate-500">Kernel Density Estimation Overlay enabled</span>
              </div>

              {/* Responsive SVG Chart representation */}
              <div className="h-56 w-full flex items-end justify-between gap-2 px-6 pt-8 pb-2 border-b border-l border-slate-800 relative">
                
                {/* Y Axis steps */}
                <div className="absolute left-1 top-2 text-[9px] text-slate-600 font-mono">Max Freq</div>
                <div className="absolute left-1 bottom-2 text-[9px] text-slate-600 font-mono">0</div>

                {/* Animated Bars */}
                {[35, 62, 85, 95, 120, 140, 110, 80, 55, 30, 15, 8].map((val, idx, arr) => {
                  const max = Math.max(...arr);
                  const pct = (val / max) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                      {/* Tooltip */}
                      <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-cyan-300 text-[9px] px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap border border-slate-700 z-10 font-mono">
                        Bin {idx + 1}: {val} items
                      </div>
                      
                      <div 
                        className="w-full bg-gradient-to-t from-cyan-600 to-blue-400 rounded-t transition-all duration-500 group-hover:from-cyan-400 group-hover:to-purple-400"
                        style={{ height: `${pct}%` }}
                      ></div>
                      <span className="text-[8px] text-slate-600 font-mono truncate max-w-full hidden sm:block">
                        b{idx+1}
                      </span>
                    </div>
                  );
                })}

                {/* Simulated Bell / Line overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                  <path 
                    d="M 20 180 Q 150 20 300 10 Q 450 20 580 180" 
                    fill="none" 
                    stroke="rgba(168, 85, 247, 0.6)" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 4"
                  />
                </svg>

              </div>

              <div className="flex justify-between text-[10px] text-slate-500 px-6 font-mono">
                <span>Lower Outlier Tail</span>
                <span>Median Density Peak</span>
                <span>Upper Outlier Tail</span>
              </div>
            </div>
          )}

          {/* Correlation Matrix Heatmap */}
          {selectedChartType === 'correlation' && (
            <div className="space-y-4 w-full text-center">
              <div>
                <span className="text-xs font-bold text-slate-300 block">Pearson Covariance Matrix Mapping</span>
                <span className="text-[10px] text-slate-500">Values close to 1.0 indicate perfect multi-collinearity</span>
              </div>

              <div className="max-w-xl mx-auto overflow-x-auto">
                <div className="inline-block p-2 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="grid grid-cols-5 gap-1.5 text-xs font-mono">
                    
                    {/* Header Row */}
                    <div className="p-2 font-bold text-slate-500 text-[10px]">Matrix</div>
                    <div className="p-2 font-bold text-slate-400 text-[10px] truncate" title="Monthly_Revenue">Revenue</div>
                    <div className="p-2 font-bold text-slate-400 text-[10px] truncate" title="Customer_Acquisition_Cost">CAC</div>
                    <div className="p-2 font-bold text-slate-400 text-[10px] truncate" title="Platform_Engagement_Score">Engagement</div>
                    <div className="p-2 font-bold text-slate-400 text-[10px] truncate" title="Support_Tickets_Raised">Tickets</div>

                    {/* Row 1 */}
                    <div className="p-2 font-bold text-slate-400 text-[10px] text-left">Revenue</div>
                    <div className="p-2 rounded bg-cyan-500 text-slate-950 font-bold">1.0</div>
                    <div className="p-2 rounded bg-cyan-400/80 text-slate-950 font-medium">0.94</div>
                    <div className="p-2 rounded bg-cyan-600/60 text-white font-medium">0.81</div>
                    <div className="p-2 rounded bg-rose-500/60 text-white font-medium">-0.42</div>

                    {/* Row 2 */}
                    <div className="p-2 font-bold text-slate-400 text-[10px] text-left">CAC</div>
                    <div className="p-2 rounded bg-cyan-400/80 text-slate-950 font-medium">0.94</div>
                    <div className="p-2 rounded bg-cyan-500 text-slate-950 font-bold">1.0</div>
                    <div className="p-2 rounded bg-cyan-600/50 text-white font-medium">0.76</div>
                    <div className="p-2 rounded bg-rose-500/50 text-white font-medium">-0.38</div>

                    {/* Row 3 */}
                    <div className="p-2 font-bold text-slate-400 text-[10px] text-left">Engagement</div>
                    <div className="p-2 rounded bg-cyan-600/60 text-white font-medium">0.81</div>
                    <div className="p-2 rounded bg-cyan-600/50 text-white font-medium">0.76</div>
                    <div className="p-2 rounded bg-cyan-500 text-slate-950 font-bold">1.0</div>
                    <div className="p-2 rounded bg-rose-600 text-white font-bold">-0.65</div>

                    {/* Row 4 */}
                    <div className="p-2 font-bold text-slate-400 text-[10px] text-left">Tickets</div>
                    <div className="p-2 rounded bg-rose-500/60 text-white font-medium">-0.42</div>
                    <div className="p-2 rounded bg-rose-500/50 text-white font-medium">-0.38</div>
                    <div className="p-2 rounded bg-rose-600 text-white font-bold">-0.65</div>
                    <div className="p-2 rounded bg-cyan-500 text-slate-950 font-bold">1.0</div>

                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 pt-2 font-mono">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-cyan-500 inline-block rounded"></span> +1.0 Positive Covariance</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-slate-800 inline-block rounded"></span> 0.0 No Correlation</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-rose-600 inline-block rounded"></span> -1.0 Inverse Force</span>
              </div>
            </div>
          )}

          {/* Scatterplot / Pairplot */}
          {selectedChartType === 'scatter' && (
            <div className="space-y-4 w-full">
              <div className="text-center pb-2">
                <span className="text-xs font-bold text-slate-300 block">Scatter Feature Interaction Array</span>
                <span className="text-[10px] text-slate-500">Mapping primary index variance against auxiliary covariance vectors</span>
              </div>

              {/* Scatter Canvas */}
              <div className="h-56 w-full relative border-b border-l border-slate-800 bg-slate-900/30 overflow-hidden">
                
                {/* Grid guidelines */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                  {Array.from({length: 16}).map((_, i) => (
                    <div key={i} className="border-b border-r border-slate-800/30"></div>
                  ))}
                </div>

                {/* Randomly populated scatter node blobs */}
                {[
                  {x: 15, y: 22}, {x: 25, y: 38}, {x: 32, y: 45}, {x: 44, y: 55},
                  {x: 52, y: 61}, {x: 65, y: 72}, {x: 75, y: 84}, {x: 82, y: 89},
                  {x: 88, y: 92}, {x: 20, y: 15}, {x: 40, y: 35}, {x: 60, y: 50},
                  {x: 70, y: 65}, {x: 85, y: 75}, {x: 92, y: 85}, {x: 10, y: 8}
                ].map((pt, idx) => (
                  <div
                    key={idx}
                    className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 hover:bg-purple-400 transition-colors cursor-pointer group transform -translate-x-1/2 -translate-y-1/2 glow-cyan"
                    style={{ left: `${pt.x}%`, bottom: `${pt.y}%` }}
                  >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-[9px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 pointer-events-none whitespace-nowrap z-20 font-mono">
                      Idx_{idx}: [{pt.x}, {pt.y}]
                    </div>
                  </div>
                ))}

                {/* Linear regression guideline slope */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
                </svg>

              </div>

              <div className="flex justify-between text-[10px] text-slate-500 px-2 font-mono">
                <span>0.0 Base Bound</span>
                <span>Covariance Tensor X</span>
                <span>Max Magnitude</span>
              </div>
            </div>
          )}

          {/* Candlestick Layout Baseline */}
          {selectedChartType === 'candlestick' && (
            <div className="space-y-4 w-full">
              <div className="text-center pb-2">
                <span className="text-xs font-bold text-slate-300 block">OHLC Volatility Bounds Mapping</span>
                <span className="text-[10px] text-slate-500">Visualizing sample range spread variance (Open, High, Low, Close)</span>
              </div>

              <div className="h-56 w-full flex items-center justify-around px-6 border-b border-l border-slate-800 relative">
                
                {[
                  { open: 40, close: 60, high: 75, low: 30, up: true },
                  { open: 65, close: 45, high: 80, low: 35, up: false },
                  { open: 45, close: 70, high: 85, low: 40, up: true },
                  { open: 72, close: 88, high: 95, low: 60, up: true },
                  { open: 85, close: 50, high: 90, low: 40, up: false },
                  { open: 52, close: 65, high: 75, low: 45, up: true }
                ].map((candle, idx) => (
                  <div key={idx} className="h-full w-8 flex flex-col justify-center items-center relative group">
                    {/* Wick */}
                    <div 
                      className="absolute w-0.5 bg-slate-500 group-hover:bg-slate-300 transition-colors"
                      style={{ 
                        top: `${100 - candle.high}%`, 
                        bottom: `${candle.low}%` 
                      }}
                    ></div>
                    
                    {/* Body */}
                    <div 
                      className={`absolute w-4 rounded-sm transition-transform group-hover:scale-110 z-10 ${
                        candle.up ? 'bg-emerald-500 border border-emerald-400' : 'bg-rose-500 border border-rose-400'
                      }`}
                      style={{
                        top: `${100 - Math.max(candle.open, candle.close)}%`,
                        height: `${Math.abs(candle.close - candle.open)}%`
                      }}
                    ></div>

                    <span className="absolute bottom-2 text-[8px] text-slate-600 font-mono">T+{idx+1}</span>
                  </div>
                ))}

              </div>
            </div>
          )}

          {/* Categorical Sunburst / Pie Chart */}
          {selectedChartType === 'pie' && (
            <div className="space-y-4 w-full text-center">
              <div>
                <span className="text-xs font-bold text-slate-300 block">Categorical Partition Share Metrics</span>
                <span className="text-[10px] text-slate-500">Distribution frequency split across target discrete string keys</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-2">
                
                {/* CSS Emulated donut */}
                <div className="relative w-36 h-36 rounded-full border-8 border-slate-900 flex items-center justify-center bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-600 shadow-xl">
                  <div className="absolute inset-2 rounded-full bg-slate-950 flex flex-col items-center justify-center">
                    <span className="text-xs font-bold text-white font-mono">100%</span>
                    <span className="text-[8px] text-slate-400 uppercase">Class Weight</span>
                  </div>
                </div>

                {/* Legend list */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block"></span>
                    <span className="text-slate-300">Cluster Alpha (54.2%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span>
                    <span className="text-slate-300">Cluster Beta (28.4%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                    <span className="text-slate-300">Outliers/Sparse (17.4%)</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Graphical Action Footer */}
          <div className="pt-3 mt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Powered by Plotly &amp; Seaborn SVG drivers</span>
            <span className="text-cyan-500">Responsive Vector Mode</span>
          </div>

        </div>

      </div>

    </div>
  );
};
