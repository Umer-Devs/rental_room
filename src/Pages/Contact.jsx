import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Send,
    Clock, ShieldCheck, MessageSquare,
    Instagram, Twitter, Linkedin, Facebook
} from 'lucide-react';
import { Footer } from '../Componenets';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <main className="min-h-screen text-white">
            {/* Section: The Discovery Hub Hero (Navy) */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden custom-padding bg-[#213C51]">
                {/* Cinematic Background with Noise/Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213C51] via-[#213C51]/80 to-transparent" />

                <div className="relative z-10 text-center max-w-6xl my-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
                    >
                        {t('contact.hero.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A2C2] to-white italic font-serif">{t('contact.hero.title_italic')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/40 text-lg md:text-xl font-medium max-w-2xl mx-auto italic"
                    >
                        "{t('contact.hero.subtitle')}"
                    </motion.p>
                </div>
            </section>

            {/* Section I: Elite Contact Tiles (White) */}
            <section className="bg-white text-[#213C51] custom-padding py-32 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 -mt-52">
                        {[
                            {
                                icon: <Phone size={32} />,
                                title: t('contact.tiles.phone.title'),
                                value: "+351 92 123 4567",
                                label: t('contact.tiles.phone.label')
                            },
                            {
                                icon: <Mail size={32} />,
                                title: t('contact.tiles.email.title'),
                                value: "concierge@eurorent.pt",
                                label: t('contact.tiles.email.label')
                            },
                            {
                                icon: <MapPin size={32} />,
                                title: t('contact.tiles.office.title'),
                                value: "Av. da Liberdade, Lisbon",
                                label: t('contact.tiles.office.label')
                            }
                        ].map((tile, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -15 }}
                                className="bg-white p-12 rounded-[3.5rem] shadow-[0_40px_100px_rgba(33,60,81,0.08)] border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
                            >
                                <div className="w-20 h-20 bg-[#EDF1F8] rounded-3xl flex items-center justify-center text-[#55A2C2] mb-8 group-hover:bg-[#55A2C2] group-hover:text-white transition-all duration-500 shadow-xl shadow-[#55A2C2]/10">
                                    {tile.icon}
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#55A2C2] mb-4">{tile.title}</h3>
                                <p className="text-2xl font-black text-[#213C51] mb-2">{tile.value}</p>
                                <span className="text-sm font-bold text-[#213C51]/30 uppercase tracking-widest">{tile.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 text-center space-y-8">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
                        >
                            {t('contact.specific.title')} <span className="text-[#55A2C2] italic font-serif">{t('contact.specific.title_italic')}</span> {t('contact.specific.title_end')}
                        </motion.h2>
                        <p className="max-w-2xl mx-auto text-[#213C51]/60 text-lg font-medium">
                            {t('contact.specific.desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Section II: The Enquiry Island (Navy) */}
            <section className="bg-[#1e3447] custom-padding py-40">
                <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                    {/* Form Side */}
                    <div className="flex-[1.5] p-12 md:p-20">
                        <div className="mb-12">
                            <h3 className="text-3xl font-black uppercase mb-4">{t('contact.form.title')}</h3>
                            <p className="text-white/40 font-medium">{t('contact.form.subtitle')}</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#55A2C2]">{t('contact.form.name')}</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-[#55A2C2] transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#55A2C2]">{t('contact.form.email')}</label>
                                    <input type="email" placeholder="john@excellence.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-[#55A2C2] transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#55A2C2]">{t('contact.form.interest.label')}</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white/50 outline-none focus:border-[#55A2C2] transition-colors appearance-none">
                                    {t('contact.form.interest.options', { returnObjects: true }).map((option, i) => (
                                        <option key={i} className="bg-[#213C51]">{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-[#55A2C2]">{t('contact.form.message')}</label>
                                <textarea rows={4} placeholder={t('contact.form.message_placeholder')} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-[#55A2C2] transition-colors resize-none" />
                            </div>

                            <button className="w-full bg-[#55A2C2] text-white py-6 rounded-2xl font-black uppercase tracking-[0.5em] text-xs shadow-2xl shadow-[#55A2C2]/20 hover:bg-white hover:text-[#213C51] transition-all flex items-center justify-center gap-4 group">
                                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                {t('contact.form.send')}
                            </button>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="flex-1 bg-[#55A2C2] p-12 md:p-20 flex flex-col justify-between text-[#213C51]">
                        <div className="space-y-12">
                            <div className="space-y-2">
                                <h4 className="text-4xl font-black uppercase leading-none">
                                    {t('contact.commitment.title')} <br />{t('contact.commitment.title_sub')}
                                </h4>
                                <div className="h-1 w-12 bg-[#213C51] mt-4" />
                            </div>

                            <ul className="space-y-10">
                                {[
                                    { icon: <Clock size={24} />, title: t('contact.commitment.items.response.title'), desc: t('contact.commitment.items.response.desc') },
                                    { icon: <ShieldCheck size={24} />, title: t('contact.commitment.items.privacy.title'), desc: t('contact.commitment.items.privacy.desc') },
                                    { icon: <MessageSquare size={24} />, title: t('contact.commitment.items.virtual.title'), desc: t('contact.commitment.items.virtual.desc') }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-6">
                                        <div className="shrink-0">{item.icon}</div>
                                        <div>
                                            <h5 className="font-black uppercase text-xs tracking-widest">{item.title}</h5>
                                            <p className="text-[#213C51]/60 text-sm font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-12 border-t border-[#213C51]/10">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Elite Network</p>
                            <div className="flex gap-6 opacity-60">
                                <Instagram size={20} className="cursor-pointer hover:opacity-100" />
                                <Linkedin size={20} className="cursor-pointer hover:opacity-100" />
                                <Twitter size={20} className="cursor-pointer hover:opacity-100" />
                                <Facebook size={20} className="cursor-pointer hover:opacity-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-6' style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <iframe
                    src="https://www.google.com/maps?q=Portugal&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <Footer />
        </main>
    );
};

export default Contact;
