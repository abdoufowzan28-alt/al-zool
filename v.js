// نختار الزر
const themeBtn = document.getElementById("themeToggle");

// نتحقق إذا المستخدم استخدم الوضع الداكن من قبل
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeBtn.textContent = "🌞 الوضع الفاتح";
}

// عند الضغط على الزر
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // نحفظ الوضع في التخزين المحلي
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "🌞 الوضع الفاتح";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙 الوضع الداكن";
  }
});


