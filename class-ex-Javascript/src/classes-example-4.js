class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
// const car3 = new Car("BMW");

console.log(car1);
console.log(car2);
console.log("number of cars made till now:", Car.numberOfCars);
