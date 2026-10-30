/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  FileText, 
  Lock,
  Cpu,
  Search,
  BookOpen
} from 'lucide-react';
import { calculateEgressCompliance, verifySetbackCompliance, calculateFAR } from '../utils/compliance.ts';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioModal: React.FC<StudioModalProps> = ({ isOpen, onClose }) => {
  const [selectedModel, setSelectedModel] = useState<'soma' | 'mission' | 'custom'>('soma');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [auditDone, setAuditDone] = useState(false);

  if (!isOpen) return null;

  const handleStartAudit = () => {
    setIsAuditing(true);
    setAuditStep(1);
    setAuditDone(false);

    setTimeout(() => setAuditStep(2), 700);
    setTimeout(() => setAuditStep(3), 1400);
    setTimeout(() => setAuditStep(4), 2100);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditDone(true);
    }, 2800);
  };

  const egressCheck = calculateEgressCompliance(184, true, 'R-2');
  const setbackCheck = verifySetbackCompliance(
    { actual: 25.4, required: 25.0 },
    { actual: 12.2, required: 10.0 },
    { actual: 30.0, required: 25.0 }
  );
  const farCheck = calculateFAR(92340, 27000, 3.5);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="studio-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 id="studio-modal-title" className="text-base font-bold text-white">
                ArchOS Enterprise BIM &amp; CAD Studio
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Autonomous Compliance Engine v2.5
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Model Selector Tabs */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
              Select Architectural Project or Upload File
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => { setSelectedModel('soma'); setAuditDone(false); }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedModel === 'soma'
                    ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="text-xs font-semibold text-slate-900">SF SOMA Mixed-Use</div>
                <div className="text-[11px] text-slate-500 mt-1">SF Planning + CA Title 24</div>
                <div className="text-[10px] text-blue-600 font-mono mt-1">186 Units · DWG/RVT</div>
              </button>

              <button
                type="button"
                onClick={() => { setSelectedModel('mission'); setAuditDone(false); }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedModel === 'mission'
                    ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="text-xs font-semibold text-slate-900">SF Mission Rock Commercial</div>
                <div className="text-[11px] text-slate-500 mt-1">CA Building Code + SF DBI</div>
                <div className="text-[10px] text-blue-600 font-mono mt-1">Podium Commercial · IFC4</div>
              </button>

              <button
                type="button"
                onClick={() => { setSelectedModel('custom'); setAuditDone(false); }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedModel === 'custom'
                    ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="text-xs font-semibold text-slate-900">Upload CAD File</div>
                <div className="text-[11px] text-slate-500 mt-1">AutoCAD .DWG / Revit .RVT</div>
                <div className="text-[10px] text-blue-600 font-mono mt-1">Drag &amp; Drop Ready</div>
              </button>
            </div>
          </div>

          {/* If custom upload selected */}
          {selectedModel === 'custom' && (
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50">
              <UploadCloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-slate-800">
                Drop your CAD/BIM blueprint file here
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Supports .DWG, .DXF, .RVT, .IFC4 (up to 2.5 GB)
              </div>
            </div>
          )}

          {/* Simulation Trigger Box */}
          <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400">TARGET CODE REASONING CORE:</span>
              <span className="text-emerald-400 font-bold">IBC 2024 ENFORCED</span>
            </div>

            {isAuditing ? (
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Cpu className="w-4 h-4 animate-spin" />
                  <span>Agent pipeline executing deterministic check...</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-2 transition-all duration-500" 
                    style={{ width: `${auditStep * 25}%` }} 
                  />
                </div>
                <div className="text-[11px] text-slate-400">
                  {auditStep === 1 && 'Step 1/4: Vision & Geometry Parser mapping 14,290 vectors...'}
                  {auditStep === 2 && 'Step 2/4: Municipal Zoning Engine validating San Francisco Planning Code & DBI...'}
                  {auditStep === 3 && 'Step 3/4: Dijkstra egress path travel distance calculating...'}
                  {auditStep === 4 && 'Step 4/4: Generating zero-comment submittal package...'}
                </div>
              </div>
            ) : auditDone ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Deterministic Audit Finished in 1.4 seconds (Zero Rejections)</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300 pt-2 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 block">IBC Setbacks:</span>
                    <span className="text-emerald-400 font-bold">Passed (+0.4' Front)</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Fire Egress:</span>
                    <span className="text-emerald-400 font-bold">184' / 250' Compliant</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Footprint Ratio:</span>
                    <span className="text-emerald-400 font-bold">68.4% Checked</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Ready to audit active CAD layers against municipal rules</span>
                <button
                  type="button"
                  onClick={handleStartAudit}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run 60-Sec Audit</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Air-Gapped SOC-2 Type II Execution</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg bg-white hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Close Studio View
          </button>
        </div>
      </div>
    </div>
  );
};

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-blue-500/20">
            <Layers className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h3 id="login-modal-title" className="text-xl font-bold text-slate-950">
            Sign In to ArchOS
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Access your firm's compliance pipelines &amp; active BIM models
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900">Check your inbox</h4>
            <p className="text-xs text-slate-600">
              We've sent a magic authorization link to <span className="font-semibold">{email}</span>.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg w-full"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firm-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Firm Email Address
              </label>
              <input
                id="firm-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="architect@firm.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              Sign In with Firm SSO
            </button>

            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <span className="relative bg-white px-3 text-[11px] text-slate-400 font-mono uppercase">
                Enterprise Identity
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="py-2 px-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 font-medium text-center transition-colors"
              >
                Autodesk ACC
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="py-2 px-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 font-medium text-center transition-colors"
              >
                Okta / SAML
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  items: { label: string; desc: string }[];
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  items,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            {category}
          </span>
          <h3 id="info-modal-title" className="text-xl font-bold text-slate-950">
            {title}
          </h3>
        </div>

        <div className="overflow-y-auto space-y-3 pr-1 divide-y divide-slate-100">
          {items.map((item, idx) => (
            <div key={idx} className="pt-3 first:pt-0">
              <div className="text-sm font-semibold text-slate-900">{item.label}</div>
              <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
