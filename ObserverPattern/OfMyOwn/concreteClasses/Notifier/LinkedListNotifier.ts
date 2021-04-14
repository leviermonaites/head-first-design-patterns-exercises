import Notifier from '../../interfaces/Notifier.ts';
import LinkedList from '../DataStructure/LinkedList/LinkedList.ts';

class LinkedListNotifier implements Notifier {
  performNotify(state: any, observers: LinkedList) {
    let node = observers.elements.head;
    while(node) {
      node.data.update(state);
      node = node.next;
    }
  }
}

export default LinkedListNotifier;