import React from 'react';
import { Search, ClipboardCheck, Key, ArrowDown, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: <Search size={32} />,
            badge: t('how_it_works.steps.step1.badge'),
            title: t('how_it_works.steps.step1.title'),
            desc: t('how_it_works.steps.step1.desc'),
            color: "#55A2C2"
        },
        {
            icon: <ClipboardCheck size={32} />,
            badge: t('how_it_works.steps.step2.badge'),
            title: t('how_it_works.steps.step2.title'),
            desc: t('how_it_works.steps.step2.desc'),
            color: "#bce8ff"
        },
        {
            icon: <Key size={32} />,
            badge: t('how_it_works.steps.step3.badge'),
            title: t('how_it_works.steps.step3.title'),
            desc: t('how_it_works.steps.step3.desc'),
            color: "#55A2C2"
        }
    ];

    return (
        <section id="how-it-works" className="py-32 bg-[#213C51] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#55A2C2]/5 blur-[150px] rounded-full -z-0" />
            <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#55A2C2]/5 blur-[120px] rounded-full -z-0" />

            <div className="custom-padding relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 mb-8 text-[10px] md:text-sm font-black tracking-[0.25em] text-[#55A2C2] uppercase bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl"
                    >
                        <Sparkles size={14} /> {t('how_it_works.badge')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black text-white    uppercase"
                    >
                        {t('how_it_works.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif">{t('how_it_works.title_italic')}</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Vertical Energy Path */}
                    <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#55A2C2]/30 to-transparent lg:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-24 lg:space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                            >
                                {/* Central Node Indicator */}
                                <div className="absolute left-[20px] lg:left-1/2 w-4 h-4 rounded-full bg-[#55A2C2] shadow-[0_0_20px_#55A2C2] lg:-translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:block border-4 border-[#213C51]" />

                                {/* Background Number Overlay */}
                                <div className={`absolute ${index % 2 === 0 ? 'lg:right-[60%]' : 'lg:left-[60%]'} top-0 text-[6rem] md:text-[25rem] font-black text-white/[0.03] select-none pointer-events-none font-serif leading-none italic`}>
                                    0{index + 1}
                                </div>

                                {/* Content Card */}
                                <div className="w-full lg:w-1/2">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="relative group bg-white/5 backdrop-blur-[60px] p-8 md:p-12 rounded-[3.5rem] border border-white/10 hover:border-[#55A2C2]/30 transition-all duration-500 shadow-2xl"
                                    >
                                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#55A2C2]/10 rounded-full border border-[#55A2C2]/20">
                                            <ShieldCheck size={14} className="text-[#55A2C2]" />
                                            <span className="text-[10px] font-black text-[#55A2C2] uppercase tracking-widest">{step.badge}</span>
                                        </div>

                                        <div className="p-6 bg-[#55A2C2] rounded-3xl text-[#213C51] w-fit mb-8 shadow-2xl shadow-[#55A2C2]/20 group-hover:scale-110 transition-transform duration-500">
                                            {step.icon}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight leading-none italic font-serif">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/40 text-lg leading-relaxed font-medium">
                                            {step.desc}
                                        </p>

                                        {/* Corner Decorative Element */}
                                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                                            <Zap size={80} className="text-[#55A2C2]" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-32 flex justify-center">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="p-6 bg-white/5 rounded-full border border-white/10 text-[#55A2C2]/30"
                        >
                            <ArrowDown size={32} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
