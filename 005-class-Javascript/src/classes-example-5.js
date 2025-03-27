// inheritance = a child class can inherit all the
//               methods and properties from another class.

class Animal {
  alive = true;

  eat() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    return `${this.name} is running`;
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    return `${this.name} is swimming`;
  }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log({ rabbit, fish });
console.log(rabbit.alive, rabbit.eat(), rabbit.sleep(), rabbit.run());
console.log(fish.alive, fish.eat(), fish.sleep(), fish.swim());
