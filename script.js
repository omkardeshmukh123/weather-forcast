// API key from OpenWeatherMap
const apiKey = "b88cbdebd55c50ead7253dd695fa026b";

// Get elements
const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");

// Fetch weather data
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const { name, main, weather } = data;
      weatherResult.innerHTML = `
        <h3>${name}</h3>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
      `;
    })
    .catch((error) => {
      weatherResult.innerHTML = `<p>${error.message}</p>`;
    });
});
