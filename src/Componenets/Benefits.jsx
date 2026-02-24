import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Heart } from 'lucide-react';

const benefits = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Verified Housing",
        desc: "Every room undergoes a rigorous 50-point inspection before listing."
    },
    {
        icon: <Zap size={32} />,
        title: "Instant Booking",
        desc: "Secure your room in minutes with our elite high-speed booking engine."
    },
    {
        icon: <Globe size={32} />,
        title: "Prime Locations",
        desc: "Strategic properties located within minutes of city landmarks."
    },
    {
        icon: <Heart size={32} />,
        title: "Student Support",
        desc: "Dedicated 24/7 concierge for international student assistance."
    }
];

const Benefits = () => {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                            Why EuroRent
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#213C51] leading-tight mb-10 uppercase">
                            Luxury Living <br />
                            <span className="text-[#55A2C2] italic font-serif">Made Simple.</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-lg">
                            We pride ourselves on providing a seamless experience that prioritizes your comfort, safety, and ultimate satisfaction across Portugal.
                        </p>

                        <button className="px-10 py-5 bg-[#55A2C2] text-white rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-[#55A2C2]/20 hover:scale-105 transition-transform">
                            Learn More About Safety
                        </button>
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
