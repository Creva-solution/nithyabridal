import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            type: "Bridal Client",
            rating: 5,
            text: "Booking Nithya for my wedding was the best decision I made. I felt like absolute royalty. The makeup looked flawless in person and in photos, and lasted from the morning ceremony all the way through the crazy reception. Truly an artist!",
            img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Priya Patel",
            type: "Academy Graduate",
            rating: 5,
            text: "The Professional Masterclass completely changed my career trajectory. The sheer level of detail, the product knowledge, and the ongoing support is unmatched. I secured three bridal bookings within a month of graduating.",
            img: "https://images.unsplash.com/photo-1512496015851-a1c8dcbc69cd?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Emily R.",
            type: "Engagement Client",
            rating: 5,
            text: "I wanted a soft, natural glam for my engagement, and she nailed it. The skin prep is next level—my skin was glowing from within. Will definitely be returning for the wedding!",
            img: "https://images.unsplash.com/photo-1557205465-f3762edea6d3?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Aditi S.",
            type: "Academy Student",
            rating: 5,
            text: "A truly luxurious learning environment. They don't just teach you how to apply makeup; they teach you how to build a premium brand and maintain a luxury standard.",
            img: "https://images.unsplash.com/photo-1588665796280-9cc0c3e60dd9?q=80&w=200&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-[#0a0a0a] min-h-screen py-24 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">Client Voices</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-luxury-nude mb-6">Real <span className="text-luxury-gold italic">Experiences</span></h1>
                    <p className="text-luxury-nude/70 font-light leading-relaxed mb-6">
                        Words from the beautiful brides we've styled and the talented artists we've mentored. Our reputation is built seamlessly upon their satisfaction.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8 bg-luxury-black/50 border border-luxury-gold/20 inline-flex py-3 px-8 rounded-full">
                        <span className="text-luxury-gold font-serif text-2xl">4.9/5</span>
                        <div className="flex gap-1 text-luxury-gold">
                            {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                        </div>
                        <span className="text-luxury-nude/50 uppercase tracking-widest text-xs ml-4 border-l border-luxury-gold/30 pl-4">Over 200 Reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-luxury-black p-10 md:p-14 border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors duration-500 relative">
                            <span className="absolute -top-6 -left-2 text-8xl font-serif text-luxury-gold opacity-10 leading-none">"</span>

                            <div className="flex gap-1 mb-6 text-luxury-gold">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>

                            <p className="text-luxury-nude/80 font-light italic mb-10 leading-relaxed z-10 relative">
                                {review.text}
                            </p>

                            <div className="flex items-center gap-6 border-t border-luxury-gold/20 pt-6">
                                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border border-luxury-gold/50" />
                                <div>
                                    <h4 className="font-serif text-luxury-gold text-lg tracking-wide">{review.name}</h4>
                                    <p className="text-luxury-nude/50 text-xs uppercase tracking-widest">{review.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
