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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!videoRef.current) return;

    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    videoRef.current.volume = 1.0;
    setIsMuted(newMuted);

    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
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
          
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-right gap-6">

            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight lg:leading-tight">
              صلحلي…{' '}
              <span className="text-[#FF9F1C] block sm:inline">ضمان، أمان، ودقة</span>
            </h1>

            <p className="text-base sm:text-lg text-[#E8EDF3]/90 max-w-xl leading-relaxed">
              احجز فني صيانة موثوق لبيتك في دقائق. فنيين معتمدين بفيش جنائي، أسعار واضحة ومحددة بدون أي إكراميات، وضمان معتمد 30 يوماً على كل عملية إصلاح.
            </p>

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

          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
            
            <div className="relative w-full max-w-[530px] xl:max-w-[560px] mx-auto">
              
              <div className="hidden sm:block absolute -top-1.5 right-16 md:right-20 w-8 md:w-10 h-1.5 bg-[#3d4f68] rounded-t-sm" />
              <div className="hidden sm:block absolute -top-1.5 right-28 md:right-32 w-8 md:w-10 h-1.5 bg-[#3d4f68] rounded-t-sm" />
              <div className="hidden sm:block absolute -top-1.5 left-16 md:left-20 w-10 md:w-12 h-1.5 bg-[#3d4f68] rounded-t-sm" />

              <div className="relative mx-auto w-full rounded-2xl px-2.5 py-1.5 sm:px-5 sm:py-3 bg-gradient-to-r from-[#2a374a] via-[#151f2e] to-[#0b1320] border-[3px] sm:border-[4px] border-[#37475d] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(255,159,28,0.18)] flex items-center">
                
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a2533] border border-white/10 shrink-0 ml-1 sm:ml-1.5" />

                <div 
                  className="relative flex-1 rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-white/10 group cursor-pointer"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src={promoVideoConfig.videoSrc}
                    poster={promoVideoConfig.thumbnail}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    width="640"
                    height="360"
                    className="w-full h-full object-cover rounded-xl"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {!isPlaying && (
                    <div className="absolute inset-0 bg-[#082545]/45 backdrop-blur-[1px] flex items-center justify-center transition-all animate-in fade-in duration-200">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center shadow-xl shadow-[#FF9F1C]/40 hover:scale-110 active:scale-95 transition-transform">
                        <FontAwesomeIcon icon={faPlay} className="text-xl sm:text-2xl ml-0.5" />
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
                    className={`absolute top-2.5 sm:top-3 left-2.5 sm:left-3 h-7 sm:h-8 px-2.5 sm:px-3 rounded-full backdrop-blur-md flex items-center gap-1.5 text-[11px] sm:text-xs font-bold transition-all z-30 cursor-pointer shadow-md ${
                      isMuted 
                        ? 'bg-black/70 hover:bg-black/90 text-white' 
                        : 'bg-[#FF9F1C] text-[#082545] shadow-[#FF9F1C]/40 ring-2 ring-white/30'
                    }`}
                  >
                    <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} className={isMuted ? "text-xs" : "text-sm"} />
                    <span className="text-[10px] hidden sm:inline">{isMuted ? "تشغيل الصوت" : "كتم الصوت"}</span>
                  </button>

                  <div className="w-20 sm:w-24 h-1 bg-white/40 rounded-full mx-auto absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none" />
                </div>

                <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 shrink-0 mr-1 sm:mr-1.5">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0a1017] border border-white/20 shadow-inner" />
                  <div className="w-0.5 sm:w-1 h-6 sm:h-8 rounded-full bg-[#1e2a38] border border-white/5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
