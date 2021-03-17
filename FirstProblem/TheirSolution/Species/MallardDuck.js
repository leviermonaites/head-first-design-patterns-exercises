import Duck from "../Duck.js";
import Quack from "../Behaviors/Quack/Quack.js";
import FlyWithWings from "../Behaviors/Fly/FlyWithWings.js";

export default class MallardDuck extends Duck {
  constructor(name) {
    super(name);
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display() {
    console.log("I'm a real Mallard duck");
  }
}
