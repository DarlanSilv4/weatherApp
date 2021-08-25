import { util } from "../util.js"

export const createWeatherCard = (weather) => {
  const title = document.createElement('p');
  title.classList.add('info-weather');
  title.innerHTML = "Current Weather";

  const epochTime = weather.EpochTime;
  const date = convertEpochTimeToHumanDate(epochTime);

  const hours = document.createElement('p');
  hours.classList.add('info-hour');
  hours.innerHTML = `${date.getHours()} : ${date.getMinutes()}`;

  const iconKey = weather.WeatherIcon;
  const iconUrl = util.weatherIcons[iconKey];

  const icon = document.createElement('img');
  icon.classList.add('info-icon');
  icon.src = iconUrl;

  const phrase = weather.WeatherText;
  const shortedPhrase = util.shortenerPhrase(phrase);

  const condition = document.createElement('p');
  condition.classList.add('info-condition');
  condition.innerHTML = shortedPhrase;

  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');
  weatherInfo.appendChild(title);
  weatherInfo.appendChild(hours);
  weatherInfo.appendChild(icon);
  weatherInfo.appendChild(condition);

  const temperatureValue = weather.Temperature.Metric.Value.toFixed(0); //return only two digits without floating point  

  const temperature = document.createElement('p');
  temperature.classList.add('temperature-number');
  temperature.innerHTML = temperatureValue;

  const temperatureUnit = document.createElement('p');
  temperatureUnit.classList.add('temperature-unit');
  temperatureUnit.innerHTML = 'ºC'

  const weatherTemperature = document.createElement('div');
  weatherTemperature.classList.add('weather-temperature');
  weatherTemperature.appendChild(temperature);
  weatherTemperature.appendChild(temperatureUnit);

  const weatherCard = document.createElement('section');
  weatherCard.classList.add('weather-card');
  weatherCard.setAttribute('id', "weather-card");
  weatherCard.appendChild(weatherInfo);
  weatherCard.appendChild(weatherTemperature);

  return weatherCard;
}

const convertEpochTimeToHumanDate = (epochTime) => {
  const humanDate = new Date(0); //January 1, 1970
  humanDate.setUTCSeconds(epochTime);
  return humanDate;
}