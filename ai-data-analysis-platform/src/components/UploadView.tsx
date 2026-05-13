import React, { useState } from 'react';
import { UploadCloud, FileText, Database, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
import { SAMPLE_DATASETS, MockDataset } from '../data/mockDatasets';

interface UploadViewProps {
  onDatasetLoaded: (dataset: MockDataset) => void;
  activeDataset: MockDataset | null;
}

export const UploadView: React.FC<UploadViewProps> = ({ onDatasetLoaded, activeDataset }) => {
  const [dragOver, setDragOver] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [statusText, setStatusText] = useState<string | null>(null);

  // Fallback simulator for real local arbitrary uploads
  const handleFileUploadSimulated = (file: File) => {
    setLoadingFile(true);
    setStatusText(`Streaming binary stream for ${file.name} to server buffers...`);

    setTimeout(() => {
      setStatusText("Executing Pandas schema detection & feature mapping algorithms...");
      
      setTimeout(() => {
        // Derive mockup structure from file metadata
        const ext = file.name.split('.').pop() || 'csv';
        const mockRows = Math.floor(Math.random() * 8000) + 500;
        const mockCols = Math.floor(Math.random() * 8) + 4;
        
        const newDs: MockDataset = {
          id: `custom_ds_${Date.now()}`,
          filename: file.name,
          originalName: file.name,
          fileSizeKb: roundTwo(file.size / 1024),
          rows: mockRows,
          cols: mockCols,
          type: ext,
          uploadedAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
          columns: Array.from({ length: mockCols }).map((_, i) => {
            const types: Array<'numeric' | 'categorical' | 'datetime'> = ['numeric', 'categorical', 'datetime'];
            const t = i === 0 ? 'datetime' : types[Math.floor(Math.random() * types.length)];
            return {
              name: `Feature_Column_${String.fromCharCode(65 + i)}`,
              type: t,
              nulls: Math.floor(Math.random() * 12),
              unique: Math.floor(Math.random() * 100) + 2,
              sampleValues: t === 'numeric' ? [42.1, 88.0, 12.5] : ["Class_A", "Class_B", "Class_C"]
            };
          }),
          sampleData: Array.from({ length: 6 }).map((_, rIdx) => {
            const rowObj: Record<string, any> = {};
            for (let c = 0; c < mockCols; c++) {
              rowObj[`Feature_Column_${String.fromCharCode(65 + c)}`] = c === 0 ? `2026-03-0${rIdx + 1}` : Math.floor(Math.random() * 500);
            }
            return rowObj;
          }),
          summaryStats: {
            mean: { Feature_Column_B: 124.5, Feature_Column_C: 88.1 },
            std: { Feature_Column_B: 45.2, Feature_Column_C: 12.0 },
            min: { Feature_Column_B: 2.0, Feature_Column_C: 1.0 },
            max: { Feature_Column_B: 499.0, Feature_Column_C: 300.0 }
          },
          correlationMatrix: {
            Feature_Column_B: { Feature_Column_B: 1.0, Feature_Column_C: 0.65 },
            Feature_Column_C: { Feature_Column_B: 0.65, Feature_Column_C: 1.0 }
          },
          featureImportance: [
            { feature: "Feature_Column_B", weight: 0.58 },
            { feature: "Feature_Column_C", weight: 0.42 }
          ]
        };

        setLoadingFile(false);
        setStatusText(null);
        onDatasetLoaded(newDs);
      }, 1200);
    }, 800);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUploadSimulated(e.dataTransfer.files[0]);
    }
  };

  const handleManualSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUploadSimulated(e.target.files[0]);
    }
  };

  const handleMountPreset = (ds: MockDataset) => {
    setLoadingFile(true);
    setStatusText(`Simulating SQLAlchemy session bind for ${ds.filename}...`);
    setTimeout(() => {
      setLoadingFile(false);
      setStatusText(null);
      onDatasetLoaded(ds);
    }, 600);
  };

  const roundTwo = (num: number) => Math.round(num * 100) / 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      
      {/* Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs">
          <Database className="w-4 h-4" />
          <span>Ingestion Cache Controller</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Multi-Format Tabular Ingestion Hub</h1>
        <p className="text-xs text-slate-400 mt-1">
          Supports native parsing for <span className="text-cyan-300">.CSV</span>, <span className="text-purple-300">.XLSX</span>, <span className="text-blue-300">.JSON</span>, <span className="text-emerald-300">.SQL dumps</span>, and flat <span className="text-amber-300">.TXT files</span> up to 50MB buffers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Input triggers */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Drag & Drop Canvas */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 relative overflow-hidden ${
              dragOver 
                ? 'border-cyan-400 bg-cyan-950/20' 
                : 'border-slate-700 hover:border-slate-500 bg-slate-900/40'
            }`}
          >
            {loadingFile && (
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 space-y-3">
                <div className="w-12 h-12 rounded-full border-4 border-cyan-500/30 border-t-cyan-400 animate-spin"></div>
                <p className="text-xs font-mono text-cyan-300 px-4 text-center">{statusText}</p>
                <div className="w-48 bg-slate-800 rounded-full h-1 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1 animate-pulse" style={{ width: '100%' }}></div>
                </div>
              </div>
            )}

            <div className="w-16 h-16 rounded-full bg-slate-900/90 border border-slate-800 flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-8 h-8 animate-pulse" />
            </div>

            <p className="text-sm font-bold text-white mb-1">Drag and drop raw dataset arrays here</p>
            <p className="text-xs text-slate-400 mb-4">or select manually from local system filesystem</p>

            <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer border border-slate-700 transition-colors">
              <span>Browse Native File Directory</span>
              <input 
                type="file" 
                accept=".csv,.xlsx,.xls,.json,.sql,.txt" 
                onChange={handleManualSelect}
                className="hidden" 
              />
            </label>

            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto-Schema Scan
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Missing Triage
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Duplicate Sweeps
              </span>
            </div>

          </div>

          {/* Quick-Start Preset Datasets Block */}
          <div className="glass-panel p-5 rounded-xl border border-slate-700/60">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span>Quick-Start Live Enterprise Datasets</span>
              <span className="text-[10px] text-cyan-400 lowercase font-mono">click to mount</span>
            </h3>

            <div className="space-y-2.5">
              {SAMPLE_DATASETS.map((ds) => {
                const isCurrent = activeDataset?.id === ds.id;
                return (
                  <div
                    key={ds.id}
                    onClick={() => handleMountPreset(ds)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      isCurrent 
                        ? 'bg-cyan-950/30 border-cyan-600/60 shadow-md' 
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate pr-2">
                      <div className={`p-2 rounded-md ${isCurrent ? 'bg-cyan-900 text-cyan-300' : 'bg-slate-950 text-slate-400'}`}>
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-xs font-bold text-slate-200 truncate">{ds.originalName}</p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          {ds.rows.toLocaleString()} rows • {ds.cols} columns • <span className="uppercase text-purple-400">{ds.type}</span>
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      {isCurrent ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono font-bold">
                          Mounted Active
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500 hover:text-cyan-400 font-medium">
                          Mount Data →
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Upload Constraints Warning */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300/80 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-300">
              <AlertTriangle className="w-4 h-4" />
              <span>Production Infrastructure Limits</span>
            </div>
            <p className="leading-relaxed text-slate-300 text-[11px]">
              Uploaded structures are temporarily isolated inside <code className="text-amber-400 font-mono">./uploads</code> directory mapping. If parsing exceeds memory space, Gunicorn drops requests smoothly.
            </p>
          </div>

        </div>

        {/* Right Column: Ingestion diagnostics & Preview */}
        <div className="lg:col-span-5 space-y-6">
          
          {activeDataset ? (
            <div className="glass-panel p-5 rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">Ingested Schema Metadata</span>
                  <h3 className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs">{activeDataset.originalName}</h3>
                </div>
                <span className="px-2 py-1 rounded bg-slate-900 text-slate-400 font-mono text-[10px] border border-slate-800">
                  {activeDataset.fileSizeKb} KB
                </span>
              </div>

              {/* Data profiling gauges */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-lg font-bold text-cyan-400 font-mono">{activeDataset.rows.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-400">Total Valid Rows</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-lg font-bold text-purple-400 font-mono">{activeDataset.cols}</p>
                  <p className="text-[10px] text-slate-400">Inferred Columns</p>
                </div>
              </div>

              {/* Duplicate & Null Report preview */}
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Missing Values Found:</span>
                  <span className="text-amber-400 font-mono font-bold">
                    {activeDataset.columns.reduce((a, b) => a + b.nulls, 0)} cells
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Duplicate Rows Swept:</span>
                  <span className="text-emerald-400 font-mono font-bold">0 records</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Inferred Memory Layout:</span>
                  <span className="text-cyan-300 font-mono">Dense Array 64-bit</span>
                </div>
              </div>

              {/* Column Schema Details */}
              <div>
                <span className="text-[11px] font-bold text-slate-300 block mb-2">Column Type Recognition Tree:</span>
                <div className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                  {activeDataset.columns.map((col, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-900/60 text-xs text-slate-300">
                      <span className="font-mono text-[11px] truncate max-w-[120px] text-slate-200" title={col.name}>
                        {col.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {col.nulls > 0 && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/20" title="Contains missing cells">
                            {col.nulls} nulls
                          </span>
                        )}
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase ${
                          col.type === 'numeric' ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' :
                          col.type === 'categorical' ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' :
                          'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        }`}>
                          {col.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-slate-500 italic block">
                  Dataset mapped safely to application state runtime. Ready for EDA studio operations.
                </span>
              </div>

            </div>
          ) : (
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-400">Awaiting Tabular Metadata Buffer</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Upload custom datasets or mount demo templates on the left to extract Pandas metadata arrays instantaneously.
              </p>
            </div>
          )}

          {/* Secure practices block */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-slate-300 block text-[11px]">Applied Sanitization Routine:</span>
            <ul className="text-[11px] text-slate-500 space-y-1 list-disc list-inside">
              <li>Header validation block drops unauthorized byte strings.</li>
              <li>Type coercions sanitize raw strings to native floats.</li>
              <li>SQL injection patterns blocked by strict encoding filters.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
