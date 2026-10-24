import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faShieldHalved, faCalendarCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { servicesData } from '../services/data';
import ProductCard from './ProductCard';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#f8f9ff] border-b border-[#dfe9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">

          <h2 className="text-3xl sm:text-4xl font-black text-[#121c28] tracking-tight">
            خدمات الصيانة المنزلية المعتمدة
          </h2>

          <p className="text-sm sm:text-base text-[#595f64] font-medium mt-3">
            خدمات صيانة فورية متكاملة بأسعار شفافة محددة مسبقاً وفنيين مفحوصين أمنياً دون أي رسوم خفية أو إكراميات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ProductCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-white border border-[#dfe9fa] max-w-3xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#e5eeff] text-[#082545] flex items-center justify-center text-lg shrink-0">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[#FF9F1C]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#121c28]">
                مش لاقي مشكلتك أو محتاج فحص شامل لبيتك؟
              </h4>
              <p className="text-xs text-[#595f64] mt-0.5">
                احجز زيارة فني معتمد للمعاينة والكشف الدقيق وتحديد العطل فوراً بضمان 30 يوماً.
              </p>
            </div>
          </div>

          <Link
            to="/booking?service=custom"
            className="h-10 px-5 rounded-lg bg-[#082545] hover:bg-[#0d3b6e] text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shrink-0 cursor-pointer"
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
            <span>احجز موعد مخصص</span>
            <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
