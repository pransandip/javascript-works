//  underscore(_) = is a protected property
//  get = binds an object property to a function
//        when that property is accessed
//  set = binds an object property to a function
//        when that property is assigned a value

class Car {
  constructor({ power, gas }) {
    this._gas = gas;
    this._power = power;
  }

  get power() {
    // 1000 is max hp 1000hp
    return `${this._power}hp (${(this._power / 1000) * 100}%)`;
  }

  get gas() {
    // 50 is max tank size 50L
    return `${this._gas}L (${(this._gas / 50) * 100}%)`;
  }

  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

const car = new Car({ power: 400, gas: 15 });
console.log(car);
console.log(car.power, "|", car.gas);

car.gas = 60;
console.log(car.gas);
