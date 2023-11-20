// Не доделана, нужно подумать

function loadImage(url) {
  return new Promise((resolve, reject) => {
    try {
      fetch(url)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((data) => {
          let buffer = Buffer.from(data);
          return resolve(getImageSizeFromBuffer(buffer));
        });
    } catch (e) {
      reject(e);
    }
  });
}

function getImageSizeFromBuffer(buffer) {
  // Первые два байта содержат маркер формата (например, 'BM' для BMP)
  console.log(buffer);
  const marker = buffer.toString("hex", 0, 2);

  let width, height;

  if (marker === "424d") {
    // Если маркер 'BM', то это BMP-изображение
    width = buffer.readUInt32LE(18); // Смещение ширины в BMP-заголовке
    height = buffer.readUInt32LE(22); // Смещение высоты в BMP-заголовке
  } else if (
    (marker === "ffd8" && buffer.toString("utf-8", 2, 4) === "fffe") ||
    marker === "89504e47"
  ) {
    // Если маркер 'ffd8fffe' или '89504e47', то это JPEG или PNG соответственно
    // Для JPEG смещение ширины и высоты может варьироваться, но часто они начинаются с 2-го байта после 'ffd8'
    width = buffer.readUInt16BE(2);
    height = buffer.readUInt16BE(0);
  } else {
    // Добавьте поддержку других форматов при необходимости
    throw new Error("Неподдерживаемый формат изображения");
  }

  return { width, height };
}

const url = `https://s0.rbk.ru/v6_top_pics/media/img/2/16/346928865645162.webp`;

loadImage(url)
  .then((imageData) => {
    console.log("Картинка успешно загрузилась", imageData);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке картинки:", error.message);
  });
