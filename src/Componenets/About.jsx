import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-32 bg-white overflow-hidden">
            <div className="custom-padding custom-padding">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Visual Storytelling */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[4rem] overflow-hidden flex justify-end  transform transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1572891086295-6c1c7c476549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGZvciUyMHJlbnR8ZW58MHx8MHx8fDA%3D"
                                alt="Lisbon Portugal Living"
                                className="w-full max-w-2xl object-cover"
                            />
                        </div>
                        {/* Decorative floating card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-10 -right-10 z-20 bg-[#213C51] text-white p-10 rounded-[3rem] shadow-2xl max-w-[280px]"
                        >
                            <p className="text-4xl font-black mb-2">10+</p>
                            <p className="text-white/60 text-xs font-black uppercase tracking-widest">{t('about_comp.stats.years')}</p>
                        </motion.div>

                        {/* Background Texture */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#55A2C2]/5 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Right: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                            {t('about_comp.badge')}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#213C51] leading-tight mb-10 uppercase">
                            {t('about_comp.title')} <br />
                            <span className="text-[#55A2C2] italic font-serif">{t('about_comp.title_italic')}</span>
                        </h2>
                        <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
                            <p>
                                {t('about_comp.desc1')}
                            </p>
                            <p>
                                {t('about_comp.desc2')}
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-12">
                            <div>
                                <p className="text-3xl font-black text-[#213C51]">500+</p>
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{t('about_comp.stats.properties')}</p>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <div>
                                <p className="text-3xl font-black text-[#213C51]">24h</p>
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{t('about_comp.stats.response')}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
