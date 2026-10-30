/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Scan, 
  Scale, 
  Edit3, 
  Box, 
  TrendingUp, 
  Maximize2, 
  CheckCircle2, 
  ArrowUpRight,
  Code2,
  FileSpreadsheet
} from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative" id="ai-agents">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Autonomous AEC Agents
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 text-balance leading-tight">
            The Multi-Agent Intelligence Core
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal text-balance">
            Instead of generic chatbots, ArchOS runs specialized deterministic AI models.
            Each agent handles a specific engineering or regulatory domain with mathematical precision.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Vision & Geometry Parser (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Scan className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                Vision &amp; Geometry Parser
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Extracts raw DWG, RVT, and IFC vector primitives into mathematical spatial graphs.
                Recognizes wall centerlines, door swings, stair tread depths, and structural grids with sub-millimeter precision.
              </p>
            </div>

            {/* Abstract CAD Vector Parsing Graphic */}
            <div className="mt-6 pt-6 border-t border-slate-100 relative">
              <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 overflow-hidden relative border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-3 mb-3 border-b border-slate-800">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>VECTOR SPATIAL GRAPH [REVIT_L3_EXTRACT]</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">14,290 NODES MAPPED</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">WALL CENTERLINES</div>
                    <div className="text-white font-semibold mt-1">428 Polylines</div>
                    <div className="text-emerald-400 text-[10px] mt-0.5">Tolerance: 0.001'</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">EGRESS DOOR SWINGS</div>
                    <div className="text-white font-semibold mt-1">94 Clear Openings</div>
                    <div className="text-emerald-400 text-[10px] mt-0.5">IBC §1010.1.1 Pass</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">STAIR GEOMETRY</div>
                    <div className="text-white font-semibold mt-1">7" Riser / 11" Tread</div>
                    <div className="text-emerald-400 text-[10px] mt-0.5">IBC §1011.5.2 Pass</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-slate-500 text-[10px]">FIRE RATING GRAPH</div>
                    <div className="text-white font-semibold mt-1">2-HR Core Shafts</div>
                    <div className="text-emerald-400 text-[10px] mt-0.5">UL U419 Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Municipal Zoning & Reasoning */}
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                Municipal Zoning &amp; Reasoning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ingests local Land Development Codes across 3,000+ US cities.
                Translates dense municipal prose into deterministic rule engines for FAR, setbacks, and height limits.
              </p>
            </div>

            {/* Abstract Regulatory Rule AST element */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-2">
                  <span>JURISDICTION: SAN FRANCISCO, CA</span>
                  <span className="text-blue-600">SF PLANNING CODE</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-200/50">
                    <span>Zoning District:</span>
                    <span className="font-semibold text-slate-900">C-3-O (SD) Downtown SOMA</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/50">
                    <span>Base FAR Allowed:</span>
                    <span className="font-semibold text-slate-900">5.00:1 (Bonus: 8.00:1)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Max Building Height:</span>
                    <span className="font-semibold text-slate-900">120'-0" Envelope</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Instant Redline & Auto-Fix */}
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Edit3 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                Instant Redline &amp; Auto-Fix
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Highlights compliance violations directly onto your CAD drawings with automated vector adjustments.
                Zero redlines submitted to the city planning desk.
              </p>
            </div>

            {/* Redline comparison UI element */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="bg-slate-900 text-slate-200 rounded-xl p-3.5 border border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-rose-400 mb-2">
                  <span>DETECTED CODE VIOLATION</span>
                  <span className="bg-rose-950/80 text-rose-300 px-1.5 py-0.5 rounded border border-rose-800/60 font-semibold">IBC §1020.2</span>
                </div>
                <div className="text-[11px] text-slate-400 mb-2">
                  Corridor width: <span className="line-through text-rose-400">38.5"</span> → <span className="text-emerald-400 font-bold">44.0" (Auto-realigned)</span>
                </div>
                <div className="text-[10px] text-blue-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CAD layer revision created automatically</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 3D Parametric Massing */}
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Box className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                3D Parametric Massing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generates hundreds of zoning-compliant 3D building envelopes in seconds.
                Maximizes rentable square footage while respecting solar step-backs and daylight plane angles.
              </p>
            </div>

            {/* Abstract 3D Envelope wireframe diagram */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl p-3.5 border border-slate-800 text-white font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span>MASSING VARIANT #03</span>
                  <span className="text-cyan-400 font-semibold">+18,400 RSF YIELD</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300 py-1">
                  <span>Daylight Plane:</span>
                  <span className="text-emerald-400 font-semibold">1:2 Angle Cleared</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300 py-1">
                  <span>Efficiency Factor:</span>
                  <span className="text-cyan-400 font-semibold">87.4% Net-to-Gross</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Financial ROI Feasibility */}
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                Financial ROI Feasibility
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connects geometry directly to pro-forma yield models.
                Incorporates regional RSMeans construction cost data and unit-mix sensitivity modeling.
              </p>
            </div>

            {/* Financial yield pro-forma UI element */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-slate-900 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-2">
                  <span>PRO-FORMA FINANCIAL YIELD</span>
                  <span className="text-emerald-600 font-bold">+22.4% IRR</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span>Est. Hard Cost (RSMeans):</span>
                    <span className="font-semibold text-slate-900">$348 / sq.ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gross Development Value:</span>
                    <span className="font-semibold text-slate-900">$84.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stabilized Cap Rate:</span>
                    <span className="font-semibold text-emerald-600">6.15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Multi-Parcel Assemblage (Spans 1 or full) */}
          <div className="lg:col-span-3 group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
            <div className="max-w-2xl">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Maximize2 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                Multi-Parcel Assemblage
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Simulates real-time lot consolidations, rights-of-way air rights acquisitions, and alley vacations.
                Discovers hidden density bonuses by intelligently evaluating contiguous parcels under unified municipal zoning.
              </p>
            </div>

            {/* Abstract Assemblage Diagram */}
            <div className="w-full md:w-auto shrink-0 bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs font-mono text-slate-300">
              <div className="text-[11px] text-slate-400 mb-3 flex items-center justify-between gap-4">
                <span>PARCEL CONSOLIDATION ENGINE</span>
                <span className="text-violet-400 font-semibold">+65% FAR MULTIPLIER</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500">PARCEL A</div>
                  <div className="font-semibold text-white">0.45 AC</div>
                  <div className="text-[9px] text-slate-400">FAR 3.0</div>
                </div>
                <div className="text-slate-500 font-bold">+</div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500">PARCEL B</div>
                  <div className="font-semibold text-white">0.62 AC</div>
                  <div className="text-[9px] text-slate-400">FAR 3.0</div>
                </div>
                <div className="text-emerald-400 font-bold">→</div>
                <div className="bg-blue-950/80 p-2.5 rounded border border-blue-800 text-center">
                  <div className="text-[10px] text-blue-300">ASSEMBLED SITE</div>
                  <div className="font-bold text-emerald-400">1.07 AC</div>
                  <div className="text-[9px] text-emerald-300">FAR 6.5 (BONUS)</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
