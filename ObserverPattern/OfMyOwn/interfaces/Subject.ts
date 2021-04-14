import Observer from './Observer.ts';
import ObserversObject from './ObserversObject.ts';

interface Subject {
  observersObject: ObserversObject;

  // These methods call the methods from the DataStructure chosen.
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(state: any): void;
}

export default Subject;