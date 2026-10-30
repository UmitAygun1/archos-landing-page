/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, AlertTriangle, Eye, Layers, Terminal, Sparkles } from 'lucide-react';

export const CADScannerShowcase: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 overflow-hidden" id="how-it-works">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Soft, large, colorful mesh gradient behind dark mockup for seamless blending */}
        <div 
          className="absolute -inset-4 sm:-inset-8 md:-inset-12 bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-purple-400/25 rounded-3xl blur-3xl opacity-75 -z-10 pointer-events-none transform -rotate-1"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-x-12 -bottom-10 h-40 bg-gradient-to-t from-blue-500/20 to-transparent blur-2xl -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* CAD/BIM Scanner Mockup Window */}
        <div className="relative rounded-2xl md:rounded-3xl bg-[#090D16] border border-slate-800 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] overflow-hidden">
          
          {/* Top Window Bar (High-Tech Dark Chrome) */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#0D1526]/90 border-b border-slate-800/80 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block"></div>
              <div className="flex items-center gap-2 text-slate-300 font-semibold truncate">
                <span className="text-blue-400">ARCHOS://SCANNER</span>
                <span className="hidden sm:inline text-slate-600">/</span>
                <span className="truncate">SOMA_RESIDENTIAL_L4_FLOORPLAN.DWG</span>
              </div>
            </div>

            {/* Telemetry Chips */}
            <div className="hidden lg:flex items-center gap-4 text-[11px] text-slate-400">
              <span className="text-slate-300 font-mono">
                COORD: <span className="text-emerald-400">37.7749°N, 122.4194°W</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-mono">
                CODE: <span className="text-blue-400">IBC 2024 + CA TITLE 24</span>
              </span>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 font-medium">SCANNER ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Sub-toolbar: Active Layer Diagnostics (Visual only) */}
          <div className="px-4 sm:px-6 py-2 bg-[#090E1A] border-b border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>LAYER 01: FIRE EGRESS (IBC §1017.2)</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>LAYER 02: ZONING SETBACK ENVELOPE</span>
              </div>
              <div className="flex items-center gap-1.5 text-rose-400">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span>LAYER 03: REDLINE RESOLUTION</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>LAYER 04: ADA §404 CLEARANCES</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-500 font-mono text-[10px]">
              <span>ZOOM: 100%</span>
              <span>GRID: 5'-0"</span>
            </div>
          </div>

          {/* Main Visual Canvas: Architectural Floor Plan with CAD Vector Graphics */}
          <div className="relative p-4 sm:p-8 md:p-10 min-h-[460px] md:min-h-[580px] bg-[#070B14] flex items-center justify-center overflow-hidden select-none">
            
            {/* Engineering Coordinate Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none" 
              style={{
                backgroundImage: `
                  linear-gradient(to right, #38bdf8 1px, transparent 1px),
                  linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
              aria-hidden="true"
            />

            {/* Sweep Scanner Beam */}
            <div className="scanner-beam absolute inset-y-0 w-32 pointer-events-none -z-0" aria-hidden="true" />

            {/* SVG Architectural Blueprint Layer */}
            <svg 
              className="w-full max-w-[1200px] h-auto drop-shadow-2xl z-10" 
              viewBox="0 0 1000 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Architectural CAD blueprint with compliance annotations"
            >
              <defs>
                {/* Glow Filters */}
                <filter id="neon-green-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="neon-red-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="neon-cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Column Line Indicators */}
              <g stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4">
                <line x1="80" y1="40" x2="80" y2="460" />
                <line x1="280" y1="40" x2="280" y2="460" />
                <line x1="480" y1="40" x2="480" y2="460" />
                <line x1="680" y1="40" x2="680" y2="460" />
                <line x1="880" y1="40" x2="880" y2="460" />

                <line x1="60" y1="80" x2="940" y2="80" />
                <line x1="60" y1="200" x2="940" y2="200" />
                <line x1="60" y1="320" x2="940" y2="320" />
                <line x1="60" y1="440" x2="940" y2="440" />
              </g>

              {/* Column Markers (Grid Bubbles) */}
              <g fill="#0F172A" stroke="#334155" strokeWidth="1" fontSize="10" fontFamily="monospace" textAnchor="middle" dominantBaseline="middle">
                <circle cx="80" cy="30" r="10" /><text x="80" y="30" fill="#94A3B8">A</text>
                <circle cx="280" cy="30" r="10" /><text x="280" y="30" fill="#94A3B8">B</text>
                <circle cx="480" cy="30" r="10" /><text x="480" y="30" fill="#94A3B8">C</text>
                <circle cx="680" cy="30" r="10" /><text x="680" y="30" fill="#94A3B8">D</text>
                <circle cx="880" cy="30" r="10" /><text x="880" y="30" fill="#94A3B8">E</text>

                <circle cx="50" cy="80" r="10" /><text x="50" y="80" fill="#94A3B8">1</text>
                <circle cx="50" cy="200" r="10" /><text x="50" y="200" fill="#94A3B8">2</text>
                <circle cx="50" cy="320" r="10" /><text x="50" y="320" fill="#94A3B8">3</text>
                <circle cx="50" cy="440" r="10" /><text x="50" y="440" fill="#94A3B8">4</text>
              </g>

              {/* Exterior Property & Setback Boundary Lines (Cyan Dashed) */}
              <g>
                {/* Lot Property Line */}
                <rect x="70" y="60" width="840" height="400" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="8 4" fill="none" opacity="0.4" />
                
                {/* Zoning Setback Line (25'-0" Setback envelope) */}
                <rect x="110" y="90" width="760" height="340" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.85" filter="url(#neon-cyan-glow)" />
                
                <text x="125" y="105" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.05em">
                  ZONING ENVELOPE SETBACK LIMIT // 25'-0" FRONT OFFSET [SF PLANNING CODE §134]
                </text>
              </g>

              {/* Exterior Concrete Building Shell & Core Walls */}
              <g stroke="#475569" strokeWidth="3" fill="#0E1626">
                {/* Main Perimeter Walls */}
                <path d="M120 110 H850 V410 H120 Z" fill="#0C1322" stroke="#64748B" strokeWidth="2.5" />
                
                {/* Elevator & Stair Core (Central Shaft) */}
                <rect x="420" y="180" width="160" height="140" fill="#131D31" stroke="#94A3B8" strokeWidth="3" />
                
                {/* Stairwell Enclosure A (Egress Destination) */}
                <rect x="730" y="120" width="100" height="110" fill="#142136" stroke="#10B981" strokeWidth="2.5" />
                
                {/* Stairwell Enclosure B (Secondary Egress) */}
                <rect x="140" y="300" width="100" height="90" fill="#142136" stroke="#475569" strokeWidth="2" />
              </g>

              {/* Structural Columns (Pillars) */}
              <g fill="#38BDF8" opacity="0.6">
                <rect x="150" y="130" width="14" height="14" />
                <rect x="290" y="130" width="14" height="14" />
                <rect x="690" y="130" width="14" height="14" />
                <rect x="150" y="270" width="14" height="14" />
                <rect x="290" y="270" width="14" height="14" />
                <rect x="690" y="270" width="14" height="14" />
                <rect x="150" y="380" width="14" height="14" />
                <rect x="290" y="380" width="14" height="14" />
                <rect x="690" y="380" width="14" height="14" />
                <rect x="820" y="380" width="14" height="14" />
              </g>

              {/* Interior Partitions & Suite Boundaries */}
              <g stroke="#334155" strokeWidth="1.5">
                {/* Demising Walls for Multi-Family Units */}
                <line x1="280" y1="110" x2="280" y2="240" />
                <line x1="120" y1="240" x2="420" y2="240" />
                
                <line x1="580" y1="240" x2="850" y2="240" />
                <line x1="680" y1="240" x2="680" y2="410" />
                
                {/* Central Corridor Boundaries */}
                <line x1="120" y1="260" x2="420" y2="260" stroke="#475569" strokeDasharray="3 3" />
                <line x1="580" y1="260" x2="850" y2="260" stroke="#475569" strokeDasharray="3 3" />
              </g>

              {/* Door Swings (AEC CAD Style) */}
              <g stroke="#64748B" strokeWidth="1" fill="none">
                {/* Unit 408 Entry */}
                <path d="M260 240 A20 20 0 0 0 280 260" />
                <line x1="260" y1="240" x2="280" y2="240" />

                {/* Stair A Egress Fire Door */}
                <path d="M750 230 A30 30 0 0 1 780 260" stroke="#10B981" strokeWidth="1.5" />
                <line x1="750" y1="230" x2="780" y2="230" stroke="#10B981" />
              </g>

              {/* --- NEON GREEN FIRE EGRESS TRAVEL ROUTE --- */}
              <g filter="url(#neon-green-glow)">
                {/* The Egress Vector Polyline from Furthest Unit to Exit Stair A */}
                <polyline 
                  points="160,180 340,180 340,250 750,250 750,190" 
                  fill="none" 
                  stroke="#10B981" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                
                {/* Directional Waypoint Dots on Path */}
                <circle cx="160" cy="180" r="4.5" fill="#10B981" />
                <circle cx="340" cy="180" r="3.5" fill="#10B981" />
                <circle cx="340" cy="250" r="3.5" fill="#10B981" />
                <circle cx="560" cy="250" r="3.5" fill="#10B981" />
                <circle cx="750" cy="250" r="3.5" fill="#10B981" />
                <circle cx="750" cy="190" r="5" fill="#10B981" stroke="#ECFDF5" strokeWidth="1.5" />
              </g>

              {/* Egress Compliance Badge on Canvas */}
              <g transform="translate(360, 220)">
                <rect x="0" y="0" width="220" height="24" rx="4" fill="#064E3B" stroke="#10B981" strokeWidth="1" opacity="0.9" />
                <text x="110" y="15" fill="#A7F3D0" fontSize="9.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  IBC §1017.2 TRAVEL DIST: 184 FT &lt; 250 FT [PASS]
                </text>
              </g>

              {/* --- NEON RED/AMBER REDLINE RESOLUTION BOX --- */}
              {/* Highlight corridor clearance check that was auto-corrected */}
              <g filter="url(#neon-red-glow)">
                <rect 
                  x="290" 
                  y="235" 
                  width="110" 
                  height="30" 
                  fill="rgba(239, 68, 68, 0.15)" 
                  stroke="#EF4444" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                  rx="3"
                />
              </g>

              {/* Redline Diagnostic Callout Box */}
              <g transform="translate(230, 290)">
                <line x1="110" y1="-25" x2="110" y2="0" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2" />
                <rect x="0" y="0" width="260" height="52" rx="6" fill="#181119" stroke="#EF4444" strokeWidth="1.2" />
                <text x="12" y="16" fill="#FCA5A5" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  [RESOLVED] IBC §1020.2 CORRIDOR WIDTH
                </text>
                <text x="12" y="30" fill="#E2E8F0" fontSize="8.5" fontFamily="monospace">
                  Existing 39.5" expanded to 44.0" code minimum.
                </text>
                <text x="12" y="44" fill="#38BDF8" fontSize="8" fontFamily="monospace">
                  Delta: +4.5" CAD wall vector auto-shifted
                </text>
              </g>

              {/* Stair Core A Label */}
              <g transform="translate(735, 135)">
                <rect x="0" y="0" width="90" height="28" rx="4" fill="#0A2218" stroke="#10B981" strokeWidth="1" />
                <text x="45" y="13" fill="#6EE7B7" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  STAIR CORE A
                </text>
                <text x="45" y="23" fill="#A7F3D0" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
                  2-HR RATED EXIT
                </text>
              </g>

              {/* Elevator Core Label */}
              <g transform="translate(450, 230)">
                <text x="50" y="16" fill="#64748B" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  ELEVATOR CORE
                </text>
                <text x="50" y="30" fill="#475569" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  HOISTWAY 3-BANK
                </text>
              </g>

              {/* Dimension Ticks & Callouts (AEC Style) */}
              <g stroke="#0284C7" strokeWidth="1" opacity="0.7">
                {/* Width dimension */}
                <line x1="120" y1="435" x2="850" y2="435" />
                <line x1="120" y1="430" x2="120" y2="440" />
                <line x1="850" y1="430" x2="850" y2="440" />
                <text x="485" y="448" fill="#38BDF8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  BUILDING FOOTPRINT LENGTH: 220'-0" [MAX PERMITTED: 240'-0"]
                </text>
              </g>
            </svg>

            {/* Static HUD Telemetry Floater (Top Right of Floorplan) */}
            <div className="absolute top-6 right-6 hidden md:block bg-[#0B1325]/90 border border-slate-700/80 rounded-xl p-3.5 backdrop-blur-md shadow-xl text-[11px] font-mono pointer-events-none max-w-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-300">
                <span className="font-semibold text-white">CORE AUDIT RUN</span>
                <span className="text-emerald-400 font-bold">100% PASS</span>
              </div>
              <div className="space-y-1.5 text-slate-400">
                <div className="flex justify-between">
                  <span>Occupancy Group:</span>
                  <span className="text-slate-200">R-2 Multi-Family</span>
                </div>
                <div className="flex justify-between">
                  <span>Sprinkler System:</span>
                  <span className="text-emerald-400">NFPA 13 Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span>Max Egress Travel:</span>
                  <span className="text-emerald-400">184' / 250' Limit</span>
                </div>
                <div className="flex justify-between">
                  <span>Setback Encroachment:</span>
                  <span className="text-emerald-400">0.00' (0 Violations)</span>
                </div>
                <div className="flex justify-between">
                  <span>Dead-End Corridor:</span>
                  <span className="text-emerald-400">14' / 20' Limit</span>
                </div>
              </div>
            </div>

            {/* Static HUD Telemetry Floater (Bottom Left of Floorplan) */}
            <div className="absolute bottom-6 left-6 hidden sm:block bg-[#0B1325]/90 border border-slate-700/80 rounded-xl p-3.5 backdrop-blur-md shadow-xl text-[11px] font-mono pointer-events-none">
              <div className="flex items-center gap-2 text-slate-300 mb-1">
                <span className="text-blue-400 font-bold">● VECTORS EVALUATED:</span>
                <span className="text-white font-semibold">14,290</span>
              </div>
              <div className="text-[10px] text-slate-400">
                Runtime: <span className="text-emerald-400">42.8s</span> · City Municipal Code: <span className="text-slate-200">SF Planning Code &amp; DBI</span>
              </div>
            </div>

          </div>

          {/* Bottom Footer Bar of Mockup */}
          <div className="px-4 sm:px-6 py-3 bg-[#080D19] border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">
                Deterministic Audit Finished: Blueprint Ready for Pre-Submission Review
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              Deterministic Verification · Hash: <span className="text-slate-400">0x8F9B2C4D</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
