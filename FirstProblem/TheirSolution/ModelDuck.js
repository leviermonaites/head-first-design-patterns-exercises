import Duck from "./Duck.js";
import FlyNoWay from "./Behaviors/Fly/FlyNoWay.js";
import Quack from "./Behaviors/Quack/Quack.js";

export default class ModelDuck extends Duck {
  constructor(name) {
    super(name);
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("I'm a model duck");
  }
}
