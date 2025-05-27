/**
 * Home Page Component
 *
 * Main landing page of the website
 * Assembles all homepage sections in the correct order
 */
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import QuickInfo from "@/components/quick-info";
import AboutSection from "@/components/about-section";
import TechnologySection from "@/components/technology-section";
import FeaturedProducts from "@/components/featured-products";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <QuickInfo />
        <AboutSection />
        <TechnologySection />
        <FeaturedProducts />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
