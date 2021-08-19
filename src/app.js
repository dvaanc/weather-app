import toDate from 'date-fns/toDate';
import format from 'date-fns/format';

const app = (function() {
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const location = document.querySelector("#location");
const main = document.querySelector("#main");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const winds = document.querySelector("#winds");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const toggleConversion = document.querySelector("#toggle-conversion");
const error = document.querySelector(".error");
const unit = document.querySelectorAll("#unit");


let toggleConversionValue = false;
let units = "";

form.addEventListener("submit", (e) => {
  const location = input.value; 
  const conversion = toggleConversion.checked;
  toggleConversionValue = conversion;
  grabData(location)
  form.reset()
  e.preventDefault();
})

toggleConversion.addEventListener("click", (e) => {
  if(temp.innerText === "") return;
  if(toggleConversion.checked) {
    toggleConversionValue = true;
    isToggleConversionChecked();
    const currentTempValue = Number(temp.innerText);
    const currentFeelsLikeValue = Number(feelsLike.innerText);

    temp.innerText = `${celsiustoFarenheit(currentTempValue)}`
    feelsLike.innerText = `${celsiustoFarenheit(currentFeelsLikeValue)}`

    unit.forEach((unit) => {
      unit.innerText = farenheitUnit
    })
  }
  if(!toggleConversion.checked) {
    toggleConversionValue = false;
    isToggleConversionChecked();
    const currentTempValue = Number(temp.innerText);
    const currentFeelsLikeValue = Number(feelsLike.innerText);
    temp.innerText = `${farenheitToCelsius(currentTempValue)}`
    feelsLike.innerText = `${farenheitToCelsius(currentFeelsLikeValue)}`

    unit.forEach((unit) => {
      unit.innerText = celsiusUnit;
    })
  }
})

const toggleError = function() {
  error.classList.add("show");
  setTimeout(function() {
    error.classList.remove("show");
  }, 5000);
}

const grabData = async function(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b1b01c9401096e78d474e286123aa8a`;
    try {
      const response = await fetch(url, {mode: "cors"});
      const data = await response.json();
      console.log(data)
      const info = filterData(data);
      updateFields(info);
      // return console.log(
      //   data.name,
      //   data.weather[0].main,
      //   data.weather[0].description, 
      //   data.main.temp,
      //   data.main.feels_like,
      //   data.wind.speed,
      //   data.sys.sunrise,
      //   data.sys.sunset
      //   );
    } catch (err) {
      console.log(err)
      toggleError();
    }
  } 

  const filterData = function(data) {
    const location = data.name;
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const temp = kelvinToCelsius(data.main.temp, toggleConversionValue);
    const feelsLike = kelvinToCelsius(data.main.feels_like, toggleConversionValue);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const sunrise = format(new Date(toDate(data.sys.sunrise)), 'h:mmaaa');
    const sunset = format(new Date(toDate(data.sys.sunset)), 'h:mmaaa');

    const info = { 
      location,
      main,
      description,
      temp,
      feelsLike,
      humidity,
      windSpeed,
      sunrise,
      sunset
    };
    console.log(info)
    return info;
  }

  const updateFields = function(data) {
    isToggleConversionChecked();
    location.innerText = data.location;
    main.innerText = ` | ${data.main}`;
    description.innerText = `Description: ${capitalise(data.description)}`;
    temp.innerText = `Temperature: ${data.temp}`;
    feelsLike.innerText = `Feels like: ${data.feelsLike}`;
    unit.forEach(unit => unit.innerText = `${units}`);
    humidity.innerText = `Humidity: ${data.humidity}%`;
    winds.innerText = `Wind speed: ${data.windSpeed}m/s`;
    sunrise.innerText = `Sunrise: ${data.sunrise}`;
    sunset.innerText = `Sunset: ${data.sunset}`;
  }

  const kelvinToCelsius = function(val, checked) {
    const farenheit = "°F";
    const celsius = "°C";
    if(checked === false) return Number(val - 273.15).toFixed(2);
    if(checked === true) return Number(((val - 273.15) * 1.8) + 32).toFixed(2);
  } 

  const celsiustoFarenheit = function(val) {
    return Number((val * 1.8) + 32).toFixed(2);
  }

  const farenheitToCelsius = function(val) {
    return Number((val - 32) / 1.8).toFixed(2);
  }

  const isToggleConversionChecked = function() {
    if(toggleConversionValue) return units = "°F";
    if(!toggleConversionValue) return units = "°C";
  }

  const capitalise = function(words) {
    return words
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.substr(1))
      .join(' ')
  }

  
  
  return { grabData, toggleError }
})()












