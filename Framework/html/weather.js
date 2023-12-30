const API_KEY = '0ae6e3610c79420a99411656233012'; // WeatherAPI API key
const cityName = 'Winnipeg'; // City name to fetch weather information

function getWeatherData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`)
        .then(response => response.json())
        .then(weatherData => {
            displayWeather(weatherData); // Call function to display weather information
        })
        .catch(error => {
            console.log('Weather Error:', error);
        });
}

function displayWeather(weatherData) {
    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('conditions');

    const temperature = weatherData.current.temp_c;
    const conditions = weatherData.current.condition.text;

    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    conditionsElement.textContent = `Conditions: ${conditions}`;
}

getWeatherData(); // Fetch weather information when the page loads
