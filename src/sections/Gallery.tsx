import React from 'react';
import { motion } from 'framer-motion';


// Gallery images - All 23 of your amazing images!
const GALLERY_IMAGES = [
    { filename: 'gallery-one.png', alt: 'Nigerian Culinary Art 1' },
    { filename: 'gallery-two.png', alt: 'Nigerian Culinary Art 2' },
    { filename: 'gallery-three.png', alt: 'Nigerian Culinary Art 3' },
    { filename: 'gallery-four.png', alt: 'Nigerian Culinary Art 4' },
    { filename: 'gallery-five.png', alt: 'Nigerian Culinary Art 5' },
    { filename: 'gallery-six.png', alt: 'Nigerian Culinary Art 6' },
    { filename: 'gallery-seven.png', alt: 'Nigerian Culinary Art 7' },
    { filename: 'gallery-eight.png', alt: 'Nigerian Culinary Art 8' },
    { filename: 'gallery-nine.png', alt: 'Nigerian Culinary Art 9' },
    { filename: 'gallery-ten.png', alt: 'Nigerian Culinary Art 10' },
    { filename: 'gallery-eleven.png', alt: 'Nigerian Culinary Art 11' },
    { filename: 'gallery-twelve.png', alt: 'Nigerian Culinary Art 12' },
    { filename: 'gallery-thirteen.png', alt: 'Nigerian Culinary Art 13' },
    { filename: 'gallery-fourteen.png', alt: 'Nigerian Culinary Art 14' },
    { filename: 'gallery-fifteen.png', alt: 'Nigerian Culinary Art 15' },
    { filename: 'gallery-sixteen.png', alt: 'Nigerian Culinary Art 16' },
    { filename: 'gallery-seventeen.png', alt: 'Nigerian Culinary Art 17' },
    { filename: 'gallery-eighteen.png', alt: 'Nigerian Culinary Art 18' },
    { filename: 'gallery-ninteen.png', alt: 'Nigerian Culinary Art 19' },
    { filename: 'gallery-twenty.png', alt: 'Nigerian Culinary Art 20' },
    { filename: 'gallery-twenty-one.jpg', alt: 'Nigerian Culinary Art 21' },
    { filename: 'gallery-twenty-two.jpg', alt: 'Nigerian Culinary Art 22' },
    { filename: 'gallery-twenty-three.jpg', alt: 'Nigerian Culinary Art 23' },
];

interface GalleryProps {
    onImageClick: (index: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
    return (
        <section id="gallery" className="relative py-32 bg-gradient-to-br from-ivory via-white to-soft-gold/10 overflow-hidden">
            {/* Decorative Wave SVG Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-24 md:h-32"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,80 L1200,0 L0,0 Z"
                        className="fill-ivory"
                    />
                </svg>
            </div>

            {/* Decorative Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-champagne/5 to-transparent pointer-events-none" />

            {/* Decorative Pattern */}
            <div
                className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
                {/* Section Header with Accent */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brandGreen uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block"
                        >
                            04. Visual Journey
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-9xl font-serif text-obsidian"
                        >
                            Portfolio.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '12rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-px bg-gradient-to-r from-brandGreen to-champagne hidden md:block mb-8"
                    />
                </div>

                {/* Masonry Grid - Dynamic layout for 23 images */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {GALLERY_IMAGES.map((img, i) => {
                        // Create dynamic sizing patterns for visual interest
                        let gridClass = 'aspect-square'; // Default

                        // Portrait images (taller) - every 5th and 11th
                        if (i % 5 === 0 || i % 11 === 0) {
                            gridClass = 'aspect-[3/4] md:row-span-2';
                        }
                        // Wide images - every 7th
                        else if (i % 7 === 0) {
                            gridClass = 'aspect-[4/3] md:col-span-2';
                        }
                        // Featured large images - specific positions
                        else if (i === 2 || i === 15) {
                            gridClass = 'aspect-square md:col-span-2 md:row-span-2';
                        }

                        return (
                            <motion.div
                                key={`gallery-${i}`}
                                onClick={() => onImageClick(i)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                whileHover={{ scale: 0.98 }}
                                className={`relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-xl hover:ring-2 hover:ring-brandGreen/50 transition-all duration-500 bg-obsidian ${gridClass}`}
                            >
                                <img
                                    src={`/images/gallery/${img.filename}`}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 opacity-90 hover:opacity-100"
                                    alt={img.alt}
                                    loading="lazy"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
