const cityDropdown = document.getElementById("city");
const searchBtn = document.getElementById("get-weather-btn");
const weatherDashboard = document.getElementById("weather-info-wrap");

searchBtn.addEventListener("click", async () => {
  const citySelected = cityDropdown.value;

  if (citySelected === "") {
    return;
  }

  // document.getElementById("weather-info-wrap")?.remove();

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

  if (!weather || weather.error) {
    alert("Something went wrong, please try again later");
    return;
  }

  const imageIcon = document.getElementById("weather-icon")
  const icon = weather?.weather?.[0]?.icon;

  if (icon !== undefined) {
    imageIcon.src = icon;
  }

  document.getElementById("main-temperature").textContent = displayValues(weather?.main?.temp);
  document.getElementById("feels-like").textContent = displayValues(weather?.main?.feels_like);
  document.getElementById("humidity").textContent = displayValues(weather?.main?.humidity)
  document.getElementById("wind").textContent = displayValues(weather?.wind?.speed)
  document.getElementById("wind-gust").textContent = displayValues(weather?.wind?.gust)
  document.getElementById("weather-main").textContent = displayValues(weather?.weather?.[0]?.main);
  document.getElementById("location").textContent = displayValues(weather?.name);
}

const displayValues = (data) => {
  return data === undefined ? 'N/A' : data;;
}

