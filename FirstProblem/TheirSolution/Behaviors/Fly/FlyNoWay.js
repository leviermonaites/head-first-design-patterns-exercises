import FlyBehavior from "./FlyBehavior.js";

export default class FlyNoWay extends FlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}
