// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;

    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);

    if (this.health !== 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;

    if (this.health !== 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // console.log(Math.floor(Math.random()*this.saxonArmy.length))

    let result = randomSaxon.receiveDamage(randomViking.strength);
    this.saxonArmy = this.saxonArmy.filter(
        (saxons) => saxons.health > 0
    );
    return result
  }
}
