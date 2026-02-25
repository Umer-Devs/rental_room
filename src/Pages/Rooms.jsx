import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Star, Sparkles, Orbit, Compass,
    Zap, Gem, Trophy, Award
} from 'lucide-react';
import { Footer } from '../Componenets';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Rooms = () => {
    const { t } = useTranslation();

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <main className="min-h-screen">
            {/* Cinematic Typography Hero (Navy) */}
            <section className="bg-[#213C51] text-white custom-padding pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#55A2C2]/5 blur-[200px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="inline-flex items-center gap-3 px-6 py-2.5 mb-12 text-[10px] font-black tracking-[0.5em] text-[#55A2C2] uppercase bg-[#55A2C2]/5 rounded-full border border-[#55A2C2]/20"
                    >
                        <Shield size={14} /> {t('rooms_page.hero.badge')}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter mb-12"
                    >
                        {t('rooms_page.hero.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif">{t('rooms_page.hero.title_italic')}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="h-[1px] w-24 bg-[#55A2C2] mx-auto mb-12"
                    />

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                        className="text-white/40 text-xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto italic font-serif"
                    >
                        "{t('rooms_page.hero.quote')}"
                    </motion.p>
                </div>
            </section>

            {/* Narrative Section: The Philosophy (White) */}
            <section className="bg-white text-[#213C51] custom-padding py-40 border-y border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-16"
                    >
                        <div className="space-y-6">
                            <h2 className="text-[#55A2C2] font-black text-xs uppercase tracking-[0.4em]">{t('rooms_page.philosophy.badge')}</h2>
                            <h3 className="text-4xl md:text-7xl font-black uppercase leading-tight tracking-tighter">
                                {t('rooms_page.philosophy.title')} <span className="text-[#213C51]/30 italic font-serif">{t('rooms_page.philosophy.title_italic')}</span>
                            </h3>
                            <p className="text-[#213C51]/60 text-lg md:text-xl leading-relaxed font-medium">
                                {t('rooms_page.philosophy.desc')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-20">
                            <div className="space-y-8 p-10 bg-[#EDF1F8] rounded-[3rem] border border-gray-200 hover:border-[#55A2C2]/40 transition-all">
                                <Trophy size={40} className="text-[#55A2C2]" />
                                <h4 className="text-2xl font-black uppercase text-[#213C51]">{t('rooms_page.philosophy.blue_standard.title')}</h4>
                                <p className="text-[#213C51]/60 font-medium">
                                    {t('rooms_page.philosophy.blue_standard.desc')}
                                </p>
                            </div>
                            <div className="space-y-8 p-10 bg-[#EDF1F8] rounded-[3rem] border border-gray-200 hover:border-[#55A2C2]/40 transition-all">
                                <Gem size={40} className="text-[#55A2C2]" />
                                <h4 className="text-2xl font-black uppercase text-[#213C51]">{t('rooms_page.philosophy.bespoke.title')}</h4>
                                <p className="text-[#213C51]/60 font-medium">
                                    {t('rooms_page.philosophy.bespoke.desc')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Narrative Section: The Experience (Navy) */}
            <section className="bg-[#1e3447] text-white custom-padding py-40 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#55A2C2]/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-[#55A2C2] font-black text-xs uppercase tracking-[0.4em]">{t('rooms_page.experience.badge')}</h2>
                        <h3 className="text-4xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                            {t('rooms_page.experience.title')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-white italic font-serif">{t('rooms_page.experience.title_italic')}</span>
                        </h3>
                        <p className="text-white/40 text-lg md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto italic font-serif">
                            "{t('rooms_page.experience.quote')}"
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 pt-12">
                            {[
                                { icon: <Orbit />, title: t('rooms_page.experience.items.concierge.title'), desc: t('rooms_page.experience.items.concierge.desc') },
                                { icon: <Shield />, title: t('rooms_page.experience.items.security.title'), desc: t('rooms_page.experience.items.security.desc') },
                                { icon: <Sparkles />, title: t('rooms_page.experience.items.housekeeping.title'), desc: t('rooms_page.experience.items.housekeeping.desc') }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-6 p-8 group">
                                    <div className="text-[#55A2C2] animate-pulse group-hover:scale-125 transition-transform">{item.icon}</div>
                                    <h5 className="font-black uppercase text-sm tracking-widest">{item.title}</h5>
                                    <p className="text-white/20 text-xs font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Narrative Call: The Invitation (White) */}
            <section className="bg-white text-[#213C51] custom-padding py-40">
                <div className="max-w-4xl mx-auto bg-[#F8FAFC] p-12 md:p-24 rounded-[4rem] border border-gray-200 text-center shadow-2xl shadow-gray-200/50">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Award size={60} className="text-[#55A2C2] mx-auto mb-10" />
                        <h2 className="text-3xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
                            {t('rooms_page.invitation.title')} <span className="text-[#55A2C2] italic font-serif">{t('rooms_page.invitation.title_italic')}</span>
                        </h2>
                        <p className="text-[#213C51]/60 text-lg leading-relaxed font-medium mb-12">
                            {t('rooms_page.invitation.desc')}
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#213C51] text-white px-16 py-6 rounded-full font-black uppercase text-xs tracking-[0.5em] shadow-[0_30px_60px_rgba(33,60,81,0.2)] hover:bg-[#55A2C2] hover:scale-105 transition-all">
                                {t('rooms_page.invitation.button')}
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Rooms;
