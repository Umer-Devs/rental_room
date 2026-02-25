import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Maximize2, Bed, Bath, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const rooms = [
    {
        id: 1,
        key: "studio",
        image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop",
        stats: { size: "32m²", beds: 1, bath: 1 }
    },
    {
        id: 2,
        key: "loft",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        stats: { size: "40m²", beds: 1, bath: 1 }
    },
    {
        id: 3,
        key: "suite",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
        stats: { size: "35m²", beds: 1, bath: 1 }
    }
];

const FeaturedRooms = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section id="featured" className="py-32 bg-[#F9FAFB]">
            <div className="custom-padding custom-padding">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-[10px] md:text-xs font-black tracking-[0.2em] text-[#55A2C2] uppercase bg-[#55A2C2]/10 rounded-full">
                            {t('featured.badge')}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#213C51] leading-tight uppercase">
                            {t('featured.title')} <br />
                            <span className="text-[#55A2C2] italic font-serif">{t('featured.title_italic')}</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/rooms')}
                        className="bg-[#213C51] text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-xl"
                    >
                        {t('featured.view_all')}
                    </motion.button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            onClick={() => navigate('/contact')}
                            className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={t(`featured.rooms_data.${room.key}.title`)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {t(`featured.rooms_data.${room.key}.tags`, { returnObjects: true }).map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute top-6 right-6">
                                    <div className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-[#213C51] group-hover:bg-[#55A2C2] group-hover:text-white transition-colors">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Info Container */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-gray-400 mb-2">
                                    <MapPin size={14} className="text-[#55A2C2]" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{t(`featured.rooms_data.${room.key}.location`)}</span>
                                </div>
                                <h3 className="text-2xl font-black text-[#213C51] mb-6 group-hover:text-[#55A2C2] transition-colors">{t(`featured.rooms_data.${room.key}.title`)}</h3>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Maximize2 size={16} />
                                            <span className="text-xs font-bold">{room.stats.size}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Bed size={16} />
                                            <span className="text-xs font-bold">{room.stats.beds}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Bath size={16} />
                                            <span className="text-xs font-bold">{room.stats.bath}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                        <span className="text-xs font-black text-[#213C51]">4.9</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRooms;
