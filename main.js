// ============================================
// SAFE HELPERS (NEW - prevents crashes)
// ============================================
function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
}

function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.innerHTML = value;
}

function setList(id, items) {
    const el = document.getElementById(id);
    if (el && Array.isArray(items)) {
        el.innerHTML = items.map(item => `<li>${item}</li>`).join("");
    }
}

// ============================================
// STAFF EDITABLE TEXT FUNCTIONALITY
// ============================================
async function loadEditableTexts() {
    try {
        const response = await fetch('texts.json');
        const texts = await response.json();

        // GLOBAL
        setText('site_title', texts.site_title);
        setText('footer_text', texts.footer_text);

        // INDEX / HOME
        setText('main-title', texts.main_title);
        setHTML('dynamic-content', texts.admin_content);

        // CONTACT
        setText('contact-name', texts.contact_name);
        setText('contact-phone', texts.contact_phone);
        setText('contact-role', texts.contact_role);

        // FLIGHT PAGE
        setText("flight_title", texts.flight_title);
        setText("flight_intro", texts.flight_intro);
        setText("flight_meeting_title", texts.flight_meeting_title);
        setText("flight_meeting_location", texts.flight_meeting_location);
        setText("flight_meeting_info", texts.flight_meeting_info);
        setText("flight_luggage_title", texts.flight_luggage_title);
        setText("flight_cabin_title", texts.flight_cabin_title);
        setText("flight_checked_title", texts.flight_checked_title);
        setText("flight_rules_title", texts.flight_rules_title);
        setText("flight_return_title", texts.flight_return_title);
        setText("flight_return_text", texts.flight_return_text);

        setList("flight_cabin_list", texts.flight_cabin_list);
        setList("flight_checked_list", texts.flight_checked_list);
        setList("flight_rules_list", texts.flight_rules_list);

        // CULTURE PAGE
        setText("culture_title", texts.culture_title);
        setText("culture_intro", texts.culture_intro);
        setText("culture_spain_title", texts.culture_spain_title);
        setText("culture_local_title", texts.culture_local_title);
        setText("culture_local_text", texts.culture_local_text);
        setText("culture_customs_title", texts.culture_customs_title);
        setText("culture_laws_title", texts.culture_laws_title);
        setText("culture_phrases_title", texts.culture_phrases_title);
        setText("culture_body_title", texts.culture_body_title);
        setText("culture_body_text", texts.culture_body_text);

        setList("culture_spain_list", texts.culture_spain_list);
        setList("culture_local_list", texts.culture_local_list);
        setList("culture_customs_list", texts.culture_customs_list);
        setList("culture_laws_list", texts.culture_laws_list);
        setList("culture_phrases_list", texts.culture_phrases_list);

        // COUNTDOWN DATE
        if (texts.trip_date) {
            window.TRIP_DATE = new Date(texts.trip_date);
            updateCountdown();
        }

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
// DIARY FUNCTIONALITY (UNCHANGED)
// ============================================
function handlePhotoUpload(event) { /* your existing code */ }
function removePhoto() { /* your existing code */ }
function saveDiaryEntry(event) { /* your existing code */ }
function displayDiaryEntries() { /* your existing code */ }
function deleteDiaryEntry(entryId) { /* your existing code */ }

// ============================================
// REGISTRATION FUNCTIONALITY (UNCHANGED)
// ============================================
function handleRegistrationSubmit(event) { /* your existing code */ }

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {

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

    // Registration status
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
