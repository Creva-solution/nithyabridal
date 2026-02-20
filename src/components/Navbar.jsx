import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Academy', path: '/academy' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-black/95 backdrop-blur-md shadow-lg py-[12px] lg:py-[18px]' : 'bg-transparent py-[18px] lg:py-[24px]'}`}>
            <div className="container mx-auto px-6 lg:px-[80px] flex justify-center items-center relative">

                {/* Center Logo - Controls Header Height */}
                <div className="flex-shrink-0 z-20">
                    <Link to="/" className="block">
                        <img
                            src={logoImg}
                            alt="Nithya Bridal"
                            className={`w-auto object-contain drop-shadow-[0_0_8px_rgba(201,164,92,0.4)] transition-all duration-500 origin-center ${isScrolled ? 'h-[60px] lg:h-[80px]' : 'h-[90px] lg:h-[140px] hover:scale-105'}`}
                        />
                    </Link>
                </div>

                {/* Desktop Link Container - perfectly centered */}
                <div className="hidden lg:flex absolute inset-0 w-full h-full items-center justify-center pointer-events-none z-10 -translate-y-1.5 lg:-translate-y-3">
                    {/* Left Nav */}
                    <nav className="flex gap-6 xl:gap-8 items-center pr-[120px] xl:pr-[180px] pointer-events-auto">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'Academy', path: '/academy' },
                            { name: 'About', path: '/about' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-luxury-gold border-b border-luxury-gold pb-1' : 'text-luxury-nude/80 hover:text-luxury-gold'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Nav */}
                    <nav className="flex gap-6 xl:gap-8 items-center pl-[120px] xl:pl-[180px] pointer-events-auto">
                        {[
                            { name: 'Portfolio', path: '/portfolio' },
                            { name: 'Testimonials', path: '/testimonials' },
                            { name: 'Contact', path: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-luxury-gold border-b border-luxury-gold pb-1' : 'text-luxury-nude/80 hover:text-luxury-gold'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right Book Now Button */}
                <div className="hidden lg:flex absolute right-6 lg:right-12 h-full items-center pointer-events-auto z-20 -translate-y-1.5 lg:-translate-y-3">
                    <Link to="/booking" className="px-6 py-2.5 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 text-xs tracking-[0.2em] uppercase inline-block whitespace-nowrap">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden absolute right-6 text-luxury-gold h-full flex items-center z-20 pointer-events-auto"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-luxury-black border-b border-luxury-gold/20 py-4 shadow-xl">
                    <div className="flex flex-col px-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm tracking-widest uppercase py-2 border-b border-white/5 ${location.pathname === link.path ? 'text-luxury-gold' : 'text-luxury-nude hover:text-luxury-gold'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/booking" className="mt-4 text-center px-6 py-3 bg-luxury-gold text-luxury-black text-sm tracking-wider uppercase">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
