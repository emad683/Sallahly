import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function Home() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HeroSection onBookClick={scrollToServices} />
      <ServicesSection />
      <HowItWorks />
      <WhyUs />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection onBookClick={scrollToServices} />
    </div>
  );
}
