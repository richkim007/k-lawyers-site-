
// K-Lawyers Main JavaScript v2.0
// Handles the contact form submission for the single-page architecture.

// For Firebase JS SDK v9 and later, your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DPXTVYqBKS-qwDVVAwzAYVRzCwDK_3E",
  authDomain: "k-lawyers.firebaseapp.com",
  projectId: "k-lawyers",
  storageBucket: "k-lawyers.appspot.com", // Corrected storage bucket
  messagingSenderId: "27799556732",
  appId: "1:27799556732:web:6973f087ba8b0714caaff9",
  measurementId: "G-D5YXZF2S9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// --- Handle Contact Form Submission on the Main Page ---
const contactForm = document.getElementById('contact-form');

// We directly target the form, no 'if' statement needed as it's always on index.html
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const privacyInput = document.getElementById('privacy');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Basic validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("성함, 이메일, 상담 내용은 필수 입력 항목입니다.");
        return;
    }
    if (!privacyInput.checked) {
        alert("개인정보 수집 및 이용에 동의해주셔야 신청이 가능합니다.");
        return;
    }

    // Disable button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = '전송 중...';

    // Save to Firebase Firestore
    db.collection('consultations').add({
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value || '미기재', // Store a default value if empty
        message: messageInput.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("상담 신청이 성공적으로 접수되었습니다. 담당 변호사 검토 후 신속하게 연락드리겠습니다.");
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = '무료 상담 신청하기';
    })
    .catch((error) => {
        console.error("Firestore Error: ", error);
        alert("죄송합니다. 서버 오류가 발생하여 신청이 완료되지 않았습니다. 잠시 후 다시 시도해주세요.");
        submitButton.disabled = false;
        submitButton.textContent = '무료 상담 신청하기';
    });
});
