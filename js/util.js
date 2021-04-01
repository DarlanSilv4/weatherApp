const daysOfTheWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
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
    1: "☀️",
    2: "☀️",
    3: "🌤️",
    4: "🌤️",
    5: "🌥️",
    6: "⛅",
    7: "☁️",
    8: "☁️",
    11: "🌫️",
    12: "🌧️",
    13: "🌧️",
    14: "🌦️",
    15: "⛈️",
    16: "⛈️",
    17: "🌦️",
    18: "🌧️",
    19: "🌨️",
    20: "🌨️",
    21: "🌨️",
    22: "🌨️",
    23: "🌨️",
    24: "🧊",
    25: "🌨️",
    26: "🌨️",
    29: "🌨️",
    30: "🌡️",
    31: "🥶",
    32: "💨"
}

export const util = {
    daysOfTheWeek,
    shortenerPhrase,
    toCelsius,
    weatherIcons
}