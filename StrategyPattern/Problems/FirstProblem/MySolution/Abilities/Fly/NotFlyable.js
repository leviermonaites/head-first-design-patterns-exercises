export default class NotFlyable {
  constructor() {
    return () => console.log("I can't fly");
  }
}
