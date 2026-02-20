import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations.jsx';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center -mt-[84px] lg:-mt-[104px] overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="w-full h-full bg-gradient-to-b from-luxury-black/70 via-luxury-black/30 to-luxury-black absolute inset-0"></div>
                    <img
                        src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2671&auto=format&fit=crop"
                        alt="Bridal Makeup Beauty"
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>

                <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
                    <FadeIn delay={0.2} direction="down">
                        <span className="text-luxury-lightGold text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block font-medium">Premium Bridal Studio & Academy</span>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.1] text-shadow-gold">
                            Enhancing Beauty with <br />
                            <span className="text-luxury-gold italic pr-4">Luxury & Elegance</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up">
                        <p className="text-luxury-nude/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                            Experience the pinnacle of bridal makeup and professional training.
                            We meticulously craft every look to ensure you radiate timeless beauty.
                        </p>
                    </FadeIn>

                    <StaggerContainer delay={0.8} className="flex flex-col sm:flex-row gap-6">
                        <StaggerItem>
                            <Link to="/booking" className="inline-flex items-center justify-center px-10 py-4 bg-luxury-gold text-luxury-black uppercase tracking-wider text-sm font-medium hover:bg-luxury-lightGold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(201,164,92,0.2)]">
                                Book Appointment
                            </Link>
                        </StaggerItem>
                        <StaggerItem>
                            <Link to="/academy" className="inline-flex items-center justify-center px-10 py-4 border border-luxury-gold bg-transparent text-luxury-gold uppercase tracking-wider text-sm hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 transform hover:-translate-y-1">
                                Join Academy
                            </Link>
                        </StaggerItem>
                    </StaggerContainer>
                </div>


            </section>

            {/* About Preview */}
            <section className="py-32 bg-luxury-black text-center px-6 relative overflow-hidden">
                {/* Ornamental Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl rounded-full pointer-events-none"></div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <FadeIn direction="up">
                        <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-5xl font-serif mb-8 text-luxury-nude">Redefining <span className="text-luxury-gold italic">Elegance</span></h2>
                        <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-8"></div>
                        <p className="text-luxury-nude/70 leading-relaxed font-light mb-10 text-lg">
                            Founded on the principle that every bride deserves to feel like royalty, Nithya Bridal specializes in high-end, flawless makeup artistry. Our academy also nurtures the next generation of top-tier artists.
                        </p>
                        <Link to="/about" className="text-luxury-gold flex items-center justify-center gap-2 hover:text-luxury-lightGold uppercase text-sm tracking-[0.2em] transition-colors group">
                            Discover Our Story
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight size={16} />
                            </motion.span>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-32 bg-[#080808] px-6 border-t border-luxury-gold/10">
                <div className="container mx-auto">
                    <FadeIn direction="up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                            <div>
                                <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">What We Offer</span>
                                <h2 className="text-5xl font-serif text-luxury-nude">Signature <span className="text-luxury-gold italic">Services</span></h2>
                            </div>
                            <Link to="/services" className="text-luxury-gold flex items-center gap-2 hover:text-luxury-lightGold uppercase text-sm tracking-widest transition-colors mt-6 md:mt-0 group pb-2 border-b border-luxury-gold hover:border-luxury-lightGold">
                                View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Bridal Makeup", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop" },
                            { title: "Engagement Looks", img: "https://images.unsplash.com/photo-1512496015851-a1c8dcbc69cd?q=80&w=800&auto=format&fit=crop" },
                            { title: "Party Makeup", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop" }
                        ].map((service, idx) => (
                            <StaggerItem key={idx}>
                                <div className="group relative overflow-hidden h-[450px] shadow-2xl">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent flex flex-col justify-end p-8">
                                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                                            <div className="w-8 h-[1px] bg-luxury-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                                            <h3 className="text-3xl font-serif text-luxury-nude group-hover:text-luxury-gold transition-colors duration-300">{service.title}</h3>
                                            <Link to="/booking" className="text-xs uppercase tracking-widest text-luxury-gold hover:text-luxury-lightGold inline-block mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 flex items-center gap-2">
                                                Book Session <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Decorative frame overlay */}
                                    <div className="absolute inset-4 border border-luxury-gold/0 group-hover:border-luxury-gold/30 transition-colors duration-700 pointer-events-none"></div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Testimonials Preview */}
            <section className="py-32 bg-luxury-black px-6 text-center border-t border-luxury-gold/10">
                <div className="container mx-auto max-w-5xl">
                    <FadeIn direction="up">
                        <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">Words of Praise</span>
                        <h2 className="text-5xl font-serif mb-20 text-luxury-nude">Client <span className="text-luxury-gold italic">Experiences</span></h2>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { text: "Absolutely stunning work! The team made me feel like an absolute queen on my wedding day. The makeup lasted all night and looked flawless in photos.", author: "Sarah J." },
                            { text: "Taking the Professional Masterclass was the best investment for my career. The detail and luxury standard taught here is simply unparalleled.", author: "Priya P." }
                        ].map((test, i) => (
                            <StaggerItem key={i}>
                                <div className="relative border border-luxury-gold/20 p-12 bg-[#080808] hover:border-luxury-gold/50 transition-colors duration-500 group">
                                    <span className="absolute top-6 left-6 text-6xl font-serif text-luxury-gold/10 group-hover:text-luxury-gold/20 transition-colors">"</span>
                                    <div className="flex justify-center gap-1 mb-8 text-luxury-gold relative z-10">
                                        {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-luxury-nude/80 font-light italic mb-8 leading-relaxed relative z-10">
                                        "{test.text}"
                                    </p>
                                    <div className="w-12 h-[1px] bg-luxury-gold/30 mx-auto mb-6"></div>
                                    <div className="uppercase tracking-[0.2em] text-xs text-luxury-gold font-medium">
                                        {test.author}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
};

export default Home;
