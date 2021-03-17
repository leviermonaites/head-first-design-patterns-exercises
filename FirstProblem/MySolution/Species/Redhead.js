import Flyable from "../Abilities/Fly/Flyable.js";
import Quackable from "../Abilities/Quack/Quackable.js";
import Duck from "../AbstractClasses/Duck.js";

class Redhead extends Duck {
  constructor(name, color) {
    super(name, color);
    this.fly = new Flyable();
    this.quack = new Quackable("oh oh"); // Read it as an well-open O.
  }
}

export default Redhead;
