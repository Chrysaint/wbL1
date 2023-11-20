// Импортируем библиотеку
import moment from "moment";

// Создаем функцию и экспортируем ее
export function getDate() {
  const date = moment().format("DD.MM.YYYY");
  console.log("Сегодня - " + date);
}
