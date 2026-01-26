import { MenuItem } from '../types';
import { MENU_DATA } from '../constants';

/**
 * Generate a downloadable menu file from selected items
 */
export const generateMenuDownload = (selectedItems: MenuItem[]): void => {
    if (selectedItems.length === 0) return;

    let menuContent = `CHEF OLAMIDE | PRIVATE TASTING MENU\nCURATED ON: ${new Date().toLocaleDateString()}\n`;
    menuContent += "====================================\n\n";

    ['The Awakening', 'The Resonance', 'The Epilogue'].forEach(catTitle => {
        const items = selectedItems.filter(item =>
            MENU_DATA.find(c => c.title === catTitle)?.items.find(i => i.id === item.id)
        );

        if (items.length > 0) {
            menuContent += `${catTitle.toUpperCase()}\n------------------\n`;
            items.forEach(item =>
                menuContent += `- ${item.name} (${item.price})\n  ${item.description}\n\n`
            );
        }
    });

    const blob = new Blob([menuContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Chef_Olamide_Menu.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * Share item on social media platforms
 */
export const shareOnSocialMedia = (
    platform: 'x' | 'whatsapp' | 'facebook',
    item: MenuItem
): void => {
    const siteUrl = window.location.href;
    const shareText = `Explore the ${item.name} at Chef Olamide's Modern Nigerian Atelier. Heritage redefined.`;

    let url = '';
    switch (platform) {
        case 'x':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`;
            break;
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + siteUrl)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
            break;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
};

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
