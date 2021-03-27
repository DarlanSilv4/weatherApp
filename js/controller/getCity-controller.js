import { apiService } from '../service/api-service.js';

export const getCity = async (cityName) => {
    const city = await apiService.searchCity(cityName);
    return city[0];
}
