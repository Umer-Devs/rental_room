import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';

const images = [
    'https://plus.unsplash.com/premium_photo-1694475457130-360b91acf5ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXVyb3BlJTIwYmVzdCUyMHBsYWNlJTIwdG8lMjB2aXNpdHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#213C51]">
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
                    {/* Subtle Overlay to help readability */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                </motion.div>
            </AnimatePresence>

            {/* Hero Content Layer */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-0">
                <div className="max-w-6xl w-full">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8 md:mb-14"
                    >
                        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 mb-6 md:mb-8 text-[9px] md: font-black tracking-[0.15em] md:tracking-[0.2em] text-white uppercase bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 shadow-2xl">
                            <span className="flex h-1.5 md:h-2 w-1.5 md:w-2">

                                <span className="relative inline-flex rounded-full h-full w-full bg-[#55A2C2]"></span>
                            </span>
                            Premium Room Rentals in Portugal
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] md:leading-tight mb-6 md:mb-8 uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
                            ROOMS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif tracking-tighter">Across Portugal.</span>
                        </h1>
                    </motion.div>

                    {/* Elite Search Console - Highly Responsive */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-5xl mx-auto px-2 md:px-0"
                    >
                        <div className="bg-white/15 backdrop-blur-[40px] p-2 md:p-3 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-stretch md:items-center gap-2">
                            {/* Destination */}
                            <div className="flex-[1.5] flex items-center gap-4 px-5 md:px-8 py-4 md:py-6 w-full border-b md:border-b-0 md:border-r border-white/10 transition-colors hover:bg-white/5 md:rounded-l-[2rem]">
                                <MapPin className="text-[#55A2C2] shrink-0" size={24} />
                                <div className="text-left flex-1 min-w-0">
                                    <p className="text-[9px] md:text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] mb-1">Where?</p>
                                    <input
                                        type="text"
                                        placeholder="Lisbon, Porto..."
                                        className="bg-transparent border-none outline-none text-white font-bold text-lg md:text-xl p-0 w-full placeholder:text-white/40 truncate"
                                    />
                                </div>
                            </div>

                            {/* Date & Guests Combined for Mobile Efficiency */}
                            <div className="flex-1 flex items-center gap-4 px-5 md:px-8 py-4 md:py-6 w-full transition-colors hover:bg-white/5">
                                <div className="text-left flex-1 min-w-0">
                                    <p className="text-[9px] md:text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-1">Stay Details</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold text-lg md:text-xl truncate">Anytime &bull; 1 Guest</span>
                                        <Users className="text-white/20 md:hidden" size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Search Button */}
                            <button className="w-full md:w-auto bg-[#55A2C2] hover:bg-white text-[#213C51] p-5 md:p-7 rounded-[1.5rem] md:rounded-full font-black shadow-xl transition-all transform hover:scale-[1.02] md:hover:scale-105 active:scale-95 group flex items-center justify-center gap-3">
                                <span className="md:hidden text-sm uppercase tracking-widest font-black">Find Perfect Room</span>
                                <ArrowRight className="shrink-0 group-hover:translate-x-2 transition-transform duration-500" size={28} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Trust Factor - Responsive Stacking */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10 opacity-80"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3 md:-space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-[#55A2C2] overflow-hidden bg-white shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 33}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-white text-center  md:text-sm font-bold">98% Satisfied Residents</p>
                        </div>
                        <div className="hidden sm:block w-px h-8 bg-white/20"></div>
                        <div className="flex items-center gap-5 md:gap-8 grayscale brightness-200 opacity-40">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Forbes_logo.svg" className="h-3 md:h-4" alt="Forbes" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/The_New_York_Times_Logo.svg" className="h-3 md:h-4" alt="NYT" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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