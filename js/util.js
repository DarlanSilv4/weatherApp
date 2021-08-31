const daysOfTheWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

const removeAllChildNodes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const shortenerPhrase = (phrase) => {
    const notFound = -1;

    if (phrase.search('Intermittent') != notFound) {
        return phrase.replace("Intermittent", "Sporadic");
    }

    if (phrase.length > 20) {
        return phrase.slice(6);
    }

    return phrase;
}

const toCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(0);
}

const weatherIcons = {
    1: "../svg/sun.svg",
    2: "../svg/sun.svg",
    3: "../svg/sun_behind_small_cloud.svg",
    4: "../svg/sun_behind_cloud.svg",
    5: "../svg/sun_behind_large_cloud.svg",
    6: "../svg/sun_behind_large_cloud.svg",
    7: "../svg/cloud.svg",
    8: "../svg/cloud.svg",
    11: "../svg/fog.svg",
    12: "../svg/cloud_with_rain.svg",
    13: "../svg/sun_behind_rain_cloud.svg",
    14: "../svg/sun_behind_rain_cloud.svg",
    15: "../svg/cloud_with_lightning_and_rain.svg",
    16: "../svg/cloud_with_lightning_and_rain.svg",
    17: "../svg/sun_behind_rain_cloud.svg",
    18: "../svg/cloud_with_rain.svg",
    19: "../svg/cloud_with_snow.svg",
    20: "../svg/cloud_with_snow.svg",
    21: "../svg/cloud_with_snow.svg",
    22: "../svg/cloud_with_snow.svg",
    23: "../svg/cloud_with_snow.svg",
    24: "../svg/ice.svg",
    25: "../svg/cloud_with_snow.svg",
    26: "../svg/cloud_with_snow.svg",
    29: "../svg/cloud_with_snow.svg",
    30: "../svg/hot.svg",
    31: "../svg/cold_face.svg",
    32: "../svg/windy.svg",
    33: "../svg/moon.svg",
    34: "../svg/moon.svg",
    35: "../svg/moon_behind_small_cloud.svg",
    36: "../svg/moon_behind_cloud.svg",
    37: "../svg/moon_behind_large_cloud.svg",
    38: "../svg/moon_behind_large_cloud.svg",
    39: "../svg/moon_behind_rain_cloud.svg",
    40: "../svg/moon_behind_rain_cloud.svg",
    41: "../svg/cloud_with_lightning_and_rain.svg",
    42: "../svg/cloud_with_lightning_and_rain.svg",
    43: "../svg/cloud_with_snow.svg",
    44: "/svg/cloud_with_snow.svg"

}

export const util = {
    daysOfTheWeek,
    removeAllChildNodes,
    shortenerPhrase,
    toCelsius,
    weatherIcons
}