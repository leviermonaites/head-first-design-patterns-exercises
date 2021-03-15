import Mallard from "../Species/Mallard.js";
import Redhead from "../Species/Redhead.js";

class DuckBuilder {
  constructor(name, color, species) {
    return DuckBuilder.build(name, color, species);
  }

  static build(name, color, species) {
    switch (species) {
      case "Mallard": {
        return new Mallard(name, color);
      }

      case "RedHead": {
        return new Redhead(name, color);
      }

      default:
        return "Unknown species";
    }
  }
}

const buildDuck = (name, color, species) =>
  new DuckBuilder(name, color, species);

export default buildDuck;
