import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTag, 
  faScaleBalanced, 
  faArrowLeft, 
  faCircleCheck,
  faReceipt
} from '@fortawesome/free-solid-svg-icons';
import { pricingPlans } from '../services/data';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#f8f9ff] border-b border-[#dfe9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#bdd6ff]/40 text-[#082545] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#bdd6ff]">
            <FontAwesomeIcon icon={faTag} className="text-[#082545] text-xs" />
            <span>تسعير عادل وشفاف</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121c28] tracking-tight">
            أسعار واضحة ومعروفة مسبقاً
          </h2>

          <p className="text-sm sm:text-base text-[#595f64] font-medium mt-3">
            قيمة واضحة ومحددة لكل قرش تدفعه بدون أي رسوم مخفية أو إكراميات إجبارية
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className="bg-white rounded-xl border border-[#dfe9fa] p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#485f83] bg-[#e5eeff] px-3 py-1 rounded-full">
                    معاينة معتمدة
                  </span>
                  <FontAwesomeIcon icon={faReceipt} className="text-[#595f64] text-sm" />
                </div>

                <h3 className="text-lg font-bold text-[#121c28] mb-1">
                  {plan.title}
                </h3>

                <p className="text-xs text-[#595f64] mb-6">
                  {plan.subtitle}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-[#082545] font-montserrat">
                    {plan.price}
                  </span>
                  <span className="text-sm font-bold text-[#595f64]">
                    جنيه مصري
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#4B5563] mb-6">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#FF9F1C]" />
                    <span>فحص فني دقيق من فني معتمد</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#FF9F1C]" />
                    <span>تُخصم قيمة الكشف عند إجراء الصيانة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#FF9F1C]" />
                    <span>عرض أسعار كتابي مسبق لقطع الغيار</span>
                  </li>
                </ul>
              </div>

              <Link
                to={`/booking?service=${plan.serviceId}`}
                className="w-full h-11 rounded-lg bg-[#082545] hover:bg-[#0d3b6e] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>احجز الآن</span>
                <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
              </Link>
            </div>
          ))}
        </div>

        {/* Golden Pricing Policy Box */}
        <div className="bg-[#e5eeff] border border-[#bdd6ff] rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-md bg-[#FF9F1C] text-[#082545] flex items-center justify-center text-base">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <h3 className="text-lg font-bold text-[#082545]">
              سياسة التسعير الذهبية لصلحلي
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#082545]/90 leading-relaxed">
            السعر بيظهر قبل الطلب ← تختار المشكلة وتاخد سعر تقديري ← الفني يعاين ويقدم عرض مكتوب قبل البدء ← التنفيذ بعد موافقتك فقط. مفيش أي مفاجآت أو زيادة في الفاتورة بعد الشغل.
          </p>
        </div>

      </div>
    </section>
  );
}
