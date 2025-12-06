// =============================================
// PORTFOLIO RUSSELL ROJAS - JavaScript Principal
// =============================================

// ====== VARIABLES GLOBALES ======
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// ====== FONCTION POUR LE DÉFILEMENT DOUX ======
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const hauteurNavbar = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - hauteurNavbar,
            behavior: 'smooth'
        });
    }
}

// ====== MENU BURGER (RESPONSIVE) ======
function initialiserMenuBurger() {
    if (!menuToggle || !navMenu) return;
    
    // Basculer le menu au clic sur le bouton burger
    menuToggle.addEventListener('click', (evenement) => {
        evenement.stopPropagation(); // Éviter la fermeture immédiate
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Bloquer le défilement du body quand le menu est ouvert
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Fermer le menu en cliquant sur un lien
    const liensMenu = document.querySelectorAll('.header__info a, .header__info li');
    liensMenu.forEach(lien => {
        lien.addEventListener('click', () => {
            if (window.innerWidth <= 1200) { // Mobile seulement
                fermerMenu();
            }
        });
    });
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (evenement) => {
        const clicDansMenu = navMenu.contains(evenement.target);
        const clicSurBouton = menuToggle.contains(evenement.target);
        
        if (!clicDansMenu && !clicSurBouton && navMenu.classList.contains('active')) {
            fermerMenu();
        }
    });
    
    // Fermer le menu en redimensionnant vers desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            fermerMenu();
        }
    });
}

// ====== FONCTION POUR FERMER LE MENU ======
function fermerMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ====== INITIALISATION AU CHARGEMENT DE LA PAGE ======
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Russell Rojas - JavaScript chargé');
    
    // Initialiser le menu burger
    initialiserMenuBurger();
    
    // Événements de défilement (les onclick="scrollToSection()" fonctionnent déjà)
    
    // Optionnel : Ajouter la classe active au lien courant
    // observerScrollEtActualiserMenu();
});

// ====== OPTIONNEL : SURBRILLER LA SECTION ACTUELLE DANS LE MENU ======
function observerScrollEtActualiserMenu() {
    const sections = document.querySelectorAll('section[id]');
    const liensNav = document.querySelectorAll('.header__info a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let sectionActuelle = '';
        const positionScroll = window.scrollY + 100;
        
        sections.forEach(section => {
            if (positionScroll >= section.offsetTop) {
                sectionActuelle = section.getAttribute('id');
            }
        });
        
        liensNav.forEach(lien => {
            lien.classList.remove('active');
            if (lien.getAttribute('href') === `#${sectionActuelle}`) {
                lien.classList.add('active');
            }
        });
    });
}

// ====== FONCTIONS ADDITIONNELLES (SI NÉCESSAIRE) ======

// 1. Pour la galerie de projets (quand vous l'ajouterez)
function initialiserGalerieProjets() {
    // Code pour lightbox, filtres, etc.
}

// 2. Pour les animations au défilement
function initialiserAnimationsScroll() {
    // Utiliser Intersection Observer pour animer les éléments
}

// 3. Pour le formulaire de contact (si vous en ajoutez un)
function initialiserFormulaireContact() {
    // Validation, envoi, etc.
}

// ====== EXPORTER LES FONCTIONS POUR UTILISATION DANS HTML ======
// Permet à onclick="scrollToSection()" de fonctionner
window.scrollToSection = scrollToSection;
window.fermerMenu = fermerMenu;
