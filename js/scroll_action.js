// menu_manager.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const menuBlock = document.getElementById('menu');
    const { pathname } = window.location; // "/produits/shop.html"

    // nom du fichier (dernier segment)
    const file = pathname.split('/').filter(Boolean).pop() || ''; // "shop.html" ou "" si "/"
    const currentPage = file.replace(/\.[^/.]+$/, ''); // "shop"



    if (!scrollToTopBtn) return; // le script peut être inclus sur des pages sans le bouton

    // Affichage/masquage au scroll
    const scrollFunction = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        scrollToTopBtn.style.display = scrolled > 20 ? 'block' : 'none';

        //Active et fixe le menu
        if (scrolled > 20) {
            if (currentPage === 'index' || currentPage === 'contact') menuBlock.classList.add('menu-active');
            menuBlock.style.position = 'fixed';
        } else {
            if (currentPage === 'index' || currentPage === 'contact') menuBlock.classList.remove('menu-active');
            menuBlock.style.position = 'initial';
        }
    };

    // Remonte en haut
    scrollToTopBtn.addEventListener('click', () => {
        // comportement fluide si dispo
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.body.scrollTop = 0; // Safari
            document.documentElement.scrollTop = 0; // Chrome/Firefox/IE/Opera
        }
    });

    // Écouteurs
    window.addEventListener('scroll', scrollFunction, { passive: true });
    scrollFunction(); // état initial au chargement
});
