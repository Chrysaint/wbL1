const word = "аргентина манит негра";

console.log("А" == "а");

function palindrome(string) {
  // Переводим все буквы в нижний регистр чтобы при сравнении не получить false из-за разного регистра, так же удаляем через метод replace все пробелы.
  string = string.toLowerCase().replace(/\s/g, "");
  // Методом split разбиваем string в массив чаров, переворачиваем массив методом reverse и методом join собираем обратно в string
  const reversedString = string.split("").reverse().join("");
  // Проверяем равны ли значения перевернутой строки со строкой.
  console.log(string === reversedString);
}

console.log(word.length - word.length + 3);

palindrome(word);
