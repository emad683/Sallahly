import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faWrench } from '@fortawesome/free-solid-svg-icons';

export default function Loading({ message = 'جاري التحميل...' }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-[#082545]">
      <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
        <FontAwesomeIcon icon={faSpinner} className="text-4xl animate-spin text-[#FF9F1C]" />
        <FontAwesomeIcon icon={faWrench} className="text-sm absolute text-[#082545]" />
      </div>
      <span className="text-sm font-bold text-[#4B5563]">{message}</span>
    </div>
  );
}
