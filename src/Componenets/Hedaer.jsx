import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, MapPin, Info, Phone, Search, Globe, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hedaer = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/', icon: <Home size={18} /> },
        { name: t('nav.rooms'), path: '/rooms', icon: <MapPin size={18} /> },
        { name: t('nav.about'), path: '/about', icon: <Info size={18} /> },
        { name: t('nav.contact'), path: '/contact', icon: <Phone size={18} /> },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' }
    ];

    const menuVariants = {
        closed: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
        open: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' : 'bg-transparent py-6'}`}>
            <div className="custom-padding relative flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="relative">
                        <div className="w-12 h-12 bg-[#55A2C2] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-[#55A2C2]/20 group-hover:rotate-12 transition-transform duration-300">
                            E
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#213C51]   leading-none">
                            EURO<span className="text-[#55A2C2]">RENT</span>
                        </span>
                        <span className="text-[10px] font-bold text-[#55A2C2] tracking-[0.2em] uppercase">Premium Stays</span>
                    </div>
                </motion.div>

                {/* Desktop Links - Centered */}
                <div className="hidden lg:flex items-center bg-[#EDF1F8]/50 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/50 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.path}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-5 py-2 text-sm font-bold transition-all duration-300 rounded-lg relative ${isActive ? 'text-white bg-[#55A2C2] shadow-lg shadow-[#55A2C2]/30' : 'text-[#213C51] hover:bg-white/80'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </motion.div>
                    ))}
                </div>

                {/* Language Switcher - To the End */}
                <div className="hidden lg:block relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/50 text-[#213C51] font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                        <Globe size={16} className="text-[#55A2C2]" />
                        <span className="uppercase">{i18n.language?.split('-')[0]}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${i18n.language === lang.code ? 'bg-[#EDF1F8] text-[#55A2C2]' : 'hover:bg-gray-50 text-[#213C51]'}`}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="font-bold text-sm">{lang.name}</span>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="p-3 bg-white shadow-lg text-[#213C51] rounded-2xl"
                    >
                        <Globe size={20} />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-3 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-[#213C51] text-white' : 'bg-white shadow-lg text-[#213C51]'}`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[-1] lg:hidden">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-[#213C51]/20 backdrop-blur-sm"
                        />

                        {/* Content */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute top-24 left-4 right-4 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 border border-white"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-5 p-5 rounded-3xl transition-all ${isActive ? 'bg-white text-black' : 'bg-white text-[#213C51]'}`
                                        }
                                    >
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#55A2C2]">
                                            {link.icon}
                                        </div>
                                        <span className="text-xl font-bold">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>

                            <div className="mt-8">
                                <button className="w-full flex items-center justify-center gap-3 bg-[#213C51] py-6 rounded-[2rem] text-white font-bold text-xl shadow-xl shadow-[#213C51]/30 active:scale-95 transition-transform hover:bg-[#2a4d69]">
                                    <Search size={24} />
                                    {t('nav.find_stay')}
                                </button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center gap-4">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${i18n.language === lang.code ? 'bg-[#55A2C2] text-white shadow-lg shadow-[#55A2C2]/30' : 'bg-[#EDF1F8] text-[#213C51]'}`}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 text-center text-[#213C51]/40  font-medium">
                                &copy; 2026 EuroRent &bull; Europe Premium Rentals
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Mobile Lang Popover Backdrop */}
            <AnimatePresence>
                {(isLangOpen && !isOpen) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsLangOpen(false)}
                        className="fixed inset-0 bg-[#213C51]/40 backdrop-blur-sm lg:hidden z-[-2]"
                    />
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Hedaer;