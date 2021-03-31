const daysOfTheWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
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

const toCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(0);
}

export const util = {
    daysOfTheWeek,
    toCelsius,
    weatherIcons
}