import FlyBehavior from "./FlyBehavior.js";

export default class FlyNoWay extends FlyBehavior {
  fly() {
    return "I can't fly";
  }
}
