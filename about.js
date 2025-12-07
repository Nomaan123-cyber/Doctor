// DARK / LIGHT MODE TOGGLE
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


// 3D TILT EFFECT
const card = document.getElementById("tiltCard");

card.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
