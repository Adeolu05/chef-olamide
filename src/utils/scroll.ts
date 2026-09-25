/**
 * Smooth scroll to section
 */
export const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
        window.scrollTo({
            top: (element as HTMLElement).offsetTop,
            behavior: 'smooth'
        });
    }
};
