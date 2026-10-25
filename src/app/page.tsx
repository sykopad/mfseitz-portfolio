import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { CredentialsBadges } from '@/components/CredentialsBadges';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ApifyActorsSection } from '@/components/ApifyActorsSection';
import { Footer } from '@/components/Footer';
import { MobileQuickDock } from '@/components/MobileQuickDock';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0f] text-neutral-100 bg-grid-pattern relative selection:bg-sky-500 selection:text-black pb-16 md:pb-0">
      {/* Top ambient glow */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500 z-50" />

      {/* Hero Section */}
      <HeroSection />

      {/* Verified Systems Credentials & Provenance */}
      <CredentialsBadges />

      {/* 15 Featured Software Projects */}
      <ProjectsSection />

      {/* 37 Apify Actors & Scrapers */}
      <ApifyActorsSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Dock */}
      <MobileQuickDock />
    </main>
  );
}

