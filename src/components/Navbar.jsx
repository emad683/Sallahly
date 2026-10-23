import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faXmark, 
  faCalendarCheck,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import logoWhite from '../assets/images/logo-icon-white.svg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#082545]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-[#082545]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group py-2">
            <img 
              src={logoWhite} 
              alt="صلحلي Sallahly" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-sm transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-sm transition-colors cursor-pointer"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className="text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-sm transition-colors cursor-pointer"
            >
              ازاي بنشتغل؟
            </button>
            <button 
              onClick={() => handleNavClick('why-us')} 
              className="text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-sm transition-colors cursor-pointer"
            >
              ليه صلحلي؟
            </button>
            <button 
              onClick={() => handleNavClick('pricing')} 
              className="text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-sm transition-colors cursor-pointer"
            >
              الأسعار
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-sm transition-colors cursor-pointer"
            >
              الأسئلة الشائعة
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:19000" 
              className="flex items-center gap-2 text-white/90 hover:text-[#FF9F1C] text-sm font-semibold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                <FontAwesomeIcon icon={faPhone} />
              </div>    
            </a>

            <Link 
              to="/booking"
              className="h-11 px-6 rounded-lg bg-[#FF9F1C] hover:bg-[#ea8d10] text-[#082545] font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#FF9F1C]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span>احجز الآن</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link 
              to="/booking"
              className="h-9 px-3.5 rounded-lg bg-[#FF9F1C] text-[#082545] font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="text-[11px]" />
              <span>احجز</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="القائمة"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#082545] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="text-right text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-base py-2 border-b border-white/5"
          >
            الرئيسية
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="text-right text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-base py-2 border-b border-white/5"
          >
            خدماتنا
          </button>
          <button 
            onClick={() => handleNavClick('how-it-works')} 
            className="text-right text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-base py-2 border-b border-white/5"
          >
            ازاي بنشتغل؟
          </button>
          <button 
            onClick={() => handleNavClick('why-us')} 
            className="text-right text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-base py-2 border-b border-white/5"
          >
            ليه صلحلي؟
          </button>
          <button 
            onClick={() => handleNavClick('pricing')} 
            className="text-right text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-base py-2 border-b border-white/5"
          >
            الأسعار
          </button>
          <button 
            onClick={() => handleNavClick('faq')} 
            className="text-right text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold text-base py-2 border-b border-white/5"
          >
            الأسئلة الشائعة
          </button>

          <div className="pt-2 flex flex-col gap-3">
            <Link 
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-12 rounded-lg bg-[#FF9F1C] text-[#082545] font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span>احجز موعد فني صيانة</span>
            </Link>
            <a 
              href="tel:19000"
              className="w-full h-11 rounded-lg bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span>اتصل بنا: 19000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
