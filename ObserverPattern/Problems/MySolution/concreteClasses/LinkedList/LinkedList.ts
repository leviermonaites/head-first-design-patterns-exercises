import Node from './Node.ts';

class LinkedList {
  elements: { head: Node | null, rear: Node | null } = { head: null, rear: null };
  private nodesAdded: number = 0;

  getNodesAdded() {
    return this.nodesAdded;
  }

  performAdd(data: any) {
    const head = this.elements.head || null;
    const node = new Node(data, null, head);
    if(head) head.updatePrev(node);
    else this.elements.rear = node; // If there's not a head in the linked list, it's the first time we are adding something.
    this.elements.head = node;
    this.nodesAdded++;
    return "Added successfully";
  };

  performRemove(data: any) {
    const node = this.performSearch(data);
    if(!node) return "Node not found!";
    const head = this.elements.head;
    if(this.elements.rear === node) this.elements.rear.updatePrev(this.elements.rear.prev || null);
    
    switch (node === head) {
      case true: {
        if(node.next) node.next.updatePrev(null);
        this.elements.head = node.next;
        break;
      }
      
      case false: {
        if(node.next) node.next.updatePrev(node.prev);
        if(node.prev) node.prev.updateNext(node.next);
        break;
      }
    }

    
    return "Removed successfully";
  };

  performSearch(data: any) {
    let node = this.elements.head;
    do {
      if(!node) break;
      if(node.data === data) return node;
      node = node.next;      
    } while(node);
    return false;
  };
}

export default LinkedList;