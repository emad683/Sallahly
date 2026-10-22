import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { servicesData } from '../services/data';
import ProductCard from './ProductCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#f8f9ff] border-b border-[#dfe9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#bdd6ff]/40 text-[#082545] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#bdd6ff]">
            <FontAwesomeIcon icon={faWrench} className="text-[#082545] text-xs" />
            <span>احترافية وجودة معتمدة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121c28] tracking-tight">
            خدماتنا الأكثر طلباً
          </h2>

          <p className="text-sm sm:text-base text-[#595f64] font-medium mt-3">
            نعرض ثلاث خدمات رئيسية بأسعارها المعتمدة رسمياً دون أي رسوم خفية أو تكاليف غير متوقعة
          </p>
        </div>

        {/* 3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ProductCard key={service.id} service={service} />
          ))}
        </div>

        {/* Quality Guarantee Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-[#e5eeff] max-w-2xl mx-auto flex items-center justify-center gap-3 text-center text-xs text-[#485f83] font-semibold">
          <FontAwesomeIcon icon={faShieldHalved} className="text-[#FF9F1C] text-base" />
          <span>كل خدمة مشمولة بضمان صلحلي الذهبي لمدة 30 يوماً على قطع الغيار والمصنعية</span>
        </div>

      </div>
    </section>
  );
}
