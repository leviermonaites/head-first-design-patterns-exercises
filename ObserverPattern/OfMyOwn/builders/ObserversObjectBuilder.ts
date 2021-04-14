import DataStructureBuilder from './DataStructureBuilder.ts';
import NotifierBuilder from './NotifierBuilder.ts';

class ObserversObjectBuilder {
  static build(ds: string) {
    return {
      observers: DataStructureBuilder.build(ds),
      notifyObservers: NotifierBuilder.build(ds),
    }
  }
}

export default ObserversObjectBuilder;