import { apiService } from '../service/api-service.js';

export const getWeather = async (cityKey) => {
    try {
        const weather = await apiService.getWeather(cityKey);
        return weather.DailyForecasts;
    }
    catch {
        return null;
    }
}