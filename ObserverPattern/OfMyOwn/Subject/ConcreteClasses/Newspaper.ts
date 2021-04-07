import Subject from '../Subject.ts';
import DataStructure from '../../DataStructures/DataStructure.ts';
import DataStructuresBuilder from '../../DataStructures/DataStructuresBuilder.ts';

export default class Newspaper implements Subject {
  observers: DataStructure;

  constructor(ds: string) {
    this.observers = DataStructuresBuilder.build(ds);
  }

  publishNews(title: string) {
    this.observers.notifyObservers(title);
  }
}

console.log(new Newspaper("linked-list"));