import Flyable from "../Abilities/Flyable.js";
import Quackable from "../Abilities/Quackable.js";
import Duck from "../AbstractClasses/Duck.js";

class Redhead extends Duck {
  constructor(name, color) {
    super(name, color);
    this.fly = new Flyable();
    this.quack = new Quackable("oh oh"); // Read it as an well-open O.
  }
}

export default Redhead;
