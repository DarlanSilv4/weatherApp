import { createWeatherCard } from './components/weather-card.js';
import { getCity } from './controller/getCity-controller.js';
import { getWeather } from './controller/getWeather-controller.js';
import { setHeader } from './components/header.js'
import { util } from './util.js';

const searchBar = document.getElementById('search-city');
searchBar.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        const cityName = searchBar.value;
        search(cityName);
        searchBar.value = '';
    }
});

const search = (cityName) => {
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

const setWeather = (weather) => {
    const weatherList = document.getElementById('weather-list');
    util.removeAllChildNodes(weatherList);
    weather.forEach(forecast => {
        const card = createWeatherCard(forecast);
        weatherList.appendChild(card);
    }
    );
}

const load = () => {
    const cityName = localStorage.getItem('city') || false;
    if (cityName) {
        search(cityName);
    }
}

load();
