import Duck from "../AbstractClasses/Duck.js";
import Flyable from "../Abilities/Fly/Flyable.js";
import Quackable from "../Abilities/Quack/Quackable.js";

class Mallard extends Duck {
  constructor(name, color) {
    super(name, color);
    this.fly = new Flyable(21000);
    this.quack = new Quackable("ieeieeiee"); // I don't know how to imitate a Mallard.
  }
}

export default Mallard;
