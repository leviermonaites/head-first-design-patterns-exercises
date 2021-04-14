import DataStructure from './DataStructure.ts';
import Notifier from './Notifier.ts';

interface ObserversObject {
  observers: DataStructure;
  notifyObservers: Notifier;
}

export default ObserversObject;