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
  faComments,
  faCircleExclamation
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

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const todayString = new Date().toISOString().split('T')[0];

  const normalizeDigits = (str) => {
    if (!str) return '';
    const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let result = '';
    for (let char of str) {
      const idx = arabicNums.indexOf(char);
      if (idx !== -1) {
        result += idx;
      } else if (char >= '0' && char <= '9') {
        result += char;
      }
    }
    return result;
  };

  const getFieldValue = (name, overrideVal) => {
    if (overrideVal !== undefined) return overrideVal;
    switch (name) {
      case 'selectedServiceId': return selectedServiceId;
      case 'selectedCity': return selectedCity;
      case 'street': return street;
      case 'building': return building;
      case 'customDate': return customDate;
      case 'fullName': return fullName;
      case 'phone': return phone;
      case 'whatsappPhone': return whatsappPhone;
      case 'notes': return notes;
      default: return '';
    }
  };

  const validateField = (name, overrideVal) => {
    let err = '';
    const val = getFieldValue(name, overrideVal);

    if (name === 'selectedServiceId') {
      if (!val) err = 'يرجى اختيار الخدمة المطلوبة للمتابعة.';
    } else if (name === 'selectedCity') {
      if (!val) err = 'يرجى تحديد المنطقة أو المدينة.';
    } else if (name === 'street') {
      const trimmed = (val || '').trim();
      if (!trimmed) {
        err = 'اسم الشارع أو الكمبوند مطلوب.';
      } else if (trimmed.length < 4) {
        err = 'يرجى إدخال اسم شارع أو كمبوند صحيح وكامل (4 أحرف على الأقل).';
      } else if (/^\d+$/.test(trimmed)) {
        err = 'اسم الشارع لا يمكن أن يكون أرقاماً فقط.';
      }
    } else if (name === 'building') {
      const trimmed = (val || '').trim();
      if (!trimmed) {
        err = 'يرجى إدخال رقم العمارة أو الفيلا.';
      } else if (trimmed.length > 25) {
        err = 'رقم العمارة طويل جداً.';
      }
    } else if (name === 'customDate') {
      if (dateOption === 'custom') {
        if (!val) {
          err = 'يرجى تحديد التاريخ المفضل للزيارة.';
        } else if (val < todayString) {
          err = 'لا يمكن حجز موعد في تاريخ سابق، يرجى اختيار تاريخ اليوم أو موعد قادم.';
        }
      }
    } else if (name === 'fullName') {
      const trimmed = (val || '').trim();
      if (!trimmed) {
        err = 'يرجى كتابة الاسم بالكامل.';
      } else if (trimmed.length < 4) {
        err = 'الاسم قصير جداً، يرجى كتابة اسم كامل وصحيح.';
      } else if (!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(trimmed)) {
        err = 'يرجى كتابة الاسم بالحروف فقط بدون أرقام أو رموز خاصة.';
      } else {
        const words = trimmed.split(/\s+/).filter(Boolean);
        if (words.length < 2) {
          err = 'يرجى كتابة الاسم ثنائياً على الأقل (الاسم واسم العائلة).';
        }
      }
    } else if (name === 'phone') {
      const digits = normalizeDigits(val);
      if (!digits) {
        err = 'رقم الموبايل مطلوب للتواصل وتأكيد الحجز.';
      } else if (digits.length !== 11) {
        err = 'رقم الموبايل يجب أن يتكون من 11 رقماً بالضبط (أدخلت ' + digits.length + ' أرقام).';
      } else if (!/^01[0125]/.test(digits)) {
        err = 'رقم غير صالح، يجب أن يبدأ بأحد الشبكات المصرية (010, 011, 012, 015).';
      }
    } else if (name === 'whatsappPhone') {
      if (!whatsappSameAsPhone) {
        const digits = normalizeDigits(val);
        if (!digits) {
          err = 'يرجى إدخال رقم الواتساب أو تحديد خيار الموبايل بالأعلى.';
        } else if (digits.length !== 11) {
          err = 'رقم الواتساب يجب أن يتكون من 11 رقماً بالضبط.';
        } else if (!/^01[0125]/.test(digits)) {
          err = 'رقم غير صالح، يجب أن يبدأ بأحد الشبكات المصرية (010, 011, 012, 015).';
        }
      }
    }

    return err;
  };

  const handleBlur = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const err = validateField(fieldName);
    setErrors((prev) => ({ ...prev, [fieldName]: err }));
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const digits = normalizeDigits(raw).slice(0, 11);
    setPhone(digits);
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', digits) }));
    }
  };

  const handleWhatsappPhoneChange = (e) => {
    const raw = e.target.value;
    const digits = normalizeDigits(raw).slice(0, 11);
    setWhatsappPhone(digits);
    if (touched.whatsappPhone) {
      setErrors((prev) => ({ ...prev, whatsappPhone: validateField('whatsappPhone', digits) }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    const newTouched = { ...touched };

    if (step === 1) {
      const sErr = validateField('selectedServiceId');
      if (sErr) newErrors.selectedServiceId = sErr;
      newTouched.selectedServiceId = true;
    } else if (step === 2) {
      const cityErr = validateField('selectedCity');
      if (cityErr) newErrors.selectedCity = cityErr;
      newTouched.selectedCity = true;

      const streetErr = validateField('street');
      if (streetErr) newErrors.street = streetErr;
      newTouched.street = true;

      const buildingErr = validateField('building');
      if (buildingErr) newErrors.building = buildingErr;
      newTouched.building = true;

      if (dateOption === 'custom') {
        const dateErr = validateField('customDate');
        if (dateErr) newErrors.customDate = dateErr;
        newTouched.customDate = true;
      }
    } else if (step === 3) {
      const nameErr = validateField('fullName');
      if (nameErr) newErrors.fullName = nameErr;
      newTouched.fullName = true;

      const phoneErr = validateField('phone');
      if (phoneErr) newErrors.phone = phoneErr;
      newTouched.phone = true;

      if (!whatsappSameAsPhone) {
        const waErr = validateField('whatsappPhone');
        if (waErr) newErrors.whatsappPhone = waErr;
        newTouched.whatsappPhone = true;
      }
    }

    setTouched(newTouched);
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return newErrors;
  };

  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    setFormError('');

    const stepErrors = validateStep(currentStep);
    const errorKeys = Object.keys(stepErrors);
    if (errorKeys.length > 0) {
      setFormError(stepErrors[errorKeys[0]]);
      return;
    }

    if (currentStep === 1) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 2) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 3) {
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
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-[#121c28]">
                          اسم الشارع / الكمبوند <span className="text-red-500">*</span>
                        </label>
                        {touched.street && !errors.street && street.trim() && (
                          <span className="text-[11px] font-bold text-green-600 flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <span>مكتمل</span>
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={street}
                        onChange={(e) => {
                          setStreet(e.target.value);
                          if (touched.street) {
                            setErrors((prev) => ({ ...prev, street: validateField('street', e.target.value) }));
                          }
                        }}
                        onBlur={() => handleBlur('street')}
                        placeholder="مثال: شارع التسعين الشمالي، أو كمبوند بيفرلي هيلز"
                        className={`w-full h-11 px-3.5 rounded-lg border text-xs transition-colors ${
                          touched.street && errors.street
                            ? 'border-[#ba1a1a] bg-[#fff8f7] focus:outline-none focus:border-[#ba1a1a]'
                            : touched.street && street.trim()
                            ? 'border-green-600 bg-white focus:outline-none focus:border-green-600'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] focus:bg-white focus:outline-none focus:border-[#082545]'
                        }`}
                      />
                      {touched.street && errors.street && (
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ba1a1a] mt-1.5">
                          <FontAwesomeIcon icon={faCircleExclamation} className="text-xs shrink-0" />
                          <span>{errors.street}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-[#121c28]">
                          رقم العمارة / الفيلا <span className="text-red-500">*</span>
                        </label>
                        {touched.building && !errors.building && building.trim() && (
                          <span className="text-[11px] font-bold text-green-600 flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <span>مكتمل</span>
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={building}
                        onChange={(e) => {
                          setBuilding(e.target.value);
                          if (touched.building) {
                            setErrors((prev) => ({ ...prev, building: validateField('building', e.target.value) }));
                          }
                        }}
                        onBlur={() => handleBlur('building')}
                        placeholder="مثال: عمارة 14 أو فيلا 8"
                        className={`w-full h-11 px-3.5 rounded-lg border text-xs transition-colors ${
                          touched.building && errors.building
                            ? 'border-[#ba1a1a] bg-[#fff8f7] focus:outline-none focus:border-[#ba1a1a]'
                            : touched.building && building.trim()
                            ? 'border-green-600 bg-white focus:outline-none focus:border-green-600'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] focus:bg-white focus:outline-none focus:border-[#082545]'
                        }`}
                      />
                      {touched.building && errors.building && (
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ba1a1a] mt-1.5">
                          <FontAwesomeIcon icon={faCircleExclamation} className="text-xs shrink-0" />
                          <span>{errors.building}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121c28] mb-1.5">
                        الدور ورقم الشقة
                      </label>
                      <input
                        type="text"
                        value={floorAppt}
                        maxLength={30}
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
                        maxLength={60}
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
                          حدد اليوم من التقويم <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          min={todayString}
                          value={customDate}
                          onChange={(e) => {
                            setCustomDate(e.target.value);
                            if (touched.customDate) {
                              setErrors((prev) => ({ ...prev, customDate: validateField('customDate', e.target.value) }));
                            }
                          }}
                          onBlur={() => handleBlur('customDate')}
                          className={`h-11 px-3 rounded-lg border text-xs font-montserrat ${
                            touched.customDate && errors.customDate
                              ? 'border-[#ba1a1a] bg-[#fff8f7] focus:outline-none focus:border-[#ba1a1a]'
                              : 'border-[#dfe9fa] bg-white focus:outline-none focus:border-[#082545]'
                          }`}
                        />
                        {touched.customDate && errors.customDate && (
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ba1a1a] mt-1.5">
                            <FontAwesomeIcon icon={faCircleExclamation} className="text-xs shrink-0" />
                            <span>{errors.customDate}</span>
                          </div>
                        )}
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
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-[#121c28]">
                          الاسم بالكامل <span className="text-red-500">*</span>
                        </label>
                        {touched.fullName && !errors.fullName && fullName.trim() && (
                          <span className="text-[11px] font-bold text-green-600 flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <span>صحيح</span>
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (touched.fullName) {
                            setErrors((prev) => ({ ...prev, fullName: validateField('fullName', e.target.value) }));
                          }
                        }}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="مثال: أحمد محمد علي"
                        className={`w-full h-11 px-3.5 rounded-lg border text-xs transition-colors ${
                          touched.fullName && errors.fullName
                            ? 'border-[#ba1a1a] bg-[#fff8f7] focus:outline-none focus:border-[#ba1a1a]'
                            : touched.fullName && fullName.trim()
                            ? 'border-green-600 bg-white focus:outline-none focus:border-green-600'
                            : 'border-[#dfe9fa] bg-[#f8f9ff] focus:bg-white focus:outline-none focus:border-[#082545]'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ba1a1a] mt-1.5">
                          <FontAwesomeIcon icon={faCircleExclamation} className="text-xs shrink-0" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-[#121c28]">
                          رقم الموبايل الأساسي <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[10px] text-[#595f64] font-montserrat">
                          {phone.length}/11 رقم
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          onBlur={() => handleBlur('phone')}
                          placeholder="01012345678"
                          dir="ltr"
                          maxLength={11}
                          className={`w-full h-11 px-3.5 pr-10 pl-10 rounded-lg border text-xs font-montserrat font-semibold transition-colors text-right ${
                            touched.phone && errors.phone
                              ? 'border-[#ba1a1a] bg-[#fff8f7] focus:outline-none focus:border-[#ba1a1a]'
                              : touched.phone && phone.length === 11 && !errors.phone
                              ? 'border-green-600 bg-white focus:outline-none focus:border-green-600'
                              : 'border-[#dfe9fa] bg-[#f8f9ff] focus:bg-white focus:outline-none focus:border-[#082545]'
                          }`}
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-[#595f64] pointer-events-none text-xs">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        {touched.phone && !errors.phone && phone.length === 11 && (
                          <div className="absolute inset-y-0 left-3 flex items-center text-green-600 pointer-events-none text-xs">
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                        )}
                      </div>
                      {touched.phone && errors.phone && (
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ba1a1a] mt-1.5">
                          <FontAwesomeIcon icon={faCircleExclamation} className="text-xs shrink-0" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="whatsappSame"
                        checked={whatsappSameAsPhone}
                        onChange={(e) => {
                          setWhatsappSameAsPhone(e.target.checked);
                          if (e.target.checked) {
                            setErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.whatsappPhone;
                              return copy;
                            });
                          }
                        }}
                        className="w-4 h-4 rounded text-[#FF9F1C] focus:ring-[#FF9F1C] border-[#dfe9fa] cursor-pointer"
                      />
                      <label htmlFor="whatsappSame" className="text-xs font-bold text-[#121c28] cursor-pointer">
                        رقم الموبايل هو نفس رقم الواتساب لتلقي تفاصيل الفني
                      </label>
                    </div>

                    {!whatsappSameAsPhone && (
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-bold text-[#121c28]">
                            رقم واتساب مختلف <span className="text-red-500">*</span>
                          </label>
                          <span className="text-[10px] text-[#595f64] font-montserrat">
                            {whatsappPhone.length}/11 رقم
                          </span>
                        </div>
                        <div className="relative">
                          <input
                            type="tel"
                            value={whatsappPhone}
                            onChange={handleWhatsappPhoneChange}
                            onBlur={() => handleBlur('whatsappPhone')}
                            placeholder="01xxxxxxxxx"
                            dir="ltr"
                            maxLength={11}
                            className={`w-full h-11 px-3.5 pr-10 pl-10 rounded-lg border text-xs font-montserrat font-semibold transition-colors text-right ${
                              touched.whatsappPhone && errors.whatsappPhone
                                ? 'border-[#ba1a1a] bg-[#fff8f7] focus:outline-none focus:border-[#ba1a1a]'
                                : touched.whatsappPhone && whatsappPhone.length === 11 && !errors.whatsappPhone
                                ? 'border-green-600 bg-white focus:outline-none focus:border-green-600'
                                : 'border-[#dfe9fa] bg-[#f8f9ff] focus:bg-white focus:outline-none focus:border-[#082545]'
                            }`}
                          />
                          <div className="absolute inset-y-0 right-3 flex items-center text-[#25D366] pointer-events-none text-xs">
                            <FontAwesomeIcon icon={faWhatsapp} />
                          </div>
                          {touched.whatsappPhone && !errors.whatsappPhone && whatsappPhone.length === 11 && (
                            <div className="absolute inset-y-0 left-3 flex items-center text-green-600 pointer-events-none text-xs">
                              <FontAwesomeIcon icon={faCircleCheck} />
                            </div>
                          )}
                        </div>
                        {touched.whatsappPhone && errors.whatsappPhone && (
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#ba1a1a] mt-1.5">
                            <FontAwesomeIcon icon={faCircleExclamation} className="text-xs shrink-0" />
                            <span>{errors.whatsappPhone}</span>
                          </div>
                        )}
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