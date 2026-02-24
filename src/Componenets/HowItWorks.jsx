import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardCheck, Key, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: <Search size={32} />,
        title: "Explore Listings",
        desc: "Browse our hand-picked selection of luxury rooms across Portugal's most vibrant cities."
    },
    {
        icon: <ClipboardCheck size={32} />,
        title: "Verify & Book",
        desc: "Submit your details and get instant verification through our high-end booking console."
    },
    {
        icon: <Key size={32} />,
        title: "Move In",
        desc: "Get your digital keys and enjoy your new premium living experience within 24 hours."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-32 bg-[#213C51] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-white/5" />

            <div className="custom-padding custom-padding relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#55A2C2] uppercase bg-[#55A2C2]/10 rounded-full">
                        Simple Process
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                        The Road To Your <br />
                        <span className="text-[#55A2C2] italic font-serif">New Home.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative group text-center"
                        >
                            {/* Step Number Overlay */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black text-white/[0.03] select-none group-hover:text-[#55A2C2]/5 transition-colors duration-500">
                                0{index + 1}
                            </div>

                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-24 h-24 mx-auto mb-10 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center text-[#55A2C2] shadow-2xl backdrop-blur-3xl group-hover:bg-[#55A2C2] group-hover:text-[#213C51] transition-all duration-500"
                                >
                                    {step.icon}
                                </motion.div>

                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-white/40 text-lg leading-relaxed max-w-xs mx-auto mb-8 font-medium">
                                    {step.desc}
                                </p>

                                {index < 2 && (
                                    <div className="hidden lg:block absolute top-12 -right-1/2 translate-x-12 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                        <ArrowRight size={40} className="text-[#55A2C2] animate-pulse" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
