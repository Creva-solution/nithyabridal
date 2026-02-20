import React, { useState } from 'react';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Bridal Looks', 'Party Looks', 'Before & After', 'Student Work'];

    const images = [
        { src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop', category: 'Bridal Looks' },
        { src: 'https://images.unsplash.com/photo-1512496015851-a1c8dcbc69cd?q=80&w=800&auto=format&fit=crop', category: 'Party Looks' },
        { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop', category: 'Bridal Looks' },
        { src: 'https://images.unsplash.com/photo-1557205465-f3762edea6d3?q=80&w=800&auto=format&fit=crop', category: 'Student Work' },
        { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', category: 'Before & After' },
        { src: 'https://images.unsplash.com/photo-1610030580105-3bb3a4a00508?q=80&w=800&auto=format&fit=crop', category: 'Party Looks' },
        { src: 'https://images.unsplash.com/photo-1588665796280-9cc0c3e60dd9?q=80&w=800&auto=format&fit=crop', category: 'Bridal Looks' },
        { src: 'https://images.unsplash.com/photo-1515378278280-c1e194f4c281?q=80&w=800&auto=format&fit=crop', category: 'Student Work' },
        { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop', category: 'Before & After' },
    ];

    const filteredImages = activeTab === 'All'
        ? images
        : images.filter(img => img.category === activeTab);

    return (
        <div className="bg-[#0a0a0a] min-h-screen py-24 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">Visual Diary</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-luxury-nude mb-6">Our <span className="text-luxury-gold italic">Portfolio</span></h1>
                    <p className="text-luxury-nude/70 font-light leading-relaxed mb-6">
                        A curated collection of our finest transformations, showcasing our commitment to excellence, luxury, and detail.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 border rounded-full text-sm uppercase tracking-widest transition-colors duration-300 ${activeTab === cat ? 'bg-luxury-gold text-luxury-black border-luxury-gold font-medium' : 'bg-transparent text-luxury-nude/70 border-luxury-gold/30 hover:border-luxury-gold hover:text-luxury-gold font-light'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((img, idx) => (
                        <div key={idx} className="group relative overflow-hidden aspect-[4/5] bg-luxury-black">
                            <img
                                src={img.src}
                                alt={`${img.category} Portfolio`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm border border-luxury-gold py-2 px-6">
                                    {img.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
