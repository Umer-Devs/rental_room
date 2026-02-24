import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How do I verify my student status?",
        answer: "You can upload your university acceptance letter or student ID directly through our booking portal. Verification usually takes less than 12 hours."
    },
    {
        question: "Is there a minimum stay requirement?",
        answer: "Most of our premium stays have a minimum requirement of 3 months to ensure a stable and high-quality community environment."
    },
    {
        question: "What is included in the monthly price?",
        answer: "The price is all-inclusive: utility bills, high-speed fiber internet, weekly professional cleaning, and 24/7 concierge support."
    },
    {
        question: "Can I move between different Portugal cities?",
        answer: "Yes! Our 'PortugalPass' program allows you to move between our properties in different cities with a simple 30-day notice."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-32 bg-white">
            <div className="custom-padding max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                        Need Help?
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#213C51] leading-tight uppercase">
                        Common <br />
                        <span className="text-[#55A2C2] italic font-serif">Questions.</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeIndex === index ? 'border-[#55A2C2] bg-white shadow-2xl shadow-[#55A2C2]/10' : 'border-gray-100 bg-[#F9FAFB]'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-10 py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-black transition-colors duration-500 ${activeIndex === index ? 'text-[#55A2C2]' : 'text-[#213C51]'}`}>
                                    {faq.question}
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
                                                {faq.answer}
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
