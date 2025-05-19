document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav ul.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('nav ul.nav-list li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60, // offset for fixed header
                        behavior: 'smooth'
                    });
                }
                // Close mobile menu after clicking
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });
    }

    // Add fade-in animation for sections on scroll
    const sections = document.querySelectorAll('section.section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-section');
        observer.observe(section);
    });
});
