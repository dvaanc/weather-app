/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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
const toggleConversion = document.querySelector("#toggle-conersion");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  const location = input.value; 
  grabData(location)

  form.reset()
  e.preventDefault();
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
      console.log(info)
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
  // grabData().then(data => filterData(data))
  
  const filterData = function(data) {
    const location = data.name;
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
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

  const updateFields = function(data) {
    location.innerText = data.location;
    main.innerText = ` | ${data.main}`;
    description.innerText = `Description: ${data.description}`;
    temp.innerText = `${kelvinToCelsius(data.temp)} `;
    feelsLike.innerText = data.feelsLike;
    winds.innerText = data.windSpeed;
    sunrise.innerText = data.sunrise;
    sunset.innerText = data.sunset;
  }

  // °C
  const conversion = function(checked) {
   if(checked) {

   }
   if(!checked) {

   }
  }

  const kelvinToCelsius = function(val) {
    return Number(val - 273.15).toFixed(2);
  }
  
  return { grabData, toggleError }
})()

app.grabData('London')









/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFFQUFxRSxLQUFLO0FBQzFFO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQyw0Q0FBNEMsaUJBQWlCO0FBQzdELHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gKGZ1bmN0aW9uKCkge1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XCIpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHMtbGlrZVwiKTtcbmNvbnN0IHdpbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kc1wiKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bnJpc2VcIik7XG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bnNldFwiKTtcbmNvbnN0IHRvZ2dsZUNvbnZlcnNpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1jb25lcnNpb25cIik7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlOyBcbiAgZ3JhYkRhdGEobG9jYXRpb24pXG5cbiAgZm9ybS5yZXNldCgpXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmNvbnN0IHRvZ2dsZUVycm9yID0gZnVuY3Rpb24oKSB7XG4gIGVycm9yLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9LCA1MDAwKTtcbn1cblxuY29uc3QgZ3JhYkRhdGEgPSBhc3luYyBmdW5jdGlvbihjaXR5KSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0yYjFiMDFjOTQwMTA5NmU3OGQ0NzRlMjg2MTIzYWE4YWA7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBpbmZvID0gZmlsdGVyRGF0YShkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgICB1cGRhdGVGaWVsZHMoaW5mbyk7XG4gICAgICAvLyByZXR1cm4gY29uc29sZS5sb2coXG4gICAgICAvLyAgIGRhdGEubmFtZSxcbiAgICAgIC8vICAgZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAvLyAgIGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgXG4gICAgICAvLyAgIGRhdGEubWFpbi50ZW1wLFxuICAgICAgLy8gICBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgIC8vICAgZGF0YS53aW5kLnNwZWVkLFxuICAgICAgLy8gICBkYXRhLnN5cy5zdW5yaXNlLFxuICAgICAgLy8gICBkYXRhLnN5cy5zdW5zZXRcbiAgICAgIC8vICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIHRvZ2dsZUVycm9yKCk7XG4gICAgfVxuICBcbiAgfSBcbiAgLy8gZ3JhYkRhdGEoKS50aGVuKGRhdGEgPT4gZmlsdGVyRGF0YShkYXRhKSlcbiAgXG4gIGNvbnN0IGZpbHRlckRhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkYXRhLm5hbWU7XG4gICAgY29uc3QgbWFpbiA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRlbXAgPSBkYXRhLm1haW4udGVtcDtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkYXRhLndpbmQuc3BlZWQ7XG4gICAgY29uc3Qgc3VucmlzZSA9IGRhdGEuc3lzLnN1bnJpc2U7XG4gICAgY29uc3Qgc3Vuc2V0ID0gZGF0YS5zeXMuc3Vuc2V0O1xuXG4gICAgY29uc3QgaW5mbyA9IHsgXG4gICAgICBsb2NhdGlvbixcbiAgICAgIG1haW4sXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHRlbXAsXG4gICAgICBmZWVsc0xpa2UsXG4gICAgICB3aW5kU3BlZWQsXG4gICAgICBzdW5yaXNlLFxuICAgICAgc3Vuc2V0XG4gICAgfTtcblxuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRmllbGRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb247XG4gICAgbWFpbi5pbm5lclRleHQgPSBgIHwgJHtkYXRhLm1haW59YDtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgRGVzY3JpcHRpb246ICR7ZGF0YS5kZXNjcmlwdGlvbn1gO1xuICAgIHRlbXAuaW5uZXJUZXh0ID0gYCR7a2VsdmluVG9DZWxzaXVzKGRhdGEudGVtcCl9IGA7XG4gICAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGRhdGEuZmVlbHNMaWtlO1xuICAgIHdpbmRzLmlubmVyVGV4dCA9IGRhdGEud2luZFNwZWVkO1xuICAgIHN1bnJpc2UuaW5uZXJUZXh0ID0gZGF0YS5zdW5yaXNlO1xuICAgIHN1bnNldC5pbm5lclRleHQgPSBkYXRhLnN1bnNldDtcbiAgfVxuXG4gIC8vIMKwQ1xuICBjb25zdCBjb252ZXJzaW9uID0gZnVuY3Rpb24oY2hlY2tlZCkge1xuICAgaWYoY2hlY2tlZCkge1xuXG4gICB9XG4gICBpZighY2hlY2tlZCkge1xuXG4gICB9XG4gIH1cblxuICBjb25zdCBrZWx2aW5Ub0NlbHNpdXMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbCAtIDI3My4xNSkudG9GaXhlZCgyKTtcbiAgfVxuICBcbiAgcmV0dXJuIHsgZ3JhYkRhdGEsIHRvZ2dsZUVycm9yIH1cbn0pKClcblxuYXBwLmdyYWJEYXRhKCdMb25kb24nKVxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==