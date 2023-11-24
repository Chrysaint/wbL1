// Создаем асинхронные фукнции, в который создаем новый промис и указываем в какой момент мы резолвим его(идем на следующий шаг)

async function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1");
      resolve();
    }, 700);
  });
}
async function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve();
    }, 700);
  });
}
async function fn3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3");
      resolve();
    }, 700);
  });
}
async function fn4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4");
      resolve();
    }, 700);
  });
}

// Создаем массив вышеуказанных функций
const fns = [fn1, fn2, fn3, fn4];

// Создаем функцию принимающую массив ф-ий и возвращающая последовательно выполненые функции.
function fnsLaunch(array) {
  let first = array.shift();
  // Вызываем каждую функцию через reduce, где Prev это инициализирующая переменная, в данном случае указываем что изначально она равна первой функции массива
  // fn в данном случае итератор. В таком случае reduce пройдет по каждой функции последовательно и вызовет их.
  return array.reduce((prev, fn) => {
    return prev.then(fn);
  }, first());
}

fnsLaunch(fns);
