import FlyRocketPowered from "./Behaviors/Fly/FlyRocketPowered.js";
import ModelDuck from "./ModelDuck.js";
import MallardDuck from "./Species/MallardDuck.js";

const mallard = new MallardDuck("Colleen");

console.log(mallard.performQuack());
console.log(mallard.performFly());

const model = new ModelDuck("Moron");

// Here we create a model duck that can't fly
model.performFly();
// But then, as the game evolves and the char does as well, it can gain the ability too.
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
