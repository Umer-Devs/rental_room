import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Users, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const images = [
    'https://plus.unsplash.com/premium_photo-1694475457130-360b91acf5ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXVyb3BlJTIwYmVzdCUyMHBsYWNlJTIwdG8lMjB2aXNpdHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
];

const Hero = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#213C51] flex flex-col">
            {/* Background Image Slider */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                </motion.div>
            </AnimatePresence>

            {/* Hero Content Layer */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-20 lg:py-0">
                <div className="max-w-7xl w-full pt-30 pb-10 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8 md:mb-10 lg:mb-14"
                    >
                        <div className="inline-flex items-center gap-2 md:gap-3 px-6 py-2.5 mb-8 text-[9px] md:text-sm font-black tracking-[0.2em] text-white uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <ShieldCheck size={14} className="text-[#55A2C2]" /> {t('hero.badge')}
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl  font-black text-white leading-[1.1] md:   mb-6 md:mb-8 uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                            {t('hero.title')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif ">
                                {t('hero.title_italic')}
                            </span>
                        </h1>
                    </motion.div>
                </div>

                {/* Search Console */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto px-2 md:px-0"
                >
                    <div className="bg-white/15 backdrop-blur-[40px] p-2 md:p-3 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
                        {/* Destination */}
                        <div className="flex-[1.5] flex items-center gap-4 px-5 md:px-8 py-4 md:py-5 lg:py-6 w-full border-b lg:border-b-0 lg:border-r border-white/10 transition-colors hover:bg-white/5 lg:rounded-l-[2rem]">
                            <MapPin className="text-[#55A2C2] shrink-0" size={24} />
                            <div className="text-left flex-1 min-w-0">
                                <p className="text-[9px] md:text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] mb-1">{t('hero.search.destination')}</p>
                                <input
                                    type="text"
                                    placeholder={t('hero.search.select_city')}
                                    className="bg-transparent border-none outline-none text-white font-bold text-lg lg:text-xl p-0 w-full placeholder:text-white/40 truncate"
                                />
                            </div>
                        </div>

                        {/* Stay Details */}
                        <div className="flex-1 flex items-center gap-4 px-5 md:px-8 py-4 md:py-5 lg:py-6 w-full transition-colors hover:bg-white/5">
                            <div className="text-left flex-1 min-w-0">
                                <p className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-1">{t('hero.search.move_in')}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-bold text-lg lg:text-xl truncate">Anytime &bull; 1 {t('hero.search.guests')}</span>
                                    <Users className="text-white/20 lg:hidden" size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Search Button */}
                        <Link to="/contact" className="w-full lg:w-auto">
                            <button className="w-full lg:w-auto bg-[#55A2C2] hover:bg-white text-[#213C51] p-5 md:p-6 lg:p-7 rounded-[1.5rem] lg:rounded-full font-black shadow-xl transition-all transform hover:scale-[1.02] lg:hover:scale-105 active:scale-95 group flex items-center justify-center gap-3">
                                <span className="lg:hidden text-sm uppercase tracking-widest font-black">{t('nav.find_stay')}</span>
                                <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform duration-500" size={28} />
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Trust Factor */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10 opacity-80"
                >
                    <div className="flex items-center justify-center mb-6 gap-6">
                        <div className="flex -space-x-3 md:-space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-14 md:w-14 h-14 md:h-14 rounded-full border-2 border-[#55A2C2] overflow-hidden bg-white shadow-lg">
                                    <img className='w-full h-full object-cover' src={`https://i.pravatar.cc/100?img=${i + 33}`} alt="User " />
                                </div>
                            ))}
                        </div>
                        <p className="text-white text-center md:text-xl font-bold">98% {t('hero.trust.satisfied')}</p>
                    </div>
                </motion.div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === index ? 'w-8 bg-[#55A2C2]' : 'w-2 bg-white/30'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;