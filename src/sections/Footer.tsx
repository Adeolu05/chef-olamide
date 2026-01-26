import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brandGreen text-white/30 py-16 text-center border-t border-white/5">
            <div className="max-w-screen-2xl mx-auto px-6">
                <span className="font-serif italic text-4xl text-white block mb-8">Chef Olamide</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} Modern Nigerian Gastronomy Studio. Defined by Precision.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
