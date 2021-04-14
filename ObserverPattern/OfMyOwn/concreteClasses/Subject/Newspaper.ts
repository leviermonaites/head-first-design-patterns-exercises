import ObserversObjectBuilder from '../../builders/ObserversObjectBuilder.ts';
import Observer from '../../interfaces/Observer.ts';
import ObserversObject from '../../interfaces/ObserversObject.ts';
import Subject from '../../interfaces/Subject.ts';

class Newspaper implements Subject {
  observersObject: ObserversObject;

  constructor(ds: string) {
    this.observersObject = ObserversObjectBuilder.build(ds);
  }

  addObserver(observer: Observer) {
    this.observersObject.observers.performAdd(observer);
  }

  removeObserver(observer: Observer) {
    return this.observersObject.observers.performRemove(observer);
  }

  notifyObservers(state: any) {
    this.observersObject.notifyObservers.performNotify(state, this.observersObject.observers);
  }

  publishNews(title: string) {
    this.notifyObservers(title);
  }
}

export default Newspaper;