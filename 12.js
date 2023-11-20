let book = {
  title: "Мастер и маргарита",
  author: "Булгаков",
  year: 1921,

  // Создаем все нужные методы, this в данном случае отсылается к book(объекту внутри которого вызываем this).

  getTitle: function () {
    console.log(this.title);
  },
  getYear: function () {
    console.log(this.year);
  },
  getAuthor: function () {
    console.log(this.author);
  },
  setTitle: function (title) {
    this.title = title;
  },
  setYear: function (year) {
    this.year = year;
  },
  setAuthor: function (author) {
    this.author = author;
  },
};

// Пример
book.getTitle();
book.getAuthor();
book.getYear();

book.setTitle("Капитанская дочка");
book.setAuthor("Пушкин");
book.setYear("1836");

book.getTitle();
book.getAuthor();
book.getYear();
