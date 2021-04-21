import { API_KEY } from '../config.js';

const searchCity = (cityName) => {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`)
        .then(response => {
            return response.json();
        });
}

const getWeather = (cityKey) => {
    return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`)
        .then(response => {
            return response.json();
        });
}

export const apiService = {
    searchCity,
    getWeather
}