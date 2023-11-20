function setCounter() {
  // создаем переменную внутри внешней функции, вложенная функция будет иметь доступ к ней
  let counter = 0;

  function counterUpdate() {
    counter++;
    console.log(counter);
  }

  // возвращаем результат функции замыкания
  return counterUpdate;
}
// Задавая таким образом вызов функции мы можем сделать своего рода
// состояние, в примере ниже выведется 1, 2, 3, 4, 5, 6, 7
const incrementCounter = setCounter();

incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
