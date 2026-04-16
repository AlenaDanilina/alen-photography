/*
 * HOME PAGE — Alen Danilina Portfolio
 * Design: Cinematic editorial — Dazed & Confused, Vogue Italia
 * Sections: Hero → About → Portfolio → Pricing → FAQ → Contact
 */

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.977 0.005 75)' }}>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
