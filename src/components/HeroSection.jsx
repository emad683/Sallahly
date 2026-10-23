import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  faMobileScreen,
  faVolumeHigh,
  faVolumeXmark,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { trustBadges, promoVideoConfig } from '../services/data.js';

export default function HeroSection({ onBookClick }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    // Attempt auto-play on mount
    const playPromiseDesktop = desktopVideoRef.current?.play();
    if (playPromiseDesktop !== undefined) {
      playPromiseDesktop.catch(() => {
        // Autoplay policy fallback
      });
    }
    const playPromiseMobile = mobileVideoRef.current?.play();
    if (playPromiseMobile !== undefined) {
      playPromiseMobile.catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  const togglePlay = () => {
    const activeVideo = window.innerWidth >= 1024 ? desktopVideoRef.current : mobileVideoRef.current;
    if (activeVideo) {
      if (activeVideo.paused) {
        activeVideo.play();
        setIsPlaying(true);
      } else {
        activeVideo.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const activeVideo = window.innerWidth >= 1024 ? desktopVideoRef.current : mobileVideoRef.current;
    if (activeVideo) {
      activeVideo.muted = !activeVideo.muted;
      setIsMuted(activeVideo.muted);
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Right Column (Text & CTAs & Badges in RTL) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-right gap-6">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight lg:leading-tight">
              صلحلي…{' '}
              <span className="text-[#FF9F1C] block sm:inline">ضمان، أمان، ودقة</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#E8EDF3]/90 max-w-xl leading-relaxed">
              احجز فني صيانة موثوق لبيتك في دقائق. فنيين معتمدين بفيش جنائي، أسعار واضحة ومحددة بدون أي إكراميات، وضمان معتمد 30 يوماً على كل عملية إصلاح.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <Link 
                to="/booking"
                className="w-full sm:w-auto h-13 px-8 rounded-lg bg-[#FF9F1C] hover:bg-[#ea8d10] text-[#082545] font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-[#FF9F1C]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>احجز دلوقتي</span>
                <FontAwesomeIcon icon={faCalendarCheck} className="text-sm" />
              </Link>

              <a 
                href="#services"
                className="w-full sm:w-auto h-13 px-8 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>استكشف الخدمات</span>
                <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              </a>
            </div>

            {/* 4 Trust Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4 pt-4 border-t border-white/10">
              {trustBadges.map((badge) => (
                <div 
                  key={badge.id}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <div className="w-9 h-9 rounded-md bg-[#FF9F1C]/15 text-[#FF9F1C] flex items-center justify-center text-base shrink-0">
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

          {/* Left Column: Landscape Phone Mockup (16:9 Orientation on Desktop) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            
            {/* Desktop View: Rotated Phone in Landscape (16:9) */}
            <div className="hidden lg:block relative w-full max-w-[530px] xl:max-w-[560px]">
              
              {/* External hardware buttons (Top edge in landscape) */}
              <div className="absolute -top-1.5 right-20 w-10 h-1.5 bg-[#3d4f68] rounded-t-sm" />
              <div className="absolute -top-1.5 right-32 w-10 h-1.5 bg-[#3d4f68] rounded-t-sm" />
              <div className="absolute -top-1.5 left-20 w-12 h-1.5 bg-[#3d4f68] rounded-t-sm" />

              {/* Outer Phone Frame - Proportional 16:9 Landscape Dimensions */}
              <div className="relative mx-auto w-full rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#2a374a] via-[#151f2e] to-[#0b1320] border-[4px] border-[#37475d] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(255,159,28,0.18)] flex items-center">
                
                {/* Left Bezel Detail */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a2533] border border-white/10 shrink-0 ml-1.5" />

                {/* Inner Screen with Exact 16:9 Aspect Ratio */}
                <div 
                  className="relative flex-1 rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-white/10 group cursor-pointer"
                  onClick={togglePlay}
                >
                  {/* Native HTML5 Video (No YouTube UI/Branding) */}
                  <video
                    ref={desktopVideoRef}
                    src={promoVideoConfig.videoSrc}
                    poster={promoVideoConfig.thumbnail}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Custom Paused Overlay with Play Icon */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-[#082545]/45 backdrop-blur-[1px] flex items-center justify-center transition-all animate-in fade-in duration-200">
                      <div className="w-16 h-16 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center shadow-xl shadow-[#FF9F1C]/40 hover:scale-110 active:scale-95 transition-transform">
                        <FontAwesomeIcon icon={faPlay} className="text-2xl ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Subtle Audio Mute/Unmute Toggle in Corner */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-xs transition-opacity opacity-0 group-hover:opacity-100 backdrop-blur-sm z-30"
                  >
                    <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
                  </button>

                  {/* Landscape Bottom Home Indicator */}
                  <div className="w-24 h-1 bg-white/40 rounded-full mx-auto absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none" />
                </div>

                {/* Right Bezel Details (Speaker Slit + Camera Punch-hole on the bezel) */}
                <div className="flex flex-col items-center justify-center gap-2 shrink-0 mr-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0a1017] border border-white/20 shadow-inner" />
                  <div className="w-1 h-8 rounded-full bg-[#1e2a38] border border-white/5" />
                </div>
              </div>
            </div>

            {/* Mobile View: High Quality 16:9 Video Card */}
            <div className="block lg:hidden w-full max-w-md mx-auto">
              <div 
                className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group cursor-pointer"
                onClick={togglePlay}
              >
                {/* Native HTML5 Video for Mobile */}
                <video
                  ref={mobileVideoRef}
                  src={promoVideoConfig.videoSrc}
                  poster={promoVideoConfig.thumbnail}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Custom Paused Overlay with Play Icon */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-[#082545]/45 backdrop-blur-[1px] flex items-center justify-center transition-all animate-in fade-in duration-200">
                    <div className="w-14 h-14 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center shadow-lg shadow-[#FF9F1C]/40 active:scale-95 transition-transform">
                      <FontAwesomeIcon icon={faPlay} className="text-xl ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Subtle Audio Mute/Unmute Toggle in Corner */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
                  className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center text-[10px] backdrop-blur-sm z-30"
                >
                  <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
