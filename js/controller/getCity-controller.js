import { apiService } from '../service/api-service.js';

export const getCity = async (cityName) => {
    try {
        const city = await apiService.searchCity(cityName);
        localStorage.setItem('city', city[0].LocalizedName);
        return city[0];
    }
    catch {
        return null;
    }
}
