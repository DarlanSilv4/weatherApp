import { getCity } from './controller/getCity-controller.js';
import { getWeather } from './controller/getWeather-controller.js';
import { util } from './util.js';

const searchBar = document.getElementById('search-city');
searchBar.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        const cityName = searchBar.value;
        searchBar.value = '';
        getCity(cityName)
            .then(city => {
                setHeader(city);
                return city.Key;
            })
            .then(cityKey => {
                getWeather(cityKey)
                    .then(weather => {
                        setWeather(weather);
                    });
            });
    }
});

const setHeader = (city) => {
    const title = document.createElement('h1');
    title.classList.add('city-name');
    title.innerHTML = city.LocalizedName;

    const country = document.createElement('p');
    country.classList.add('country-name');
    country.innerHTML = city.Country.ID;
    country.title = `${city.AdministrativeArea.LocalizedName} - ${city.Country.LocalizedName}`;

    const cityInfo = document.getElementById('city-info');
    removeAllChildNodes(cityInfo);
    cityInfo.appendChild(title);
    cityInfo.appendChild(country);
}

const setWeather = (weather) => {
    const weatherList = document.getElementById('weather-list');
    removeAllChildNodes(weatherList);

    weather.forEach(forecast => {
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

        const currentWeather = document.createElement('div');
        currentWeather.classList.add('current-weather');
        currentWeather.innerHTML = `<div class="weather-icon">${icon}</div>
                                    <div class="weather-condition">${phrase}</div>`;

        const card = document.createElement('li');
        card.classList.add('weather-card');
        card.appendChild(day);
        card.appendChild(minTemperature);
        card.appendChild(maxTemperature);
        card.appendChild(currentWeather);

        weatherList.appendChild(card);
    }
    );
}

const removeAllChildNodes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}