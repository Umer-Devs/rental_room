import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = t('faq.items', { returnObjects: true }) || [];

    return (
        <section id="faq" className="py-32 bg-white">
            <div className="custom-padding max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-sm font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                        {t('faq.badge')}
                    </div>
                    <h2 className="text-4xl   md:text-5xl font-black text-[#213C51]    uppercase">
                        {t('faq.title')} <br />
                        <span className="text-[#55A2C2] italic font-serif">{t('faq.title_italic')}</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {Array.isArray(faqs) && faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeIndex === index ? 'border-[#55A2C2] bg-white shadow-2xl shadow-[#55A2C2]/10' : 'border-gray-100 bg-[#F9FAFB]'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-10 py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-black transition-colors duration-500 ${activeIndex === index ? 'text-[#55A2C2]' : 'text-[#213C51]'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-[#55A2C2] text-white rotate-180' : 'bg-white text-[#213C51]'}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-10 pb-10">
                                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
