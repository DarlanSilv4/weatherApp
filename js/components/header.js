import { util } from '../util.js';

export const setHeader = (city) => {
    const title = document.createElement('h1');
    title.classList.add('city-name');
    title.innerHTML = city.LocalizedName;

    const country = document.createElement('p');
    country.classList.add('country-name');
    country.innerHTML = city.Country.ID;
    country.title = `${city.AdministrativeArea.LocalizedName} - ${city.Country.LocalizedName}`;

    const cityInfo = document.getElementById('city-info');
    util.removeAllChildNodes(cityInfo);
    cityInfo.appendChild(title);
    cityInfo.appendChild(country);
}