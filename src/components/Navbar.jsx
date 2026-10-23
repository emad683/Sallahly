import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerY = scrollY + windowHeight * 0.35;

      const sectionIds = ['faq', 'pricing', 'why-us', 'how-it-works', 'services'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && triggerY >= el.offsetTop) {
          setActiveSection(id);
          ticking = false;
          return;
        }
      }

      setActiveSection('hero');
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

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#082545]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-[#082545]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <Link to="/" className="flex items-center group py-2" aria-label="الرئيسية - صلحلي">
            <img 
              src={logoWhite} 
              alt="صلحلي Sallahly" 
              width="48"
              height="48"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('hero')} 
              className={`text-sm transition-colors cursor-pointer ${
                activeSection === 'hero' ? 'text-[#FF9F1C] font-bold' : 'text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold'
              }`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className={`text-sm transition-colors cursor-pointer ${
                activeSection === 'services' ? 'text-[#FF9F1C] font-bold' : 'text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold'
              }`}
            >
              خدماتنا
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className={`text-sm transition-colors cursor-pointer ${
                activeSection === 'how-it-works' ? 'text-[#FF9F1C] font-bold' : 'text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold'
              }`}
            >
              ازاي بنشتغل؟
            </button>
            <button 
              onClick={() => handleNavClick('why-us')} 
              className={`text-sm transition-colors cursor-pointer ${
                activeSection === 'why-us' ? 'text-[#FF9F1C] font-bold' : 'text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold'
              }`}
            >
              ليه صلحلي؟
            </button>
            <button 
              onClick={() => handleNavClick('pricing')} 
              className={`text-sm transition-colors cursor-pointer ${
                activeSection === 'pricing' ? 'text-[#FF9F1C] font-bold' : 'text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold'
              }`}
            >
              الأسعار
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className={`text-sm transition-colors cursor-pointer ${
                activeSection === 'faq' ? 'text-[#FF9F1C] font-bold' : 'text-[#E8EDF3] hover:text-[#FF9F1C] font-semibold'
              }`}
            >
              الأسئلة الشائعة
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:19000" 
              aria-label="اتصل بخدمة العملاء 19000"
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
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة الرئيسية"}
              aria-expanded={mobileMenuOpen}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="text-lg" />
            </button>
          </div>
        </div>
      </div>

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
