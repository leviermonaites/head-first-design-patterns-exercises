import Observer from "../Observers/Observer.ts";

export default class Node {
  observer: Observer;
  prev: Node | null;
  next: Node | null;

  constructor(observer: Observer, prev: Node | null, next: Node | null) {
    this.observer = observer;
    this.prev = prev;
    this.next = next;
  }

  changeNext(node: Node | null = null) {
    this.next = node;
  };
  changePrev(node: Node | null = null) {
    this.prev = node;
  };
}