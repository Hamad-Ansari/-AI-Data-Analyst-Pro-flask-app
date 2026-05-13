import React, { useState } from 'react';
import { FileText, Download, FileSpreadsheet, Sparkles, Building, Briefcase } from 'lucide-react';
import { MockDataset } from '../data/mockDatasets';

interface ReportGeneratorProps {
  dataset: MockDataset | null;
  user: { username: string; role: string; company?: string } | null;
}

export const ReportGenerator: React.FC<ReportGeneratorProps> = ({ dataset, user }) => {
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [generatingExcel, setGeneratingExcel] = useState(false);
  const [pdfReady, setPdfReady] = useState(false);
  const [excelReady, setExcelReady] = useState(false);
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [includeCharts, setIncludeCharts] = useState(true);

  const handleGeneratePdf = () => {
    setGeneratingPdf(true);
    setPdfReady(false);
    setTimeout(() => {
      setGeneratingPdf(false);
      setPdfReady(true);
    }, 1500);
  };

  const handleGenerateExcel = () => {
    setGeneratingExcel(true);
    setExcelReady(false);
    setTimeout(() => {
      setGeneratingExcel(false);
      setExcelReady(true);
    }, 1200);
  };

  const handleDownloadSimulated = (type: string) => {
    alert(`Streaming binary stream package buffer from static cache directory: ./reports/${dataset?.filename || 'custom_dataset'}_Executive_Report.${type}\n\nFile size: ${type === 'pdf' ? '2.4 MB' : '412 KB'}\nSHA-256 Verified.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-8">
      
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5 text-blue-400 font-mono text-xs">
          <FileText className="w-4 h-4" />
          <span>ReportLab &amp; OpenPyXL Engine Console</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">Board-Ready Stakeholder Report Studio</h1>
        <p className="text-xs text-slate-400">
          Synthesizes raw distribution metrics, AI summaries, and AutoML feature vectors into professional distributable PDF and Excel artifacts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Parameter Panel */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel p-5 rounded-xl border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wide pb-2 border-b border-slate-800">
              Artifact Compilation Profiles
            </h3>

            {/* Target dataset context */}
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-xs space-y-1">
              <span className="text-[10px] text-slate-500 block font-mono">Bound Context Buffer:</span>
              <p className="text-cyan-400 font-bold truncate">{dataset?.originalName || "Unassigned Dataset Cache"}</p>
              <p className="text-[10px] text-slate-400 font-mono">
                Rows: {dataset?.rows.toLocaleString() || 0} • Columns: {dataset?.cols || 0}
              </p>
            </div>

            {/* Author info */}
            <div className="space-y-2 text-xs">
              <span className="text-[10px] text-slate-500 block font-mono">Target Author Headers:</span>
              <div className="flex items-center gap-2 text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{user?.username || "Guest Enterprise Operator"}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{user?.company || "AI Data Analyst Pro Cloud Server"}</span>
              </div>
            </div>

            {/* Config Toggles */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs font-mono">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMetadata}
                  onChange={(e) => setIncludeMetadata(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0"
                />
                <span>Embed Raw Statistical Metadata Profiles</span>
              </label>

              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeCharts}
                  onChange={(e) => setIncludeCharts(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0"
                />
                <span>Include Static High-Fidelity Chart Vectors</span>
              </label>
            </div>

            {/* PDF Trigger */}
            <div className="pt-3 space-y-2">
              <button
                type="button"
                onClick={handleGeneratePdf}
                disabled={generatingPdf || !dataset}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2 disabled:opacity-40 transition-opacity"
              >
                {generatingPdf ? (
                  <span>Compiling ReportLab PDF Canvas...</span>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    <span>Generate Executive PDF Report</span>
                  </>
                )}
              </button>

              {pdfReady && (
                <button
                  type="button"
                  onClick={() => handleDownloadSimulated('pdf')}
                  className="w-full py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-700 text-emerald-300 font-mono text-xs flex items-center justify-center gap-2 animate-bounce"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Verified Artifact (.PDF)</span>
                </button>
              )}
            </div>

            {/* Excel Trigger */}
            <div className="pt-2 space-y-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleGenerateExcel}
                disabled={generatingExcel || !dataset}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-40 transition-colors border border-slate-700"
              >
                {generatingExcel ? (
                  <span>Formatting OpenPyXL Sheets...</span>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                    <span>Generate Clean Excel Sheets (.XLSX)</span>
                  </>
                )}
              </button>

              {excelReady && (
                <button
                  type="button"
                  onClick={() => handleDownloadSimulated('xlsx')}
                  className="w-full py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-700 text-emerald-300 font-mono text-xs flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Tabular Archive (.XLSX)</span>
                </button>
              )}
            </div>

          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-xs space-y-2">
            <span className="font-mono text-[10px] text-slate-500 block uppercase">Report Isolation Settings:</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Export paths resolve directly to <code className="text-cyan-400 font-mono">./reports</code>. System worker nodes automatically sweep stale files past 72-hour limits to ensure container space hygiene.
            </p>
          </div>

        </div>

        {/* Right Preview Document Column */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="glass-panel p-8 rounded-2xl border border-slate-700/80 space-y-6 relative bg-white/5 text-slate-200">
            
            {/* Document preview status watermark */}
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              Live Artifact Template Preview
            </div>

            {/* Document Header mockup */}
            <div className="pb-6 border-b border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
                <span className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">AI Data Analyst Pro Platform</span>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Executive Analytical Review: <span className="text-cyan-400">{dataset?.originalName || "Uploaded Workspace"}</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Automated machine learning intelligence audit compiled on {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Content preview block */}
            <div className="space-y-4 text-xs leading-relaxed">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-cyan-400 font-mono mb-1">
                  1. Structural Diagnostic Abstract
                </h4>
                <p className="text-slate-300">
                  The dataset contains <span className="text-white font-mono font-bold">{dataset?.rows.toLocaleString() || "—"}</span> observed indexes mapping over <span className="text-white font-mono font-bold">{dataset?.cols || "—"}</span> features. Missing data cells were auto-flagged and scheduled for robust kNN distance approximations.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-purple-400 font-mono mb-1">
                  2. Automated Core Insights
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Strong positive Pearson Covariance mapping highlights potential collinear target bounds.</li>
                  <li>Target columns exhibit highly stable Kurtosis thresholds, suggesting predictable linear tracking.</li>
                  <li>Extreme outliers represent less than 2.4% of entire feature arrays.</li>
                </ul>
              </div>

              {includeCharts && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-blue-400 font-mono mb-2">
                    3. Embedded Graphical Profile (SVG Render)
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-center space-y-2">
                    <div className="h-20 flex items-end justify-around gap-1 px-4 pt-4 border-b border-slate-800">
                      {[20, 45, 80, 100, 60, 30].map((v, i) => (
                        <div key={i} className="w-6 bg-cyan-600 rounded-t" style={{ height: `${v}%` }}></div>
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-500 font-mono block">Figure 1.0: Aggregated Class Spread Frequency</span>
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 font-mono mb-1">
                  4. Stakeholder Business Recommendations
                </h4>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5 text-[11px] text-slate-300">
                  <p className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Actionable Strategy:</span>
                  </p>
                  <p>
                    Deploy optimized LightGBM model weights to pre-screen target user pools. The model confirms that <code className="text-cyan-400 font-mono">Platform_Engagement_Score</code> drives primary client renewals. Intervene immediately when platform interactions drop below calculated stochastic thresholds.
                  </p>
                </div>
              </div>

            </div>

            {/* Simulated Sign-off Page */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span>Report Security ID: AUTH_HASH_99182</span>
              <span>Generated autonomously by Flask Core Framework</span>
            </div>

          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => window.print()}
              className="text-xs text-slate-400 hover:text-white underline font-mono"
            >
              Print Live Preview to Browser Native Layout
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
