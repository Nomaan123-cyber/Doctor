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
// 1. DEFINE UK BASE SLOTS
const ukTimeSlots = ["10:00", "12:00", "15:00", "18:00"];

const regions = [
    { name: "UK (GMT/BST)", zone: "Europe/London", flag: "🇬🇧" },
    { name: "India (IST)", zone: "Asia/Kolkata", flag: "🇮🇳" },
    { name: "USA/Canada (ET)", zone: "America/New_York", flag: "🇺🇸🇨🇦" }
];

function getRegionalTimes(ukHourStr) {
    const now = new Date();
    const [hours, minutes] = ukHourStr.split(':');

    // Create a date object anchored to the UK time for today
    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: false
    });

    const parts = formatter.formatToParts(now);
    const d = {};
    parts.forEach(p => d[p.type] = p.value);

    // Create the "Target UK Time" as a Date object
    // We use the Intl.DateTimeFormat string trick to ensure we are hitting the right UK moment
    const ukTimeAtAppointment = new Date(`${d.year}-${d.month}-${d.day}T${hours}:${minutes}:00Z`);

    // Because we added 'Z', we must adjust by the current UK offset to make it "True London Time"
    const londonOffset = new Date().toLocaleString("en-US", {timeZone: "Europe/London", timeZoneName: "short"}).split(" ").pop();

    return regions.map(region => {
        const timeString = new Intl.DateTimeFormat('en-US', {
            timeZone: region.zone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(ukTimeAtAppointment);

        return `${region.flag} ${region.name}: ${timeString}`;
    });
}

// 2. POPULATE THE DROPDOWN
const timeSelect = document.getElementById("timeSlotSelect");

if (timeSelect) {
    timeSelect.innerHTML = '<option value="" disabled selected>Select an International Slot</option>';

    ukTimeSlots.forEach(ukTime => {
        const convertedTimes = getRegionalTimes(ukTime);
        const option = document.createElement("option");

        // Show UK and India in the main label, others in the background
        option.textContent = `🇬🇧 ${ukTime} UK → 🇮🇳 ${convertedTimes[1].split(': ')[1]} IST (US/CA: ${convertedTimes[2].split(': ')[1]})`;
        option.value = convertedTimes.join(" | ");

        timeSelect.appendChild(option);
    });
}