
// K-Lawyers Main JavaScript v2.1 | Mobile Navigation Added

// For Firebase JS SDK v9 and later, your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DPXTVYqBKS-qwDVVAwzAYVRzCwDK_3E",
  authDomain: "k-lawyers.firebaseapp.com",
  projectId: "k-lawyers",
  storageBucket: "k-lawyers.appspot.com",
  messagingSenderId: "27799556732",
  appId: "1:27799556732:web:6973f087ba8b0714caaff9",
  measurementId: "G-D5YXZF2S9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Logic ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.overlay');
    const navLinks = mobileNav.querySelectorAll('a');

    const openNav = () => {
        mobileNav.classList.add('open');
        overlay.classList.add('show');
        document.body.classList.add('nav-open');
    };

    const closeNav = () => {
        mobileNav.classList.remove('open');
        overlay.classList.remove('show');
        document.body.classList.remove('nav-open');
    };

    mobileMenuToggle.addEventListener('click', openNav);
    mobileMenuClose.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
            // Allow smooth scroll to handle navigation
        });
    });

    // --- Smooth Scrolling for ALL Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // --- Handle Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const messageInput = document.getElementById('message');
            const privacyInput = document.getElementById('privacy');
            const submitButton = contactForm.querySelector('button[type="submit"]');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert("성함, 이메일, 상담 내용은 필수 입력 항목입니다.");
                return;
            }
            if (!privacyInput.checked) {
                alert("개인정보 수집 및 이용에 동의해주셔야 신청이 가능합니다.");
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = '전송 중...';

            db.collection('consultations').add({
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value || '미기재',
                message: messageInput.value,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                alert("상담 신청이 성공적으로 접수되었습니다. 담당 변호사 검토 후 신속하게 연락드리겠습니다.");
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = '상담 신청하기';
            })
            .catch((error) => {
                console.error("Firestore Error: ", error);
                alert("죄송합니다. 서버 오류가 발생하여 신청이 완료되지 않았습니다. 잠시 후 다시 시도해주세요.");
                submitButton.disabled = false;
                submitButton.textContent = '상담 신청하기';
            });
        });
    }
});
