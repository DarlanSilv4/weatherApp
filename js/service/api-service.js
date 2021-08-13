import { API_KEY } from '../config.js';

const searchCity = async (cityName) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`);
    return response.json();
}

const getWeather = async (cityKey) => {
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    return response.json();
}

const getCity = async (cityName) => {
    try {
        const city = await searchCity(cityName);
        return city[0];
    }
    catch {
        return null;
    }
}

export const apiService = {
    getWeather,
    getCity
}