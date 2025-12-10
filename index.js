// ===============================
// ✅ DARK / LIGHT MODE TOGGLE (SAFE)
// ===============================

const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}

// ===============================
// ✅ ANIMATED TEXT EFFECT (SAFE)
// ===============================

const text = "Homeopathy treats the root cause of illness naturally and gently. Combined with personalized nutrition and dedicated maternity care, we ensure complete wellness for every stage of life.";
const animatedText = document.getElementById("animatedText");

let index = 0;

function typeEffect() {
    if (animatedText && index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

if (animatedText) {
    typeEffect();
}

// ===============================
// ✅ AUTO TESTIMONIAL SCROLL (SAFE)
// ===============================

const track = document.querySelector(".testimonial-track");
let scrollAmount = 0;

if (track) {
    setInterval(() => {
        scrollAmount += 1;
        track.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount > track.scrollWidth / 2) scrollAmount = 0;
    }, 40);
}

// ===============================
// ✅ NAVIGATE ALL BUTTONS TO APPOINTMENT FORM (SAFE)
// ===============================

document.querySelectorAll(".service-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const appointment = document.getElementById("appointment");

        if (appointment) {
            appointment.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===============================
// ✅ EMAIL FORM SUBMISSION
// ===============================

// ✅ EMAILJS INIT
(function () {
    emailjs.init("Ry13W4ikmotiZTQFO");
})();

// ✅ GOOGLE MEET + EMAIL + CONFIRMATION
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // ✅ SEND TO DOCTOR
        emailjs.sendForm("service_cd9ta3d", "template_y6mrd2b", this)

            // ✅ SEND AUTO CONFIRM TO PATIENT
            .then(() => {
                return emailjs.sendForm("service_cd9ta3d", "template_20robjq", this);
            })

            // ✅ FINAL SUCCESS
            .then(() => {
                alert("✅ Appointment Request Sent!\n🎥 Your Google Meet link has been emailed.");
                bookingForm.reset();
            })

            // ❌ ERROR
            .catch(error => {
                alert("❌ Failed to send request. Please try again.");
                console.error("Email Error:", error);
            });
    });
}



function createICS(data) {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Online Consultation - Dr. Fabiha
DESCRIPTION:Patient: ${data.first_name} ${data.surname}
Issue: ${data.message}
LOCATION: Online
DTSTART:20250101T100000
DTEND:20250101T110000
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "appointment.ics";
    link.click();
}

// ===============================
// ✅ UK → LOCAL TIME SLOT CONVERTER
// ===============================

// ===============================
// ✅ GLOBAL UK → LOCAL TIME SLOT SYSTEM (CLEAN & WORKING)
// ===============================

// ✅ 1. DEFINE UK BASE TIME SLOTS (24-hour, UK TIME)
const ukTimeSlots = [
    "10:00",
    "12:00",
    "15:00",
    "18:00"
];

// ✅ 2. GET ELEMENTS
const timeSelect = document.getElementById("timeSlotSelect");
const slotUK = document.getElementById("slotUK");
const slotLocal = document.getElementById("slotLocal");

// ✅ 3. TRUE UK → LOCAL TIME CONVERSION
function convertUKtoLocal(ukTime) {
    const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const now = new Date();
    const [hour, minute] = ukTime.split(":").map(Number);

    // ✅ Create UK-based time safely
    const ukDate = new Date(
        now.toLocaleString("en-GB", { timeZone: "Europe/London" })
    );

    ukDate.setHours(hour, minute, 0, 0);

    // ✅ Convert to local browser timezone
    const localDate = new Date(
        ukDate.toLocaleString("en-US", { timeZone: userTZ })
    );

    return {
        uk: ukDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        local: localDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        tz: userTZ
    };
}

// ✅ 4. POPULATE DROPDOWN
if (timeSelect && ukTimeSlots.length > 0) {
    ukTimeSlots.forEach(time => {
        const converted = convertUKtoLocal(time);

        const option = document.createElement("option");
        option.value = `${converted.uk} UK → ${converted.local}`;
        option.textContent = `${converted.uk} UK → ${converted.local} (Your Time)`;

        timeSelect.appendChild(option);
    });

    // ✅ 5. STORE HIDDEN VALUES FOR EMAIL
    timeSelect.addEventListener("change", () => {
        const selected = timeSelect.value;
        const parts = selected.split("→");

        if (parts.length === 2) {
            slotUK.value = parts[0].trim();
            slotLocal.value = parts[1].trim();
        }
    });
}
