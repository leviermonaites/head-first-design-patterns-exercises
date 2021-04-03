import QuackBehavior from "./QuackBehavior.js";

export default class MuteDuck extends QuackBehavior {
  quack() {
    return "I can't quack";
  }
}
