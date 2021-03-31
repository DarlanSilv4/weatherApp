import { apiService } from '../service/api-service.js';

export const getWeather = async (cityKey) => {
    const weather = await apiService.getWeather(cityKey);
    return weather.DailyForecasts;
}