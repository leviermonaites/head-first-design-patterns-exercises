import DisplayerElement from '../../../../interfaces/DisplayerElement.ts';
import Observer from '../../../../interfaces/Observer.ts';
import Measures from '../../../../interfaces/Measures.ts';

class CurrentConditions implements Observer, DisplayerElement {
  measures: Measures;

  constructor() {
    this.measures = { temperature: 0, humidity: 0, date: "" };
  }
  
  update(newMeasures: Measures) {
    this.measures = {...newMeasures};
  };

  display() {
    return this.measures;
  }
}

export default CurrentConditions;