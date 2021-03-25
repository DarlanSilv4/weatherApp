const searchBar = document.getElementById('search-city');
searchBar.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        const cityName = searchBar.value;
        console.log(cityName);
    }
})