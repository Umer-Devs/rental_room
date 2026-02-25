import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Benefits = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            icon: <ShieldCheck size={32} />,
            title: t('benefits.items.verified.title'),
            desc: t('benefits.items.verified.desc')
        },
        {
            icon: <Zap size={32} />,
            title: t('benefits.items.verified.title'), // Fixed key in thought, but let's use the actual keys
            title: t('benefits.items.instant.title'),
            desc: t('benefits.items.instant.desc')
        },
        {
            icon: <Globe size={32} />,
            title: t('benefits.items.prime.title'),
            desc: t('benefits.items.prime.desc')
        },
        {
            icon: <Heart size={32} />,
            title: t('benefits.items.support.title'),
            desc: t('benefits.items.support.desc')
        }
    ];

    return (
        <section id="benefits" className="py-32 bg-white relative overflow-hidden">
            <div className="custom-padding custom-padding">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-sm font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                            {t('benefits.badge')}
                        </div>
                        <h2 className="text-4xl   md:text-5xl font-black text-[#213C51]    mb-10 uppercase">
                            {t('benefits.title')} <br />
                            <span className="text-[#55A2C2] italic font-serif">{t('benefits.title_italic')}</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-lg">
                            {t('benefits.desc')}
                        </p>

                        <Link to="/contact">
                            <button className="px-10 py-5 bg-[#55A2C2] text-white rounded-full font-black uppercase text-sm tracking-widest shadow-xl shadow-[#55A2C2]/20 hover:scale-105 transition-transform">
                                {t('benefits.button')}
                            </button>
                        </Link>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="p-10 rounded-[3rem] bg-[#F9FAFB] border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#55A2C2] mb-8 shadow-sm group-hover:bg-[#55A2C2] group-hover:text-white transition-all duration-500">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-black text-[#213C51] mb-4 uppercase tracking-tight">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-bold">
                                    {benefit.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
