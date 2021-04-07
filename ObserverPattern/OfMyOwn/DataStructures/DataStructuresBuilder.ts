import LinkedList from './LinkedList/LinkedList.ts';

export default class DataStructuresBuilder {  
  static build(ds: string) {
    if (ds.match(/linked[- ]?lists?/gi)) {
      return new LinkedList();
    };

    // Default case.
    return new LinkedList();
    // Others coming soon...
  };
}