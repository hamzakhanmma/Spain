```javascript
// ============================================
// SAFE HELPERS
// ============================================
function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) {
        el.textContent = value;
    }
}

function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) {
        el.innerHTML = value;
    }
}

function setList(id, items) {
    const el = document.getElementById(id);

    if (el && Array.isArray(items)) {
        el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }
}

// ============================================
// STAFF EDITABLE TEXT FUNCTIONALITY
// ============================================
async function loadEditableTexts() {

    try {

        const response = await fetch('texts.json');
        const texts = await response.json();

        // ============================================
        // GLOBAL
        // ============================================
        setText('site_title', texts.site_title);
        setText('footer_text', texts.footer_text);
        setText('footer-text', texts.footer_text);

        // ============================================
        // HOME PAGE
        // ============================================
        setText('main-title', texts.main_title);
        setHTML('dynamic-content', texts.admin_content);

        // ============================================
        // CONTACT
        // ============================================
        setText('contact-name', texts.contact_name);
        setText('contact-phone', texts.contact_phone);
        setText('contact-role', texts.contact_role);

        // ============================================
        // FLIGHT PAGE
        // ============================================
        setText("flight_title", texts.flight_title);
        setText("flight_intro", texts.flight_intro);
        setText("flight_meeting_title", texts.flight_meeting_title);
        setHTML("flight_meeting_location", texts.flight_meeting_location);
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

        // ============================================
        // CULTURE PAGE
        // ============================================
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

        // ============================================
        // ACCOMMODATION PAGE
        // ============================================
        setText("accommodation_title", texts.accommodation_title);
        setText("accommodation_intro", texts.accommodation_intro);
        setText("accommodation_overview_title", texts.accommodation_overview_title);
        setText("accommodation_respect_title", texts.accommodation_respect_title);
        setText("accommodation_rules_title", texts.accommodation_rules_title);
        setText("accommodation_food_title", texts.accommodation_food_title);
        setText("accommodation_budget_title", texts.accommodation_budget_title);
        setText("accommodation_budget_text", texts.accommodation_budget_text);
        setText("accommodation_location_title", texts.accommodation_location_title);
        setText("accommodation_location_text", texts.accommodation_location_text);

        setList("accommodation_overview_list", texts.accommodation_overview_list);
        setList("accommodation_respect_list", texts.accommodation_respect_list);
        setList("accommodation_rules_list", texts.accommodation_rules_list);
        setList("accommodation_food_list", texts.accommodation_food_list);
        setList("accommodation_budget_list", texts.accommodation_budget_list);

        // ============================================
        // SAFETY PAGE
        // ============================================
        setText("safety_title", texts.safety_title);
        setText("safety_intro", texts.safety_intro);

        setText("emergency_title", texts.emergency_title);
        setText("health_title", texts.health_title);
        setText("sun_title", texts.sun_title);
        setText("personal_title", texts.personal_title);
        setText("curfew_title", texts.curfew_title);
        setText("mental_title", texts.mental_title);
        setText("mental_text", texts.mental_text);

        setList("emergency_list", texts.emergency_list);
        setList("health_list", texts.health_list);
        setList("sun_list", texts.sun_list);
        setList("personal_list", texts.personal_list);
        setList("curfew_list", texts.curfew_list);

        // ============================================
        // WORK PAGE
        // ============================================
        setText("work_title", texts.work_title);
        setText("work_intro", texts.work_intro);

        setText("placement_title", texts.placement_title);
        setText("expectations_title", texts.expectations_title);
        setText("communication_title", texts.communication_title);
        setText("communication_text", texts.communication_text);
        setText("food_title", texts.food_title);
        setText("professional_title", texts.professional_title);
        setText("professional_text", texts.professional_text);

        setList("placement_list", texts.placement_list);
        setList("expectations_list", texts.expectations_list);
        setList("communication_list", texts.communication_list);
        setList("food_list", texts.food_list);
        setList("professional_list", texts.professional_list);

        // ============================================
        // ITINERARY PAGE
        // ============================================
        setText("itinerary_title", texts.itinerary_title);
        setText("itinerary_subtitle", texts.itinerary_subtitle);
        setText("itinerary_overview_title", texts.itinerary_overview_title);
        setText("itinerary_structure_title", texts.itinerary_structure_title);

        setHTML("itinerary_duration", texts.itinerary_duration);
        setHTML("itinerary_dates", texts.itinerary_dates);
        setHTML("itinerary_location", texts.itinerary_location);
        setHTML("itinerary_weekends", texts.itinerary_weekends);

        setHTML("itinerary_note", texts.itinerary_note);

        setText("itinerary_schedule_title", texts.itinerary_schedule_title);
        setText("itinerary_weeks_title", texts.itinerary_weeks_title);

        setText("week1_title", texts.week1_title);
        setText("week2_title", texts.week2_title);
        setText("week3_title", texts.week3_title);
        setText("week4_title", texts.week4_title);

        setText("itinerary_notes_title", texts.itinerary_notes_title);

        setText("note1_title", texts.note1_title);
        setText("note1_text", texts.note1_text);

        setText("note2_title", texts.note2_title);
        setText("note2_text", texts.note2_text);

        setText("itinerary_download_title", texts.itinerary_download_title);
        setText("itinerary_download_text", texts.itinerary_download_text);

        // ============================================
        // REGISTRATION PAGE
        // ============================================
        setText("reg_name_label", texts.reg_name_label);
        setText("reg_id_label", texts.reg_id_label);
        setText("reg_email_label", texts.reg_email_label);
        setText("reg_phone_label", texts.reg_phone_label);
        setText("reg_rules_text", texts.reg_rules_text);
        setText("reg_strike_text", texts.reg_strike_text);
        setText("reg_health_text", texts.reg_health_text);
        setText("reg_emergency_label", texts.reg_emergency_label);
        setText("reg_dietary_label", texts.reg_dietary_label);
        setText("reg_submit_btn", texts.reg_submit_btn);

        // ============================================
        // FAQ PAGE
        // ============================================
        setHTML("faqs_content", texts.faqs_content);

        // ============================================
        // COUNTDOWN TIMER
        // ============================================
        if (texts.trip_date) {

            const parsedDate = new Date(texts.trip_date);

            // FIX FOR INVALID DATE
            if (!isNaN(parsedDate.getTime())) {

                window.TRIP_DATE = parsedDate;

                updateCountdown();

                // Prevent multiple intervals
                if (window.countdownInterval) {
                    clearInterval(window.countdownInterval);
                }

                window.countdownInterval = setInterval(updateCountdown, 1000);
            }
        }

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
            <div style="text-align:center; padding:20px;">
                <h3>Trip is underway!</h3>
                <p>Follow the diary section for updates.</p>
            </div>
        `;

        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

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
// DIARY FUNCTIONALITY
// ============================================
function handlePhotoUpload(event) { }
function removePhoto() { }
function saveDiaryEntry(event) { }
function displayDiaryEntries() { }
function deleteDiaryEntry(entryId) { }

// ============================================
// REGISTRATION FUNCTIONALITY
// ============================================
function handleRegistrationSubmit(event) { }

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function () {

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

    if (diaryForm) {
        diaryForm.addEventListener('submit', saveDiaryEntry);
    }

    // Display diary entries
    if (typeof displayDiaryEntries === 'function') {
        displayDiaryEntries();
    }

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
```
