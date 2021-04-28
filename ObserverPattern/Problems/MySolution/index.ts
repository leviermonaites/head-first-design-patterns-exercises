import { config } from "https://deno.land/x/dotenv/mod.ts";
import CurrentConditions from './concreteClasses/WeatherData/Applications/CurrentConditions/index.ts';
import WeatherStatistics from './concreteClasses/WeatherData/Applications/WeatherStatistics/index.ts';
import WeatherData from './concreteClasses/WeatherData/WeatherData.ts';

config({export: true});

const weatherDataObject = new WeatherData();
const currentConditionsApplication = new CurrentConditions();
const weatherStatisticsApplication = new WeatherStatistics();

// Just to have some information to display.
weatherStatisticsApplication.update({temperature: 21, humidity: 56, date: "2021/04/23 at 15:00"});

weatherDataObject.addObserver(currentConditionsApplication);
weatherDataObject.addObserver(weatherStatisticsApplication);

await weatherDataObject.getNewMeasures();

// currentConditionsApplication.display();
console.log(weatherStatisticsApplication.display("oldest-to-newest"));
