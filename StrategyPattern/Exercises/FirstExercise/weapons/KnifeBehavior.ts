import WeaponBehavior from "./WeaponBehavior.ts";

class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    return "cutting with a knife";
  }
}

export default KnifeBehavior;
