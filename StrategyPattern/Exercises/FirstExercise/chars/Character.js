export default class Character {
  constructor(weapon) {
    this.weapon = weapon;
  }

  fight() {
    console.log(`Character is ${this.weapon.useWeapon()}`);
  }

  setWeapon(w) {
    this.weapon = w;
  }
}
