import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldHalved, 
  faClock, 
  faStar, 
  faCheck,
  faCertificate,
  faUserCheck
} from '@fortawesome/free-solid-svg-icons';

export default function TechnicianCard({ technician }) {
  if (!technician) return null;

  return (
    <div className="bg-white rounded-2xl border border-[#dfe9fa] p-5 sm:p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden">
      
      {/* Top Header: Avatar + Info + Experience Badge */}
      <div className="flex items-start justify-between gap-4">
        
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#e5eeff] shrink-0 shadow-sm">
            <img 
              src={technician.avatar} 
              alt={technician.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#FF9F1C] text-[#082545] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg text-[#121c28]">
                {technician.name}
              </h3>
              <FontAwesomeIcon 
                icon={faCertificate} 
                className="text-[#082545] text-sm" 
                title="فني معتمد وموثق" 
              />
            </div>

            <span className="text-xs text-[#595f64] font-medium mt-0.5">
              {technician.role}
            </span>

            <div className="flex items-center gap-1.5 mt-1.5">
              <FontAwesomeIcon icon={faStar} className="text-[#FF9F1C] text-xs" />
              <span className="text-xs font-bold text-[#121c28]">
                {technician.rating}
              </span>
              <span className="text-[11px] text-[#595f64]">
                ({technician.reviewsCount})
              </span>
            </div>
          </div>
        </div>

        {/* Experience Pill */}
        <div className="bg-[#bdd6ff]/40 text-[#082545] border border-[#bdd6ff] px-3 py-1 rounded-full text-center shrink-0">
          <span className="text-xs font-bold font-montserrat">
            {technician.experience}
          </span>
        </div>

      </div>

      {/* Security & Punctuality Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        
        {/* Security Badge */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#eef4ff] border border-[#dfe9fa]">
          <div className="w-9 h-9 rounded-full bg-[#ffdcbc] text-[#683d00] flex items-center justify-center text-sm shrink-0">
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#121c28] truncate">
              مفحوص أمنياً
            </span>
            <span className="text-[11px] text-[#595f64] truncate">
              {technician.securityStatus}
            </span>
          </div>
        </div>

        {/* Punctuality Badge */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#eef4ff] border border-[#dfe9fa]">
          <div className="w-9 h-9 rounded-full bg-[#bdd6ff] text-[#082545] flex items-center justify-center text-sm shrink-0">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#121c28] truncate">
              دقة المواعيد {technician.punctualityRate}
            </span>
            <span className="text-[11px] text-[#595f64] truncate">
              {technician.punctualityText}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
