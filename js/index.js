import { createForecastCard } from './components/forecast-card.js';
import { apiService } from './service/api-service.js';
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

    const forecast = await apiService.getDailyForecast(city.Key);
    if (forecast == null) {
        showErrorMessage();
        return;
    }
    setForecast(forecast);
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

const load = () => {
    const cityName = localStorage.getItem('city') || false;
    if (cityName) {
        search(cityName);
    }
}

load();
