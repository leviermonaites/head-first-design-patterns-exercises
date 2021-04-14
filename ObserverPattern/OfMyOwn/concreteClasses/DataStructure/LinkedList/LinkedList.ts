import DataStructure from '../../../interfaces/DataStructure.ts';
import Node from './Node.ts';

class LinkedList implements DataStructure {
  elements: { head: Node | null } = { head: null };
  
  performAdd(data: any) {
    const head = this.elements.head || null;
    const node = new Node(data, null, head);
    if(head) head.updatePrev(node);
    this.elements.head = node;
  };

  performRemove(data: any) {
    const node = this.performSearch(data);
    if(!node) return "Node not found!";
    const head = this.elements.head;
    
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