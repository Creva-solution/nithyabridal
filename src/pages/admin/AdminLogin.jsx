import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { Loader2 } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate('/admin/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center font-sans">
            <div className="w-full max-w-md p-8 bg-[#0a0a0a] border border-luxury-gold/20 shadow-2xl rounded-xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif text-luxury-gold tracking-widest uppercase mb-2">Admin Panel</h1>
                    <p className="text-luxury-nude/50 text-sm font-light uppercase tracking-wider">Sign in to manage content</p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 text-red-500 text-sm text-center rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-luxury-gold/80 text-xs uppercase tracking-widest mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#111] border border-luxury-gold/20 py-3 px-4 text-luxury-nude font-light focus:outline-none focus:border-luxury-gold transition-colors rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-luxury-gold/80 text-xs uppercase tracking-widest mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#111] border border-luxury-gold/20 py-3 px-4 text-luxury-nude font-light focus:outline-none focus:border-luxury-gold transition-colors rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-luxury-gold text-luxury-black py-3 px-4 uppercase tracking-widest font-medium hover:bg-luxury-lightGold transition-colors rounded-lg disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Log In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
