import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faHouse, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function ErrorPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-20 h-20 rounded-3xl bg-[#e5eeff] text-[#082545] flex items-center justify-center text-3xl mb-6 shadow-md border border-[#dfe9fa]">
        <FontAwesomeIcon icon={faWrench} className="animate-bounce" />
      </div>

      <div className="inline-flex items-center gap-2 bg-[#ffdad6] text-[#ba1a1a] px-3.5 py-1 rounded-full text-xs font-bold mb-3">
        <FontAwesomeIcon icon={faCircleExclamation} />
        <span>خطأ 404 — الصفحة غير موجودة</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-[#121c28] mb-3">
        عفواً، هذه الصفحة قيد الصيانة أو غير موجودة!
      </h1>

      <p className="text-sm sm:text-base text-[#595f64] max-w-md mb-8 leading-relaxed">
        يبدو أن الرابط الذي تبحث عنه غير صحيح أو تم نقله. لا تقلق، فريق صلحلي جاهز لمساعدتك دائماً.
      </p>

      <Link
        to="/"
        className="h-12 px-6 rounded-xl bg-[#082545] hover:bg-[#0d3b6e] text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
      >
        <FontAwesomeIcon icon={faHouse} />
        <span>العودة إلى الصفحة الرئيسية</span>
      </Link>
    </div>
  );
}
