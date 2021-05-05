import WeaponBehavior from '../weapons/WeaponBehavior.ts';

interface Character {
  weapon: WeaponBehavior

  fight(): void; // Show character using weapon
  setWeapon(weapon: WeaponBehavior): void;
}

export default Character
