import Reader from "./Observers/Reader.ts";
import Newspaper from "./Subject/Newspaper.ts";

const dailyTimes = new Newspaper();
// My family :)
const r1 = new Reader("Levi");
const r2 = new Reader("Lincoln");
const r3 = new Reader("Lucas");
const r4 = new Reader("Janaina");
const r5 = new Reader("Carlos");

dailyTimes.addNewObserver(r1);
dailyTimes.addNewObserver(r2);
dailyTimes.addNewObserver(r3);
dailyTimes.addNewObserver(r4);
dailyTimes.addNewObserver(r5);
dailyTimes.publishNews("Biden is nominated as president of USA");
console.log(dailyTimes.observers);
console.log(r1);