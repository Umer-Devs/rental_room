import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#213C51] pt-32 pb-16 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#55A2C2]/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="custom-padding custom-padding relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                                Euro<span className="text-[#55A2C2] italic font-serif lowercase">Rent.</span>
                            </h2>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed font-bold">
                            Redefining Portuguese living for the modern explorer. Premium, verified, and community-driven room rentals.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/60 hover:text-[#55A2C2] hover:bg-white/10 transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-10">Quick Explore</h4>
                        <ul className="space-y-6">
                            {['Rooms', 'About Us', 'Cities', 'Services', 'Pricing'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-white/40 hover:text-[#55A2C2] text-sm font-bold transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-10">Support</h4>
                        <ul className="space-y-6">
                            {['Help Center', 'Safety & Security', 'Booking Guide', 'Terms of Service', 'Privacy Policy'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-white/40 hover:text-[#55A2C2] text-sm font-bold transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-10">Let's Connect</h4>
                        <ul className="space-y-8">
                            <li className="flex gap-4">
                                <div className="text-[#55A2C2]"><MapPin size={20} /></div>
                                <span className="text-white/40 text-sm font-bold leading-relaxed">
                                    Av. da Liberdade 110,<br />1269-046 Lisbon, Portugal
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <div className="text-[#55A2C2]"><Phone size={20} /></div>
                                <span className="text-white/40 text-sm font-bold">+33 (0) 1 23 45 67 89</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="text-[#55A2C2]"><Mail size={20} /></div>
                                <span className="text-white/40 text-sm font-bold">concierge@eurorent.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
                        &copy; 2026 EuroRent International Group. All Rights Reserved.
                    </p>
                    <div className="flex gap-10">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Forbes_logo.svg" className="h-3 opacity-10 grayscale brightness-200" alt="Forbes" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/The_New_York_Times_Logo.svg" className="h-3 opacity-10 grayscale brightness-200" alt="NYT" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
