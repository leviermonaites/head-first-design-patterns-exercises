import WeaponBehavior from "./WeaponBehavior.js";

export default class BowAndArrowBehavior extends WeaponBehavior {
  useWeapon() {
    return "shooting an arrow with a bow";
  }
}
