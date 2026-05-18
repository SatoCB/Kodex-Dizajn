// Glatko skrolovanje za sve linkove
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Izračunavamo poziciju elementa minus visina navigacije
            const offset = 80; // visina tvog navbar-a
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efekat na navigaciji prilikom skrolovanja
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.padding = '10px 0'; // Smanjuje se malo pri skrolu za "clean" efekat
        navbar.style.borderBottom = '1px solid #00d4ff33';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.padding = '20px 0';
        navbar.style.borderBottom = '1px solid #222';
    }
});