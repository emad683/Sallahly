import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faWrench, 
  faTag, 
  faCalendarDays, 
  faCalendarCheck,
  faPhone,
  faUser 
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  const location = useLocation();

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

      {/* Mobile Bottom Navigation Bar (Matching Stitch Design) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#dfe9fa] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1">
        <div className="flex items-center justify-around h-14">
          
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => `flex flex-col items-center justify-center min-w-[50px] py-1 transition-colors ${
              isActive ? 'text-[#FF9F1C] font-bold' : 'text-[#595f64] hover:text-[#082545]'
            }`}
          >
            <FontAwesomeIcon icon={faHouse} className="text-lg mb-1" />
            <span className="text-[10px]">الرئيسية</span>
          </NavLink>

          <a 
            href="/#services"
            className="flex flex-col items-center justify-center min-w-[50px] py-1 text-[#595f64] hover:text-[#082545] transition-colors"
          >
            <FontAwesomeIcon icon={faWrench} className="text-lg mb-1" />
            <span className="text-[10px]">خدماتنا</span>
          </a>

          {/* Central Highlighted Booking Nav Item */}
          <NavLink 
            to="/booking"
            className={({ isActive }) => `flex flex-col items-center justify-center min-w-[58px] py-1 transition-all ${
              isActive ? 'text-[#082545] font-black' : 'text-[#FF9F1C] hover:text-[#082545]'
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center text-sm shadow-md mb-0.5">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <span className="text-[10px] font-bold text-[#082545]">احجز الآن</span>
          </NavLink>

          <a 
            href="/#pricing"
            className="flex flex-col items-center justify-center min-w-[50px] py-1 text-[#595f64] hover:text-[#082545] transition-colors"
          >
            <FontAwesomeIcon icon={faTag} className="text-lg mb-1" />
            <span className="text-[10px]">الأسعار</span>
          </a>

          <a 
            href="tel:19000"
            className="flex flex-col items-center justify-center min-w-[50px] py-1 text-[#595f64] hover:text-[#082545] transition-colors"
          >
            <FontAwesomeIcon icon={faPhone} className="text-lg mb-1" />
            <span className="text-[10px]">19000</span>
          </a>

        </div>
      </nav>
    </div>
  );
}
