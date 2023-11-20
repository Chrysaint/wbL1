const MathX = (() => {
  // Функция для вычисления N-го числа в ряду Фибоначчи
  function fibonacciNumber(n) {
    if (n <= 2) return 1;
    let a = 1,
      b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  // Функция для вычисления всех чисел в ряду Фибоначчи до числа N
  function fibonacciSeries(n) {
    const series = [1, 1];
    while (series[series.length - 1] + series[series.length - 2] <= n) {
      series.push(series[series.length - 1] + series[series.length - 2]);
    }
    return series;
  }

  // Функция для проверки, является ли число простым
  function isPrime(number) {
    for (let i = 2, limit = Math.sqrt(number); i <= limit; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }

  // Функция для вычисления N-го простого числа
  function nthPrimeNumber(n) {
    let count = 0;
    let number = 2;
    while (count < n) {
      if (isPrime(number)) {
        console.log(count);
        count++;
      }
      console.log(number);
      number++;
    }
    return number - 1;
  }

  // Функция для вычисления всех простых чисел до числа N
  function primeNumbersUpToN(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  // Возвращаем методы

  return {
    fibonacciNumber,
    fibonacciSeries,
    nthPrimeNumber,
    primeNumbersUpToN,
  };
})();

console.log(MathX.fibonacciNumber(8));
console.log(MathX.fibonacciSeries(100));
console.log(MathX.nthPrimeNumber(5));
console.log(MathX.primeNumbersUpToN(20));
