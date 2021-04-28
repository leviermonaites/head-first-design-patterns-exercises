import { Application, Router } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import WeatherData from "./concreteClasses/WeatherData/WeatherData.ts";
import CurrentConditions from "./concreteClasses/WeatherData/Applications/CurrentConditions/index.ts";
import WeatherStatistics from './concreteClasses/WeatherData/Applications/WeatherStatistics/index.ts';

const router = new Router();

const app = new Application();

const weatherDataObject = new WeatherData();
const currentConditions = new CurrentConditions();
const weatherStatistics = new WeatherStatistics();
weatherDataObject.addObserver(currentConditions);

// Just to have some information to display.
weatherStatistics.update({temperature: 21, humidity: 56, date: "2021/04/23 at 15:00"});


router.get('/current-conditions', async (ctx) => {
  ctx.response.body = await currentConditions.display();
});

router.get('/weather-statistics', async(ctx) => {
  ctx.response.body = await weatherStatistics.display();
})

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());


// await weatherDataObject.getNewMeasures();
setInterval(async () => {
  await weatherDataObject.getNewMeasures();
  console.log(" HEllo");
}, 1000 * 60 * 90);

await app.listen({ port: 8080 });
