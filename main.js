
// For Firebase JS SDK v9 and later, your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DPXTVYqBKS-qwDVVAwzAYVRzCwDK_3E",
  authDomain: "k-lawyers.firebaseapp.com",
  projectId: "k-lawyers",
  storageBucket: "k-lawyers.firebasestorage.app",
  messagingSenderId: "27799556732",
  appId: "1:27799556732:web:6973f087ba8b0714caaff9",
  measurementId: "G-D5YXZF2S9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    db.collection('consultations').add({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("오류가 발생했습니다. 다시 시도해주세요.");
    });
});
