// --- HEADER SCROLL ---
const header = document.querySelector('.site-header');

function updateHeader() {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateHeader);
updateHeader();

// --- MENU MOBILE ---
const toggleMenu = document.querySelector('.responsive-menu');
const nav = document.querySelector('.main-nav');
const menuLinks = document.querySelectorAll('.menu a');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        toggleMenu.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// --- LIEN ACTIF ---
const currentPage = document.body.dataset.page;
const currentLink = document.querySelector(`[data-link="${currentPage}"]`);

if (currentLink) {
    currentLink.classList.add('active');
}

// --- ANIMATIONS AU SCROLL ---
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.14
});

revealElements.forEach((element) => observer.observe(element));

// --- FILTRES DESTINATIONS ---
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        catalogCards.forEach((card) => {
            const categories = card.dataset.category || '';
            const isVisible = filter === 'all' || categories.includes(filter);

            card.classList.toggle('hide', !isVisible);
        });
    });
});

// --- FAQ ACCORDION ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const button = item.querySelector('button');

    button.addEventListener('click', () => {
        faqItems.forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});
