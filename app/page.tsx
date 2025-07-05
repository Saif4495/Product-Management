"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductShowcase } from "@/components/product-showcase";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppFAB } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Floating Action Button */}
      <WhatsAppFAB />
    </div>
  );
}
