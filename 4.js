// Числительное + существительное ПАДЕЖИ

const number = 126;

const wordForms = ["дом", "дома", "домов"];

// Передаем в функцию число и формы слова в И. п. Р. п ед ч и Р. п мн ч.
function chooseRightForm(n, form) {
  const iForm = form[0];
  const pSingleForm = form[1];
  const pMultipleForm = form[2];

  // проверяем последнее и два последних числа для будущих проверок.
  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;

  let result = "";

  // пишем проверки по данным правилам
  // 1 - ип
  // 234 - рд ед
  // 5-10 || 11-20 - рд мн
  if (
    (lastDigit >= 5 && lastDigit <= 9) ||
    (lastTwoDigits >= 10 && lastTwoDigits <= 20) ||
    lastDigit === 0
  ) {
    return (result = n + " " + pMultipleForm);
  }

  if (lastDigit === 1) {
    return (result = n + " " + iForm);
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return (result = n + " " + pSingleForm);
  }
}

// Проверка всех числительных от 1 до 30;
for (let i = 1; i <= 30; i++) {
  console.log(chooseRightForm(i, wordForms));
}
