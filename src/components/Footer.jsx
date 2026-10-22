import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWrench, 
  faPhone, 
  faEnvelope, 
  faShieldHalved,
  faHouse
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp, 
  faFacebookF, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#082545] text-white pt-16 pb-24 md:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF9F1C] flex items-center justify-center text-[#082545] shadow-md">
                <FontAwesomeIcon icon={faWrench} className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-wide">صلحلي</span>
                <span className="text-[10px] text-[#E8EDF3]/70 font-montserrat font-semibold tracking-widest uppercase -mt-1">
                  Sallahly
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#E8EDF3]/80 leading-relaxed max-w-sm">
              المنصة الذكية الرائدة لحجز خدمات الصيانة المنزلية المعتمدة في جمهورية مصر العربية. نوفر لك فنيين موثوقين بفيش جنائي، أسعار واضحة، وضمان معتمد 30 يوماً.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                <span>تواصل عبر واتساب</span>
              </a>

              <a
                href="tel:19000"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="text-xs" />
                <span>الخط الساخن: 19000</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white mb-2">عن صلحلي</h4>
            <a href="#services" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              خدمات الصيانة
            </a>
            <a href="#why-us" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              معايير الأمان والفيش الجنائي
            </a>
            <a href="#pricing" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              سياسة التسعير الذهبية
            </a>
            <a href="#faq" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              الأسئلة الشائعة
            </a>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white mb-2">خدماتنا الرئيسية</h4>
            <Link to="/service/ac" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              كشف وصيانة تكييف سبليت
            </Link>
            <Link to="/service/plumbing" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              تأسيس وصيانة سباكة طارئة
            </Link>
            <Link to="/service/electricity" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              إصلاح وصيانة لوحات كهربائية
            </Link>
            <a href="#services" className="text-xs text-[#E8EDF3]/80 hover:text-[#FF9F1C] transition-colors">
              صيانة الأجهزة المنزلية
            </a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-bold text-white mb-2">تابعنا وتواصل معنا</h4>
            <div className="flex items-center gap-3 mb-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF9F1C] hover:text-[#082545] flex items-center justify-center text-sm transition-all"
                aria-label="فيسبوك"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF9F1C] hover:text-[#082545] flex items-center justify-center text-sm transition-all"
                aria-label="إنستغرام"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-sm transition-all"
                aria-label="واتساب"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <span className="text-xs text-[#E8EDF3]/70">خدمة العملاء متاحة طوال الأسبوع من 9 ص حتى 11 م</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8EDF3]/60">
          <p>
            جميع الحقوق محفوظة لمنصة صلحلي للصيانة المنزلية © {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} className="text-[#FF9F1C]" />
            <span>صُنعت بكل فخر لخدمة البيوت المصرية في الشيخ زايد، التجمع، والشروق</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
