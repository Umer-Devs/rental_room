import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Calendar, Users, Home } from 'lucide-react';

const BookingForm = () => {
    return (
        <section id="booking" className="py-20 bg-[#213C51] relative overflow-hidden">
            {/* Abstract Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#55A2C2]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#55A2C2]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="custom-padding custom-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#55A2C2] uppercase bg-[#55A2C2]/10 rounded-full border border-[#55A2C2]/20">
                            Book Your Stay
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 uppercase">
                            Secure Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-[#bce8ff] italic font-serif">Stay In Portugal.</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
                            Whether you're a student or a traveler, finding a home in Portugal has never been this effortless and sophisticated.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Home size={20} />, text: "Verified Luxury Rentals" },
                                { icon: <MapPin size={20} />, text: "Prime Locations Available" },
                                { icon: <Users size={20} />, text: "24/7 Concierge Support" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-white/80 font-bold">
                                    <div className="p-3 bg-white/5 rounded-2xl text-[#55A2C2] border border-white/10">
                                        {item.icon}
                                    </div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: The Form Island */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-[60px] p-8 md:p-12 rounded-[3.5rem] border border-white/20 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)]"
                    >
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Wick"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#55A2C2] transition-colors font-bold placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#55A2C2] transition-colors font-bold placeholder:text-white/20"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] ml-2">Check-in</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#55A2C2] transition-colors font-bold [color-scheme:dark]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] ml-2">City Focus</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-[#55A2C2] transition-colors font-bold appearance-none">
                                        <option className="bg-[#213C51]">Select a City</option>
                                        <option className="bg-[#213C51]">Lisbon</option>
                                        <option className="bg-[#213C51]">Porto</option>
                                        <option className="bg-[#213C51]">Braga</option>
                                        <option className="bg-[#213C51]">Coimbra</option>
                                        <option className="bg-[#213C51]">Algarve</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-[#55A2C2] uppercase tracking-[0.2em] ml-2">Personal Preferences</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white outline-none focus:border-[#55A2C2] transition-colors font-bold placeholder:text-white/20 resize-none"
                                />
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#55A2C2] to-[#88d9ff] text-[#213C51] font-black uppercase tracking-[0.2em] py-6 rounded-2xl shadow-xl shadow-[#55A2C2]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                                Send Inquiry <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
