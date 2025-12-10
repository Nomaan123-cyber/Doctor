/* ================================
✅ MINI RING PROGRESS SYSTEM
================================ */

document.querySelectorAll(".iphone-ring-progress").forEach(ring => {
    const progress = ring.getAttribute("data-progress");
    const offset = 327 - (327 * progress) / 100;
    ring.style.strokeDashoffset = offset;
});

/* ================================
✅ BIG ACTIVITY PIE SYSTEM
================================ */

const pieValues = {
    steps: 72,
    hydration: 40,
    sleep: 78,
    calories: 55
};

document.querySelectorAll(".app-pie").forEach(pie => {
    if (pie.classList.contains("steps")) {
        pie.style.strokeDashoffset = 327 - (327 * pieValues.steps) / 100;
    }
    if (pie.classList.contains("hydration")) {
        pie.style.strokeDashoffset = 327 - (327 * pieValues.hydration) / 100;
    }
    if (pie.classList.contains("sleep")) {
        pie.style.strokeDashoffset = 327 - (327 * pieValues.sleep) / 100;
    }
    if (pie.classList.contains("calories")) {
        pie.style.strokeDashoffset = 327 - (327 * pieValues.calories) / 100;
    }
});

/* ================================
✅ LIVE iOS TIME
================================ */

function updateIphoneTime() {
    const now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    if (mins < 10) mins = "0" + mins;
    document.getElementById("iphoneTime").innerText = `${hrs}:${mins}`;
}
updateIphoneTime();
setInterval(updateIphoneTime, 60000);
