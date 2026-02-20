import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Bridal Makeup',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formatting the WhatsApp message
        const message = `*New Booking Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date Needed:* ${formData.date}%0A*Additional Details:* ${formData.message}`;

        // Replace with actual WhatsApp number in production
        const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen py-24 px-6 flex items-center">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase mb-4 block">Reserve Your Spot</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-luxury-nude mb-6">Book an <span className="text-luxury-gold italic">Appointment</span></h1>
                    <p className="text-luxury-nude/70 font-light leading-relaxed">
                        Fill out the form below to secure your date. We require advance booking for all bridal and premium services. A team member will confirm your slot via WhatsApp immediately.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-luxury-black border border-luxury-gold/20 p-8 md:p-14 mb-10 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-luxury-gold text-xs uppercase tracking-widest mb-3">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Eleanor Vance"
                                className="w-full bg-transparent border-b border-luxury-nude/20 py-3 text-luxury-nude font-light focus:outline-none focus:border-luxury-gold transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-luxury-gold text-xs uppercase tracking-widest mb-3">Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 234 567 8900"
                                className="w-full bg-transparent border-b border-luxury-nude/20 py-3 text-luxury-nude font-light focus:outline-none focus:border-luxury-gold transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-luxury-gold text-xs uppercase tracking-widest mb-3">Service Required *</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-[#0a0a0a] border-b border-luxury-nude/20 py-3 text-luxury-nude/80 font-light focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer"
                            >
                                <option value="Bridal Makeup">Bridal Makeup</option>
                                <option value="Engagement Makeup">Engagement Makeup</option>
                                <option value="Party Makeup">Party / Guest Makeup</option>
                                <option value="Academy Enrollment">Academy Enrollment</option>
                                <option value="Other">Other (Specify in message)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-luxury-gold text-xs uppercase tracking-widest mb-3">Date Needed *</label>
                            <input
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-luxury-nude/20 py-3 text-luxury-nude/80 font-light focus:outline-none focus:border-luxury-gold transition-colors [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <label className="block text-luxury-gold text-xs uppercase tracking-widest mb-3">Message / Venue Details</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Tell us more about your event..."
                            className="w-full bg-transparent border-b border-luxury-nude/20 py-3 text-luxury-nude font-light focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-4 bg-luxury-gold text-luxury-black py-5 uppercase tracking-widest font-medium hover:bg-luxury-lightGold transition-colors shadow-lg"
                    >
                        <MessageSquare size={18} />
                        Connect via WhatsApp
                    </button>
                </form>

                <p className="text-center text-luxury-nude/40 text-xs font-light uppercase tracking-widest">
                    Secure Payments powered by Razorpay available upon consultation.
                </p>
            </div>
        </div>
    );
};

export default Booking;
