import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleQuestion, 
  faChevronDown, 
  faChevronUp 
} from '@fortawesome/free-solid-svg-icons';
import { faqsData } from '../services/data';

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#f8f9ff] border-b border-[#dfe9fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#bdd6ff]/40 text-[#082545] px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-[#bdd6ff]">
            <FontAwesomeIcon icon={faCircleQuestion} className="text-[#082545] text-xs" />
            <span>إجابات واضحة ومباشرة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#121c28] tracking-tight">
            الأسئلة الشائعة
          </h2>

          <p className="text-sm sm:text-base text-[#595f64] font-medium mt-3">
            كل ما يهمك معرفته عن الفنيين، الأسعار، الضمان، وطريقة التعامل قبل حجز الخدمة
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-[#dfe9fa] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#121c28] hover:text-[#082545] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#FF9F1C] text-[#082545]' : 'bg-[#e5eeff] text-[#082545]'}`}>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-xs" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#4B5563] leading-relaxed border-t border-[#f8f9ff] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
