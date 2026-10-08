const cityDropdown = document.getElementById("city");
const searchBtn = document.getElementById("get-weather-btn");
const weatherDashboard = document.getElementById("weather-info-wrap");

searchBtn.addEventListener("click", async () => {
  const citySelected = cityDropdown.value;

  if (citySelected === "") {
    return;
  }

  weatherDashboard.innerHTML = `<div id="weather-info">
    <img id="weather-icon" />
    <div id="main-temperature"></div>
    <div id="feels-like"></div>
    <div id="humidity"></div>
    <div id="wind"></div>
    <div id="wind-gust"></div>
    <div id="weather-main"></div>
    <div id="location"></div>
  </div>`;

  await showWeather(citySelected);
});


async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function showWeather(city) {
  const weather = await getWeather(city);



  const imageIcon = document.getElementById("weather-icon");
  const mainTemperature = document.getElementById("main-temperature")
  const feelsLike = document.getElementById("feels-like")
  const humidity = document.getElementById("humidity")
  const wind = document.getElementById("wind")
  const windGust = document.getElementById("wind-gust")
  const weatherMain = document.getElementById("weather-main")
  const location = document.getElementById("location")

  console.log(weather);
  imageIcon.src = weather["weather"][0].icon;

  const mainTemperatureSpan = document.createElement("span");
  mainTemperatureSpan.textContent = weather["main"]["temp"];
  mainTemperature.appendChild(mainTemperatureSpan);

  const feelsLikeSpan = document.createElement("span");
  feelsLikeSpan.textContent = weather["main"]["feels_like"];
  feelsLike.appendChild(feelsLikeSpan);

  const humiditySpan = document.createElement("span");
  humiditySpan.textContent = weather["main"]["humidity"]
  humidity.appendChild(humiditySpan);

  
}

