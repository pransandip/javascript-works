// class is a "blueprint" for creating objects, defined properties and/or methods.

class Car {
  model = "SW001";
  get start() {
    return "engine starting";
  }
  get drive() {
    return "car is in drive mode";
  }
}

const bmw = new Car();
console.log(bmw);
console.log(bmw.start);

bmw.model = "xs2054";
console.log(bmw.model);
console.log(bmw);
