/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KrishnaDarshanSection } from './components/KrishnaDarshanSection';
import { ServicesGrid } from './components/ServicesGrid';
import { RitualsSection } from './components/RitualsSection';
import { BlogSection } from './components/BlogSection';
import { PostersShowcase } from './components/PostersShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppPopup } from './components/WhatsAppPopup';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0102] text-[#FFFBEB] flex flex-col font-sans selection:bg-[#FACC15] selection:text-[#380307]">
        {/* Navigation Header with Translate Button at Top */}
        <Header />

        {/* Main Website Sections */}
        <main className="flex-1">
          <Hero />
          <KrishnaDarshanSection />
          <ServicesGrid />
          <RitualsSection />
          <BlogSection />
          <PostersShowcase />
          <WhyChooseUs />
          <FaqAccordion />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Timed WhatsApp Popup (6s after load) */}
        <WhatsAppPopup />

        {/* Persistent Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
