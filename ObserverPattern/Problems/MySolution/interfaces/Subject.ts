import LinkedList from '../concreteClasses/LinkedList/LinkedList.ts';
import Observer from './Observer.ts';

interface Subject {
  observers: LinkedList;
  addObserver(observer: Observer): string;
  removeObserver(observer: Observer): string;
  notifyObservers(state: any): void;
}

export default Subject;