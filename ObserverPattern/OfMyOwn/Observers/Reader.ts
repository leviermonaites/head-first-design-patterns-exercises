import Observer from "./Observer.ts";

export default class Reader implements Observer {
  state: string;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.state = "";
  };

  update(newState: string) {
    this.state = newState;
  }
}

const reader1 = new Reader("Sd");
