import DisplayerElement from '../../../../interfaces/DisplayerElement.ts';
import Measures from '../../../../interfaces/Measures.ts';
import Observer from '../../../../interfaces/Observer.ts';
import LinkedList from '../../../LinkedList/LinkedList.ts';

class WeatherStatistics implements Observer, DisplayerElement {
  measures: LinkedList = new LinkedList();

  update(state: Measures) {
    this.measures.performAdd(state);
  }

  display(order: string = "newest-to-oldest") {
    if(order.match(/newest[- ]to[- ]oldest/gi)) return this.displayNewestToOldest();
    if(order.match(/oldest[- ]to[- ]newest/gi)) return this.displayOldestToNewest();
  }

  private displayOldestToNewest() {
    let currentNode = this.measures.elements.rear;
    if (!currentNode) return { status: 400, msg: "Nothing to show!" };

    const temperatures_arr = new Array(this.measures.getNodesAdded());
    let i = 0;

    while(currentNode) {
      temperatures_arr[i++] = currentNode.data;
      currentNode = currentNode.prev;
    };

    return temperatures_arr;
  }
  
  private displayNewestToOldest() {
    let currentNode = this.measures.elements.head;
    if (!currentNode) return { status: 400, msg: "Nothing to show!" };
    
    const temperatures_arr = new Array(this.measures.getNodesAdded());
    let i = 0;
    
    while(currentNode) {
      temperatures_arr[i++] = currentNode.data;
      currentNode = currentNode.next;
    };
    
    return temperatures_arr;
  }
}

export default WeatherStatistics;