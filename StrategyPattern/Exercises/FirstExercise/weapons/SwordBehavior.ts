import WeaponBehavior from "./WeaponBehavior.ts";

class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    return "swinging with a sword";
  }
}

export default SwordBehavior;