import { util } from '../util.js';

export const createWeatherCard = (forecast) => {
    const date = new Date(forecast.Date);
    const dayCode = date.getDay();
    const dayName = util.daysOfTheWeek[dayCode];

    const day = document.createElement('h2');
    day.classList.add('day');
    day.innerHTML = dayName;

    const temperature = forecast.Temperature;
    const minValue = temperature.Minimum.Value;
    const minValueCelsius = util.toCelsius(minValue);

    const minTemperature = document.createElement('div');
    minTemperature.classList.add('temperature');
    minTemperature.innerHTML = `<p class="temperature-number">${minValueCelsius}</p>
                            <p class="temperature-unit">ºC</p>
                            <p class="temperature-level">Min</p>`

    const maxValue = temperature.Maximum.Value;
    const maxValueCelsius = util.toCelsius(maxValue);

    const maxTemperature = document.createElement('div');
    maxTemperature.classList.add('temperature');
    maxTemperature.innerHTML = `<p class="temperature-number">${maxValueCelsius}</p>
                            <p class="temperature-unit">ºC</p>
                            <p class="temperature-level">Max</p>`

    const iconKey = forecast.Day.Icon;
    const icon = util.weatherIcons[iconKey];
    const phrase = forecast.Day.IconPhrase;
    const shortPhrase = util.shortenerPhrase(phrase);

    const currentWeather = document.createElement('div');
    currentWeather.classList.add('current-weather');
    currentWeather.innerHTML = `<div class="weather-icon">${icon}</div>
                                <div class="weather-condition">${shortPhrase}</div>`;

    const card = document.createElement('li');
    card.classList.add('weather-card');
    card.appendChild(day);
    card.appendChild(minTemperature);
    card.appendChild(maxTemperature);
    card.appendChild(currentWeather);

    return card;
}