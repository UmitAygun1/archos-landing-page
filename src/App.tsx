/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CADScannerShowcase } from './components/CADScannerShowcase.tsx';
import { BentoFeatures } from './components/BentoFeatures.tsx';
import { CaseStudyAudit } from './components/CaseStudyAudit.tsx';
import { BottomCTAAndFooter } from './components/BottomCTAAndFooter.tsx';
import { LoginModal, InfoModal } from './components/Modals.tsx';

// Merkezi Studio yönlendirme sabiti:
export const STUDIO_APP_URL = https://archos-main.vercel.app/

export default function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState<{
    isOpen: boolean;
    title: string;
    category: string;
    items: { label: string; desc: string }[];
  }>({
    isOpen: false,
    title: '',
    category: '',
    items: [],
  });

  const handleOpenSupportedCodes = (selectedCode?: string) => {
    setInfoModalData({
      isOpen: true,
      category: 'MUNICIPAL REGULATORY DIRECTORY',
      title: selectedCode || 'Supported US Building Codes & Municipal Standards',
      items: [
        {
          label: 'IBC 2024 & 2021 (International Building Code)',
          desc: 'Comprehensive deterministic parsing for Chapter 10 (Means of Egress), Chapter 7 (Fire and Smoke Protection), and Chapter 5 (General Building Heights and Areas).',
        },
        {
          label: 'San Francisco Planning Code (Zoning & DBI Bulletins)',
          desc: 'Automated compliance with SF Planning Code (Zoning, Rear Yard §134, Height & Bulk §260, SOMA Central Corridor Plan), and SF DBI standards.',
        },
        {
          label: 'San Francisco Department of Building Inspection (SF DBI)',
          desc: 'Automated compliance with SF DBI Information Sheets, Structural & Fire Safety Bulletins, Shadow Analysis (Section 295), and Seismic Hazard Zone screening.',
        },
        {
          label: 'California Title 24 & CBC 2022/2025',
          desc: 'California Building Standards Code compliance, including Part 2 (CBC) egress rules, Part 6 (Energy Standards), and Part 11 (CALGreen).',
        },
        {
          label: 'New York City Zoning Resolution (ZR) & 2022 NYC BC',
          desc: 'Full Sky Exposure Plane, Tower-on-a-Base, and Floor Area Ratio bonus rules across Manhattan, Brooklyn, and Queens zoning lots.',
        },
        {
          label: 'ADA Standards for Accessible Design 2010 & ICC A117.1',
          desc: 'Sub-inch geometric verification of door approaches, latch clearances, turning diameters (60" circles and T-shaped turn spaces), and ramp slope ratios.',
        },
      ],
    });
  };

  const handleOpenDocs = () => {
    setInfoModalData({
      isOpen: true,
      category: 'ENGINEERING SPECIFICATIONS',
      title: 'ArchOS SDK & AEC Platform Documentation',
      items: [
        {
          label: 'Autodesk Revit Live Add-In (2023-2026)',
          desc: 'Performs background real-time compliance audits inside Revit. Instantly draws colored 3D bounding boxes around non-compliant walls, doors, and stair cores.',
        },
        {
          label: 'AutoCAD .DWG Deterministic Engine',
          desc: 'Parses binary DWG primitives into topological planar boundary representations. Executes graph traversal for IBC egress exit routes in under 5 seconds.',
        },
        {
          label: 'OpenBIM IFC4 Certification',
          desc: 'Full IFC4 Add2 TC1 certified ingestion engine for ArchiCAD, Vectorworks, and Tekla Structures BIM models.',
        },
        {
          label: 'GraphQL & REST Webhooks API',
          desc: 'Programmatically trigger municipal audit batches in your continuous integration (CI) pipeline whenever new architectural revision commits are pushed.',
        },
      ],
    });
  };

  const handleOpenPrivacy = () => {
    setInfoModalData({
      isOpen: true,
      category: 'SECURITY & TRUST ARCHITECTURE',
      title: 'Enterprise Blueprint Privacy & SOC-2 Compliance',
      items: [
        {
          label: 'Zero Model Training on Customer Blueprints',
          desc: 'Your architectural IP, CAD geometry, and pro-forma financials are never utilized to train AI models. Blueprints are processed in ephemeral memory and discarded.',
        },
        {
          label: 'SOC 2 Type II Audited & Certified',
          desc: 'ArchOS maintains annual SOC 2 Type II audit compliance covering Security, Availability, and Confidentiality trust principles.',
        },
        {
          label: 'Air-Gapped & Single-Tenant Dedicated VPC',
          desc: 'Enterprise deployments can run inside dedicated AWS GovCloud or isolated Kubernetes clusters with strict customer-managed KMS encryption keys.',
        },
      ],
    });
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Global Ambient Glow Highlights across the page canvas (-z-10, pointer-events-none) */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[900px] -left-40 w-[800px] h-[800px] bg-blue-600/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[1800px] -right-40 w-[850px] h-[850px] bg-indigo-500/[0.04] blur-[150px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-[2800px] left-1/4 w-[900px] h-[700px] bg-blue-500/[0.03] blur-[130px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* 1. Navbar (Light Theme) */}
      <Navbar
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenDocs={handleOpenDocs}
        onOpenSupportedCodes={() => handleOpenSupportedCodes()}
      />

      {/* Main Content Area (Max width 1400px throughout) */}
      <main className="flex-1 relative">
        {/* 2. Hero Section (Light Theme) */}
        <Hero
          onScrollToHowItWorks={scrollToHowItWorks}
        />

        {/* 3. CAD/BIM Scanner Showcase (Floating on Light Theme with soft mesh gradient) */}
        <CADScannerShowcase />

        {/* 4. Features / Agent Pipeline (Bento Box Grid) */}
        <BentoFeatures />

        {/* 5. Case Study Audit Showcase (US Market Focus, Static PDF Report Layout) */}
        <CaseStudyAudit />

        {/* 6. Bottom CTA & Footer (Dark Theme with single CTA button) */}
        <BottomCTAAndFooter
          onOpenCodeModal={(code) => handleOpenSupportedCodes(code)}
          onOpenDocs={handleOpenDocs}
          onOpenPrivacy={handleOpenPrivacy}
        />
      </main>

      {/* Interactive Modals */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <InfoModal
        isOpen={infoModalData.isOpen}
        onClose={() => setInfoModalData((prev) => ({ ...prev, isOpen: false }))}
        title={infoModalData.title}
        category={infoModalData.category}
        items={infoModalData.items}
      />
    </div>
  );
}
