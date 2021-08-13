import { createWeatherCard } from './components/weather-card.js';
import { apiService } from './service/api-service.js';
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

const search = async (cityName) => {
    const city = await apiService.getCity(cityName);
    localStorage.setItem('city', city.LocalizedName); //save city name in localStorage

    if (city == null) {
        showErrorMessage();
        return;
    }
    setHeader(city);

    const weather = await getWeather(city.Key);
    if (weather == null) {
        showErrorMessage();
        return;
    }
    setWeather(weather);
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

const showErrorMessage = () => {
    alert("😭 Sorry, we could not find the city you are looking for...");
}

const load = () => {
    const cityName = localStorage.getItem('city') || false;
    if (cityName) {
        search(cityName);
    }
}

load();
