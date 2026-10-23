import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faWrench, 
  faTag, 
  faCalendarCheck,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // 1. Direct page routes
    if (location.pathname === '/booking' || location.pathname === '/book') {
      setActiveTab('booking');
      return;
    }

    if (location.pathname.startsWith('/service/')) {
      setActiveTab('services');
      return;
    }

    if (location.pathname !== '/') {
      setActiveTab('');
      return;
    }

    // 2. Dynamic ScrollSpy on Homepage (/)
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page detection (Footer / Contact)
      if (scrollY + windowHeight >= docHeight - 70) {
        setActiveTab('contact');
        ticking = false;
        return;
      }

      // Detection trigger point (approx 35% from top of viewport)
      const triggerY = scrollY + windowHeight * 0.35;

      const pricingEl = document.getElementById('pricing');
      const servicesEl = document.getElementById('services');

      if (pricingEl && triggerY >= pricingEl.offsetTop) {
        setActiveTab('pricing');
      } else if (servicesEl && triggerY >= servicesEl.offsetTop) {
        setActiveTab('services');
      } else {
        setActiveTab('home');
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const handleNavClickTab = (tabId, elementId) => {
    setActiveTab(tabId);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (elementId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(elementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      if (elementId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#121c28]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar (Synchronized with active scroll section) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#dfe9fa] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1">
        <div className="flex items-center justify-around h-14">
          
          {/* 1. الرئيسية (Home) */}
          <button 
            type="button"
            onClick={() => handleNavClickTab('home', 'hero')}
            className={`flex flex-col items-center justify-center min-w-[50px] py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'home' 
                ? 'text-[#FF9F1C] font-bold scale-105' 
                : 'text-[#595f64] hover:text-[#082545] font-medium'
            }`}
          >
            <FontAwesomeIcon icon={faHouse} className="text-lg mb-0.5" />
            <span className="text-[10px]">الرئيسية</span>
            <span className={`w-1 h-1 rounded-full bg-[#FF9F1C] mt-0.5 transition-all duration-200 ${
              activeTab === 'home' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          </button>

          {/* 2. خدماتنا (Services) */}
          <button 
            type="button"
            onClick={() => handleNavClickTab('services', 'services')}
            className={`flex flex-col items-center justify-center min-w-[50px] py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'services' 
                ? 'text-[#FF9F1C] font-bold scale-105' 
                : 'text-[#595f64] hover:text-[#082545] font-medium'
            }`}
          >
            <FontAwesomeIcon icon={faWrench} className="text-lg mb-0.5" />
            <span className="text-[10px]">خدماتنا</span>
            <span className={`w-1 h-1 rounded-full bg-[#FF9F1C] mt-0.5 transition-all duration-200 ${
              activeTab === 'services' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          </button>

          {/* 3. Central Highlighted Booking Nav Item (احجز الآن) */}
          <button 
            type="button"
            onClick={() => {
              setActiveTab('booking');
              navigate('/booking');
            }}
            className={`flex flex-col items-center justify-center min-w-[58px] py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'booking' ? 'text-[#082545] font-black' : 'text-[#082545] font-bold'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md mb-0.5 transition-all duration-200 ${
              activeTab === 'booking' 
                ? 'bg-[#FF9F1C] text-[#082545] ring-2 ring-[#082545] scale-110 shadow-lg' 
                : 'bg-[#FF9F1C] text-[#082545]'
            }`}>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <span className="text-[10px]">احجز الآن</span>
            <span className={`w-1 h-1 rounded-full bg-[#082545] mt-0.5 transition-all duration-200 ${
              activeTab === 'booking' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          </button>

          {/* 4. الأسعار (Pricing) */}
          <button 
            type="button"
            onClick={() => handleNavClickTab('pricing', 'pricing')}
            className={`flex flex-col items-center justify-center min-w-[50px] py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'pricing' 
                ? 'text-[#FF9F1C] font-bold scale-105' 
                : 'text-[#595f64] hover:text-[#082545] font-medium'
            }`}
          >
            <FontAwesomeIcon icon={faTag} className="text-lg mb-0.5" />
            <span className="text-[10px]">الأسعار</span>
            <span className={`w-1 h-1 rounded-full bg-[#FF9F1C] mt-0.5 transition-all duration-200 ${
              activeTab === 'pricing' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          </button>

          {/* 5. رقم الطوارئ (19000) */}
          <a 
            href="tel:19000"
            className={`flex flex-col items-center justify-center min-w-[50px] py-1 transition-all duration-200 cursor-pointer ${
              activeTab === 'contact' 
                ? 'text-[#FF9F1C] font-bold scale-105' 
                : 'text-[#595f64] hover:text-[#082545] font-medium'
            }`}
          >
            <FontAwesomeIcon icon={faPhone} className="text-lg mb-0.5" />
            <span className="text-[10px]">19000</span>
            <span className={`w-1 h-1 rounded-full bg-[#FF9F1C] mt-0.5 transition-all duration-200 ${
              activeTab === 'contact' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          </a>

        </div>
      </nav>
    </div>
  );
}
