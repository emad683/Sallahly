import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faCertificate, 
  faShieldHalved, 
  faBolt, 
  faGauge, 
  faWater, 
  faSprayCan, 
  faClock, 
  faReceipt, 
  faCalendarDays,
  faCalendarCheck,
  faCircleCheck,
  faHeadset,
  faAward,
  faCreditCard,
  faMoneyBillWave,
  faComments,
  faSpinner,
  faMagnifyingGlass,
  faFaucet,
  faFilter,
  faScrewdriverWrench,
  faScaleBalanced,
  faPowerOff,
  faLightbulb,
  faHammer,
  faKey,
  faDoorOpen,
  faDroplet,
  faFire
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { servicesData, techniciansData } from '../services/data';
import TechnicianCard from '../components/TechnicianCard';

export default function Details() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [bookingStatus, setBookingStatus] = useState('idle');

  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const technician = techniciansData[service.technicianId] || techniciansData.ahmed;

  const handleBooking = () => {
    setBookingStatus('loading');
    setTimeout(() => {
      setBookingStatus('success');
      setTimeout(() => {
        setBookingStatus('idle');
      }, 4000);
    }, 1200);
  };

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'gauge': return faGauge;
      case 'water': return faWater;
      case 'spray-can': return faSprayCan;
      case 'bolt': return faBolt;
      case 'magnifying-glass': return faMagnifyingGlass;
      case 'faucet': return faFaucet;
      case 'filter': return faFilter;
      case 'screwdriver-wrench': return faScrewdriverWrench;
      case 'scale-balanced': return faScaleBalanced;
      case 'power-off': return faPowerOff;
      case 'lightbulb': return faLightbulb;
      case 'hammer': return faHammer;
      case 'key': return faKey;
      case 'door-open': return faDoorOpen;
      case 'droplet': return faDroplet;
      case 'fire': return faFire;
      case 'shield-halved': return faShieldHalved;
      default: return faCircleCheck;
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-28 sm:pb-32 bg-[#f8f9ff] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-bold text-[#082545] hover:text-[#FF9F1C] transition-colors cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-white border border-[#dfe9fa] flex items-center justify-center shadow-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <span>العودة للرئيسية</span>
          </button>

          <span className="text-xs font-bold text-[#595f64] bg-[#e5eeff] px-3 py-1 rounded-full">
            تفاصيل حجز الخدمة
          </span>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-white border border-[#dfe9fa] shadow-sm p-4 sm:p-6 mb-6 flex flex-col gap-5">
          
          <div className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden shadow-sm">
            <img 
              src={service.image} 
              alt={service.fullTitle}
              width="800"
              height="300"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082545]/90 via-[#082545]/20 to-transparent" />

            <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
              <FontAwesomeIcon icon={faCertificate} className="text-[#FF9F1C] text-sm" />
              <span className="text-xs font-bold text-[#082545]">خدمة معتمدة</span>
            </div>

            <div className="absolute bottom-3 right-3 left-3 flex justify-between items-end gap-2">
              <div className="flex items-center gap-2 bg-[#082545]/90 text-white px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold backdrop-blur-sm">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#FF9F1C]" />
                <span>ضمان صلحلي 30 يوماً</span>
              </div>

              <div className="bg-[#FF9F1C] text-[#082545] font-black text-xl sm:text-2xl px-4 py-1.5 rounded-lg shadow-md">
                <span>{service.price}</span>
                <span className="text-xs font-bold mr-1">ج.م</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-[#121c28] leading-snug">
              {service.fullTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[#595f64] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[#e5eeff]">
            {service.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff]"
              >
                <div className="w-7 h-7 rounded-md bg-[#e5eeff] text-[#082545] flex items-center justify-center text-xs shrink-0">
                  <FontAwesomeIcon icon={getFeatureIcon(feat.iconName)} />
                </div>
                <span className="text-xs font-bold text-[#121c28] truncate">
                  {feat.title}
                </span>
              </div>
            ))}
          </div>

        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-[#082545]">
              الفني المعتمد والمتاح لتنفيذ الخدمة
            </h2>
            <span className="text-[11px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
              متاح اليوم
            </span>
          </div>
          <TechnicianCard technician={technician} />
        </div>

        <div className="bg-[#eef4ff] rounded-xl border border-[#bdd6ff] p-5 sm:p-6 mb-6 flex flex-col gap-4 shadow-sm">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#082545]">
              <FontAwesomeIcon icon={faReceipt} className="text-[#FF9F1C] text-lg" />
              <h3 className="text-base font-bold">
                شفافية التسعير المعتمدة في صلحلي
              </h3>
            </div>
            <span className="text-[11px] bg-white border border-[#bdd6ff] text-[#082545] font-bold px-2.5 py-0.5 rounded-full">
              بدون أي رسوم خفية
            </span>
          </div>

          <div className="space-y-4 pt-2">
            
            <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#dfe9fa]">
              <div className="w-7 h-7 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center text-xs font-black shrink-0 mt-0.5 font-montserrat">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs sm:text-sm font-bold text-[#121c28]">فحص ومعاينة دقيقة</span>
                  <span className="text-xs sm:text-sm font-black text-[#082545]">{service.price} ج.م</span>
                </div>
                <p className="text-xs text-[#595f64] leading-relaxed">
                  تُخصم قيمة الكشف بالكامل في حال الموافقة على إجراء الصيانة الفورية وتغيير القطع.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#dfe9fa]">
              <div className="w-7 h-7 rounded-full bg-[#bdd6ff] text-[#082545] flex items-center justify-center text-xs font-black shrink-0 mt-0.5 font-montserrat">
                2
              </div>
              <div className="flex-1">
                <span className="block text-xs sm:text-sm font-bold text-[#121c28] mb-1">
                  عرض أسعار كتابي مسبق
                </span>
                <p className="text-xs text-[#595f64] leading-relaxed">
                  يقدّم الفني بيان أسعار قطع الغيار المعتمدة والمطبوعة قبل البدء، ولن تدفع مليم إضافي بدون موافقتك.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-[#dfe9fa]">
              <div className="w-7 h-7 rounded-full bg-[#bdd6ff] text-[#082545] flex items-center justify-center text-xs font-black shrink-0 mt-0.5 font-montserrat">
                3
              </div>
              <div className="flex-1">
                <span className="block text-xs sm:text-sm font-bold text-[#121c28] mb-2">
                  طرق دفع مرنة بعد التجربة
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#f8f9ff] border border-[#dfe9fa] rounded-md text-[11px] font-bold text-[#082545]">
                    كاش
                  </span>
                  <span className="px-2.5 py-1 bg-[#f8f9ff] border border-[#dfe9fa] rounded-md text-[11px] font-bold text-[#082545]">
                    فوري
                  </span>
                  <span className="px-2.5 py-1 bg-[#f8f9ff] border border-[#dfe9fa] rounded-md text-[11px] font-bold text-[#082545]">
                    ميزة
                  </span>
                  <span className="px-2.5 py-1 bg-[#f8f9ff] border border-[#dfe9fa] rounded-md text-[11px] font-bold text-[#082545]">
                    فيزا / ماستركارد
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          
          <div className="bg-white border border-[#dfe9fa] p-4 rounded-lg flex items-start gap-3 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#ffdcbc] text-[#683d00] flex items-center justify-center text-sm shrink-0">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#121c28] mb-0.5">
                ضمان مختوم 30 يوم
              </h4>
              <p className="text-xs text-[#595f64] leading-relaxed">
                كارت ضمان رقمي فوري على التطبيق يشمل قطع الغيار والمصنعية مع عودة مجانية إذا تكرر العطل.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#dfe9fa] p-4 rounded-lg flex items-start gap-3 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#bdd6ff] text-[#082545] flex items-center justify-center text-sm shrink-0">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#121c28] mb-0.5">
                متابعة ما بعد الخدمة
              </h4>
              <p className="text-xs text-[#595f64] leading-relaxed">
                اتصال رسمي من خدمة العملاء خلال 24 ساعة لتقييم رضاك التام عن كفاءة التشغيل.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#dfe9fa] p-3 sm:p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noreferrer"
            aria-label="محادثة واتساب سريعة"
            className="w-12 h-12 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center text-xl shrink-0 shadow-md transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <Link
            to={`/booking?service=${service.id}`}
            className="flex-1 h-12 sm:h-13 rounded-lg font-bold flex items-center justify-between px-5 transition-all shadow-lg cursor-pointer bg-[#FF9F1C] hover:bg-[#ea8d10] text-[#082545] active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarCheck} className="text-base" />
              <span className="text-xs sm:text-sm font-black">
                احجز وتأكيد موعد الزيارة الآن
              </span>
            </div>

            <div className="flex items-baseline gap-1 bg-[#082545] text-white px-3 py-1 rounded-lg text-xs font-montserrat font-bold">
              <span>{service.price}</span>
              <span className="text-[10px] font-cairo">ج.م</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
