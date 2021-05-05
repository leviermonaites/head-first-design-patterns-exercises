import Character from "./Character.ts";
import WeaponBehavior from "../weapons/WeaponBehavior.ts";
import KnifeBehavior from "../weapons/KnifeBehavior.ts";

class Troll implements Character {
  weapon: WeaponBehavior;

  constructor(weapon: WeaponBehavior = new KnifeBehavior()) {
    this.weapon = weapon;
  }

  fight() {
    console.log(`Troll is ${this.weapon.useWeapon()}`);
  }

  setWeapon(weapon: WeaponBehavior) {
    this.weapon = weapon;
  }
}

export default Troll;
