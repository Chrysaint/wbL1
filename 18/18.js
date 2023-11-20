if (localStorage && !localStorage.getItem("size")) {
  var i = 0;
  try {
    // Тестируем до 10 мб (макс google Chrome 5мб)
    for (i = 250; i <= 10000; i += 250) {
      localStorage.setItem("test", new Array(i * 1024 + 1).join("a"));
    }
  } catch (e) {
    localStorage.removeItem("test");
    localStorage.setItem("size", i - 250);
  }
}
