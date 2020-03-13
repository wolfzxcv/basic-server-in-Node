class Hero {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  introduceHero() {
    console.log(`${this.name} uses a ${this.weapon} as weapon.`);
  }
}

module.exports = Hero;
