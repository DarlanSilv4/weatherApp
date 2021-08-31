import { API_KEY } from '../config.js';

const searchCity = async (cityName) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`);
    return response.json();
}

const getForecast = async (cityKey) => {
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`);
    return response.json();
}

const getCurrentWeather = async (cityKey) => {
    try {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`);
        return response.json();
    }
    catch {
        return null;
    }

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

const getDailyForecast = async (cityKey) => {
    try {
        const forecast = await getForecast(cityKey);
        return forecast.DailyForecasts;
    }
    catch {
        return null;
    }
}

export const apiService = {
    getCurrentWeather,
    getDailyForecast,
    getCity
}