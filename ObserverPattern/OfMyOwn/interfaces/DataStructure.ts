interface DataStructure {
  elements: object | Array<any>;
  performAdd(el: any): void;
  performRemove(el: any): void;
  performSearch(el: any): any;
}

export default DataStructure;