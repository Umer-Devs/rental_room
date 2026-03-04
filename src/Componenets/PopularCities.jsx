import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Home8, Home9, Home10, Home11 } from '../assets';

const cities = [
    {
        id: "space1",
        name: "Sala de Estar",
        rooms: "4",
        image: Home8,
        type_key: "capital"
    },
    {
        id: "space2",
        name: "Área Gourmet",
        rooms: "2",
        image: Home9,
        type_key: "riverside"
    },
    {
        id: "space3",
        name: "Jardim",
        rooms: "1",
        image: Home10,
        type_key: "heritage"
    },
    {
        id: "space4",
        name: "Terraço",
        rooms: "2",
        image: Home11,
        type_key: "sun"
    }
];

const PopularCities = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id="cities" className="py-32 bg-white">
                <div className="custom-padding custom-padding">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-sm font-black tracking-[0.2em] text-[#213C51] uppercase bg-[#EDF1F8] rounded-full">
                            {t('cities.badge')}
                        </div>
                        <h2 className="text-4xl   md:text-5xl font-black text-[#213C51]    uppercase">
                            {t('cities.title')} <br />
                            <span className="text-[#55A2C2] italic font-serif">{t('cities.title_italic')}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cities.map((city, index) => (
                            <Link to="/contact" key={index}>
                                <motion.div
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
                                        <p className="text-[#55A2C2] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{t(`cities.types.${city.type_key}`)}</p>
                                        <h3 className="text-white text-4xl font-black uppercase mb-2">
                                            {city.id === "lisbon" ? t('hero.search.lisbon') :
                                                city.id === "porto" ? t('hero.search.porto') :
                                                    city.id === "braga" ? t('hero.search.braga') : city.name}
                                        </h3>
                                        <p className="text-white/40 text-sm font-black uppercase tracking-widest mb-8">{city.rooms} {t('cities.rooms_count')}</p>

                                        <div className="flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {t('cities.explore')} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularCities;
