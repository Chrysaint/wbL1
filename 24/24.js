const URL =
  "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true";

// При загрузке страницы вызываем fetch данных;
window.onload = fetchData(URL);

// Достаем тело таблицы и саму таблицу для работы с ними
const tableBody = document.getElementById("table-body");
const table = document.getElementById("table");

// пишем функцию получения данных с сайта и возвращаем данные
async function fetchData(url) {
  const data = await fetch(url);
  const res = await data.json();
  return res;
}

// Пишем асинхронную функцию для присвоения перменной данные от асинхронной функции fetchData
async function main() {
  const fetchedData = await fetchData(URL);

  // Задаем начальную страницу и кол-во строк на странице
  let currentPage = 0;
  const rowsPerPage = 50;

  // пишем функцию отображения строк данных которая принимает массив данных, страницу и кол-во строк
  async function showDataList(dataArray, page, rowsPerPage) {
    // Чтобы при переходе с одной странице на другую данные не копились, чистим старые данные при вызове функции
    tableBody.innerHTML = "";

    // достаем шаблон строки для дальнейшей отрисовки контента
    const template = document.getElementById("table-row-template");

    // создаем переменные для того чтобы доставать нужные, в зависимости от страницы, данные
    const start = rowsPerPage * page;
    const end = start + rowsPerPage;
    const paginatedData = dataArray.slice(start, end);

    // Отрисовываем данные на страницу
    paginatedData.forEach((item) => {
      const name = template.content.getElementById("table-name");
      const surname = template.content.getElementById("table-surname");
      const phone = template.content.getElementById("table-phone");
      const address = template.content.getElementById("table-address");
      const city = template.content.getElementById("table-city");
      const state = template.content.getElementById("table-state");
      const zip = template.content.getElementById("table-zip");

      name.textContent = item.fname;
      surname.textContent = item.lname;
      phone.textContent = item.tel;
      address.textContent = item.address;
      city.textContent = item.city;
      state.textContent = item.state;
      zip.textContent = item.zip;

      const tr = template.content.cloneNode(true);
      tableBody.appendChild(tr);
    });
  }

  // Функция для отрисовки кнопок пагинации, которая принимает массив данных и кол-во строк на странице, для подсчета кол-ва страниц
  function displayPagination(dataArray, rowsPerPage) {
    // Достаем блок куда будем добавлять страницы, затем считаем кол-во страниц поделив кол-во данных во входном масиве на макс. кол-во строк и округлив вверх
    const paginationList = document.getElementById("pagination-list");
    const pagesCount = Math.ceil(dataArray.length / rowsPerPage);

    // вырисовываем пагинацию
    for (let i = 1; i <= pagesCount; i++) {
      const li = document.createElement("li");
      li.classList.add("page-btn");
      li.textContent = i;

      paginationList.appendChild(li);

      // добавляем каждой кнопке функцию отрисовки данных
      li.addEventListener("click", () => {
        currentPage = i;
        showDataList(fetchedData, currentPage, rowsPerPage);
      });
    }
  }

  // вызываем выше описанные функции для того чтобы отобразить данные при открытии страницы.
  showDataList(fetchedData, currentPage, rowsPerPage);
  displayPagination(fetchedData, rowsPerPage);
}

main();

// Сортировка столбцов
table.addEventListener("click", (e) => {
  // Повесив обработчик события на саму таблицу, проверяем что кликаем именно по заголовку столбца, иначе заканчиваем работу
  if (e.target.tagName !== "TH") return;
  let th = e.target;
  sortTable(th.cellIndex, th.dataset.type, th.dataset.sort, th);
});

// функция сортировки
function sortTable(index, dataType, sortType, th) {
  // делаем массив из коллекции строк таблицы для дальнейшей работы
  let rows = Array.from(tableBody.rows);
  // создаем переменную которая будет функцией с разным кодом в зависимости от типа данных в столбцах
  let compare;

  // В случае если у заголовка есть дата атрибут равный decrease, то фильтруем контент в порядке возрастания и задаем переменной compare
  // значение функции в зависимости от типа данных в столбце. Меняем этот атрибут decrease на increase.
  if (sortType === "decrease") {
    switch (dataType) {
      case "string":
        compare = function (rowA, rowB) {
          return rowA.cells[index].textContent.replace(/\d+\s/g, "") >
            rowB.cells[index].textContent.replace(/\d+\s/g, "")
            ? 1
            : -1;
        };
        break;
      case "number":
        compare = function (rowA, rowB) {
          return (
            rowA.cells[index].textContent.replace(/[()-]/g, "") -
            rowB.cells[index].textContent.replace(/[()-]/g, "")
          );
        };
        break;
    }
    th.dataset.sort = "increase";
  }

  // Тоже самое что и выше, только фильтруем в порядке убывания
  if (sortType === "increase") {
    switch (dataType) {
      case "string":
        compare = function (rowA, rowB) {
          return rowA.cells[index].textContent.replace(/\d+\s/g, "") <
            rowB.cells[index].textContent.replace(/\d+\s/g, "")
            ? 1
            : -1;
        };
        break;
      case "number":
        compare = function (rowA, rowB) {
          return (
            rowB.cells[index].textContent.replace(/[()-]/g, "") -
            rowA.cells[index].textContent.replace(/[()-]/g, "")
          );
        };
        break;
    }
    th.dataset.sort = "decrease";
  }

  // Сортируем массив функцией compare
  rows.sort(compare);

  // Добавляем все отсортированные строки в тело таблицы
  tableBody.append(...rows);
}
