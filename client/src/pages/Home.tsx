/*
 * HOME PAGE — Alen Danilina Portfolio
 * Design: Cinematic editorial — Dazed & Confused, Vogue Italia
 * Sections: Hero → About → Portfolio → Pricing → Client Gallery → FAQ → Contact
 */

import { useAuth } from '@/_core/hooks/useAuth';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import ClientGallerySection from '@/components/ClientGallerySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.977 0.005 75)' }}>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />

        <PortfolioSection />
        <PricingSection />
        <ClientGallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
