import Newspaper from './concreteClasses/Subject/Newspaper.ts';
import Reader from './concreteClasses/Observer/Reader.ts';

const dailyTimes = new Newspaper('linked-list');
const reader1 = new Reader("Levi");
const reader2 = new Reader("Lincoln");

dailyTimes.addObserver(reader1);
dailyTimes.addObserver(reader2);
dailyTimes.publishNews("Biden is the new president of USA!");
console.log(reader1);
console.log(reader2);