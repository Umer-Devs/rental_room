import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Eye,
    Globe2, Award, Sparkles, Building2, Flame
} from 'lucide-react';
import { Footer } from '../Componenets';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
    const { t } = useTranslation();

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <main className="bg-[#213C51] text-white min-h-screen">
            {/* Unique Hero: The Visionary Arc */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden custom-padding">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#213C51] via-transparent to-[#213C51]" />

                <div className="relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="w-24 h-24 bg-[#55A2C2]/10 backdrop-blur-3xl border border-[#55A2C2]/30 rounded-full flex items-center justify-center mx-auto mb-12"
                    >
                        <Building2 size={40} className="text-[#55A2C2]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8"
                    >
                        {t('about_page.hero.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-white italic font-serif">{t('about_page.hero.title_italic')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/40 text-xl font-medium tracking-widest uppercase italic"
                    >
                        {t('about_page.hero.est')}
                    </motion.p>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#55A2C2] to-transparent"
                />
            </section>

            {/* Section I: The Heritage (Pure White Backdrop) */}
            <section className="bg-white text-[#213C51] custom-padding py-40">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 space-y-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            className="space-y-6"
                        >
                            <span className="text-[#55A2C2] font-black tracking-[0.4em] uppercase text-xs">{t('about_page.heritage.badge')}</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                {t('about_page.heritage.title')} <br />
                                <span className="text-[#55A2C2] italic font-serif">{t('about_page.heritage.title_italic')}</span>
                            </h2>
                            <p className="text-[#213C51]/60 text-lg md:text-xl leading-relaxed font-medium">
                                {t('about_page.heritage.desc')}
                            </p>
                            <p className="text-[#213C51]/40 text-lg leading-relaxed italic">
                                "{t('about_page.heritage.quote')}"
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1569406829354-eb0cc9e653e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHVnYWx8ZW58MHx8MHx8fDA%3D" alt="Heritage" className="w-full aspect-square object-cover" />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                        </div>
                        {/* Status Float Badge */}
                        <div className="absolute -bottom-10 -left-10 bg-[#213C51] p-10 rounded-[3rem] shadow-2xl text-white">
                            <span className="text-4xl font-black text-[#55A2C2]">10+</span>
                            <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">{t('about_page.heritage.stat_label')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section II: Core Pillars (Floating Glass Blocks) */}
            <section className="bg-[#1e3447] custom-padding py-40 relative">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-[#55A2C2] font-black tracking-[0.4em] uppercase text-xs mb-6">{t('about_page.pillars.badge')}</h2>
                    <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter">
                        {t('about_page.pillars.title')} <span className="opacity-30 italic font-serif">{t('about_page.pillars.title_italic')}</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            icon: <Target className="text-[#55A2C2]" />,
                            title: t('about_page.pillars.items.precision.title'),
                            desc: t('about_page.pillars.items.precision.desc'),
                            stat: t('about_page.pillars.items.precision.stat')
                        },
                        {
                            icon: <Eye className="text-[#55A2C2]" />,
                            title: t('about_page.pillars.items.transparency.title'),
                            desc: t('about_page.pillars.items.transparency.desc'),
                            stat: t('about_page.pillars.items.transparency.stat')
                        },
                        {
                            icon: <Globe2 className="text-[#55A2C2]" />,
                            title: t('about_page.pillars.items.humanity.title'),
                            desc: t('about_page.pillars.items.humanity.desc'),
                            stat: t('about_page.pillars.items.humanity.stat')
                        }
                    ].map((pillar, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                {pillar.icon}
                            </div>
                            <div className="w-16 h-16 bg-[#55A2C2]/10 rounded-3xl flex items-center justify-center mb-10 border border-[#55A2C2]/20 shadow-xl shadow-black/20">
                                {pillar.icon}
                            </div>
                            <h4 className="text-3xl font-black uppercase mb-6">{pillar.title}</h4>
                            <p className="text-white/40 mb-10 leading-relaxed font-medium">{pillar.desc}</p>
                            <div className="inline-block px-5 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#55A2C2] border border-[#55A2C2]/10">
                                {pillar.stat}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section III: The Elite Team (Asymmetric Layout) */}
            <section className="bg-white text-[#213C51] custom-padding py-40">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6 pt-20">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" className="rounded-[4rem] aspect-[3/4] object-cover shadow-2xl" alt="Team 1" />
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" className="rounded-[4rem] aspect-square object-cover shadow-2xl" alt="Team 2" />
                            </div>
                            <div className="space-y-6">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" className="rounded-[4rem] aspect-square object-cover shadow-2xl" alt="Team 3" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" className="rounded-[4rem] aspect-[3/4] object-cover shadow-2xl" alt="Team 4" />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-10">
                        <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
                            <span className="text-[#55A2C2] font-black tracking-[0.4em] uppercase text-xs">{t('about_page.team.badge')}</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-6 mb-10 text-[#213C51]">
                                {t('about_page.team.title')} <br />
                                <span className="text-[#55A2C2] italic font-serif">{t('about_page.team.title_italic')}</span>
                            </h2>
                            <p className="text-[#213C51]/60 text-lg leading-relaxed font-medium mb-12">
                                {t('about_page.team.desc')}
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 bg-[#EDF1F8] rounded-2xl flex items-center justify-center text-[#55A2C2] group-hover:bg-[#55A2C2] group-hover:text-white transition-colors duration-500">
                                        <Award size={28} />
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase tracking-widest text-[#213C51]">{t('about_page.team.excellence.title')}</h5>
                                        <p className="text-[#213C51]/40 text-sm">{t('about_page.team.excellence.desc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 bg-[#EDF1F8] rounded-2xl flex items-center justify-center text-[#55A2C2] group-hover:bg-[#55A2C2] group-hover:text-white transition-colors duration-500">
                                        <Flame size={28} />
                                    </div>
                                    <div>
                                        <h5 className="font-black uppercase tracking-widest text-[#213C51]">{t('about_page.team.passion.title')}</h5>
                                        <p className="text-[#213C51]/40 text-sm">{t('about_page.team.passion.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Call: The Global Mission (Navy High-Contrast) */}
            <section className="bg-[#142330] custom-padding py-60 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#55A2C20a,#transparent)]" />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <Sparkles className="text-[#55A2C2] mx-auto mb-10 w-20 h-20 animate-pulse" />
                    <h2 className="text-4xl md:text-9xl font-black uppercase tracking-tighter mb-10 leading-[0.8]">
                        {t('about_page.mission.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-white italic font-serif">{t('about_page.mission.title_italic')}</span>
                    </h2>
                    <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto mb-16">
                        "{t('about_page.mission.quote')}"
                    </p>
                    <Link to="/contact" className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#55A2C2] text-white px-16 py-7 rounded-full font-black uppercase tracking-[0.4em] text-xs shadow-2xl shadow-[#55A2C2]/20 hover:bg-white hover:text-[#213C51] transition-all"
                        >
                            {t('about_page.mission.button')}
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
};

export default About;
