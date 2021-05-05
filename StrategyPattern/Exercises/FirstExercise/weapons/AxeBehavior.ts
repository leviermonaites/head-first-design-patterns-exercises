import WeaponBehavior from "./WeaponBehavior.ts";

class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    return "chopping with an axe";
  }
}

export default AxeBehavior;