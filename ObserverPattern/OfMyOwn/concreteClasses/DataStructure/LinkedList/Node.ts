class Node {
  prev: Node | null;
  next: Node | null;
  data: any;

  constructor(data: any, prev: Node | null, next: Node | null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }

  updatePrev(node: Node | null) {
    this.prev = node;
  }

  updateNext(node: Node | null) {
    this.next = node;
  }
}

export default Node;