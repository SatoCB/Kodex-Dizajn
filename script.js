const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-item");

// Otvaranje mobilnog menija
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Zatvaranje menija kada se klikne na neki link (stavku)
navLinks.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Glatko skrolovanje (precizno za mobilni i desktop)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = 80; // visina navigacije
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});