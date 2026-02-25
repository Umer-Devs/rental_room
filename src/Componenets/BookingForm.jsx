import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Calendar, Users, Home, Mail, Phone, Clock, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BookingForm = () => {
    const { t } = useTranslation();

    return (
        <section id="booking" className="py-24 bg-[#213C51] relative overflow-hidden">
            {/* Background Orbs Retained for Premium Feel */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#55A2C2]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#55A2C2]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="custom-padding relative z-10">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
                    {/* Left: Elite Contact Tiles */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col gap-6 order-2 lg:order-1"
                    >
                        {/* Elite Tile 1: Communication */}
                        <div className="group relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 hover:border-[#55A2C2]/40 transition-all duration-500 shadow-2xl overflow-hidden">
                            <div className="absolute top-4 right-6 px-3 py-1 bg-[#55A2C2]/20 rounded-full border border-[#55A2C2]/30">
                                <span className="text-[10px] font-black text-[#55A2C2] uppercase tracking-tighter">Response &lt; 1hr</span>
                            </div>

                            <div className="flex items-center gap-6 mb-6">
                                <div className="p-4 bg-[#55A2C2] rounded-2xl text-[#213C51] shadow-lg shadow-[#55A2C2]/20 group-hover:scale-110 transition-transform duration-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-black tracking-tight">{t('booking_form.info.direct')}</h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{t('booking_form.info.connect')}</p>
                                </div>
                            </div>

                            <div className="space-y-3 pl-2">
                                <a href="mailto:concierge@luxstay.pt" className="flex items-center gap-3 text-white/60 hover:text-[#55A2C2] transition-colors font-bold text-lg">
                                    concierge@luxstay.pt
                                </a>
                                <a href="tel:+351210000000" className="flex items-center gap-3 text-white/60 hover:text-[#55A2C2] transition-colors font-bold text-lg">
                                    +351 210 000 000
                                </a>
                            </div>
                        </div>

                        {/* Elite Tile 2: Headquarters */}
                        <div className="group relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 hover:border-[#55A2C2]/40 transition-all duration-500 shadow-2xl">
                            <div className="absolute top-4 right-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-tighter">Global Hub</span>
                            </div>

                            <div className="flex items-center gap-6 mb-6">
                                <div className="p-4 bg-white/5 rounded-2xl text-[#55A2C2] border border-white/10 group-hover:bg-[#55A2C2] group-hover:text-[#213C51] transition-all duration-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-black tracking-tight">{t('booking_form.info.visit')}</h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Lisbon, Portugal</p>
                                </div>
                            </div>

                            <div className="space-y-1 pl-2 leading-relaxed">
                                <p className="text-white/60 font-bold text-lg">Avenida da Liberdade 110,</p>
                                <p className="text-white/60 font-bold text-lg">1250-146 Lisboa, PT</p>
                            </div>
                        </div>

                        {/* Elite Tile 3: Trust/Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/5 text-center">
                                <p className="text-2xl font-black text-white">12k+</p>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{t('booking_form.info.residents')}</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/5 text-center">
                                <p className="text-2xl font-black text-[#55A2C2]">4.9/5</p>
                                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{t('booking_form.info.rating')}</p>
                            </div>
                        </div>

                        {/* Opening Hours Footer */}
                        <div className="text-left pt-2 px-4">
                            <p className="text-white/20 font-bold text-[10px] uppercase tracking-[0.25em] flex items-center gap-3">
                                <Clock size={14} className="text-[#55A2C2]/40" /> {t('booking_form.info.support')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Interactive Form (Image Inspired) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 uppercase tracking-tight">
                            {t('booking_form.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif">{t('booking_form.title_italic')}</span>
                        </h2>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">{t('booking_form.labels.name')}</label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            placeholder={t('booking_form.placeholders.name')}
                                            className="w-full bg-white/5 border border-white/10   rounded-lg px-6 py-4 text-white outline-none focus:border-[#55A2C2] focus:bg-white/10 transition-all font-bold placeholder:text-white/20"
                                        />
                                        <User className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#55A2C2] transition-colors" size={20} />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">{t('booking_form.labels.email')}</label>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            placeholder={t('booking_form.placeholders.email')}
                                            className="w-full bg-white/5 border border-white/10   rounded-lg px-6 py-4 text-white outline-none focus:border-[#55A2C2] focus:bg-white/10 transition-all font-bold placeholder:text-white/20"
                                        />
                                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#55A2C2] transition-colors" size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">{t('booking_form.labels.phone')}</label>
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        placeholder={t('booking_form.placeholders.phone')}
                                        className="w-full bg-white/5 border border-white/10   rounded-lg px-6 py-4 text-white outline-none focus:border-[#55A2C2] focus:bg-white/10 transition-all font-bold placeholder:text-white/20"
                                    />
                                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#55A2C2] transition-colors" size={20} />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black text-white/40 uppercase tracking-widest ml-1">{t('booking_form.labels.message')}</label>
                                <textarea
                                    rows="5"
                                    placeholder={t('booking_form.placeholders.message')}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#55A2C2] focus:bg-white/10 transition-all font-bold placeholder:text-white/20 resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-black/40 hover:bg-[#55A2C2] text-white hover:text-[#213C51] font-black uppercase tracking-[0.3em] py-5   rounded-lg border border-white/10 hover:border-transparent transition-all duration-500 shadow-xl"
                            >
                                {t('booking_form.button')}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
