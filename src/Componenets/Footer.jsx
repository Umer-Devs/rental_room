import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#213C51]  pt-8 relative overflow-hidden">
            {/* Background Accent */}
           

            <div className="custom-padding relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-10">
                        <Link to="/" className="inline-block">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                                Euro<span className="text-[#55A2C2] italic font-serif lowercase">Rent.</span>
                            </h2>
                        </Link>
                        <p className="text-white/40 text-lg leading-relaxed font-bold max-w-sm">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/60 hover:text-[#55A2C2] hover:bg-white/10 hover:border-[#55A2C2]/30 transition-all duration-500 shadow-xl group">
                                    <Icon size={22} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Combined Links */}
                    <div className="grid  gap-8 lg:px-10">
                        <div className="space-y-10">
                            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">{t('footer.quick_explore')}</h4>
                            <ul className="space-y-6">
                                {[
                                    { name: t('footer.links.rooms'), path: '/rooms' },
                                    { name: t('footer.links.about'), path: '/about' },
                                    { name: t('footer.links.cities'), path: '/#cities' },
                                    { name: t('footer.links.services'), path: '/#services' }
                                ].map(item => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-white/40 hover:text-[#55A2C2] text-sm font-bold transition-all hover:translate-x-2 inline-block">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                       
                    </div>

                    {/* Column 3: Newsletter Subscribe */}
                    <div className="space-y-10">
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">{t('footer.subscribe.title')}</h4>
                        <div className="space-y-6">
                            <p className="text-white/40 text-sm font-bold leading-relaxed">
                                {t('footer.subscribe.desc')}
                            </p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder={t('footer.subscribe.placeholder')}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#55A2C2] transition-all font-bold placeholder:text-white/20"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-[#55A2C2] text-white px-6 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#4491b1] transition-colors shadow-lg shadow-[#55A2C2]/20 active:scale-95">
                                    {t('footer.subscribe.button')}
                                </button>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">{t('footer.lets_connect')}</span>
                                <div className="h-px flex-1 bg-white/5" />
                                <div className="flex gap-2 text-[#55A2C2] font-black text-[10px] uppercase">
                                    <span>concierge@eurorent.pt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </footer>
    );
};


export default Footer;
