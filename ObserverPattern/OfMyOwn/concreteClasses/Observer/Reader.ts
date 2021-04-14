import Observer from '../../interfaces/Observer.ts';

class Reader implements Observer {
  name: string;
  lastNews: any = "";

  constructor(name: string) {
    this.name = name;
  }

  update(state: any) {
    this.lastNews = state;
  };
}

export default Reader;