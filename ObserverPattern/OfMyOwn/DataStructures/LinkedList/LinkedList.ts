import DataStructure from '../DataStructure.ts';
import Node from "./Node.ts";
import Observer from '../../../Observers/Observer.ts';

export default class LinkedList implements DataStructure {
  head: Node | null = null;

  addNewObserver(observer: Observer) {
    const node = new Node(observer, null, this.head);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
    return "Element added successfully";
  }

  removeObserver(observer: Observer) {
    let node = this.head;
    do {
      if (!node) break;
      if (node.observer === observer) {
        if (node === this.head) {
          this.head = node.next || null;
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
    let node = this.head;
    while (node) {
      if (!node) break;
      node.observer.update(state);
      node = node.next;
    }
  }
};
