import Observer from "../Observers/Observer.ts";

interface Subject {
  addNewObserver(observer: Observer): void 
  removeObserver(observer: Observer): void
  notifyObservers(state: string): void;
}

export default Subject;