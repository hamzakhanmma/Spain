// ============================================
// STAFF EDITABLE TEXT FUNCTIONALITY
// ============================================
async function loadEditableTexts() {
    try {
        const response = await fetch('texts.json');
        const texts = await response.json();

        // Main page
        if (document.getElementById('main-title')) {
            document.getElementById('main-title').innerText = texts.main_title;
        }

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
    } catch (err) {
        console.error('Error loading editable texts:', err);
    }
}

// ============================================
// COUNTDOWN TIMER FUNCTIONALITY
// ============================================
function updateCountdown() {
    const tripDate = new Date('June 1, 2026 00:00:00');
    const now = new Date();
    const diff = tripDate - now;

    if (diff < 0) {
        const countdownEl = document.getElementById('countdown-timer');
        if (countdownEl) {
            countdownEl.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3>Trip is underway!</h3>
                    <p>Follow the diary section for updates.</p>
                </div>
            `;
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const countdownEl = document.getElementById('countdown-timer');
    if (countdownEl) {
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
}

// ============================================
// DIARY FUNCTIONALITY
// ============================================
function handlePhotoUpload(event) { /* your existing code */ }
function removePhoto() { /* your existing code */ }
function saveDiaryEntry(event) { /* your existing code */ }
function displayDiaryEntries() { /* your existing code */ }
function deleteDiaryEntry(entryId) { /* your existing code */ }

// ============================================
// REGISTRATION FUNCTIONALITY
// ============================================
function handleRegistrationSubmit(event) { /* your existing code */ }

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load staff editable text first
    loadEditableTexts();

    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Set diary date picker to today by default
    const entryDate = document.getElementById('entryDate');
    if (entryDate) {
        const today = new Date().toISOString().split('T')[0];
        entryDate.value = today;
        entryDate.max = today;
    }

    // Diary form event listener
    const diaryForm = document.getElementById('diaryForm');
    if (diaryForm) {
        diaryForm.addEventListener('submit', saveDiaryEntry);
    }

    // Display existing diary entries
    displayDiaryEntries();

    // Registration form event listener
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationSubmit);
    }

    // Check if user is already registered
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

// ============================================
// FIREBASE / DATABASE EXAMPLES (preserve, no removal)
// ============================================
db.collection("registrations").add({
  name,
  studentId,
  email,
  timestamp: new Date()
});

db.collection("registrations").get().then(snapshot => {
  snapshot.forEach(doc => {
    // show student + delete button
  });
});
