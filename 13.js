// Создаем абстрактный класс формы.
class Shape {
  calcSquare() {}
  calcPerimetr() {}
}

// Создаем классы треугольника, круга и прямоугольника и наследуем методы из класса Shape. Уточняем уникальные входные данные для каждого из методов.
class Triangle extends Shape {
  calcSquare(a, h) {
    return a * h * 0.5;
  }
  calcPerimetr(a, b, c) {
    return a + b + c;
  }
}
class Circle extends Shape {
  calcSquare(r) {
    return 3.14 * r * r;
  }
  calcPerimetr(r) {
    return 2 * 3.14 * r;
  }
}
class Rectangle extends Shape {
  calcSquare(a, b) {
    return a * b;
  }
  calcPerimetr(a, b) {
    return a * 2 + b * 2;
  }
}

let circle = new Circle();
let triangle = new Triangle();
let rectangle = new Rectangle();

console.log(circle.calcPerimetr(2));
console.log(circle.calcSquare(4));

console.log(triangle.calcSquare(4, 8));
console.log(triangle.calcPerimetr(4, 5, 7));

console.log(rectangle.calcPerimetr(4, 4));
console.log(rectangle.calcSquare(5, 5));
