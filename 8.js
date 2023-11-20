function fn1() {
  return 2 + 5;
}
function fn2() {
  return 3 + 5;
}
function fn3() {
  return 4 + 5;
}
function fn4() {
  return 5 + 5;
}

const fnArray = [fn1, fn2, fn3, fn4];

function fn(fnArray) {
  let result = [];
  return function () {
    // Проходим циклом по каждой функции и пушим результат в массив;
    for (fn of fnArray) {
      result.push(fn());
    }
    return result;
  };
}

const combinedFunctions = fn(fnArray);
console.log(combinedFunctions());
