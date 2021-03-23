import Character from "./Character.js";

export default class Queen extends Character {
  constructor(weapon) {
    super(weapon);
  }

  fight() {
    console.log(`Queen is ${this.weapon.useWeapon()}`);
  }
}
