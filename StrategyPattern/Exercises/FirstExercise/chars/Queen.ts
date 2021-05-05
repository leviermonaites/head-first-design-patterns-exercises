import Character from "./Character.ts";
import WeaponBehavior from "../weapons/WeaponBehavior.ts";
import KnifeBehavior from "../weapons/KnifeBehavior.ts";

class Queen implements Character {
  weapon: WeaponBehavior;

  constructor(weapon: WeaponBehavior = new KnifeBehavior()) {
    this.weapon = weapon;
  }

  fight() {
    console.log(`Queen is ${this.weapon.useWeapon()}`);
  }

  setWeapon(weapon: WeaponBehavior) {
    this.weapon = weapon;
  }
}

export default Queen;
