// ============================================
// STAFF EDITABLE TEXT FUNCTIONALITY
// ============================================
async function loadEditableTexts() {
    try {
        const response = await fetch('texts.json');
        const texts = await response.json();

        // Main title
        if (document.getElementById('main-title')) {
            document.getElementById('main-title').innerText = texts.main_title;
        }

        // Admin editable content
        if (document.getElementById('dynamic-content')) {
            document.getElementById('dynamic-content').innerHTML = texts.admin_content;
        }

        // Contact section
        if (document.getElementById('contact-name')) {
            document.getElementById('contact-name').innerText = texts.contact_name;
        }

        if (document.getElementById('contact-phone')) {
            document.getElementById('contact-phone').innerText = texts.contact_phone;
        }

        if (document.getElementById('contact-role')) {
            document.getElementById('contact-role').innerText = texts.contact_role;
        }

        // Footer
        if (document.getElementById('footer-text')) {
            document.getElementById('footer-text').innerText = texts.footer_text;
        }

        // Countdown date
        if (texts.trip_date) {
            window.TRIP_DATE = new Date(texts.trip_date);
            updateCountdown(); // run immediately
        }

        // Start countdown AFTER data loads
        setInterval(updateCountdown, 1000);

    } catch (err) {
        console.error('Error loading editable texts:', err);
    }
}

// ============================================
// COUNTDOWN TIMER FUNCTIONALITY
// ============================================
function updateCountdown() {
    const countdownEl = document.getElementById('countdown-timer');
    if (!countdownEl || !window.TRIP_DATE) return;

    const now = new Date();
    const diff = window.TRIP_DATE - now;

    if (diff <= 0) {
        countdownEl.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3>Trip is underway!</h3>
                <p>Follow the diary section for updates.</p>
            </div>
        `;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
        <div class="countdown-box">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">DAYS</span>
        </div>
        <div class="countdown-box">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">HOURS</span>
        </div>
        <div class="countdown-box">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">MINUTES</span>
        </div>
        <div class="countdown-box">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">SECONDS</span>
        </div>
    `;
}

// ============================================
// DIARY FUNCTIONALITY (keep your existing code)
// ============================================
function handlePhotoUpload(event) { /* your existing code */ }
function removePhoto() { /* your existing code */ }
function saveDiaryEntry(event) { /* your existing code */ }
function displayDiaryEntries() { /* your existing code */ }
function deleteDiaryEntry(entryId) { /* your existing code */ }

// ============================================
// REGISTRATION FUNCTIONALITY (keep your existing code)
// ============================================
function handleRegistrationSubmit(event) { /* your existing code */ }

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load all editable content
    loadEditableTexts();

    // Diary date setup
    const entryDate = document.getElementById('entryDate');
    if (entryDate) {
        const today = new Date().toISOString().split('T')[0];
        entryDate.value = today;
        entryDate.max = today;
    }

    // Diary form
    const diaryForm = document.getElementById('diaryForm');
    if (diaryForm) diaryForm.addEventListener('submit', saveDiaryEntry);

    // Display diary entries
    displayDiaryEntries();

    // Registration form
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }

    // Registration status check
    const isRegistered = localStorage.getItem('studentRegistration');
    if (isRegistered && document.getElementById('registration-status')) {
        const data = JSON.parse(isRegistered);
        document.getElementById('registration-status').innerHTML = `
            <div class="alert alert-success">
                ✅ You are registered!<br>
                Name: ${data.name}<br>
                Student ID: ${data.studentId}<br>
                Date: ${new Date(data.timestamp).toLocaleDateString()}
            </div>
        `;
    }
});
