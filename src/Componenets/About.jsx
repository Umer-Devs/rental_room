import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
                        <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1589197331516-4d8498b5efbc?q=80&w=2070&auto=format&fit=crop"
                                alt="Lisbon Portugal Living"
                                className="w-full h-[600px] object-cover"
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
                            <p className="text-white/60 text-xs font-black uppercase tracking-widest">Years of Curating Perfect Stays in Portugal</p>
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
                            Our Story
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#213C51] leading-tight mb-10 uppercase">
                            Room Rental <br />
                            <span className="text-[#55A2C2] italic font-serif">Redefined.</span>
                        </h2>
                        <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
                            <p>
                                At <span className="text-[#213C51] font-bold">EuroRent Portugal</span>, we believe that your home is the foundation of your journey. Founded in the heart of Lisbon, our mission has always been to simplify the complexities of Portuguese room rentals.
                            </p>
                            <p>
                                We don't just list rooms; we curate experiences. Each property in our portfolio is meticulously verified for safety, luxury, and proximity to local culture, ensuring that you can focus on what truly matters—your growth and discovery in Portugal.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-12">
                            <div>
                                <p className="text-3xl font-black text-[#213C51]">500+</p>
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Premium Properties</p>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <div>
                                <p className="text-3xl font-black text-[#213C51]">24h</p>
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Concierge Response</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
