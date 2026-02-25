import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Wifi, Luggage, Key, UserCheck, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PremiumServices = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <UserCheck size={32} />,
            title: t('services.items.concierge.title'),
            desc: t('services.items.concierge.desc')
        },
        {
            icon: <Wifi size={32} />,
            title: t('services.items.wifi.title'),
            desc: t('services.items.wifi.desc')
        },
        {
            icon: <Coffee size={32} />,
            title: t('services.items.breakfast.title'),
            desc: t('services.items.breakfast.desc')
        },
        {
            icon: <Luggage size={32} />,
            title: t('services.items.luggage.title'),
            desc: t('services.items.luggage.desc')
        },
        {
            icon: <PhoneCall size={32} />,
            title: t('services.items.assistance.title'),
            desc: t('services.items.assistance.desc')
        },
        {
            icon: <Key size={32} />,
            title: t('services.items.access.title'),
            desc: t('services.items.access.desc')
        }
    ];

    return (
        <section id="services" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#213C51] -z-0" />

            <div className=" max-w-7xl mx-auto custom-padding relative z-10">
                <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-sm font-black tracking-[0.2em] text-[#55A2C2] uppercase bg-[#55A2C2]/5 rounded-full">
                            {t('services.badge')}
                        </div>
                        <h2 className="text-4xl   md:text-5xl font-black text-[#213C51]    uppercase">
                            {t('services.title')} <br />
                            <span className="text-[#55A2C2] italic font-serif lowercase">{t('services.title_italic')}</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 " >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 bg-[#F9FAFB] rounded-[2rem] flex items-center justify-center text-[#55A2C2] mb-8 shadow-sm group-hover:bg-[#55A2C2] group-hover:text-white transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#55A2C2]/30 group-hover:rotate-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-black text-[#213C51] mb-4 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-bold leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 pt-16 border-t border-gray-100 text-center">
                        <p className="text-[#213C51] text-lg font-bold mb-8">{t('services.ready')}</p>
                        <Link to="/contact">
                            <button className="px-12 py-6 bg-[#213C51] text-white rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-[#55A2C2] transition-colors duration-500">
                                {t('services.book_now')}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;
