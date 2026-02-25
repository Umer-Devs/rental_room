import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, UserCheck, Sparkles, Orbit } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const { t } = useTranslation();

    const testimonials = [
        {
            name: t('testimonials.items.liza.name'),
            role: t('testimonials.items.liza.role'),
            text: t('testimonials.items.liza.text'),
            avatar: "https://i.pravatar.cc/100?img=11",
            color: "#55A2C2"
        },
        {
            name: t('testimonials.items.diego.name'),
            role: t('testimonials.items.diego.role'),
            text: t('testimonials.items.diego.text'),
            avatar: "https://i.pravatar.cc/100?img=15",
            color: "#bce8ff"
        },
        {
            name: t('testimonials.items.ana.name'),
            role: t('testimonials.items.ana.role'),
            text: t('testimonials.items.ana.text'),
            avatar: "https://i.pravatar.cc/100?img=12",
            color: "#55A2C2"
        },
        {
            name: t('testimonials.items.ricardo.name'),
            role: t('testimonials.items.ricardo.role'),
            text: t('testimonials.items.ricardo.text'),
            avatar: "https://i.pravatar.cc/100?img=3",
            color: "#bce8ff"
        },
        {
            name: t('testimonials.items.sofia.name'),
            role: t('testimonials.items.sofia.role'),
            text: t('testimonials.items.sofia.text'),
            avatar: "https://i.pravatar.cc/100?img=5",
            color: "#55A2C2"
        }
    ];

    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-40 bg-[#213C51] relative overflow-hidden">
            {/* Cinematic Galactic Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#55A2C2]/5 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#bce8ff]/5 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="custom-padding relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 text-[10px] md:text-xs font-black tracking-[0.3em] text-[#55A2C2] uppercase bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_0_30px_rgba(85,162,194,0.1)]"
                    >
                        <Sparkles size={14} className="animate-pulse" /> {t('testimonials.badge')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter"
                    >
                        {t('testimonials.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif">{t('testimonials.title_italic')}</span> <br />
                        <span className="text-white/20">{t('testimonials.title_sub')}</span>
                    </motion.h2>
                </div>

                {/* Perspective Container */}
                <div className="relative w-screen -mx-[calc((100vw-100%)/2)] mb-20 overflow-visible">
                    {/* Edge Masking */}
                    <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#213C51] to-transparent z-30 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#213C51] to-transparent z-30 pointer-events-none" />

                    <motion.div
                        className="flex gap-12 px-20"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ width: "max-content" }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {doubledTestimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: index % 2 === 0 ? 8 : -8,
                                    rotateX: 5,
                                    z: 50
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative group w-[450px] md:w-[500px] perspective-[2000px] cursor-pointer"
                            >
                                {/* Floating Aura Behind Card */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-[#55A2C2]/20 to-[#bce8ff]/5 blur-3xl rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                                <div className="bg-white/5 backdrop-blur-[100px] p-12 rounded-[4rem] border border-white/10 group-hover:border-[#55A2C2]/50 transition-all duration-700 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] h-full flex flex-col justify-between overflow-hidden">
                                    <Quote className="absolute top-10 right-12 text-[#55A2C2]/5 group-hover:text-[#55A2C2]/20 transition-all duration-700 group-hover:scale-150 group-hover:-rotate-12" size={100} />

                                    <div>
                                        <div className="flex gap-1.5 mb-10">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                                >
                                                    <Star size={16} className="text-[#55A2C2] fill-[#55A2C2]" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        <p className="text-white/80 text-2xl md:text-3xl leading-[1.2] mb-12 font-medium font-serif italic tracking-tight whitespace-normal group-hover:text-white transition-colors duration-500">
                                            "{item.text}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-6 pt-10 border-t border-white/5 relative z-10">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-3xl overflow-hidden border-2 border-[#55A2C2]/30 shadow-2xl relative z-10">
                                                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                            </div>
                                            <div className="absolute -inset-2 bg-[#55A2C2]/10 blur-xl rounded-3xl group-hover:bg-[#55A2C2]/30 transition-all duration-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black uppercase text-lg tracking-widest mb-1 group-hover:text-[#55A2C2] transition-colors">{item.name}</h4>
                                            <p className="text-white/30 text-xs font-black uppercase tracking-[0.3em]">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Footer Trust Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 px-10 border-t border-white/5 pt-16">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-2xl text-[#55A2C2] border border-white/10">
                            <Orbit size={24} className="animate-[spin_10s_linear_infinite]" />
                        </div>
                        <p className="text-white/40 font-black uppercase text-xs tracking-[0.4em]">{t('testimonials.global_presence')}</p>
                    </div>

                    <div className="flex items-center gap-8">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-white/40 font-black uppercase text-xs tracking-[0.4em]">{t('testimonials.euro_excellence')}</p>
                        <div className="p-3 bg-white/5 rounded-2xl text-[#bce8ff] border border-white/10">
                            <UserCheck size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
