// ===============================
// ✅ MAIN APP JS (SAFE + CLEAN)
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------
       THEME TOGGLE
    --------------------------- */
    const toggle = document.getElementById("toggleTheme");
    const body = document.body;

    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            body.classList.toggle("light-mode");
        });
    }

    /* ---------------------------
       AI MEAL → DR FABIHA LINK
    --------------------------- */
    document.querySelectorAll(".ai-consult-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const service = btn.dataset.service || "Nutrition Consultation";
            const meal = btn.dataset.meal || "AI suggested meal";

            const message =
                `Hello Dr. Fabiha, I would like a ${service} for the AI meal: ${meal}. ` +
                `Please advise a personalized diet plan for me.`;

            localStorage.setItem("vastorBookingMessage", message);
            window.location.href = "index.html#appointment";
        });
    });

    /* ---------------------------
       MAIN DASHBOARD PIE (WEB)
    --------------------------- */
    const healthData = {
        steps: 7238,
        distance: 5.4,   // km
        calories: 430,
        sleep: 75,       // %
        hydration: 65    // %
    };
    const totalTarget = 10000;

    const totalStepsEl = document.getElementById("totalSteps");
    if (totalStepsEl) {
        let currentStep = 0;
        const stepInterval = setInterval(() => {
            currentStep += 120;
            if (currentStep >= healthData.steps) {
                currentStep = healthData.steps;
                clearInterval(stepInterval);
            }
            totalStepsEl.innerText = currentStep.toLocaleString();
        }, 20);

        const totalCircumference = 691;
        const stepsCircle = document.querySelector(".steps");
        const distanceCircle = document.querySelector(".distance");
        const caloriesCircle = document.querySelector(".calories");
        const sleepCircle = document.querySelector(".sleep");
        const hydrationCircle = document.querySelector(".hydration");

        if (stepsCircle) {
            stepsCircle.style.strokeDasharray = totalCircumference;
            stepsCircle.style.strokeDashoffset =
                totalCircumference - (healthData.steps / totalTarget) * totalCircumference;
        }
        if (distanceCircle) {
            distanceCircle.style.strokeDasharray = totalCircumference;
            distanceCircle.style.strokeDashoffset =
                totalCircumference - (healthData.distance / 10) * totalCircumference;
        }
        if (caloriesCircle) {
            caloriesCircle.style.strokeDasharray = totalCircumference;
            caloriesCircle.style.strokeDashoffset =
                totalCircumference - (healthData.calories / 600) * totalCircumference;
        }
        if (sleepCircle) {
            sleepCircle.style.strokeDasharray = totalCircumference;
            sleepCircle.style.strokeDashoffset =
                totalCircumference - (healthData.sleep / 100) * totalCircumference;
        }
        if (hydrationCircle) {
            hydrationCircle.style.strokeDasharray = totalCircumference;
            hydrationCircle.style.strokeDashoffset =
                totalCircumference - (healthData.hydration / 100) * totalCircumference;
        }
    }

    /* ---------------------------
       OVERVIEW RINGS (WEB CARD)
    --------------------------- */
    const smallCirc = 264;
    const stepsRing = document.querySelector(".steps-ring");
    const waterRing = document.querySelector(".water-ring");
    const sleepRing = document.querySelector(".sleep-ring");
    const caloriesRing = document.querySelector(".calories-ring");

    if (stepsRing) {
        stepsRing.style.strokeDasharray = smallCirc;
        stepsRing.style.strokeDashoffset = smallCirc - (7238 / 10000) * smallCirc;
    }
    if (waterRing) {
        waterRing.style.strokeDasharray = smallCirc;
        waterRing.style.strokeDashoffset = smallCirc - (1200 / 3000) * smallCirc;
    }
    if (sleepRing) {
        sleepRing.style.strokeDasharray = smallCirc;
        sleepRing.style.strokeDashoffset = smallCirc - (6.2 / 8) * smallCirc;
    }
    if (caloriesRing) {
        caloriesRing.style.strokeDasharray = smallCirc;
        caloriesRing.style.strokeDashoffset = smallCirc - (430 / 600) * smallCirc;
    }

    /* ---------------------------
       AI PREDICTIVE HEALTH SCORE
    --------------------------- */
    const scoreTarget = 82;
    const scoreCircle = document.querySelector(".score-progress");
    const scoreDisplay = document.getElementById("aiScore");
    const riskStatus = document.getElementById("riskStatus");

    if (scoreCircle && scoreDisplay && riskStatus) {
        let scoreCurrent = 0;

        const scoreInterval = setInterval(() => {
            scoreCurrent++;
            if (scoreCurrent >= scoreTarget) {
                scoreCurrent = scoreTarget;
                clearInterval(scoreInterval);
            }
            scoreDisplay.innerText = scoreCurrent;
        }, 20);

        const circumference = 402;
        scoreCircle.style.strokeDasharray = circumference;

        requestAnimationFrame(() => {
            const offset = circumference - (scoreTarget / 100) * circumference;
            scoreCircle.style.strokeDashoffset = offset;
        });

        if (scoreTarget >= 75) {
            riskStatus.innerText = "Low Health Risk";
            riskStatus.className = "status-badge status-low";
        } else if (scoreTarget >= 45) {
            riskStatus.innerText = "Moderate Health Risk";
            riskStatus.className = "status-badge status-moderate";
        } else {
            riskStatus.innerText = "High Health Risk";
            riskStatus.className = "status-badge status-high";
        }
    }

    /* ---------------------------
       AI STRESS & BURNOUT
    --------------------------- */
    const stressTarget = 61;
    const stressCircle = document.querySelector(".stress-fill");
    const stressDisplay = document.getElementById("stressScore");
    const stressStatus = document.getElementById("stressStatus");

    if (stressCircle && stressDisplay && stressStatus) {
        let stressCurrent = 0;

        const stressInterval = setInterval(() => {
            stressCurrent++;
            if (stressCurrent >= stressTarget) {
                stressCurrent = stressTarget;
                clearInterval(stressInterval);
            }
            stressDisplay.innerText = stressCurrent;
        }, 25);

        const stressCircumference = 402;
        stressCircle.style.strokeDasharray = stressCircumference;

        requestAnimationFrame(() => {
            const offset =
                stressCircumference - (stressTarget / 100) * stressCircumference;
            stressCircle.style.strokeDashoffset = offset;
        });

        if (stressTarget < 40) {
            stressStatus.innerText = "Low Stress Level";
            stressStatus.className = "status-badge status-low";
        } else if (stressTarget < 70) {
            stressStatus.innerText = "Moderate Stress Level";
            stressStatus.className = "status-badge status-moderate";
        } else {
            stressStatus.innerText = "High Burnout Risk";
            stressStatus.className = "status-badge status-high";
        }
    }

    /* ---------------------------
       AI HORMONAL CYCLE
    --------------------------- */
    const cycleTarget = 76;
    const cycleCircle = document.querySelector(".hormone-fill");
    const cycleDisplay = document.getElementById("cycleScore");
    const cycleStatus = document.getElementById("cycleStatus");

    if (cycleCircle && cycleDisplay && cycleStatus) {
        let cycleCurrent = 0;

        const cycleInterval = setInterval(() => {
            cycleCurrent++;
            if (cycleCurrent >= cycleTarget) {
                cycleCurrent = cycleTarget;
                clearInterval(cycleInterval);
            }
            cycleDisplay.innerText = cycleCurrent + "%";
        }, 22);

        const hormoneCircumference = 402;
        cycleCircle.style.strokeDasharray = hormoneCircumference;

        requestAnimationFrame(() => {
            const offset =
                hormoneCircumference - (cycleTarget / 100) * hormoneCircumference;
            cycleCircle.style.strokeDashoffset = offset;
        });

        if (cycleTarget >= 70) {
            cycleStatus.innerText = "Cycle Stability: Balanced";
            cycleStatus.className = "status-badge status-low";
        } else if (cycleTarget >= 45) {
            cycleStatus.innerText = "Cycle Stability: Fluctuating";
            cycleStatus.className = "status-badge status-moderate";
        } else {
            cycleStatus.innerText = "Cycle Stability: Imbalanced";
            cycleStatus.className = "status-badge status-high";
        }
    }

    /* ---------------------------
       LIVE CLOCKS (APP + IPHONE)
    --------------------------- */
    const appTime = document.getElementById("appTime");
    if (appTime) {
        setInterval(() => {
            const now = new Date();
            appTime.textContent = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });
        }, 1000);
    }

    const iphoneTime = document.getElementById("iphoneTime");
    if (iphoneTime) {
        setInterval(() => {
            const now = new Date();
            iphoneTime.textContent = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });
        }, 1000);
    }

    /* ---------------------------
       IPHONE MINI RINGS
    --------------------------- */
    document.querySelectorAll(".iphone-ring-progress").forEach(circle => {
        const percent = Number(circle.getAttribute("data-progress") || "0");
        const circumference = 327;
        circle.style.strokeDasharray = circumference;
        const offset = circumference - (percent / 100) * circumference;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 300);
    });

    /* ---------------------------
       IPHONE BIG ACTIVITY PIE
    --------------------------- */
    document.querySelectorAll(".app-pie").forEach(circle => {
        const percent = Number(circle.getAttribute("data-pie") || "0");
        const circumference = 327;
        circle.style.strokeDasharray = circumference;
        const offset = circumference - (percent / 100) * circumference;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 400);
    });

    /* ---------------------------
       LIVE STEP COUNTER (IPHONE PIE)
    --------------------------- */
    const phoneStepDisplay = document.querySelector(".app-pie-center h2");
    if (phoneStepDisplay) {
        let steps = 0;
        const stepTarget = 7238;
        const run = setInterval(() => {
            steps += 48;
            if (steps >= stepTarget) {
                steps = stepTarget;
                clearInterval(run);
            }
            phoneStepDisplay.innerText = steps.toLocaleString();
        }, 18);
    }
});


/* ===============================
🍽️ AI MEAL PLANNER → CONSULT BUTTON
=============================== */
const heroMealConsult = document.getElementById("heroMealConsult");
if (heroMealConsult) {
    heroMealConsult.addEventListener("click", () => {
        // You can customise this – for now jump to appointment form
        window.location.href = "index.html#appointment";
    });
}

/* ===============================
📷 AI MEAL SNAPSHOT (PHOTO PLACEHOLDER)
=============================== */
const mealBtn = document.getElementById("openMealCamera");
const mealInput = document.getElementById("mealPhotoInput");
const mealResult = document.getElementById("mealPhotoResult");

if (mealBtn && mealInput && mealResult) {
    mealBtn.addEventListener("click", () => {
        mealInput.click();                    // open file picker / camera on mobile
    });

    mealInput.addEventListener("change", () => {
        if (mealInput.files && mealInput.files[0]) {
            const fileName = mealInput.files[0].name;
            mealResult.textContent =
                `Image "${fileName}" selected. In the full app, AI will estimate calories, protein, carbs & fats from this meal photo.`;
        } else {
            mealResult.textContent = "No meal photo selected yet.";
        }
    });
}

setInterval(() => {
    const t = document.getElementById("iphoneTime");
    const now = new Date();
    t.innerText = now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
}, 1000);

// ✅ LIVE BATTERY PERCENT (Laptop / Mobile / Desktop)
const batteryText = document.getElementById("batteryPercent");
const batteryLevel = document.querySelector(".battery-level");

if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
        function updateBattery() {
            const level = Math.round(battery.level * 100);
            batteryText.innerText = level;
            batteryLevel.style.width = level + "%";

            if (level < 20) batteryLevel.style.background = "#ef4444";
            else if (level < 50) batteryLevel.style.background = "#facc15";
            else batteryLevel.style.background = "#22c55e";
        }

        updateBattery();
        battery.addEventListener("levelchange", updateBattery);
    });
} else {
    batteryText.innerText = "100";
    batteryLevel.style.width = "100%";
    batteryLevel.style.background = "#22c55e";
}

if (navigator.getBattery) {
    navigator.getBattery().then(battery => {

        const batteryLevel = document.querySelector(".battery-level");

        function updateBattery() {
            const percent = Math.round(battery.level * 100);

            batteryLevel.style.width = percent + "%";

            // ✅ Color logic like iPhone
            if (percent <= 20) {
                batteryLevel.style.background = "#ef4444"; // red
            } else if (percent <= 50) {
                batteryLevel.style.background = "#facc15"; // yellow
            } else {
                batteryLevel.style.background = "linear-gradient(90deg,#22c55e,#16a34a)"; // green
            }

            // ✅ Charging glow animation
            if (battery.charging) {
                batteryLevel.style.animation = "batteryCharge 1s infinite alternate";
            } else {
                batteryLevel.style.animation = "none";
            }
        }

        updateBattery();

        battery.addEventListener("levelchange", updateBattery);
        battery.addEventListener("chargingchange", updateBattery);
    });
}

/* ✅ Charging Pulse */
const style = document.createElement("style");
style.innerHTML = `
@keyframes batteryCharge {
  from { filter: brightness(1); }
  to { filter: brightness(1.4); }
}`;
document.head.appendChild(style);


/* ✅ LIVE TIME SYNC */
function updateWatchTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("watchTime").innerText = `${hours}:${minutes}`;
}

setInterval(updateWatchTime, 1000);
updateWatchTime();

/* ✅ LIVE BATTERY SYNC (REAL DEVICE if supported) */
if (navigator.getBattery) {
    navigator.getBattery().then(function (battery) {
        function updateBattery() {
            const percent = Math.round(battery.level * 100);
            document.getElementById("watchBattery").innerText = percent;
        }

        updateBattery();
        battery.addEventListener("levelchange", updateBattery);
    });
} else {
    document.getElementById("watchBattery").innerText = "100";
}

// ✅ APPLE WATCH BATTERY SYNC
const watchBatteryIcon = document.querySelector(".battery-icon");

function applyBatteryLevel(level) {
    if (!watchBatteryIcon) return;

    // clamp 0–1
    level = Math.max(0, Math.min(1, level));

    watchBatteryIcon.style.setProperty("--battery-level", level);

    let color;
    if (level <= 0.2) {
        // low → red
        color = "#ef4444";
    } else if (level <= 0.5) {
        // medium → orange
        color = "#f97316";
    } else {
        // high → green
        color = "#22c55e";
    }
    watchBatteryIcon.style.setProperty("--battery-color", color);
}

// Try using the Battery Status API (not supported everywhere)
if (navigator.getBattery && watchBatteryIcon) {
    navigator.getBattery().then(battery => {
        const update = () => applyBatteryLevel(battery.level);
        update();
        battery.addEventListener("levelchange", update);
    }).catch(() => {
        // fallback value if battery API blocked
        applyBatteryLevel(0.75);
    });
} else {
    // browser doesn’t expose battery → just show 75%
    applyBatteryLevel(0.75);
}

// ✅ ANIMATE WATCH STEPS RING + NUMBER
const watchTargetSteps = 9210;
const watchMaxSteps = 10000;
const watchRing = document.getElementById("watchStepsRing");
const watchStepsText = document.getElementById("watchStepsValue");

if (watchRing && watchStepsText) {
    const circumference = 263;
    const targetPercent = watchTargetSteps / watchMaxSteps;

    let ringProgress = 0;
    let stepCounter = 0;

    const ringSpeed = 0.02;
    const stepSpeed = Math.ceil(watchTargetSteps / 60);

    function animateWatchRing() {
        ringProgress += ringSpeed;
        if (ringProgress >= targetPercent) ringProgress = targetPercent;

        const offset = circumference * (1 - ringProgress);
        watchRing.style.strokeDashoffset = offset;

        if (stepCounter < watchTargetSteps) {
            stepCounter += stepSpeed;
            if (stepCounter > watchTargetSteps) stepCounter = watchTargetSteps;
            watchStepsText.textContent = stepCounter.toLocaleString();
        }

        if (ringProgress < targetPercent) {
            requestAnimationFrame(animateWatchRing);
        }
    }

    animateWatchRing();
}


