// DARK / LIGHT MODE TOGGLE
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


// ANIMATED TEXT EFFECT
const text = "Homeopathy treats the root cause of illness naturally and gently. Combined with personalized nutrition and dedicated maternity care, we ensure complete wellness for every stage of life.";
const animatedText = document.getElementById("animatedText");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();


// ===== AUTO TESTIMONIAL SCROLL =====
const track = document.querySelector(".testimonial-track");
let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 1;
    track.style.transform = `translateX(-${scrollAmount}px)`;
    if (scrollAmount > track.scrollWidth / 2) scrollAmount = 0;
}, 40);


// ===== NAVIGATE ALL BUTTONS TO APPOINTMENT FORM =====
document.querySelectorAll(".service-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("appointment").scrollIntoView({ behavior: "smooth" });
    });
});
