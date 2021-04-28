import "https://deno.land/x/dotenv/load.ts";
import Observer from "../../interfaces/Observer.ts";
import Subject from "../../interfaces/Subject.ts";
import LinkedList from "../LinkedList/LinkedList.ts";
import Measures from "../../interfaces/Measures.ts";

class WeatherData implements Subject {
  observers: LinkedList = new LinkedList();
  measures: Measures;

  constructor() {
    this.measures = { temperature: 0, humidity: 0, date: "" };
  }

  addObserver(observer: Observer) {
    return this.observers.performAdd(observer);
  }

  removeObserver(observer: Observer) {
    return this.observers.performRemove(observer);
  }

  notifyObservers(state: Measures) {
    let node = this.observers.elements.head;
    if (!node) return;
    do {
      node.data.update(state);
      node = node.next;
    } while (node);
  }

  async getNewMeasures() {
    const location = await this.getLocation();
    const lat = location.lat;
    const long = location.lng;

    const getWeatherData = await this.callWeatherApi(`fields=temperature,humidity&location=${lat},${long}&timesteps=current`, "GET");
    if(!getWeatherData) return;
    const weatherDataObj = await getWeatherData.timelines[0];
    let year = weatherDataObj.endTime.match(/^\d{4}(?=-)/g);
    let month = weatherDataObj.endTime.match(/(?<=-)\d{1,2}(?=-)/g);
    let day = weatherDataObj.endTime.match(/(?<=-)\d{1,2}(?=T)/gi);
    let time = weatherDataObj.endTime.match(/(?<=T)\d{1,2}:\d{1,2}/gi);

    let date = `${year}/${month}/${day} at ${time}`;

    const newMeasures = { measures: { ...weatherDataObj.intervals[0].values, date }, status: 200 };

    if(newMeasures.measures.temperature != this.measures.temperature || newMeasures.measures.humidity != this.measures.humidity) {
      this.measures = {...newMeasures.measures};
      this.measuresChanged();
    }
  }

  private async callWeatherApi(query: string, method: string) {
    const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
    const apiObj = await fetch(`${getTimelineURL}?${query}&apikey=${Deno.env.get("WEATHER_API_KEY")}`, { method }).then(async (res) => await res.json());
    if(apiObj.type && apiObj.type == 429) return false;
    return apiObj.data;
  }

  private async getLocation() {
    const apiObj = await fetch(`https://geo.ipify.org/api/v1?apiKey=${Deno.env.get("GEOLOCATION_API_KEY")}`).then(async (res) => await res.json());
    return apiObj.location;
  }

  measuresChanged() {
    this.notifyObservers(this.measures);
  }
}

export default WeatherData;
