import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function ErrorMessage({ message = 'حدث خطأ أثناء تحميل البيانات', onRetry }) {
  return (
    <div className="bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#93000a] p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faCircleExclamation} className="text-xl text-[#ba1a1a] shrink-0" />
        <span className="text-xs sm:text-sm font-bold">{message}</span>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="h-9 px-4 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faRotateRight} />
          <span>إعادة المحاولة</span>
        </button>
      )}
    </div>
  );
}
