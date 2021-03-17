export default class Duck {
  constructor(name) {
    this.name = name;
    this.flyBehavior;
    this.quackBehavior;
  }
  performQuack() {
    return this.quackBehavior.quack();
  }
  swim() {}
  display() {}
  performFly() {
    return this.flyBehavior.fly();
  }
  setFlyBehavior(fb) {
    this.flyBehavior = fb;
  }
  setQuackBehavior(qb) {
    this.quackBehavior = qb;
  }
}
