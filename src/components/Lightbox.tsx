import React, { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
    src: string;
    alt: string;
}

interface LightboxProps {
    images: LightboxImage[];
    index: number | null;
    onClose: () => void;
    onIndexChange: (index: number) => void;
}

const SWIPE_THRESHOLD = 50;

const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onIndexChange }) => {
    const touchStartX = useRef<number | null>(null);
    const isOpen = index !== null;

    const show = useCallback(
        (step: number) => {
            if (index === null) return;
            onIndexChange((index + step + images.length) % images.length);
        },
        [index, images.length, onIndexChange]
    );

    // Keyboard controls and background scroll lock while open
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') show(1);
            if (e.key === 'ArrowLeft') show(-1);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, onClose, show]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > SWIPE_THRESHOLD) show(dx < 0 ? 1 : -1);
        touchStartX.current = null;
    };

    const current = index !== null ? images[index] : null;

    return (
        <AnimatePresence>
            {current && (
                <motion.div
                    key="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo viewer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[2000] bg-obsidian/95 backdrop-blur-sm flex items-center justify-center"
                    onClick={onClose}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <motion.img
                        key={current.src}
                        src={current.src}
                        alt={current.alt}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-[92vw] max-h-[82vh] md:max-h-[86vh] object-contain rounded-lg shadow-2xl select-none"
                        onClick={(e) => e.stopPropagation()}
                        draggable={false}
                    />

                    <button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous photo"
                                onClick={(e) => { e.stopPropagation(); show(-1); }}
                                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                type="button"
                                aria-label="Next photo"
                                onClick={(e) => { e.stopPropagation(); show(1); }}
                                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-xs font-medium tracking-widest">
                                {(index ?? 0) + 1} / {images.length}
                            </p>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
