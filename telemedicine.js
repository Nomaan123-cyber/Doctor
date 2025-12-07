// THEME TOGGLE
const tmToggleBtn = document.getElementById("toggleTheme");
const tmBody = document.body;

if (tmToggleBtn) {
    tmToggleBtn.addEventListener("click", () => {
        tmBody.classList.toggle("dark-mode");
        tmBody.classList.toggle("light-mode");
        tmToggleBtn.textContent = tmBody.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}

// 3D TILT EFFECT ON HERO CARD
const tmHeroCard = document.getElementById("tmHeroCard");

if (tmHeroCard) {
    tmHeroCard.addEventListener("mousemove", (e) => {
        const rect = tmHeroCard.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / 30).toFixed(2);
        const rotateY = (x / 30).toFixed(2);

        tmHeroCard.style.transform =
            `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    tmHeroCard.addEventListener("mouseleave", () => {
        tmHeroCard.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    });
}

// FADE-IN SECTIONS ON SCROLL
const tmSections = document.querySelectorAll(".tm-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("tm-visible");
            }
        });
    },
    { threshold: 0.2 }
);

tmSections.forEach(sec => {
    sec.classList.add("tm-hidden");
    observer.observe(sec);
});
