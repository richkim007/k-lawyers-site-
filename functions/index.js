const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Resend } = require("resend");

admin.initializeApp();

// 이메일 알림을 받을 주소와 Resend API 키를 여기에 입력하세요.
// 중요: 이 키들은 실제 배포 시에는 환경 변수로 안전하게 관리해야 합니다.
const RESEND_API_KEY = "re_NNMpLcDb_2RmcXn4BiRT2RgUAQS9HVgin"; // 나중에 Resend에서 발급받은 키를 여기에 넣습니다.
const NOTIFICATION_EMAIL = "danie@naver.com"; // 민수님께서 알림을 받으실 이메일 주소를 여기에 넣습니다.

const resend = new Resend(RESEND_API_KEY);

exports.sendConsultationEmail = functions.firestore
  .document("consultations/{docId}")
  .onCreate(async (snap, context) => {
    const newConsultation = snap.data();

    const name = newConsultation.name;
    const email = newConsultation.email;
    const message = newConsultation.message;
    const timestamp = newConsultation.timestamp.toDate().toLocaleString("ko-KR");

    try {
      const { data, error } = await resend.emails.send({
        from: "K-Lawyers <noreply@k-lawyers.com>", // Resend에 등록된 도메인 이메일
        to: [NOTIFICATION_EMAIL],
        subject: `[K-Lawyers] 새로운 법률 상담 신청이 도착했습니다. (${name}님)`,
        html: `
          <h1>새로운 법률 상담 신청</h1>
          <p><strong>신청자:</strong> ${name}</p>
          <p><strong>이메일:</strong> ${email}</p>
          <p><strong>상담 요청 시간:</strong> ${timestamp}</p>
          <hr>
          <h2>상담 내용</h2>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p>이 메일은 K-Lawyers 웹사이트를 통해 발송된 자동 알림입니다.</p>
        `,
      });

      if (error) {
        console.error("Error sending email:", error);
        return;
      }

      console.log("Email sent successfully:", data);

    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  });
