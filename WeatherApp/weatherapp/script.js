const searchButton = document.getElementById('search');
const locationInput = document.getElementById('location');
const resultDiv = document.getElementById('result');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeatherData(location);
    } else {
        alert('Please enter a location.');
    }
});

function getWeatherData(location) {
    // OpenWeatherMap API key
    const apiKey = '8a3d7877b805d85762f5ceeb7c42d372';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            displayWeatherData(data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            resultDiv.innerHTML = 'Error fetching weather data.';
        });
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    const resultText = `Weather in ${name}: ${description}, Temperature: ${temperature}°C`;
    resultDiv.innerHTML = resultText;
}
