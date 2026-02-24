import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Liza Duarte",
        role: "Student, Lisbon",
        text: "Finding a room in Lisbon was stressing me out until I found EuroRent. The verification process gave me peace of mind, and the local support was exceptional.",
        avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
        name: "Diego Silva",
        role: "Scholar, Porto",
        text: "Luxury is an understatement. My studio in Ribeira is everything I dreamed of. EuroRent truly redefines living for international students in Portugal.",
        avatar: "https://i.pravatar.cc/100?img=15"
    },
    {
        name: "Ana Martins",
        role: "Researcher, Coimbra",
        text: "Seamless booking, elite properties, and transparent pricing. I've moved between Lisbon and Coimbra with EuroRent, and each stay has been consistently premium.",
        avatar: "https://i.pravatar.cc/100?img=12"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 bg-[#213C51] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#55A2C2_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="custom-padding custom-padding relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#55A2C2] uppercase bg-[#55A2C2]/10 rounded-full">
                        Social Proof
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
                        Voices Of <br />
                        <span className="text-[#55A2C2] italic font-serif">Our Residents.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-2xl p-12 rounded-[4rem] border border-white/10 relative group hover:bg-white/10 transition-all duration-500"
                        >
                            <Quote className="absolute top-10 right-10 text-[#55A2C2]/20 group-hover:text-[#55A2C2]/40 transition-colors" size={48} />

                            <div className="flex gap-1 mb-8">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-white/70 text-lg leading-relaxed mb-10 font-medium italic">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#55A2C2]/30 shadow-2xl">
                                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase text-sm tracking-widest">{item.name}</h4>
                                    <p className="text-[#55A2C2] text-[10px] font-black uppercase tracking-widest mt-1">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
