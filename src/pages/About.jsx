import React from 'react';

const About = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen py-16 md:py-24 px-4 sm:px-6">
            <div className="container mx-auto">
                <div className="text-center mb-12 md:mb-24 max-w-4xl mx-auto">
                    <span className="text-luxury-gold text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-4 block">The Journey</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-luxury-nude mb-4 md:mb-6">About <span className="text-luxury-gold italic">Nithya</span></h1>
                    <p className="text-luxury-nude/70 font-light text-[13px] md:text-base leading-snug md:leading-relaxed mb-6">
                        A vision built on passion, perfect execution, and an unwavering commitment to making every client feel inherently beautiful and confident.
                    </p>
                </div>

                {/* Founder Section */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
                    <div className="md:w-1/2 w-full px-2 md:px-0">
                        <div className="relative p-4 md:p-6 border border-luxury-gold/30">
                            <img
                                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop"
                                alt="Founder Nithya"
                                className="w-full object-cover aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#0a0a0a] border border-luxury-gold px-4 py-2 md:px-8 md:py-4">
                                <span className="text-luxury-gold font-serif text-sm md:text-xl tracking-wider">Founder & Master Artist</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6 text-luxury-nude">The Artist behind the <span className="text-luxury-gold italic">Glamour</span></h2>
                        <p className="text-luxury-nude/70 font-light text-[13px] md:text-base leading-snug md:leading-relaxed mb-4 md:mb-6">
                            With over a decade of experience in the luxury beauty industry, Nithya has built a reputation for crafting flawless, long-lasting, and radiantly natural makeup looks. Having trained under world-renowned makeup artists, she brings an international standard of beauty to every client.
                        </p>
                        <p className="text-luxury-nude/70 font-light text-[13px] md:text-base leading-snug md:leading-relaxed mb-6 md:mb-8">
                            Her philosophy is simple: makeup shouldn't hide you; it should reveal the most elegant, confident version of yourself.
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-luxury-gold/20 pt-6 mt-6 md:pt-8 md:mt-8">
                            <div>
                                <span className="text-3xl md:text-4xl font-serif text-luxury-gold block mb-1 md:mb-2">10+</span>
                                <span className="text-xs md:text-sm tracking-widest uppercase text-luxury-nude/60">Years Experience</span>
                            </div>
                            <div>
                                <span className="text-3xl md:text-4xl font-serif text-luxury-gold block mb-1 md:mb-2">500+</span>
                                <span className="text-xs md:text-sm tracking-widest uppercase text-luxury-nude/60">Happy Brides</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="bg-luxury-black/90 border border-luxury-gold/20 p-8 py-12 md:p-20 text-center relative overflow-hidden mt-6 md:mt-0">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold to-transparent pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
                        <div>
                            <span className="text-luxury-gold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-4 block">Our Mission</span>
                            <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-luxury-nude">Elevating Standards</h3>
                            <p className="text-luxury-nude/70 font-light text-[13px] md:text-base leading-snug md:leading-relaxed">
                                To provide unparalleled luxury makeup services that instill profound confidence, and to cultivate a world-class academy that empowers aspiring artists with unparalleled skills and business acumen.
                            </p>
                        </div>
                        <div>
                            <span className="text-luxury-gold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-4 block">Our Vision</span>
                            <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-luxury-nude">The Ultimate Destination</h3>
                            <p className="text-luxury-nude/70 font-light text-[13px] md:text-base leading-snug md:leading-relaxed">
                                To be universally recognized as the premier destination for elite bridal artistry and professional beauty education, setting trends and defining modern luxury globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
