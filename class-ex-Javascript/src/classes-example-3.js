// static = belongs to class, not the object
//        properties: useful for caches, fixed-configuration
//        methods: useful for utility functions

class Chair {
  static backSupport = true;
  static armRest = true;
  constructor({
    color,
    seatHeight,
    headSupport,
    padding,
    seatSize,
    isHeightAdjustable,
    isMovable,
  }) {
    // Defaults which can be changed by the subclass class.
    this.color = color || "black";
    this.seatHeight = seatHeight;
    this.headSupport = headSupport || false;
    this.padding = padding || "3 inch";
    this.seatSize = seatSize || "16 inch";
    this.isHeightAdjustable = isHeightAdjustable || false;
    this.isMovable = isMovable || false;
    this.type = "Chair";
    console.log("armRest:", Chair.backSupport); // Usage of static method inside constructor
  }

  static logObjectProps() {
    return this;
  }

  //Static within static usage
  static *printDefaultProps() {
    yield `chair back support: ${this.backSupport}`;
    yield `arm rests support: ${this.armRest}`;
  }
}

const chair1 = new Chair({});
console.log(chair1); // Instances of the class do not have the static attributes present
console.dir(Chair.logObjectProps()); // static method can not be called with class Instances

const chairProps = Chair.printDefaultProps(); // generator method
// console.log([...chairProps]); // chairProps is iterable
console.log(chairProps.next()); // it is also work as iterator means we can call with next function
