/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight, Sparkles, Shield, Cpu } from 'lucide-react';
import { STUDIO_APP_URL } from '../config/constants.ts';

interface HeroProps {
  onScrollToHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToHowItWorks,
}) => {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background radial highlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle category kicker with clean typography */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-50/80 border border-blue-200/60 text-xs font-semibold text-blue-800 tracking-wide">
          <Cpu className="w-3.5 h-3.5 text-blue-600" />
          <span>AUTONOMOUS AEC COMPLIANCE &amp; FEASIBILITY ENGINE</span>
        </div>

        {/* Large, bold headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 max-w-5xl mx-auto leading-[1.08] text-balance">
          Auto-verify blueprints against local building codes in{' '}
          <span className="text-blue-600 inline-block">60 seconds.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance font-normal">
          Stop waiting months for municipal rejections. ArchOS deploys specialized
          vision and legal AI agents to audit CAD/BIM files before you submit.
        </p>

        {/* Center aligned Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={STUDIO_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-150 cursor-pointer group"
          >
            <span>Open ArchOS Studio</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={onScrollToHowItWorks}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300/80 rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
          >
            How it Works
          </button>
        </div>

        {/* Checkmark badges below buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span>Compatible with AutoCAD .DWG</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span>Autodesk Revit .RVT &amp; IFC4</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span>IBC 2024 Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};
