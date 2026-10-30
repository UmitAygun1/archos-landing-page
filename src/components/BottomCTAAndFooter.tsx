/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layers, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { STUDIO_APP_URL } from '../config/constants.ts';

interface BottomCTAAndFooterProps {
  onOpenCodeModal: (codeName: string) => void;
  onOpenDocs: () => void;
  onOpenPrivacy: () => void;
}

export const BottomCTAAndFooter: React.FC<BottomCTAAndFooterProps> = ({
  onOpenCodeModal,
  onOpenDocs,
  onOpenPrivacy,
}) => {
  return (
    <div className="relative bg-[#070B14] text-slate-300 pt-24 pb-16 overflow-hidden">
      {/* Smooth Transition Gradient from light to dark */}
      <div 
        className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent opacity-5 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle radial ambient glow behind bottom CTA */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- BOTTOM CTA DECISION BLOCK (Dark Theme) --- */}
        <div className="text-center max-w-4xl mx-auto pb-24 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-950/60 border border-blue-800/50 text-xs font-mono font-medium text-blue-400">
            <span>ENTERPRISE AEC WORKSPACE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Need more than pre-check? Enter the Full ArchOS Feasibility &amp; Generative BIM Studio.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Run multi-parcel site yield simulations, generate compliant 3D massing variants, and export native Revit and DWG models with one click.
          </p>

          {/* EXACTLY ONE HIGHLY VISIBLE PRIMARY CTA BUTTON IN CENTER (No other buttons next to it) */}
          <div className="mt-10 flex justify-center">
            <a
              href={STUDIO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-200 cursor-pointer group"
            >
              <span>Launch Full ArchOS Enterprise Studio</span>
              <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* --- FOOTER SECTION --- */}
        <footer className="pt-16" aria-label="ArchOS Footer">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1: Autonomous Engine */}
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
                Autonomous Engine
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    Vision &amp; Geometry Parser
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    Deterministic Egress Validator
                  </a>
                </li>
                <li>
                  <a href="#ai-agents" className="hover:text-white transition-colors">
                    Instant Redline &amp; Auto-Fix
                  </a>
                </li>
                <li>
                  <a href="#ai-agents" className="hover:text-white transition-colors">
                    3D Parametric Massing
                  </a>
                </li>
                <li>
                  <a href="#ai-agents" className="hover:text-white transition-colors">
                    Financial ROI Feasibility
                  </a>
                </li>
                <li>
                  <a href="#ai-agents" className="hover:text-white transition-colors">
                    Multi-Parcel Assemblage
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Supported Codes */}
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
                Supported Codes (IBC 2024, SF Planning, etc.)
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button 
                    onClick={() => onOpenCodeModal('International Building Code (IBC) 2024 & 2021')} 
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    IBC 2024 &amp; 2021 Editions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenCodeModal('San Francisco Planning Code (Zoning & DBI)')} 
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    San Francisco Planning Code (DBI)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenCodeModal('San Francisco Planning Code & DBI Standards')} 
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    San Francisco DBI &amp; Planning
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenCodeModal('New York City Zoning Resolution (ZR) & 2022 NYC BC')} 
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    NYC Zoning Resolution (ZR)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenCodeModal('California Building Standards Code (Title 24) & CBC')} 
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    California Title 24 &amp; CBC
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onOpenCodeModal('ADA Standards for Accessible Design 2010 & ANSI A117.1')} 
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    ADA 2010 &amp; ANSI A117.1
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Ecosystem */}
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
                Ecosystem
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button onClick={onOpenDocs} className="hover:text-white transition-colors text-left cursor-pointer">
                    Autodesk Revit 2024-2026 Add-in
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDocs} className="hover:text-white transition-colors text-left cursor-pointer">
                    AutoCAD .DWG Live Redline Bridge
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDocs} className="hover:text-white transition-colors text-left cursor-pointer">
                    Rhino / Grasshopper Connector
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDocs} className="hover:text-white transition-colors text-left cursor-pointer">
                    Autodesk Construction Cloud (ACC)
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDocs} className="hover:text-white transition-colors text-left cursor-pointer">
                    OpenBIM IFC4 Certified Importer
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDocs} className="hover:text-white transition-colors text-left cursor-pointer">
                    Developer REST &amp; GraphQL API
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Security & Privacy */}
            <div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
                Security &amp; Privacy
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors text-left cursor-pointer">
                    SOC 2 Type II Certified
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors text-left cursor-pointer">
                    Zero Blueprint Model Training
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors text-left cursor-pointer">
                    Air-Gapped On-Premises Engine
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors text-left cursor-pointer">
                    AES-256 Vector Encryption
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors text-left cursor-pointer">
                    Enterprise Master Services Agreement
                  </button>
                </li>
                <li>
                  <button onClick={onOpenPrivacy} className="hover:text-white transition-colors text-left cursor-pointer">
                    US Municipal Data Sovereignty
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Wordmark, Copyright, Legal */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans font-bold text-slate-300">ArchOS AEC AI Inc.</span>
              <span className="text-slate-600">·</span>
              <span>v2.5 Production Engine</span>
            </div>

            <div className="flex items-center gap-6">
              <span>© {new Date().getFullYear()} ArchOS Technologies. All rights reserved.</span>
              <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition-colors cursor-pointer">
                Terms of Service
              </button>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};
