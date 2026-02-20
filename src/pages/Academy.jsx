import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations.jsx';
import { CheckCircle2, ChevronDown, ChevronUp, Award } from 'lucide-react';

const Accordion = ({ title, items, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-luxury-gold/20 mb-4 bg-[#0a0a0a] rounded-sm overflow-hidden">
            <button
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-[#111111] hover:bg-[#181818] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-serif text-xl tracking-wide text-luxury-gold">{title}</span>
                <span className="text-luxury-gold transition-transform duration-300">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="p-6 md:p-8 border-t border-luxury-gold/10">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-luxury-nude/80 font-light text-sm md:text-base leading-relaxed">
                                <span className="text-luxury-gold shrink-0 mt-1 text-xs">✦</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Academy = () => {
    const makeupSyllabus = [
        {
            title: "Category 1: Basic Foundation",
            items: ['Skin anatomy', 'Colour wheel theory', 'Eye types and makeup', 'Concealer, primer, colour corrector types', 'Foundation & compact knowledge', 'Brush knowledge & cleaning', 'Product knowledge']
        },
        {
            title: "Category 2: Hair & Styling",
            items: ['Hair preparation', 'Hair tools (crimping, curling, straightening)', 'Hair styling', 'Saree draping', 'Flower making']
        },
        {
            title: "Category 3: Practical Training",
            items: ['Face makeup practice', 'Eye makeup practice', 'SFX makeup & practice']
        },
        {
            title: "Category 4: Bridal Look Training",
            items: ['Look 1 – Bridal', 'Look 2 – Reception', 'Look 3 – Haldi', 'Look 4 – Christian/Muslim/Brahmin option', 'Look 5 – Groom makeup', 'Look 6 – SFX makeup', 'Look 7 – Self grooming', 'Look 8 – Bridesmaid makeup']
        },
        {
            title: "Category 5: Business & Growth",
            items: ['Client management', 'Consultation & conversation', 'Instagram marketing knowledge', 'Investment & product selection', 'Portfolio day (certificate day)']
        }
    ];

    const beauticianSyllabus = [
        {
            title: "Group 1 – Basic Beauty Skills",
            items: ['Threading', 'Upper lip chain threading', 'Bleach', 'Bleach without activator', 'Facial', '3 types facial mask', 'T-tan', 'Korean working']
        },
        {
            title: "Group 2 – Hair Services",
            items: ['Hair dye', 'Hair coloring', 'Hair spa', 'Highlighting', 'Haircut basic to advanced', 'Straight cut', 'U cut', 'Deep U cut', 'V cut', 'Feather cut', 'Layer cut', 'Baby Shalini cut', 'Bob cut', 'Pop cut (Oviya cut)', 'Shoulder cut', 'Haircut preparation', 'Split end correction']
        },
        {
            title: "Group 3 – Advanced Treatments",
            items: ['Keratin', 'Straightening', 'Smoothing', 'Pigmentation facial', 'Hydra facial', 'Wart removal', 'Dandruff treatment (basic & advanced)', 'Hot oil massage', 'Heel peeling', 'Eye care', 'Hand care', 'Neck care', 'Manicure', 'Pedicure', 'Facial kit knowledge', 'Skin anatomy', 'Hair anatomy']
        },
        {
            title: "Group 4 – Business Training",
            items: ['Salon management', 'Parlour product purchase', 'Client management', 'Self trading']
        }
    ];

    return (
        <div className="bg-[#050505] min-h-screen py-24 px-6 relative">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <FadeIn direction="up">
                        <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block font-medium">Master The Art</span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-luxury-nude mb-6 tracking-wide">Nithya Beauty <span className="text-luxury-gold italic pr-2">Academy</span></h1>
                        <div className="w-20 h-[1px] bg-luxury-gold mx-auto mb-8"></div>
                        <p className="text-luxury-nude/70 font-light text-lg leading-relaxed max-w-2xl mx-auto">
                            Transform your passion into a premium career. Learn elite techniques from industry experts in a comprehensive, fully-equipped luxury environment.
                        </p>
                    </FadeIn>
                </div>

                {/* Section A: Professional Makeup Course */}
                <section className="mb-32">
                    <FadeIn direction="up">
                        <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-luxury-gold/30 rounded-xl overflow-hidden shadow-2xl relative">
                            {/* Course Header */}
                            <div className="p-8 md:p-12 border-b border-luxury-gold/20 flex flex-col md:flex-row justify-between items-center lg:items-end gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                                <div className="z-10 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full text-luxury-gold text-xs uppercase tracking-widest font-medium mb-6">
                                        <Award size={14} /> Certification Included
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-luxury-nude mb-4">Professional <span className="italic text-luxury-gold">Makeup</span> Course</h2>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-luxury-nude/80 uppercase tracking-widest text-sm font-light mt-6">
                                        <span className="bg-[#1a1a1a] px-4 py-2 border border-luxury-gold/20 flex gap-2"><span className="text-luxury-gold font-medium">40</span> Days</span>
                                        <span className="bg-[#1a1a1a] px-4 py-2 border border-luxury-gold/20 flex gap-2">₹<span className="text-luxury-gold font-medium">40,000</span></span>
                                    </div>
                                </div>
                                <div className="z-10 w-full md:w-auto">
                                    <Link to="/contact" className="w-full md:w-auto block text-center px-10 py-4 bg-luxury-gold text-luxury-black font-medium uppercase tracking-widest text-sm hover:bg-luxury-lightGold transition-all duration-300 whitespace-nowrap">
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>

                            {/* Course Highlights */}
                            <div className="bg-luxury-gold/5 px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-4 border-b border-luxury-gold/10">
                                <div className="flex items-center gap-3 text-sm text-luxury-nude/90 font-light">
                                    <CheckCircle2 size={18} className="text-luxury-gold" /> Practice products provided entirely by academy
                                </div>
                                <div className="flex items-center gap-3 text-sm text-luxury-nude/90 font-light">
                                    <CheckCircle2 size={18} className="text-luxury-gold" /> Free jewels, costume & photography on Portfolio Day
                                </div>
                            </div>

                            {/* Syllabus Accordions */}
                            <div className="p-6 md:p-10">
                                <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-luxury-nude/50 mb-8 border-l-2 border-luxury-gold pl-4">Course Syllabus Structure</h3>
                                <div className="space-y-4">
                                    {makeupSyllabus.map((section, index) => (
                                        <Accordion key={index} title={section.title} items={section.items} defaultOpen={index === 0} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Section B: Master Course Bundle (Makeup + Beautician) */}
                <section className="mb-32">
                    <FadeIn direction="up">
                        <div className="bg-luxury-gold text-luxury-black rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(201,164,92,0.2)] p-1">
                            <div className="bg-[#15120e] p-8 md:p-14 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/10 rounded-full blur-[100px] opacity-50"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Ultimate Master Program</span>
                                    <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Makeup + Beautician <span className="italic text-luxury-gold">Course</span></h2>

                                    <p className="text-luxury-nude/80 max-w-2xl text-lg font-light mb-10 leading-relaxed">
                                        Our most comprehensive package. Master both the art of luxury bridal makeup and advanced professional beautician treatments in one complete program. Includes the <span className="text-luxury-gold font-medium">Full Makeup Course</span> listed above plus all <span className="text-luxury-gold font-medium">Beautician Classes</span> below.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                                        <div className="flex items-center gap-8 border-y border-luxury-gold/30 py-4 px-10">
                                            <div className="text-center">
                                                <span className="block text-sm text-luxury-nude/50 uppercase tracking-widest mb-1">Duration</span>
                                                <span className="text-2xl font-serif text-luxury-gold">70 Days</span>
                                            </div>
                                            <div className="w-[1px] h-10 bg-luxury-gold/30"></div>
                                            <div className="text-center">
                                                <span className="block text-sm text-luxury-nude/50 uppercase tracking-widest mb-1">Investment</span>
                                                <span className="text-2xl font-serif text-luxury-gold">₹50,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/contact" className="px-12 py-4 bg-luxury-gold text-luxury-black font-medium uppercase tracking-widest text-sm hover:bg-white transition-all duration-300">
                                        Enquire For Master Course
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Section C: Beautician Complimentary Classes */}
                <section>
                    <FadeIn direction="up">
                        <div className="bg-[#0b0b0b] border border-luxury-gold/20 rounded-xl overflow-hidden shadow-xl">
                            <div className="p-8 md:p-12 border-b border-luxury-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl md:text-4xl font-serif text-luxury-nude mb-3">Beautician <span className="italic text-luxury-gold">Complimentary Classes</span></h2>
                                    <p className="text-luxury-nude/60 text-sm font-light">
                                        These advanced modules are fully included when you enroll in the 70-Day Master Program.
                                    </p>
                                </div>
                            </div>

                            {/* Syllabus Accordions */}
                            <div className="p-6 md:p-10">
                                <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-luxury-nude/50 mb-8 border-l-2 border-luxury-gold pl-4">Beautician Syllabus</h3>
                                <div className="space-y-4">
                                    {beauticianSyllabus.map((section, index) => (
                                        <Accordion key={index} title={section.title} items={section.items} defaultOpen={false} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

            </div>
        </div>
    );
};

export default Academy;
