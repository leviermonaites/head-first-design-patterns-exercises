import WeaponBehavior from "./WeaponBehavior.ts";

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon() {
    return "shooting an arrow with a bow";
  }
}

export default BowAndArrowBehavior;