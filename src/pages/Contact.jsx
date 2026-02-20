import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen py-24 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-luxury-nude mb-6">Contact <span className="text-luxury-gold italic">Us</span></h1>
                    <p className="text-luxury-nude/70 font-light leading-relaxed">
                        Whether you're inquiring about our premium bridal services or looking to elevate your skills through our academy, our team is ready to assist you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Contact Details */}
                    <div className="flex flex-col gap-12 bg-luxury-black p-10 border border-luxury-gold/20 shadow-[-10px_-10px_30px_rgba(201,164,92,0.05)]">
                        <div className="flex items-start gap-6 border-b border-luxury-gold/10 pb-10">
                            <div className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center shrink-0">
                                <MapPin size={24} className="text-luxury-gold" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif mb-3 text-luxury-nude tracking-wide">Studio Studio</h3>
                                <p className="text-luxury-nude/70 font-light leading-relaxed uppercase text-sm tracking-widest">
                                    123 Luxury Avenue, Elegance District, <br />City, State 10001
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 border-b border-luxury-gold/10 pb-10">
                            <div className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center shrink-0">
                                <Phone size={24} className="text-luxury-gold" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif mb-3 text-luxury-nude tracking-wide">Direct Contact</h3>
                                <p className="text-luxury-nude/70 font-light leading-relaxed uppercase text-sm tracking-widest mb-1">
                                    Bookings: +1 (234) 567-890
                                </p>
                                <p className="text-luxury-nude/70 font-light leading-relaxed uppercase text-sm tracking-widest">
                                    Academy: +1 (234) 567-891
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center shrink-0">
                                <Mail size={24} className="text-luxury-gold" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif mb-3 text-luxury-nude tracking-wide">Digital Channel</h3>
                                <p className="text-luxury-nude/70 font-light leading-relaxed uppercase text-sm tracking-widest lowercase">
                                    hello@nithyabridal.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Embed or Contact Form Alternate */}
                    <div className="h-full min-h-[500px] border border-luxury-gold/20 relative group bg-luxury-black flex items-center justify-center overflow-hidden">
                        {/* Note: In production replace iframe src with real google map embed URL */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689230553046!5m2!1sen!2s"
                            className="absolute inset-0 w-full h-full grayscale opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        <div className="absolute inset-0 bg-luxury-black/30 pointer-events-none group-hover:bg-transparent transition-colors duration-1000"></div>
                    </div>
                </div>

                {/* Social Follow */}
                <div className="text-center py-16 border-t border-luxury-gold/20">
                    <h2 className="text-3xl font-serif text-luxury-nude mb-8">Follow Our <span className="text-luxury-gold italic">Artistry</span></h2>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="w-14 h-14 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all hover:scale-110">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all hover:scale-110">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
