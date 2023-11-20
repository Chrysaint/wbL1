const objects = [
  { name: "John", age: 21 },
  { name: "Ann", age: 32 },
  { name: "Bob", age: 27 },
  { name: "Danya", age: 25 },
  { name: "Semen", age: 27 },
  { name: "Vasya", age: 27 },
  { name: "Vadim", age: 25 },
  { name: "Andruwa", age: 27 },
  { name: "Kent", age: 27 },
];

objects.sort((a, b) => {
  if (a.age === b.age) {
    return a.name > b.name ? 1 : -1;
  } else {
    return a.age > b.age ? 1 : -1;
  }
});
console.log(objects);
