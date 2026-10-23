import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, 
  faMoneyBillWave, 
  faClock, 
  faCircleCheck,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import { whyUsData } from '../services/data';

export default function WhyUs() {
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'shield-halved': return faShieldHalved;
      case 'money-bill-wave': return faMoneyBillWave;
      case 'clock': return faClock;
      case 'circle-check': return faCircleCheck;
      default: return faShieldHalved;
    }
  };

  return (
    <section id="why-us" className="relative py-20 bg-[#082545] text-white overflow-hidden">
      {/* Background glow and subtle dots */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FF9F1C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#0d3b6e]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF9F1C] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-white/15 backdrop-blur-sm">
            <FontAwesomeIcon icon={faAward} className="text-xs" />
            <span>مميزات حصرية وضمانات مؤكدة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            ليه تختار صلحلي؟
          </h2>

          <p className="text-sm sm:text-base text-[#E8EDF3]/80 font-medium mt-3">
            راحة بالك وأمان بيتك هما أولويتنا القصوى، لذا بنينا خدمتنا على أربعة ركائز صلبة لا نتهاون فيها
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#FF9F1C]/40 group"
            >
              <div>
                {/* Header Icon + Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#FF9F1C] text-[#082545] flex items-center justify-center text-xl shadow-lg shadow-[#FF9F1C]/25 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={getFeatureIcon(item.iconName)} />
                  </div>
                </div>

                <div className="inline-block bg-[#FF9F1C]/20 border border-[#FF9F1C]/30 text-[#ffb86b] text-[11px] font-bold px-2.5 py-1 rounded-md mb-3">
                  {item.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#E8EDF3]/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative check */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FF9F1C]">
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>معتمد رسمياً في صلحلي</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
