import { getCity } from './controller/getCity-controller.js';

const searchBar = document.getElementById('search-city');
searchBar.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        const cityName = searchBar.value;
        searchBar.value = '';
        getCity(cityName).then(city => {
            setHeader(city);
        });
    }
});

const setHeader = (city) => {
    const title = document.createElement('h1');
    title.classList.add('city-name');
    title.innerHTML = city.LocalizedName;

    const country = document.createElement('p');
    country.classList.add('country-name');
    country.innerHTML = city.Country.ID;
    country.title = `${city.AdministrativeArea.LocalizedName} - ${city.Country.LocalizedName}`;

    const cityInfo = document.getElementById('city-info');
    removeAllChildNodes(cityInfo);
    cityInfo.appendChild(title);
    cityInfo.appendChild(country);
}

const removeAllChildNodes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}