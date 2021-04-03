import Character from "./Character.js";

export default class Troll extends Character {
  constructor(weapon) {
    super(weapon);
  }

  fight() {
    console.log(`Troll is ${this.weapon.useWeapon()}`);
  }
}
