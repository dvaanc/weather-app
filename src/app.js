const app = (function() {

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const location = document.querySelector("#location");
const main = document.querySelector("#main");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#feels-like");
const winds = document.querySelector("#winds");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const toggleConversion = document.querySelector("#toggle-conversion");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  const location = input.value; 
  const conversion = toggleConversion.checked;
  toggleConversionValue = conversion;
  grabData(location)
  form.reset()
  e.preventDefault();
})

toggleConversion.addEventListener("click", (e) => {
  console.log(toggleConversion.checked)
  if(toggleConversion) {

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

  let toggleConversionValue = false;
  let units = "";
  const filterData = function(data) {
    const location = data.name;
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const temp = kelvinToCelsius(data.main.temp, toggleConversionValue);
    const feelsLike = kelvinToCelsius(data.main.feels_like, toggleConversionValue);
    const windSpeed = data.wind.speed;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;

    const info = { 
      location,
      main,
      description,
      temp,
      feelsLike,
      windSpeed,
      sunrise,
      sunset
    };

    return info;
  }

  const kelvinToCelsius = function(val, checked) {
    if(checked === false) return Number(val - 273.15).toFixed(2);
    if(checked === true) return Number(((val - 273.15) * 1.8) + 32);
  }

  const updateFields = function(data) {
    location.innerText = data.location;
    main.innerText = ` | ${data.main}`;
    description.innerText = `Description: ${data.description}`;
    temp.innerText = `${data.temp} `;
    feelsLike.innerText = data.feelsLike;
    winds.innerText = data.windSpeed;
    sunrise.innerText = data.sunrise;
    sunset.innerText = data.sunset;
  }

  // °C

  const conversion = function() {
   if(true) {

   }
   if(false) {

   }
  }



  const celsiusToFarenheit = function(val) {
    switch (val) {
      case true:
        break;
      
      case false:
        break;
    }
  }
  
  return { grabData, toggleError }
})()










