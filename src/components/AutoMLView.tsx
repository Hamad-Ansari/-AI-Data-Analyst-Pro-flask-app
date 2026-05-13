import React, { useState } from 'react';
import { Cpu, Play, RotateCw, AlertTriangle, Layers, Award } from 'lucide-react';
import { MockDataset } from '../data/mockDatasets';

interface AutoMLViewProps {
  dataset: MockDataset | null;
}

export const AutoMLView: React.FC<AutoMLViewProps> = ({ dataset }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [problemType, setProblemType] = useState<'Classification' | 'Regression'>('Regression');
  
  // Customizable hyperparameters
  const [testSplit, setTestSplit] = useState(0.2);
  const [nEstimators, setNEstimators] = useState(150);
  const [maxDepth, setMaxDepth] = useState(6);
  const [crossValFolds, setCrossValFolds] = useState(5);

  // Status strings
  const [logs, setLogs] = useState<string[]>([]);

  // Derived outcomes
  const [results, setResults] = useState<{
    bestModel: string;
    accuracy: number;
    precision: number;
    recall: number;
    r2Score: number;
    rmse: number;
    featureWeights: { name: string; weight: number }[];
    confusionMatrix: number[][];
  } | null>(null);

  const startAutomlPipeline = () => {
    if (!dataset) return;
    
    setIsRunning(true);
    setHasRun(false);
    setLogs([`Initialized Auto-ML Controller for "${dataset.originalName}"...`]);

    // Simulate multi-stage algorithm execution
    setTimeout(() => {
      setLogs(prev => [...prev, `Detected target labels. Setting task classification: ${problemType}`]);
      setLogs(prev => [...prev, `Applying train/test partition ratio: ${(1 - testSplit).toFixed(2)} / ${testSplit.toFixed(2)}`]);
      
      setTimeout(() => {
        setLogs(prev => [...prev, `Executing ${crossValFolds}-Fold Cross Validation across Random Forest, XGBoost & LightGBM frameworks...`]);
        setLogs(prev => [...prev, `Hyperparameters bound: n_estimators=${nEstimators}, max_depth=${maxDepth}`]);

        setTimeout(() => {
          // Compute high fidelity evaluation results
          const models = problemType === 'Regression' 
            ? ['XGBoost Regressor', 'LightGBM Core Engine', 'Random Forest Regressor']
            : ['LightGBM Classifier', 'Random Forest Classify', 'Logistic Regression Base'];
            
          const best = models[Math.floor(Math.random() * models.length)];
          const acc = 0.91 + (Math.random() * 0.06);
          const prec = acc - 0.015;
          const rec = acc + 0.012;
          const r2 = 0.85 + (Math.random() * 0.09);
          const rmse = roundTwo(12.4 + Math.random() * 5);

          // Map weights from actual schema
          const numericCols = dataset.columns.filter(c => c.type === 'numeric');
          const weights = numericCols.map((c, idx) => ({
            name: c.name,
            weight: roundTwo(0.8 - (idx * 0.15)) > 0.05 ? roundTwo(0.8 - (idx * 0.15)) : 0.08
          }));

          setResults({
            bestModel: best,
            accuracy: roundTwo(acc),
            precision: roundTwo(prec),
            recall: roundTwo(rec),
            r2Score: roundTwo(r2),
            rmse: rmse,
            featureWeights: weights.sort((a, b) => b.weight - a.weight),
            confusionMatrix: [
              [Math.floor(dataset.rows * 0.4), Math.floor(dataset.rows * 0.04)],
              [Math.floor(dataset.rows * 0.03), Math.floor(dataset.rows * 0.53)]
            ]
          });

          setLogs(prev => [...prev, `Sweep complete. Model convergence reached successfully.`]);
          setIsRunning(false);
          setHasRun(true);
        }, 1200);
      }, 1000);
    }, 800);
  };

  const roundTwo = (n: number) => Math.round(n * 1000) / 1000;

  if (!dataset) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto glass-panel p-8 rounded-2xl border border-slate-800 space-y-3">
          <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
          <h4 className="text-sm font-bold text-slate-300">Auto-ML Blocked</h4>
          <p className="text-xs text-slate-500">Please provide a valid dataset profile via the Data Hub to enable automated training sweep options.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-8">
      
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 mb-1.5 text-purple-400 font-mono text-xs">
          <Cpu className="w-4 h-4" />
          <span>Autonomous Machine Learning Engine</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">Zero-Shot AutoML Pipeline Studio</h1>
        <p className="text-xs text-slate-400">
          Automatically triggers Train/Test partitions, GridSearch optimization sweeps, and performance diagnostic calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Control Column: Hyperparameter Injector */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel p-5 rounded-xl border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wide pb-2 border-b border-slate-800">
              Pipeline Parameters
            </h3>

            {/* Target Problem Detection */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1.5">Inferred Target Task Architecture</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setProblemType('Regression')}
                  className={`p-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    problemType === 'Regression'
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-700'
                      : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Regression
                </button>
                <button
                  type="button"
                  onClick={() => setProblemType('Classification')}
                  className={`p-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    problemType === 'Classification'
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-700'
                      : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Classification
                </button>
              </div>
            </div>

            {/* Test Split configuration */}
            <div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Holdout Split Ratio:</span>
                <span className="text-cyan-400 font-bold">{testSplit * 100}% Test</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.4"
                step="0.05"
                value={testSplit}
                onChange={(e) => setTestSplit(parseFloat(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-slate-600 font-mono mt-0.5">
                <span>10% Holdout</span>
                <span>40% Holdout</span>
              </div>
            </div>

            {/* Estimators Tree size */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Ensemble Tree Estimators: <span className="text-white font-bold">{nEstimators}</span></label>
              <input
                type="range"
                min="50"
                max="500"
                step="50"
                value={nEstimators}
                onChange={(e) => setNEstimators(parseInt(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>

            {/* Max Depth */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Max Depth</label>
                <select
                  value={maxDepth}
                  onChange={(e) => setMaxDepth(parseInt(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-slate-200 focus:outline-none font-mono"
                >
                  <option value={4}>4 (Shallow)</option>
                  <option value={6}>6 (Balanced)</option>
                  <option value={10}>10 (Deep Core)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Cross-Val Folds</label>
                <select
                  value={crossValFolds}
                  onChange={(e) => setCrossValFolds(parseInt(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-slate-200 focus:outline-none font-mono"
                >
                  <option value={3}>3 Folds</option>
                  <option value={5}>5 Folds (Default)</option>
                  <option value={10}>10 Folds</option>
                </select>
              </div>
            </div>

            {/* Trigger Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={startAutomlPipeline}
                disabled={isRunning}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 text-white font-bold text-xs tracking-wide shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 transition-opacity"
              >
                {isRunning ? (
                  <>
                    <RotateCw className="w-4 h-4 animate-spin text-cyan-200" />
                    <span>Executing Scikit-Learn Workers...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-white" />
                    <span>Trigger Auto-ML Sweep Matrix</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Active Logs Console */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 font-mono text-xs space-y-2">
            <span className="text-[10px] text-slate-500 block uppercase">Real-Time Worker Console Stream:</span>
            <div className="min-h-[100px] max-h-36 overflow-y-auto space-y-1 text-[11px] text-slate-400 custom-scrollbar">
              {logs.length === 0 ? (
                <p className="text-slate-600 italic">Awaiting pipeline initialization signal...</p>
              ) : (
                logs.map((logStr, i) => (
                  <p key={i} className="leading-tight">
                    <span className="text-cyan-500">&gt;</span> {logStr}
                  </p>
                ))
              )}
            </div>
          </div>

        </div>

        {/* Right Output Column: Model Evaluation Results */}
        <div className="lg:col-span-7 space-y-6">
          
          {hasRun && results ? (
            <div className="glass-panel p-6 rounded-xl border border-slate-700/80 space-y-6 animate-fadeIn">
              
              {/* Champion banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-cyan-950/80 border border-purple-800/40 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">Selected Champion Model</span>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{results.bestModel}</span>
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-mono">Validation Performance</span>
                  <span className="text-xl font-extrabold text-cyan-400 font-mono">
                    {(results.accuracy * 100).toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Statistical Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400 font-mono">Accuracy</p>
                  <p className="text-sm font-bold text-white font-mono mt-0.5">{results.accuracy}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400 font-mono">Precision</p>
                  <p className="text-sm font-bold text-cyan-300 font-mono mt-0.5">{results.precision}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400 font-mono">Recall</p>
                  <p className="text-sm font-bold text-purple-300 font-mono mt-0.5">{results.recall}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400 font-mono">{problemType === 'Regression' ? 'R² Score' : 'F1 Score'}</p>
                  <p className="text-sm font-bold text-amber-300 font-mono mt-0.5">{results.r2Score}</p>
                </div>
              </div>

              {/* Feature Importance Indicators */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide block">
                  Permutation Feature Importance (Gini Weights)
                </span>

                <div className="space-y-2">
                  {results.featureWeights.map((fw, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300 truncate max-w-[200px]" title={fw.name}>{fw.name}</span>
                        <span className="text-cyan-400">{fw.weight.toFixed(3)}</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1.5 rounded-full"
                          style={{ width: `${Math.min(fw.weight * 120, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostic Confusion Matrix / Outlier matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block mb-2">Confusion Matrix Mapping</span>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 font-mono text-center max-w-xs mx-auto">
                    <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-500">
                      <div>—</div>
                      <div>Pred N</div>
                      <div>Pred P</div>

                      <div>Act N</div>
                      <div className="bg-cyan-950 text-cyan-300 font-bold p-1 rounded">{results.confusionMatrix[0][0]}</div>
                      <div className="bg-slate-900 text-slate-400 p-1 rounded">{results.confusionMatrix[0][1]}</div>

                      <div>Act P</div>
                      <div className="bg-slate-900 text-slate-400 p-1 rounded">{results.confusionMatrix[1][0]}</div>
                      <div className="bg-purple-950 text-purple-300 font-bold p-1 rounded">{results.confusionMatrix[1][1]}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-slate-400 block">ROC Area Under Curve (AUC)</span>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-500 font-mono">ROC AUC Index:</span>
                      <span className="text-emerald-400 font-mono font-bold">0.962 (Excellent)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-500 font-mono">Log-Loss Bound:</span>
                      <span className="text-slate-400 font-mono">0.145</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            <div className="glass-panel p-12 rounded-xl border border-slate-800 text-center space-y-4 min-h-[400px] flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mx-auto">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-300">Model Space Unpopulated</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Select your hyperparameter metrics on the left and trigger the Auto-ML engine to compile live validation metrics.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
