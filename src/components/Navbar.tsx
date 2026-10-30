/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, ShieldCheck, FileCode2, ChevronRight, X } from 'lucide-react';
import { STUDIO_APP_URL } from '../config/constants.ts';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenDocs: () => void;
  onOpenSupportedCodes: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenDocs,
  onOpenSupportedCodes,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Left: Brand Wordmark with v2.5 Engine dot */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/"
            className="flex items-center gap-2.5 text-slate-900 group transition-opacity"
            aria-label="ArchOS Home"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <Layers className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-950 font-sans">
              ArchOS
            </span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              AEC AI
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20"></span>
            <span className="text-xs font-medium text-slate-600">v2.5 Engine</span>
          </div>
        </div>

        {/* Center / Navigation & Actions Cluster: All 6 items grouped together with proportional spacing */}
        <nav
          className="hidden md:flex items-center justify-center flex-1 gap-5 lg:gap-6 xl:gap-7 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          <a
            href="#how-it-works"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="#ai-agents"
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            AI Agents
          </a>
          <button
            onClick={onOpenSupportedCodes}
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Supported Codes
          </button>
          <button
            onClick={onOpenDocs}
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Documentation
          </button>
          <button
            onClick={onOpenLogin}
            className="text-slate-700 hover:text-slate-950 transition-colors cursor-pointer whitespace-nowrap shrink-0 px-1 py-1"
          >
            Log In
          </button>
          <a
            href={STUDIO_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shadow-sm whitespace-nowrap shrink-0"
          >
            Launch Studio
          </a>
        </nav>

        {/* Right side spacer on xl to keep the cluster optically balanced directly above hero */}
        <div className="hidden xl:block w-[180px] shrink-0 pointer-events-none" aria-hidden="true" />

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <div className="space-y-1 w-5">
                <span className="block h-0.5 w-5 bg-slate-800"></span>
                <span className="block h-0.5 w-5 bg-slate-800"></span>
                <span className="block h-0.5 w-5 bg-slate-800"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1"
          >
            How It Works
          </a>
          <a
            href="#ai-agents"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 py-1"
          >
            AI Agents
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSupportedCodes();
            }}
            className="block w-full text-left text-sm font-medium text-slate-700 py-1"
          >
            Supported Codes
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDocs();
            }}
            className="block w-full text-left text-sm font-medium text-slate-700 py-1"
          >
            Documentation
          </button>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="text-sm font-medium text-blue-600"
            >
              Sign In to ArchOS
            </button>
            <a
              href={STUDIO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg inline-flex items-center"
            >
              Open Studio
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
