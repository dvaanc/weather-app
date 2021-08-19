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
   if(false) {}
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











/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUVBQXFFLEtBQUs7QUFDMUU7QUFDQSx5Q0FBeUMsYUFBYTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDLDRDQUE0QyxpQkFBaUI7QUFDN0Qsd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU0sSUFBSTs7QUFFVjtBQUNBLE1BQU0sS0FBSyxFQUFFLEVBRVQ7QUFDSjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gKGZ1bmN0aW9uKCkge1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XCIpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzLWxpa2VcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHMtbGlrZVwiKTtcbmNvbnN0IHdpbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kc1wiKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bnJpc2VcIik7XG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bnNldFwiKTtcbmNvbnN0IHRvZ2dsZUNvbnZlcnNpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1jb252ZXJzaW9uXCIpO1xuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTsgXG4gIGNvbnN0IGNvbnZlcnNpb24gPSB0b2dnbGVDb252ZXJzaW9uLmNoZWNrZWQ7XG4gIHRvZ2dsZUNvbnZlcnNpb25WYWx1ZSA9IGNvbnZlcnNpb247XG4gIGdyYWJEYXRhKGxvY2F0aW9uKVxuICBmb3JtLnJlc2V0KClcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxudG9nZ2xlQ29udmVyc2lvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2codG9nZ2xlQ29udmVyc2lvbi5jaGVja2VkKVxuICBpZih0b2dnbGVDb252ZXJzaW9uKSB7XG5cbiAgfVxufSlcblxuY29uc3QgdG9nZ2xlRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH0sIDUwMDApO1xufVxuXG5jb25zdCBncmFiRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKGNpdHkpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTJiMWIwMWM5NDAxMDk2ZTc4ZDQ3NGUyODYxMjNhYThhYDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IGluZm8gPSBmaWx0ZXJEYXRhKGRhdGEpO1xuICAgICAgdXBkYXRlRmllbGRzKGluZm8pO1xuICAgICAgLy8gcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICBkYXRhLm5hbWUsXG4gICAgICAvLyAgIGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgLy8gICBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIFxuICAgICAgLy8gICBkYXRhLm1haW4udGVtcCxcbiAgICAgIC8vICAgZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgICAvLyAgIGRhdGEud2luZC5zcGVlZCxcbiAgICAgIC8vICAgZGF0YS5zeXMuc3VucmlzZSxcbiAgICAgIC8vICAgZGF0YS5zeXMuc3Vuc2V0XG4gICAgICAvLyAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB0b2dnbGVFcnJvcigpO1xuICAgIH1cbiAgfSBcblxuICBsZXQgdG9nZ2xlQ29udmVyc2lvblZhbHVlID0gZmFsc2U7XG4gIGxldCB1bml0cyA9IFwiXCI7XG4gIGNvbnN0IGZpbHRlckRhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkYXRhLm5hbWU7XG4gICAgY29uc3QgbWFpbiA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHRlbXAgPSBrZWx2aW5Ub0NlbHNpdXMoZGF0YS5tYWluLnRlbXAsIHRvZ2dsZUNvbnZlcnNpb25WYWx1ZSk7XG4gICAgY29uc3QgZmVlbHNMaWtlID0ga2VsdmluVG9DZWxzaXVzKGRhdGEubWFpbi5mZWVsc19saWtlLCB0b2dnbGVDb252ZXJzaW9uVmFsdWUpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgICBjb25zdCBzdW5yaXNlID0gZGF0YS5zeXMuc3VucmlzZTtcbiAgICBjb25zdCBzdW5zZXQgPSBkYXRhLnN5cy5zdW5zZXQ7XG5cbiAgICBjb25zdCBpbmZvID0geyBcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgbWFpbixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdGVtcCxcbiAgICAgIGZlZWxzTGlrZSxcbiAgICAgIHdpbmRTcGVlZCxcbiAgICAgIHN1bnJpc2UsXG4gICAgICBzdW5zZXRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cblxuICBjb25zdCBrZWx2aW5Ub0NlbHNpdXMgPSBmdW5jdGlvbih2YWwsIGNoZWNrZWQpIHtcbiAgICBpZihjaGVja2VkID09PSBmYWxzZSkgcmV0dXJuIE51bWJlcih2YWwgLSAyNzMuMTUpLnRvRml4ZWQoMik7XG4gICAgaWYoY2hlY2tlZCA9PT0gdHJ1ZSkgcmV0dXJuIE51bWJlcigoKHZhbCAtIDI3My4xNSkgKiAxLjgpICsgMzIpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRmllbGRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb247XG4gICAgbWFpbi5pbm5lclRleHQgPSBgIHwgJHtkYXRhLm1haW59YDtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgRGVzY3JpcHRpb246ICR7ZGF0YS5kZXNjcmlwdGlvbn1gO1xuICAgIHRlbXAuaW5uZXJUZXh0ID0gYCR7ZGF0YS50ZW1wfSBgO1xuICAgIGZlZWxzTGlrZS5pbm5lclRleHQgPSBkYXRhLmZlZWxzTGlrZTtcbiAgICB3aW5kcy5pbm5lclRleHQgPSBkYXRhLndpbmRTcGVlZDtcbiAgICBzdW5yaXNlLmlubmVyVGV4dCA9IGRhdGEuc3VucmlzZTtcbiAgICBzdW5zZXQuaW5uZXJUZXh0ID0gZGF0YS5zdW5zZXQ7XG4gIH1cblxuICAvLyDCsENcblxuICBjb25zdCBjb252ZXJzaW9uID0gZnVuY3Rpb24oKSB7XG4gICBpZih0cnVlKSB7XG5cbiAgIH1cbiAgIGlmKGZhbHNlKSB7XG5cbiAgIH1cbiAgfVxuXG5cblxuICBjb25zdCBjZWxzaXVzVG9GYXJlbmhlaXQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4geyBncmFiRGF0YSwgdG9nZ2xlRXJyb3IgfVxufSkoKVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=