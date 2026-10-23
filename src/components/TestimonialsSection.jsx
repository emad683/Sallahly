import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faAward } from '@fortawesome/free-solid-svg-icons';
import { testimonialsData } from '../services/data';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e5eeff] text-[#082545] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#dfe9fa]">
            <FontAwesomeIcon icon={faAward} className="text-[#FF9F1C] text-xs" />
            <span>تجارب حقيقية وموثقة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121c28] tracking-tight">
            عملاؤنا بيقولوا إيه؟
          </h2>

          <p className="text-sm sm:text-base text-[#595f64] font-medium mt-3">
            أكثر من 15,000 منزل راضٍ في الشيخ زايد، التجمع الخامس، الشروق وعموم القاهرة الكبرى
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((review) => (
            <div 
              key={review.id}
              className="bg-[#f8f9ff] border border-[#e5eeff] rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: User avatar character + Name & Location + 5 Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#082545] text-white flex items-center justify-center font-bold text-lg">
                      {review.avatarChar}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#121c28]">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[#595f64] font-medium">
                        <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9F1C] text-[10px]" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* 5 FontAwesome Stars */}
                  <div className="flex items-center gap-1 text-[#FF9F1C] text-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4B5563] leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Verified review tag */}
              <div className="mt-6 pt-4 border-t border-[#e5eeff] flex items-center justify-between text-[11px] text-[#485f83] font-semibold">
                <span>طلب صيانة مكتمل</span>
                <span className="text-green-700 font-bold">تقييم موثق</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
