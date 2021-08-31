import { createForecastCard } from './components/forecast-card.js';
import { apiService } from './service/api-service.js';
import { setHeader } from './components/header.js'
import { util } from './util.js';
import { createWeatherCard } from './components/weather-card.js';

const searchBar = document.getElementById('search-city');
searchBar.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;

    const cityName = searchBar.value;
    search(cityName);
    searchBar.value = '';
});

const search = async (cityName) => {
    const city = await apiService.getCity(cityName);
    if (city === null) return showErrorMessage();

    saveLastCityNameInLocalStorage(city.LocalizedName);
    return setupPage(city);
}

const setupPage = async (city) => {
    setHeader(city);

    const weather = await apiService.getCurrentWeather(city.Key);
    if (weather === null) return showErrorMessage();
    setWeather(weather[0]);

    showForecastTitle();

    const forecast = await apiService.getDailyForecast(city.Key);
    if (forecast === null) return showErrorMessage();
    setForecast(forecast);
}

const saveLastCityNameInLocalStorage = cityName => {
    return localStorage.setItem('city', cityName);
}

const showForecastTitle = () => {
    const title = document.getElementById('forecast-title');
    title.classList.remove('title-hidden')
}

const setWeather = (weather) => {
    const weatherCard = document.getElementById('weather-card');
    if (weatherCard) weatherCard.remove();

    const card = createWeatherCard(weather);
    const cityInfo = document.getElementById('city-info');
    cityInfo.after(card);
}

const setForecast = (forecast) => {
    const forecastList = document.getElementById('forecast-list');
    util.removeAllChildNodes(forecastList);
    forecast.forEach(forecast => {
        const card = createForecastCard(forecast);
        forecastList.appendChild(card);
    }
    );
}

const showErrorMessage = () => {
    alert("😭 Sorry, we could not find the city you are looking for...");
}

const autoSearch = () => {
    const cityName = localStorage.getItem('city') || false;
    if (cityName) search(cityName);
}

autoSearch();
