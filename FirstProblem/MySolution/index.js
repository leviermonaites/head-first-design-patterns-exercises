import buildDuck from "./SimpleFactory/DuckBuilder.js";

const mallard = buildDuck("hello", "black", "Mallard");
// mallard.fly();
console.log(mallard);
mallard.quack();
mallard.fly();
