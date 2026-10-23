import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../public/logo-icon.svg'
import {
    faWrench,
    faArrowLeft,
    faShieldHalved,
    faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

export default function CTASection({ onBookClick }) {
    return (
        <section className="relative py-20 bg-gradient-to-r from-[#ffb143] to-[#ea8d10] text-[#082545] overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                <div className="w-18 h-18 rounded-lg bg-white/30 border border-white/20 flex items-center justify-center text-2xl mb-6">
                    <img src={Logo} alt="صلحلي" width="48" height="48" className="w-12 h-12 object-contain" />
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-[#082545] leading-tight mb-4">
                    جاهز تصلح؟ احجز فنيك دلوقتي!
                </h2>

                <p className="text-base sm:text-lg text-[#082545]/90 max-w-xl font-medium leading-relaxed mb-8">
                    فنيين موثوقين بفيش جنائي معتمد، أسعار موحدة مسبقاً، وضمان رسمي معتمد لمدة 30 يوماً على كل صيانة.
                </p>

                <Link
                    to="/booking"
                    className="h-14 px-10 rounded-lg bg-[#082545] hover:bg-[#041427] text-white font-extrabold text-base sm:text-lg flex items-center gap-3 shadow-2xl shadow-[#082545]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <span>احجز الآن في دقيقة</span>
                    <FontAwesomeIcon icon={faArrowLeft} className="text-sm mr-1" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-bold text-[#082545]/80 mt-6">
                    <FontAwesomeIcon icon={faShieldHalved} />
                    <span>معاينة فورية ودقة متناهية في المواعيد</span>
                </div>

            </div>
        </section>
    );
}
