import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCertificate, 
  faBolt, 
  faIdCard, 
  faMoneyBillWave, 
  faClock, 
  faShieldHalved,
  faPlay,
  faPause,
  faArrowLeft,
  faMobileScreen
} from '@fortawesome/free-solid-svg-icons';
import { trustBadges } from '../services/data';

export default function HeroSection({ onBookClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'id-card': return faIdCard;
      case 'money-bill-wave': return faMoneyBillWave;
      case 'clock': return faClock;
      case 'shield-halved': return faShieldHalved;
      default: return faShieldHalved;
    }
  };

  return (
    <section id="hero" className="relative bg-[#082545] text-white pt-24 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF9F1C]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#0d3b6e]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (Text & CTAs & Badges in RTL) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right gap-6">
            
            {/* Top Verified Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full shadow-inner">
              <FontAwesomeIcon icon={faCertificate} className="text-[#FF9F1C] text-sm" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                المنصة الأولى المعتمدة في مصر للصيانة المنزلية
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight lg:leading-tight">
              صلحلي…{' '}
              <span className="text-[#FF9F1C] block sm:inline">ضمان، أمان، ودقة</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#E8EDF3]/90 max-w-2xl leading-relaxed">
              احجز فني صيانة موثوق لبيتك في دقائق. فنيين معتمدين بفيش جنائي، أسعار واضحة ومحددة بدون أي إكراميات، وضمان معتمد 30 يوماً على كل عملية إصلاح.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <button 
                onClick={onBookClick}
                className="w-full sm:w-auto h-13 px-8 rounded-xl bg-[#FF9F1C] hover:bg-[#ea8d10] text-[#082545] font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#FF9F1C]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>احجز دلوقتي</span>
                <FontAwesomeIcon icon={faBolt} className="text-sm" />
              </button>

              <a 
                href="#how-it-works"
                className="w-full sm:w-auto h-13 px-8 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>اعرف أكتر</span>
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              </a>
            </div>

            {/* 4 Trust Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4 pt-4 border-t border-white/10">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.id}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-xl transition-colors backdrop-blur-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FF9F1C]/15 text-[#FF9F1C] flex items-center justify-center text-base shrink-0">
                    <FontAwesomeIcon icon={getBadgeIcon(badge.iconName)} />
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-white leading-tight">
                      {badge.title}
                    </span>
                    <span className="block text-[10px] text-[#E8EDF3]/70 font-medium">
                      {badge.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Left Column: Video Mockup (Phone Mockup on Desktop, Clean 16:9 on Mobile) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            
            {/* Desktop View: Realistic Mobile Phone Mockup */}
            <div className="hidden lg:block relative">
              
              {/* Outer Phone Frame */}
              <div className="relative mx-auto w-[310px] rounded-[3.2rem] p-3.5 bg-gradient-to-b from-[#2a374a] via-[#151f2e] to-[#0b1320] border-[4px] border-[#37475d] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(255,159,28,0.15)]">
                
                {/* Speaker Notch / Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#082545] rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#15202e] border border-white/10" />
                  <div className="w-8 h-1.5 rounded-full bg-[#15202e]" />
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[2.6rem] overflow-hidden bg-black aspect-[9/18] flex flex-col justify-between border border-white/10">
                  
                  {/* Status Bar */}
                  <div className="h-9 px-6 pt-2 flex items-center justify-between text-[11px] text-white/80 font-montserrat z-20">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faMobileScreen} className="text-[10px]" />
                    </div>
                  </div>

                  {/* 16:9 Video Mockup Inside Phone Screen */}
                  <div className="relative w-full aspect-video my-auto overflow-hidden bg-slate-900 group cursor-pointer" onClick={togglePlay}>
                    {/* Background poster/image */}
                    <img 
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                      alt="فني صيانة صلحلي المعتمد"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#082545]/50 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center">
                      <button 
                        aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل الفيديو"}
                        className="w-14 h-14 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center shadow-lg shadow-[#FF9F1C]/40 group-hover:scale-110 transition-transform"
                      >
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-xl ml-0.5" />
                      </button>
                      <span className="text-xs font-bold text-white mt-3 drop-shadow">
                        فيديو صلحلي التعريفي (16:9)
                      </span>
                      <span className="text-[10px] text-white/80 mt-0.5">
                        اضغط للمشاهدة
                      </span>
                    </div>
                  </div>

                  {/* In-app mockup bottom bar */}
                  <div className="p-4 bg-[#082545]/90 border-t border-white/10 flex items-center justify-between text-xs text-white/90">
                    <span className="font-bold">تطبيق صلحلي مصر</span>
                    <span className="text-[10px] text-[#FF9F1C] bg-white/10 px-2 py-0.5 rounded-full font-semibold">
                      متاح الآن
                    </span>
                  </div>

                  {/* Home indicator bar */}
                  <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mb-2" />
                </div>
              </div>

              {/* Tag below desktop mockup */}
              <div className="text-center mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#E8EDF3]/70 font-semibold">
                  <FontAwesomeIcon icon={faMobileScreen} className="text-[#FF9F1C]" />
                  شاهد تجربة الحجز من هاتفك المحمول
                </span>
              </div>
            </div>

            {/* Mobile View: High Quality 16:9 Video Card */}
            <div className="block lg:hidden w-full max-w-md mx-auto">
              <div 
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/15 group cursor-pointer bg-slate-900"
                onClick={togglePlay}
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                  alt="فني صيانة صلحلي"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#082545]/55 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center">
                  <button 
                    aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل الفيديو"}
                    className="w-14 h-14 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center shadow-lg shadow-[#FF9F1C]/40 group-hover:scale-110 transition-transform"
                  >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-xl ml-0.5" />
                  </button>
                  <span className="text-xs font-bold text-white mt-2.5 drop-shadow">
                    شاهد كيف نوفر لك تجربة صيانة آمنة
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
