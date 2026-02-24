import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const cities = [
    {
        name: "Lisbon",
        rooms: "250+ Rooms",
        image: "https://images.unsplash.com/photo-1549144866-3ee088675bba?q=80&w=2070&auto=format&fit=crop",
        type: "Capital Living"
    },
    {
        name: "Porto",
        rooms: "180+ Rooms",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop",
        type: "Riverside Charm"
    },
    {
        name: "Braga",
        rooms: "90+ Rooms",
        image: "https://images.unsplash.com/photo-1589197331516-4d8498b5efbc?q=80&w=2070&auto=format&fit=crop",
        type: "Heritage & Art"
    },
    {
        name: "Algarve",
        rooms: "120+ Rooms",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop",
        type: "Sun & Relax"
    }
];

const PopularCities = () => {
    return (
        <section id="cities" className="py-32 bg-white">
            <div className="custom-padding custom-padding">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                        Portugal Destinations
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#213C51] leading-tight uppercase">
                        Explore Portugal's <br />
                        <span className="text-[#55A2C2] italic font-serif">Most Iconic Spots.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cities.map((city, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl cursor-pointer"
                        >
                            <img
                                src={city.image}
                                alt={city.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#213C51] via-[#213C51]/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-[#55A2C2] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{city.type}</p>
                                <h3 className="text-white text-4xl font-black uppercase mb-2">{city.name}</h3>
                                <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-8">{city.rooms}</p>

                                <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Explore Stays <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCities;
