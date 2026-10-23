import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faArrowLeft, 
  faCheck, 
  faCircleCheck, 
  faCalendarCheck, 
  faClock, 
  faLocationDot, 
  faUser, 
  faPhone, 
  faWrench, 
  faSnowflake, 
  faBolt, 
  faKitchenSet, 
  faHammer, 
  faFilter, 
  faShieldHalved, 
  faMoneyBillWave, 
  faCreditCard, 
  faMobileScreenButton, 
  faReceipt, 
  faStar, 
  faIdCard, 
  faTriangleExclamation,
  faHouse,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { servicesData, techniciansData, cairoCities } from '../services/data';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialServiceId = searchParams.get('service') || servicesData[0].id;

  const [currentStep, setCurrentStep] = useState(1);

  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);
  const [selectedIssue, setSelectedIssue] = useState('');
  const [notes, setNotes] = useState('');
  
  const [selectedCity, setSelectedCity] = useState(cairoCities[0]);
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [floorAppt, setFloorAppt] = useState('');
  const [landmark, setLandmark] = useState('');

  const [dateOption, setDateOption] = useState('today');
  const [customDate, setCustomDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('afternoon');

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(true);
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const [formError, setFormError] = useState('');
  const [bookingId, setBookingId] = useState('');

  const selectedService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const assignedTech = techniciansData[selectedService.technicianId] || techniciansData.ahmed;

  useEffect(() => {
    const sId = searchParams.get('service');
    if (sId && servicesData.some(s => s.id === sId)) {
      setSelectedServiceId(sId);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedService?.commonIssues?.length > 0) {
      setSelectedIssue(selectedService.commonIssues[0]);
    } else {
      setSelectedIssue('');
    }
  }, [selectedServiceId]);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'snowflake': return faSnowflake;
      case 'wrench': return faWrench;
      case 'bolt': return faBolt;
      case 'kitchen-set': return faKitchenSet;
      case 'hammer': return faHammer;
      case 'filter': return faFilter;
      default: return faWrench;
    }
  };

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    setFormError('');

    if (currentStep === 1) {
      if (!selectedServiceId) {
        setFormError('يرجى اختيار الخدمة المطلوبة للمتابعة.');
        return;
      }
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 2) {
      if (!selectedCity) {
        setFormError('يرجى تحديد المنطقة أو المدينة.');
        return;
      }
      if (!street.trim()) {
        setFormError('يرجى إدخال اسم الشارع أو العنوان.');
        return;
      }
      if (dateOption === 'custom' && !customDate) {
        setFormError('يرجى تحديد التاريخ المفضل للزيارة.');
        return;
      }
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 3) {
      if (!fullName.trim()) {
        setFormError('يرجى كتابة الاسم بالكامل.');
        return;
      }
      const cleanPhone = phone.trim().replace(/\s+/g, '');
      if (!cleanPhone || cleanPhone.length < 10) {
        setFormError('يرجى إدخال رقم هاتف محمول صحيح (مثال: 01012345678).');
        return;
      }

      const generatedId = `SLH-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingId(generatedId);
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setFormError('');
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getTimeSlotLabel = (slot) => {
    switch (slot) {
      case 'morning': return 'الفترة الصباحية (9:00 ص - 12:00 م)';
      case 'noon': return 'فترة الظهيرة (12:00 م - 3:00 م)';
      case 'afternoon': return 'فترة العصر (3:00 م - 6:00 م)';
      case 'evening': return 'الفترة المسائية (6:00 م - 9:00 م)';
      default: return 'فترة الظهيرة (12:00 م - 3:00 م)';
    }
  };

  const getDateLabel = () => {
    if (dateOption === 'today') return 'اليوم (طوارئ فورية خلال 90 دقيقة)';
    if (dateOption === 'tomorrow') return 'غداً';
    if (dateOption === 'after_tomorrow') return 'بعد غد';
    return customDate || 'موعد مخصص';
  };

  const getPaymentLabel = (pm) => {
    switch (pm) {
      case 'cash': return 'كاش للفني بعد التجربة والمعاينة';
      case 'wallet': return 'محفظة إلكترونية (إنستاباي / فودافون كاش)';
      case 'card': return 'بطاقة بنكية / فيزا عبر جهاز الفني';
      default: return 'كاش بعد التجربة والمعاينة';
    }
  };

  const whatsappConfirmUrl = `https://wa.me/201000000000?text=${encodeURIComponent(
    `مرحباً صلحلي، أود تأكيد طلبي:\n- رقم الحجز: ${bookingId}\n- الخدمة: ${selectedService.title}\n- العطل: ${selectedIssue || 'معاينة عامة'}\n- العنوان: ${selectedCity}، ${street} (عمارة ${building || '-'}، شقة ${floorAppt || '-'})\n- الموعد: ${getDateLabel()} - ${getTimeSlotLabel(timeSlot)}\n- الاسم: ${fullName}\n- الموبايل: ${phone}`
  )}`;

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#f8f9ff] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-bold text-[#082545] hover:text-[#FF9F1C] transition-colors cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-white border border-[#dfe9fa] flex items-center justify-center shadow-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <span>العودة</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#082545] bg-[#e5eeff] px-3 py-1 rounded-full border border-[#bdd6ff]">
              حجز موعد فني معتمد
            </span>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-[#121c28]">
            {currentStep === 4 ? 'تم تأكيد حجزك بنجاح' : 'احجز فني صيانة لمنزلك في دقائق'}
          </h1>
          <p className="text-xs sm:text-sm text-[#595f64] font-medium mt-2 leading-relaxed">
            {currentStep === 4 
              ? 'فريق صلحلي وفنيك المعتمد في طريقهم لمتابعة طلبك وتنفيذه بأعلى دقة وضمان 30 يوماً.'
              : 'حدد الخدمة ونوع المشكلة وموعدك المفضل وسنرسل فني معتمد بفيش جنائي وتسعيرة محددة بدون إكراميات.'}
          </p>
        </div>

        {currentStep < 4 && (
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-between relative">
              
              <div className="absolute top-1/2 -translate-y-1/2 right-8 left-8 h-1 bg-[#dfe9fa] -z-0">
                <div 
                  className="h-full bg-[#FF9F1C] transition-all duration-300"
                  style={{
                    width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%'
                  }}
                />
              </div>

              <div className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep >= 1 ? 'bg-[#082545] text-[#FF9F1C] shadow-md ring-4 ring-[#082545]/10' : 'bg-white border-2 border-[#dfe9fa] text-[#595f64]'
                }`}>
                  {currentStep > 1 ? <FontAwesomeIcon icon={faCheck} /> : '1'}
                </div>
                <span className={`text-xs mt-2 font-bold ${currentStep >= 1 ? 'text-[#082545]' : 'text-[#595f64]'}`}>
                  الخدمة والعطل
                </span>
              </div>

              <div className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep >= 2 ? 'bg-[#082545] text-[#FF9F1C] shadow-md ring-4 ring-[#082545]/10' : 'bg-white border-2 border-[#dfe9fa] text-[#595f64]'
                }`}>
                  {currentStep > 2 ? <FontAwesomeIcon icon={faCheck} /> : '2'}
                </div>
                <span className={`text-xs mt-2 font-bold ${currentStep >= 2 ? 'text-[#082545]' : 'text-[#595f64]'}`}>
                  العنوان والموعد
                </span>
              </div>

              <div className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  currentStep >= 3 ? 'bg-[#082545] text-[#FF9F1C] shadow-md ring-4 ring-[#082545]/10' : 'bg-white border-2 border-[#dfe9fa] text-[#595f64]'
                }`}>
                  '3'
                </div>
                <span className={`text-xs mt-2 font-bold ${currentStep >= 3 ? 'text-[#082545]' : 'text-[#595f64]'}`}>
                  التواصل والتأكيد
                </span>
              </div>

            </div>
          </div>
        )}

        {formError && (
          <div className="max-w-2xl mx-auto mb-6 p-4 rounded-xl bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#93000a] text-xs font-bold flex items-center gap-3">
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-base shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {currentStep < 4 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 bg-white rounded-xl border border-[#dfe9fa] p-5 sm:p-8 shadow-sm">
              
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-black text-[#121c28] flex items-center gap-2">
                      <FontAwesomeIcon icon={faWrench} className="text-[#FF9F1C]" />
                      <span>اختر خدمة الصيانة المطلوبة</span>
                    </h2>
                    <p className="text-xs text-[#595f64] mt-1">
                      انقر على الخدمة التي تحتاج فحصها أو إصلاحها
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {servicesData.map((svc) => {
                      const isSelected = svc.id === selectedServiceId;
                      return (
                        <div
                          key={svc.id}
                          onClick={() => setSelectedServiceId(svc.id)}
                          className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between text-right relative ${
                            isSelected
                              ? 'border-[#FF9F1C] bg-[#fffaf2] shadow-md ring-1 ring-[#FF9F1C]'
                              : 'border-[#dfe9fa] bg-[#f8f9ff] hover:border-[#082545]/30 hover:bg-white'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#FF9F1C] text-[#082545] flex items-center justify-center text-xs">
                              <FontAwesomeIcon icon={faCheck} />
                            </div>
                          )}

                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg transition-colors ${
                              isSelected ? 'bg-[#FF9F1C] text-[#082545]' : 'bg-[#e5eeff] text-[#082545]'
                            }`}>
                              <FontAwesomeIcon icon={getServiceIcon(svc.iconName)} />
                            </div>
                            <div>
                              <span className="text-[10px] font-bold text-[#595f64] bg-[#e5eeff] px-2 py-0.5 rounded-md">
                                {svc.badge}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#121c28] mb-1 line-clamp-1">
                              {svc.title}
                            </h3>
                            <div className="flex items-baseline gap-1 text-[#082545] font-black text-sm font-montserrat">
                              <span>{svc.price}</span>
                              <span className="text-[10px] font-cairo">ج.م فحص</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {selectedService?.commonIssues && (
                    <div className="pt-4 border-t border-[#dfe9fa]">
                      <label className="block text-sm font-bold text-[#121c28] mb-2">
                        ما هي المشكلة التي تواجهك بالتحديد؟
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedService.commonIssues.map((issue, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setSelectedIssue(issue)}
                            className={`p-3 rounded-lg border text-xs font-bold text-right transition-all flex items-center justify-between cursor-pointer ${
                              selectedIssue === issue
                                ? 'border-[#082545] bg-[#082545] text-white shadow-sm'
                                : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                            }`}
                          >
                            <span>{issue}</span>
                            {selectedIssue === issue && (
                              <FontAwesomeIcon icon={faCheck} className="text-[#FF9F1C] mr-2" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                      تفاصيل إضافية عن العطل (اختياري)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="مثال: نوع وماركة الجهاز، أصوات غريبة، أو متى بدأ العطل في الحدوث..."
                      className="w-full p-3 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs focus:bg-white focus:outline-none focus:border-[#082545] transition-colors"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="h-12 px-8 rounded-lg bg-[#082545] hover:bg-[#0d3b6e] text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>المتابعة للعنوان والموعد</span>
                      <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-black text-[#121c28] flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9F1C]" />
                      <span>حدد عنوانك في القاهرة والجيزة</span>
                    </h2>
                    <p className="text-xs text-[#595f64] mt-1">
                      نغطي المدن الجديدة ومناطق القاهرة والجيزة بفنيين مقيمين بالقرب منك
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121c28] mb-2">
                      المدينة / الحي
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {cairoCities.map((city) => (
                        <button
                          type="button"
                          key={city}
                          onClick={() => setSelectedCity(city)}
                          className={`p-2.5 rounded-lg border text-xs font-bold transition-all text-center cursor-pointer ${
                            selectedCity === city
                              ? 'border-[#082545] bg-[#082545] text-white'
                              : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        اسم الشارع / الكمبوند <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="مثال: شارع التسعين الشمالي، أو كمبوند بيفرلي هيلز"
                        className="w-full h-11 px-3.5 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs focus:bg-white focus:outline-none focus:border-[#082545] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        رقم العمارة / الفيلا
                      </label>
                      <input
                        type="text"
                        value={building}
                        onChange={(e) => setBuilding(e.target.value)}
                        placeholder="مثال: عمارة 14 أو فيلا 8"
                        className="w-full h-11 px-3.5 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs focus:bg-white focus:outline-none focus:border-[#082545] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        الدور ورقم الشقة
                      </label>
                      <input
                        type="text"
                        value={floorAppt}
                        onChange={(e) => setFloorAppt(e.target.value)}
                        placeholder="مثال: الدور الثالث، شقة 6"
                        className="w-full h-11 px-3.5 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs focus:bg-white focus:outline-none focus:border-[#082545] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        علامة مميزة (اختياري)
                      </label>
                      <input
                        type="text"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        placeholder="مثال: بجوار صيدلية أو أمام المسجد"
                        className="w-full h-11 px-3.5 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs focus:bg-white focus:outline-none focus:border-[#082545] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#dfe9fa]">
                    <h3 className="text-sm font-bold text-[#121c28] mb-3 flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendarCheck} className="text-[#FF9F1C]" />
                      <span>اختر موعد الزيارة المناسب</span>
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                      <button
                        type="button"
                        onClick={() => setDateOption('today')}
                        className={`p-3 rounded-lg border text-xs font-bold text-center transition-all cursor-pointer ${
                          dateOption === 'today'
                            ? 'border-[#FF9F1C] bg-[#fffaf2] text-[#082545] ring-2 ring-[#FF9F1C]'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <span className="block font-black">اليوم</span>
                        <span className="text-[10px] text-green-700 font-semibold block mt-0.5">طوارئ فورية</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDateOption('tomorrow')}
                        className={`p-3 rounded-lg border text-xs font-bold text-center transition-all cursor-pointer ${
                          dateOption === 'tomorrow'
                            ? 'border-[#082545] bg-[#082545] text-white ring-2 ring-[#082545]'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <span className="block font-black">غداً</span>
                        <span className="text-[10px] opacity-80 block mt-0.5">موعد مؤكد</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDateOption('after_tomorrow')}
                        className={`p-3 rounded-lg border text-xs font-bold text-center transition-all cursor-pointer ${
                          dateOption === 'after_tomorrow'
                            ? 'border-[#082545] bg-[#082545] text-white ring-2 ring-[#082545]'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <span className="block font-black">بعد غد</span>
                        <span className="text-[10px] opacity-80 block mt-0.5">حسب وقتك</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDateOption('custom')}
                        className={`p-3 rounded-lg border text-xs font-bold text-center transition-all cursor-pointer ${
                          dateOption === 'custom'
                            ? 'border-[#082545] bg-[#082545] text-white ring-2 ring-[#082545]'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <span className="block font-black">تاريخ محدد</span>
                        <span className="text-[10px] opacity-80 block mt-0.5">اختيار يوم</span>
                      </button>
                    </div>

                    {dateOption === 'custom' && (
                      <div className="mb-4">
                        <label className="block text-xs font-bold text-[#121c28] mb-1">
                          حدد اليوم من التقويم
                        </label>
                        <input
                          type="date"
                          value={customDate}
                          onChange={(e) => setCustomDate(e.target.value)}
                          className="h-11 px-3 rounded-lg border border-[#dfe9fa] bg-white text-xs font-montserrat"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-2">
                        الفترة الزمنية المفضلة
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          { id: 'morning', label: 'الفترة الصباحية (9:00 ص - 12:00 م)' },
                          { id: 'noon', label: 'فترة الظهيرة (12:00 م - 3:00 م)' },
                          { id: 'afternoon', label: 'فترة العصر (3:00 م - 6:00 م)' },
                          { id: 'evening', label: 'الفترة المسائية (6:00 م - 9:00 م)' }
                        ].map((slot) => (
                          <button
                            type="button"
                            key={slot.id}
                            onClick={() => setTimeSlot(slot.id)}
                            className={`p-3 rounded-lg border text-xs font-bold text-right flex items-center justify-between transition-all cursor-pointer ${
                              timeSlot === slot.id
                                ? 'border-[#082545] bg-[#082545] text-white'
                                : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                            }`}
                          >
                            <span>{slot.label}</span>
                            <FontAwesomeIcon icon={faClock} className={timeSlot === slot.id ? 'text-[#FF9F1C]' : 'text-[#595f64]'} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="h-11 px-5 rounded-lg border border-[#dfe9fa] bg-white hover:bg-[#f8f9ff] text-[#082545] font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                      <span>السابق</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="h-12 px-8 rounded-lg bg-[#082545] hover:bg-[#0d3b6e] text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>المتابعة لبيانات الاتصال</span>
                      <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-black text-[#121c28] flex items-center gap-2">
                      <FontAwesomeIcon icon={faUser} className="text-[#FF9F1C]" />
                      <span>بيانات التواصل وطريقة الدفع</span>
                    </h2>
                    <p className="text-xs text-[#595f64] mt-1">
                      سيتواصل معك الفني لتأكيد موعد التحرك واللوكيشن
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        الاسم بالكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثال: أحمد محمد علي"
                        className="w-full h-11 px-3.5 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs focus:bg-white focus:outline-none focus:border-[#082545] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        رقم الموبايل الأساسي <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="01012345678"
                          dir="ltr"
                          className="w-full h-11 px-3.5 pr-10 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs font-montserrat font-semibold focus:bg-white focus:outline-none focus:border-[#082545] transition-colors text-right"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-[#595f64] pointer-events-none text-xs">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="whatsappSame"
                        checked={whatsappSameAsPhone}
                        onChange={(e) => setWhatsappSameAsPhone(e.target.checked)}
                        className="w-4 h-4 rounded text-[#FF9F1C] focus:ring-[#FF9F1C] border-[#dfe9fa]"
                      />
                      <label htmlFor="whatsappSame" className="text-xs font-bold text-[#121c28] cursor-pointer">
                        رقم الموبايل هو نفس رقم الواتساب لتلقي تفاصيل الفني
                      </label>
                    </div>

                    {!whatsappSameAsPhone && (
                      <div>
                        <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                          رقم واتساب مختلف
                        </label>
                        <input
                          type="tel"
                          value={whatsappPhone}
                          onChange={(e) => setWhatsappPhone(e.target.value)}
                          placeholder="01xxxxxxxxx"
                          dir="ltr"
                          className="w-full h-11 px-3.5 rounded-lg border border-[#dfe9fa] bg-[#f8f9ff] text-xs font-montserrat text-right"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#dfe9fa]">
                    <label className="block text-sm font-bold text-[#121c28] mb-3">
                      طريقة الدفع المفضلة
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      
                      <div
                        onClick={() => setPaymentMethod('cash')}
                        className={`p-3.5 rounded-lg border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          paymentMethod === 'cash'
                            ? 'border-[#082545] bg-[#082545] text-white shadow-sm'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <FontAwesomeIcon icon={faMoneyBillWave} className={paymentMethod === 'cash' ? 'text-[#FF9F1C]' : 'text-[#082545]'} />
                          {paymentMethod === 'cash' && <FontAwesomeIcon icon={faCheck} className="text-[#FF9F1C] text-xs" />}
                        </div>
                        <div>
                          <span className="block text-xs font-bold">كاش للفني</span>
                          <span className={`block text-[10px] mt-0.5 ${paymentMethod === 'cash' ? 'text-white/80' : 'text-[#595f64]'}`}>
                            بعد المعاينة والتجربة
                          </span>
                        </div>
                      </div>

                      <div
                        onClick={() => setPaymentMethod('wallet')}
                        className={`p-3.5 rounded-lg border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          paymentMethod === 'wallet'
                            ? 'border-[#082545] bg-[#082545] text-white shadow-sm'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <FontAwesomeIcon icon={faMobileScreenButton} className={paymentMethod === 'wallet' ? 'text-[#FF9F1C]' : 'text-[#082545]'} />
                          {paymentMethod === 'wallet' && <FontAwesomeIcon icon={faCheck} className="text-[#FF9F1C] text-xs" />}
                        </div>
                        <div>
                          <span className="block text-xs font-bold">إنستاباي / محفظة</span>
                          <span className={`block text-[10px] mt-0.5 ${paymentMethod === 'wallet' ? 'text-white/80' : 'text-[#595f64]'}`}>
                            فودافون كاش ومحافظ
                          </span>
                        </div>
                      </div>

                      <div
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3.5 rounded-lg border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          paymentMethod === 'card'
                            ? 'border-[#082545] bg-[#082545] text-white shadow-sm'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] text-[#121c28] hover:bg-[#e5eeff]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <FontAwesomeIcon icon={faCreditCard} className={paymentMethod === 'card' ? 'text-[#FF9F1C]' : 'text-[#082545]'} />
                          {paymentMethod === 'card' && <FontAwesomeIcon icon={faCheck} className="text-[#FF9F1C] text-xs" />}
                        </div>
                        <div>
                          <span className="block text-xs font-bold">فيزا / ماستركارد</span>
                          <span className={`block text-[10px] mt-0.5 ${paymentMethod === 'card' ? 'text-white/80' : 'text-[#595f64]'}`}>
                            عبر جهاز الفني (POS)
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#eef4ff] border border-[#bdd6ff] text-xs text-[#082545] flex items-center gap-2.5">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-[#FF9F1C] text-base shrink-0" />
                    <span>
                      <strong>تذكير مهم:</strong> قيمة الكشف ({selectedService.price} ج.م) تُخصم بالكامل من تكلفة الإصلاح في حال الموافقة على إجراء الصيانة.
                    </span>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="h-11 px-5 rounded-lg border border-[#dfe9fa] bg-white hover:bg-[#f8f9ff] text-[#082545] font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                      <span>السابق</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="h-13 px-8 rounded-lg bg-[#FF9F1C] hover:bg-[#ea8d10] text-[#082545] font-extrabold text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                      <span>تأكيد الحجز النهائي الآن</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
              
              <div className="bg-white rounded-xl border border-[#dfe9fa] p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#dfe9fa] mb-3">
                  <div className="flex items-center gap-2 text-[#082545] font-bold text-sm">
                    <FontAwesomeIcon icon={faReceipt} className="text-[#FF9F1C]" />
                    <span>ملخص طلب الصيانة</span>
                  </div>
                  <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                    ضمان 30 يوم
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#f0f4fa] text-xs">
                  <span className="text-[#595f64] font-medium">الخدمة:</span>
                  <span className="font-bold text-[#121c28] text-left">{selectedService.title}</span>
                </div>

                {selectedIssue && (
                  <div className="flex items-start justify-between py-2 border-b border-[#f0f4fa] text-xs gap-2">
                    <span className="text-[#595f64] font-medium shrink-0">العطل:</span>
                    <span className="font-bold text-[#121c28] text-left">{selectedIssue}</span>
                  </div>
                )}

                {street && (
                  <div className="flex items-start justify-between py-2 border-b border-[#f0f4fa] text-xs gap-2">
                    <span className="text-[#595f64] font-medium shrink-0">العنوان:</span>
                    <span className="font-bold text-[#121c28] text-left truncate">{selectedCity} - {street}</span>
                  </div>
                )}

                <div className="flex items-center justify-between py-2 border-b border-[#f0f4fa] text-xs">
                  <span className="text-[#595f64] font-medium">الموعد:</span>
                  <span className="font-bold text-[#121c28] text-left">{getDateLabel()}</span>
                </div>

                <div className="flex items-center justify-between pt-3 text-sm">
                  <span className="font-bold text-[#121c28]">قيمة الفحص والمعاينة:</span>
                  <div className="font-black text-[#082545] text-base font-montserrat">
                    <span>{selectedService.price}</span>
                    <span className="text-xs font-cairo mr-1">ج.م</span>
                  </div>
                </div>

                <p className="text-[10px] text-[#595f64] mt-2 leading-relaxed bg-[#f8f9ff] p-2 rounded-md border border-[#e5eeff]">
                  تخصم بالكامل في حال الموافقة على الإصلاح، والتسعيرة موحدة دون فصال أو إكراميات.
                </p>
              </div>

              <div className="bg-[#082545] text-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#FF9F1C]">
                  <FontAwesomeIcon icon={faShieldHalved} />
                  <span>الفني المعتمد والمتاح للزيارة</span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={assignedTech.avatar}
                    alt={assignedTech.name}
                    width="52"
                    height="52"
                    loading="lazy"
                    decoding="async"
                    className="w-13 h-13 rounded-lg object-cover border-2 border-[#FF9F1C]"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {assignedTech.name}
                    </h3>
                    <p className="text-xs text-[#E8EDF3]/80">
                      {assignedTech.role}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#FF9F1C]">
                        <FontAwesomeIcon icon={faStar} />
                        <span>{assignedTech.rating}</span>
                      </div>
                      <span className="text-[10px] text-[#E8EDF3]/60">•</span>
                      <span className="text-[10px] text-[#E8EDF3]/80">{assignedTech.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E8EDF3]/90">
                  <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faIdCard} className="text-[#FF9F1C]" />
                    <span>{assignedTech.securityStatus}</span>
                  </div>
                  <span className="font-bold text-green-400 font-montserrat">{assignedTech.punctualityRate} التزام</span>
                </div>
              </div>

            </div>

          </div>
        ) : (
                    <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#dfe9fa] p-6 sm:p-10 shadow-lg text-center">
            
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl mx-auto mb-4 ring-8 ring-green-50">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>

            <div className="inline-flex items-center gap-2 bg-[#fffaf2] border border-[#FF9F1C] text-[#082545] px-4 py-1.5 rounded-full text-xs font-bold mb-3">
              <span>رقم الحجز المعتمد:</span>
              <span className="font-montserrat font-black text-sm text-[#ea8d10]">{bookingId}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#121c28] mb-2">
              تم تأكيد حجز زيارة الصيانة بنجاح!
            </h2>

            <p className="text-sm text-[#595f64] max-w-lg mx-auto leading-relaxed mb-8">
              شكراً لاختيارك صلحلي. سيتواصل معك الفني <strong>{assignedTech.name}</strong> هاتفياً أو عبر واتساب خلال 15 دقيقة لتأكيد التحرك للعنوان.
            </p>

            <div className="bg-[#f8f9ff] rounded-xl border border-[#dfe9fa] p-5 text-right mb-8 max-w-xl mx-auto space-y-3">
              
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#e5eeff]">
                <span className="text-[#595f64]">الخدمة:</span>
                <span className="font-bold text-[#121c28]">{selectedService.title}</span>
              </div>

              {selectedIssue && (
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#e5eeff]">
                  <span className="text-[#595f64]">العطل المشخص:</span>
                  <span className="font-bold text-[#121c28]">{selectedIssue}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#e5eeff]">
                <span className="text-[#595f64]">الموعد المحدد:</span>
                <span className="font-bold text-[#121c28]">{getDateLabel()} — {getTimeSlotLabel(timeSlot)}</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#e5eeff]">
                <span className="text-[#595f64]">العنوان:</span>
                <span className="font-bold text-[#121c28]">{selectedCity}، {street} {building && `(عمارة ${building})`}</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#e5eeff]">
                <span className="text-[#595f64]">طريقة الدفع:</span>
                <span className="font-bold text-[#121c28]">{getPaymentLabel(paymentMethod)}</span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#595f64]">الضمان المعتمد:</span>
                <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-md border border-green-200">
                  ضمان صلحلي 30 يوماً ساري
                </span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappConfirmUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto h-12 px-6 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                <span>إرسال اللوكيشن وتأكيد الموعد عبر واتساب</span>
              </a>

              <Link
                to="/"
                className="w-full sm:w-auto h-12 px-6 rounded-lg bg-[#082545] hover:bg-[#0d3b6e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>العودة للصفحة الرئيسية</span>
              </Link>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}