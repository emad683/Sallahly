import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faListCheck, 
  faTag, 
  faClipboardCheck, 
  faCircleCheck,
  faRoute
} from '@fortawesome/free-solid-svg-icons';
import { stepsData } from '../services/data';

export default function HowItWorks() {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'list-check': return faListCheck;
      case 'tag': return faTag;
      case 'clipboard-check': return faClipboardCheck;
      case 'circle-check': return faCircleCheck;
      default: return faCircleCheck;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e5eeff] text-[#082545] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#dfe9fa]">
            <FontAwesomeIcon icon={faRoute} className="text-[#FF9F1C] text-xs" />
            <span>بسيطة وسريعة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121c28] tracking-tight">
            ازاي بتحجز؟ خطوة بخطوة بكل سهولة
          </h2>

          <p className="text-sm sm:text-base text-[#595f64] font-medium mt-3">
            أربع خطوات تفصلك عن إنهاء مشكلة أي عطل في بيتك دون مفاجآت وبأعلى درجات الأمان
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stepsData.map((step) => (
            <div 
              key={step.step}
              className="relative bg-[#f8f9ff] border border-[#e5eeff] rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF9F1C]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#082545] text-white flex items-center justify-center text-lg font-black font-montserrat shadow-md group-hover:bg-[#FF9F1C] group-hover:text-[#082545] transition-colors">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border border-[#e5eeff] text-[#FF9F1C] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={getStepIcon(step.iconName)} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#121c28] mb-2 group-hover:text-[#082545] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#595f64] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator bar */}
              <div className="mt-6 pt-4 border-t border-[#e5eeff]/80 flex items-center gap-1.5 text-[11px] font-bold text-[#082545]">
                <span>المرحلة {step.step} من 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
