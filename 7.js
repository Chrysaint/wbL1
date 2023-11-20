// NEEDS TO BE FIXED.

const fnArray = [
  function first() {
    setTimeout(() => {
      console.log("первая");
    }, 3000);
  },
  function second() {
    setTimeout(() => {
      console.log("вторая");
    }, 3000);
  },
  function third() {
    setTimeout(() => {
      console.log("третья");
    }, 3000);
  },
  function fourth() {
    setTimeout(() => {
      console.log("четвертая");
    }, 3000);
  },
  function fifth() {
    setTimeout(() => {
      console.log("пятая");
    }, 3000);
  },
];

async function lauchFn(fnArray) {
  for (let i = 0; i < fnArray.length; i++) {
    const res = await fnArray[i]();
  }
}

lauchFn(fnArray);
