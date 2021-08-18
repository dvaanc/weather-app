const app = (function() {

const grabData = async function (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b1b01c9401096e78d474e286123aa8a`;
    try {
      const response = await fetch(url, {mode: "cors"});
      const data = await response.json();
      console.log(data);
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
      
    } catch (error) {
      console.log(error);
    }
  } 

  const filterData = function(data) {
    const filtered = {
        data.name,
        data.weather[0].main,
        data.weather[0].description, 
        data.main.temp,
        data.main.feels_like,
        data.wind.speed,
        data.sys.sunrise,
        data.sys.sunset
    }
    }
  

  // grabWeather().catch((err) => {
  //   console.log(err)
  // })

  return { grabData }
})()

app.grabData('London');




