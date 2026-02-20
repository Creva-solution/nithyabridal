import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations.jsx';

const Services = () => {
    const servicesList = [
        {
            title: "Bridal Makeup",
            desc: "Comprehensive luxury artistry ensuring you look flawless on your special day. Includes high-end skin prep and long-lasting premium product application.",
            img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Reception Makeup",
            desc: "Glamorous, camera-ready styling perfectly suited for evening lighting. A striking balance of elegance and bold sophistication.",
            img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Haldi Makeup",
            desc: "Fresh, vibrant, and sweat-proof makeup designed to keep you glowing naturally throughout your daytime pre-wedding ceremonies.",
            img: "https://images.unsplash.com/photo-1542039304-7a329d5b51dd?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Groom Makeup",
            desc: "Subtle, undetectable grooming to even out skin tone, conceal blemishes, and ensure the groom looks sharp and picture-perfect.",
            img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "SFX Makeup",
            desc: "Advanced special effects makeup artistry for creative shoots, themed events, or specialized theatrical requirements.",
            img: "https://images.unsplash.com/photo-1512496015851-a1c8dcbc69cd?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Bridesmaid Makeup",
            desc: "Cohesive and stunning looks for your bridal party. Accentuating natural beauty while complementing the main bridal theme.",
            img: "https://images.unsplash.com/photo-1557205465-f3762edea6d3?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Self Grooming",
            desc: "Personalized 1-on-1 sessions teaching you how to elevate your everyday look. Learn techniques suited specifically for your facial features.",
            img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-[#0a0a0a] min-h-screen py-24 px-6 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <FadeIn direction="up">
                        <span className="text-luxury-gold text-sm tracking-[0.2em] font-medium uppercase mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-luxury-nude mb-6">Signature <span className="text-luxury-gold italic pr-2">Services</span></h1>
                        <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-8"></div>
                        <p className="text-luxury-nude/70 font-light text-lg leading-relaxed">
                            Discover our comprehensive range of luxury beauty services, precision-crafted to define your features and elevate your natural elegance.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesList.map((service, idx) => (
                        <StaggerItem key={idx}>
                            <div className="group bg-[#0f0f0f] border border-luxury-gold/10 hover:border-luxury-gold/40 transition-all duration-500 overflow-hidden flex flex-col h-full rounded-sm hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,164,92,0.1)]">
                                <div className="h-72 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="absolute -top-6 right-8 bg-luxury-black border border-luxury-gold text-luxury-gold w-12 h-12 flex items-center justify-center rounded-full z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        ✦
                                    </div>
                                    <h3 className="text-2xl font-serif text-luxury-nude group-hover:text-luxury-gold transition-colors duration-300 mb-4">{service.title}</h3>
                                    <p className="text-luxury-nude/70 font-light text-sm leading-relaxed mb-8 flex-grow">
                                        {service.desc}
                                    </p>
                                    <Link to="/booking" className="w-full block text-center py-3.5 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 uppercase tracking-widest text-xs font-medium mt-auto">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
};

export default Services;
