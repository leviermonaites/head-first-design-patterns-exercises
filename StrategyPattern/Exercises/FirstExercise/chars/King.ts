import Character from "./Character.ts";
import WeaponBehavior from '../weapons/WeaponBehavior.ts';
import KnifeBehavior from '../weapons/KnifeBehavior.ts';

class King implements Character {
  weapon: WeaponBehavior;

  constructor(weapon: WeaponBehavior = new KnifeBehavior()) {
    this.weapon = weapon;
  }

  fight() {
    console.log(`King is ${this.weapon.useWeapon()}`);
  }

  setWeapon(weapon: WeaponBehavior) {
    this.weapon = weapon;
  }
}

export default King;