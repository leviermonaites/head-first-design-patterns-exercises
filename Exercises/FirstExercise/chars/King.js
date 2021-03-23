import Character from "./Character.js";

export default class King extends Character {
  constructor(weapon) {
    super(weapon);
  }

  fight() {
    console.log(`King is ${this.weapon.useWeapon()}`);
  }
}
