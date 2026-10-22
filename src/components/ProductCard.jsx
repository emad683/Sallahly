import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSnowflake, 
  faWrench, 
  faBolt, 
  faClock, 
  faArrowLeft,
  faShieldHalved,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

export default function ProductCard({ service }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'snowflake': return faSnowflake;
      case 'wrench': return faWrench;
      case 'bolt': return faBolt;
      default: return faWrench;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#dfe9fa] p-6 shadow-sm hover:shadow-xl hover:border-[#FF9F1C]/40 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Header: Icon + Title + Price */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#e5eeff] text-[#082545] group-hover:bg-[#FF9F1C] group-hover:text-[#082545] flex items-center justify-center text-2xl transition-colors duration-300 shrink-0">
              <FontAwesomeIcon icon={getIcon(service.iconName)} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-[#082545] bg-[#e5eeff] px-2.5 py-0.5 rounded-full">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#121c28] group-hover:text-[#082545] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-[#595f64] font-medium mt-0.5">
                {service.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="bg-[#FF9F1C] text-[#082545] font-black text-sm px-3 py-1.5 rounded-xl shadow-sm whitespace-nowrap">
              <span>{service.price}</span>
              <span className="text-xs font-bold mr-1">ج.م</span>
            </div>
            <span className="text-[10px] text-[#595f64] mt-1">سعر معياري معتمد</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#4B5563] leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features preview pills */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#121c28] bg-[#f8f9ff] border border-[#e5eeff] p-2 rounded-lg">
              <FontAwesomeIcon icon={faCircleCheck} className="text-[#FF9F1C] text-xs shrink-0" />
              <span className="truncate">{feat.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bar with Time estimate & Details link */}
      <div className="pt-4 border-t border-[#e5eeff] flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#485f83]">
          <FontAwesomeIcon icon={faClock} className="text-[#FF9F1C]" />
          <span>{service.timeEstimate}</span>
        </div>

        <Link
          to={`/service/${service.id}`}
          className="h-9 px-4 rounded-xl bg-[#e5eeff] hover:bg-[#082545] text-[#082545] hover:text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
        >
          <span>تفاصيل الحجز</span>
          <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
        </Link>
      </div>
    </div>
  );
}
