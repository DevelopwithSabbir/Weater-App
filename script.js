const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Replace with your API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const currentWeather = document.getElementById('current-weather');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

// Function to fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
      cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
      currentWeather.textContent = `Condition: ${data.weather[0].description}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } else {
      alert('City not found! Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
}

// Add event listener to the search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name!');
  }
});
