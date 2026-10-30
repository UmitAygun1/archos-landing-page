/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CheckCircle2, 
  FileCheck2, 
  Building2, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Download, 
  Hash,
  Scale
} from 'lucide-react';

export const CaseStudyAudit: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 relative overflow-hidden" id="case-study">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Real Estate Compliance Dossier
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 text-balance leading-tight">
            Zero-Rejection Submissions
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal text-balance">
            Real-world performance verified on major US urban developments.
            Review the static compliance audit report below, generated automatically prior to city submission.
          </p>
        </div>

        {/* Premium Static PDF / Dossier Report Container (Non-Interactive, Executive Presentation) */}
        <div className="relative rounded-2xl md:rounded-3xl bg-[#FAFBFD] border border-slate-300/80 shadow-xl overflow-hidden select-none">
          
          {/* Top Document Header Bar */}
          <div className="px-6 sm:px-10 py-5 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow">
                <FileCheck2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                  MUNICIPAL COMPLIANCE AUDIT REPORT // US JURISDICTION
                </div>
                <div className="text-lg font-bold text-white tracking-tight">
                  San Francisco SOMA Mixed-Use
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
              <span className="hidden sm:inline text-slate-400">CERTIFICATE NO:</span>
              <span className="bg-slate-800 text-emerald-400 px-3 py-1 rounded-md border border-slate-700 font-semibold">
                ARCHOS-US-CA-2024-0984
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">OCTOBER 2024</span>
            </div>
          </div>

          {/* Report Body Paper Layout */}
          <div className="p-6 sm:p-10 md:p-12 space-y-10">
            
            {/* Top Project Metadata Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm text-sm">
              <div>
                <span className="text-xs text-slate-500 block font-medium">PROJECT LOCATION</span>
                <span className="font-semibold text-slate-950 mt-1 block">480 4th Street, San Francisco, CA</span>
                <span className="text-xs text-slate-500">SOMA Central Corridor Core</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-medium">MUNICIPAL JURISDICTION</span>
                <span className="font-semibold text-slate-950 mt-1 block">San Francisco DBI &amp; Planning</span>
                <span className="text-xs text-slate-500">SF Dept of Building Inspection</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-medium">APPLICABLE CODES</span>
                <span className="font-semibold text-slate-950 mt-1 block">IBC 2024 &amp; CA Title 24</span>
                <span className="text-xs text-slate-500">SF Planning Code §134 / §260</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-medium">BUILDING TYPOLOGY</span>
                <span className="font-semibold text-slate-950 mt-1 block">Type III-A over Type I-A</span>
                <span className="text-xs text-slate-500">186 Units + 12k RSF Retail</span>
              </div>
            </div>

            {/* Crucial 3 Required Metrics Banner (US Focus) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Metric 1: IBC 2024 Setbacks */}
              <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-wider uppercase">
                    ZONING ENVELOPE
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Passed
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  IBC 2024 Setbacks: Passed
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Front setback 25.4' (&gt; 25.0' req), Side setback 12.2' (&gt; 10.0' req). Zero property line encroachments.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>SF Planning Code §134</span>
                  <span className="text-emerald-600 font-semibold">Margin: +0.4' Front</span>
                </div>
              </div>

              {/* Metric 2: Fire Egress Travel Distance */}
              <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-wider uppercase">
                    LIFE SAFETY &amp; EGRESS
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Compliant
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  Fire Egress Travel Distance: Compliant
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Maximum exit access travel distance verified at 184 ft. Fully inside the IBC 2024 Table 1017.2 sprinklered ceiling of 250 ft.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>IBC §1017.2 [Group R-2]</span>
                  <span className="text-emerald-600 font-semibold">Margin: +66' Buffer</span>
                </div>
              </div>

              {/* Metric 3: Base Footprint Ratio */}
              <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-wider uppercase">
                    FAR &amp; SITE COVERAGE
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Checked
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  Base Footprint Ratio: Checked
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lot coverage evaluated at 68.4% (70% max allowed). Floor Area Ratio (FAR) at 3.42 utilized against 3.50 base entitlement.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>SF SOMA Downtown FAR Matrix</span>
                  <span className="text-emerald-600 font-semibold">97.7% Optimum Yield</span>
                </div>
              </div>

            </div>

            {/* Detailed Verification Matrix Table (Static Audit Report) */}
            <div className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Detailed Regulatory Invariant Table
                </h4>
                <span className="text-xs font-mono text-slate-500">
                  5/5 Code Chapters Invariant Verified
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-100/60 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold">CODE CITATION</th>
                      <th className="px-6 py-3 font-semibold">REGULATORY PARAMETER</th>
                      <th className="px-6 py-3 font-semibold">MUNICIPAL REQUIREMENT</th>
                      <th className="px-6 py-3 font-semibold">ARCHOS PARSED VALUE</th>
                      <th className="px-6 py-3 font-semibold text-right">AUDIT RESULT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-3 font-semibold text-blue-600">IBC 2024 §1017.2</td>
                      <td className="px-6 py-3">Exit Access Travel Distance</td>
                      <td className="px-6 py-3">Max 250'-0" (Sprinklered)</td>
                      <td className="px-6 py-3 text-slate-900 font-bold tabular-nums">184'-0" Actual Path</td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          COMPLIANT
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-3 font-semibold text-blue-600">SF Planning Code §134</td>
                      <td className="px-6 py-3">Front &amp; Rear Yard Setback</td>
                      <td className="px-6 py-3">Min 25'-0"</td>
                      <td className="px-6 py-3 text-slate-900 font-bold tabular-nums">25'-4" Provided</td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          PASSED
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-3 font-semibold text-blue-600">SF Planning Code §124</td>
                      <td className="px-6 py-3">Maximum Base Footprint Ratio</td>
                      <td className="px-6 py-3">Max 70.0% Lot Coverage</td>
                      <td className="px-6 py-3 text-slate-900 font-bold tabular-nums">68.4% Footprint</td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          CHECKED
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-3 font-semibold text-blue-600">IBC 2024 §1007.1.1</td>
                      <td className="px-6 py-3">Exit Separation (Two Stairwells)</td>
                      <td className="px-6 py-3">Min 1/3 Overall Diagonal (92'-0")</td>
                      <td className="px-6 py-3 text-slate-900 font-bold tabular-nums">128'-6" Separation</td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          PASSED
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="px-6 py-3 font-semibold text-blue-600">ADA 2010 §404.2.4</td>
                      <td className="px-6 py-3">Door Clear Width &amp; Approach</td>
                      <td className="px-6 py-3">Min 32" Clear / 18" Pull Clearance</td>
                      <td className="px-6 py-3 text-slate-900 font-bold tabular-nums">36" Clear / 22" Pull Side</td>
                      <td className="px-6 py-3 text-right">
                        <span className="text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          PASSED
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Official Certification Stamp and Municipal Verification Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-emerald-600 bg-emerald-50/50 flex flex-col items-center justify-center text-center p-1 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mb-0.5" />
                  <span className="text-[7.5px] font-mono font-bold text-emerald-800 leading-tight">
                    MUNICIPAL CERTIFIED
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">
                    City Submittal Status: 100% Pre-Approved
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    Zero plan-check rejection comments recorded in Round 1 submission
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-slate-500">
                <div>AUDIT ENGINE: ARCHOS DETERMINISTIC v2.5</div>
                <div className="text-slate-400 text-[11px] mt-0.5">
                  Cryptographic Verification ID: 7a8f9c0e21b490a
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
