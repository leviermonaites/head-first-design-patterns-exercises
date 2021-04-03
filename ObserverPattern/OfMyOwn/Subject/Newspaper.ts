import Subject from "./Subject.ts";
import LinkedList from "../LinkedList/LinkedList.ts";
import Observer from "../Observers/Observer.ts";
import Node from "../LinkedList/Node.ts";

export default class Newspaper implements Subject, LinkedList {
  observers: { head: Node | null };

  constructor() {
    this.observers = { head: null };
  }

  addNewObserver(observer: Observer) {
    const node = new Node(observer, null, this.observers.head);
    if (this.observers.head) {
      node.next = this.observers.head;
      this.observers.head.prev = node;
    }
    this.observers.head = node;
    return "Element added successfully";
  }

  removeObserver(observer: Observer) {
    let node = this.observers.head;
    do {
      if (!node) break;
      if (node.observer === observer) {
        if (node === this.observers.head) {
          this.observers.head = node.next || null;
          break;
        }

        // Typescript meaningless "possibility" errors
        // node.prev is no way null, but I have to be sure of it.
        if (node.prev) node.prev.next = node.next || null;

        // But, node.next actually may be null.
        if (node.next) node.next.prev = node.prev;
      } else node = node.next;
    } while (!node);
    return "Element not found";
  }

  notifyObservers(state: string) {
    let node = this.observers.head;
    while (node) {
      if (!node) break;
      node.observer.update(state);
      node = node.next;
    }
  }

  publishNews(title: string) {
    this.notifyObservers(title);
  }
}
