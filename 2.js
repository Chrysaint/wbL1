const numbers = [6, 28, 496, 424, 526, 247, 8128, 33_550_336, 333333];

function isStrangeNumber(number) {
  // Создаем переменную для хранения суммы делителей
  let dividerSum = 0;

  // Проходим циклом по всем числам до принятого функцией числа и проверяем на целочисленную делимость,
  // в случае если число делится на i и остатка нет, то к dividerSum прибавляем этот делитель
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      dividerSum += i;
    }
  }
  console.log(dividerSum === number);
}

numbers.map(isStrangeNumber);
