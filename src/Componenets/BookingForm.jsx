import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Calendar, Users, Home, Mail, Phone, Clock, User, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Home18, Home19, Home3, Home5, Home7 } from '../assets';

const BookingForm = () => {
    const { t } = useTranslation();

    return (
        <section id="booking" className="py-40 bg-white relative overflow-hidden">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#F8FAFC]/50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#213C51] hidden lg:block" />

            <div className="custom-padding relative z-10">
                <div className="grid lg:grid-cols-2 bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(33,60,81,0.15)] overflow-hidden border border-gray-100">

                    {/* Left Side: Immersive Visual & Integrated Concierge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative min-h-[600px] lg:min-h-[800px] group overflow-hidden"
                    >
                        {/* High-End Visual Anchor */}
                        <img
                            src={Home3}
                            alt="Despacho Luxury Space"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#213C51] via-[#213C51]/40 to-transparent opacity-90" />

                        {/* Overlaid Info (Glassmorphism) */}
                        <div className="absolute inset-0 p-16 flex flex-col justify-between">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-[0.3em]">
                                    <Clock size={14} className="text-[#55A2C2]" /> {t('booking_form.info.response_time', 'Response < 1hr')}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="space-y-12"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-white text-5xl font-black uppercase leading-[0.85] tracking-tighter">
                                        {t('booking_form.info.direct', 'Speak to our')}<br />
                                        <span className="text-[#55A2C2] italic font-serif lowercase italic">{t('booking_form.info.connect', 'concierge')}</span>
                                    </h3>
                                    <div className="h-1.5 w-20 bg-[#55A2C2] rounded-full" />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-10">
                                    <div className="space-y-2">
                                        <p className="text-[#55A2C2] text-[10px] font-black uppercase tracking-widest">{t('booking_form.labels.email', 'Email')}</p>
                                        <a href="mailto:concierge@despacho.pt" className="text-white font-bold text-xl hover:text-[#55A2C2] transition-colors">concierge@despacho.pt</a>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[#55A2C2] text-[10px] font-black uppercase tracking-widest">{t('booking_form.labels.phone', 'Phone')}</p>
                                        <a href="tel:+351921234567" className="text-white font-bold text-xl hover:text-[#55A2C2] transition-colors">+351 92 123 4567</a>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/10">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-xs uppercase tracking-widest">Lisbon Office</p>
                                            <p className="text-white/40 text-[10px] font-bold">Av. da Liberdade 110</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-4xl font-black text-white leading-none">4.9</p>
                                        <div className="flex gap-1 justify-end">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} className="text-[#55A2C2] fill-[#55A2C2]" />)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Sophisticated Enquiry Form */}
                    <div className="p-12 lg:p-24 bg-white flex flex-col justify-center">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="mb-16">
                                <h2 className="text-5xl font-black text-[#213C51] uppercase leading-none mb-6 tracking-tighter">
                                    {t('booking_form.title')} <br />
                                    <span className="text-[#55A2C2] italic font-serif lowercase italic">{t('booking_form.title_italic')}</span>
                                </h2>
                                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-md">
                                    {t('contact.form.subtitle', 'Send us a message and our team will get back to you within the hour.')}
                                </p>
                            </div>

                            <form className="space-y-10">
                                <div className="grid sm:grid-cols-2 gap-10">
                                    <div className="group space-y-3">
                                        <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] group-focus-within:text-[#55A2C2] transition-colors">
                                            {t('booking_form.labels.name')}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t('booking_form.placeholders.name')}
                                            className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-[#213C51] text-lg font-bold outline-none focus:border-[#55A2C2] transition-colors placeholder:text-gray-200"
                                        />
                                    </div>
                                    <div className="group space-y-3">
                                        <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] group-focus-within:text-[#55A2C2] transition-colors">
                                            {t('booking_form.labels.email')}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder={t('booking_form.placeholders.email')}
                                            className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-[#213C51] text-lg font-bold outline-none focus:border-[#55A2C2] transition-colors placeholder:text-gray-200"
                                        />
                                    </div>
                                </div>

                                <div className="group space-y-3">
                                    <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] group-focus-within:text-[#55A2C2] transition-colors">
                                        {t('booking_form.labels.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder={t('booking_form.placeholders.phone')}
                                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-[#213C51] text-lg font-bold outline-none focus:border-[#55A2C2] transition-colors placeholder:text-gray-200"
                                    />
                                </div>

                                <div className="group space-y-3">
                                    <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] group-focus-within:text-[#55A2C2] transition-colors">
                                        {t('booking_form.labels.message')}
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder={t('booking_form.placeholders.message')}
                                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-[#213C51] text-lg font-bold outline-none focus:border-[#55A2C2] transition-colors placeholder:text-gray-200 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(85, 162, 194, 0.25)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-4 bg-[#213C51] text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-[0.4em] shadow-2xl transition-all hover:bg-[#55A2C2]"
                                >
                                    {t('booking_form.button')}
                                    <Send size={18} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
