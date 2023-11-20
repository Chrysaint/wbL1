let parsedData;

const url =
  "http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

// Делаем асинхронную функцию принимающую URL
async function getData(url) {
  // Делаем get запрос по данной ссылке
  const response = await fetch(url);
  // Форматируем данные в json и присваиваем переменной data
  const data = await response.json();
  console.log(data);
}

getData(url);
