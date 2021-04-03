import Character from "./Character.js";

export default class Knight extends Character {
  constructor(weapon) {
    super(weapon);
  }

  fight() {
    console.log(`Knight is ${this.weapon.useWeapon()}`);
  }
}
