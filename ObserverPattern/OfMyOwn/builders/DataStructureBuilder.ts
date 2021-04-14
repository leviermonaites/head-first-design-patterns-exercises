import LinkedList from '../concreteClasses/DataStructure/LinkedList/LinkedList.ts';

class DataStructureBuilder {
  static build(ds: string) {
    if(ds.match(/^linked[- ]?lists?$/i)) {
      return new LinkedList();
    }

    // Default case:
    return new LinkedList();
  }
}

export default DataStructureBuilder;