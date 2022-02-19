import useGeoLocation from "../../hooks/useGeoLocation";

const location = useGeoLocation();

async function FetchLocationWeather({location}) {
    const latitude = location.coordinates.lat;
    const longitude = location.coordinates.lng;
    const API_KEY = "8cb9ca89adb9413e84bec37a165b0c9a";
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}`
    );
    const results = await response.json();
    console.log("here are your results :" + results);
    let weatherData = {
      temperature: results["data"][0]["temp"],
      appTemp: results["data"][0]["app_temp"],
      sunrise: results["data"][0]["sunrise"],
      sunset: results["data"][0]["sunset"],
      icon: `https://www.weatherbit.io/static/img/icons/${results["data"][0]["weather"]["icon"]}.png`,
      description: results["data"][0]["weather"]["description"],
      windDirection: results["data"][0]["wind_cdir"],
      prescipitation: results["data"][0]["precip"],
      cityName: results["data"][0]["city_name"],
      timezone: results["data"][0]["timezone"],
    };
    setWeatherData(weatherData);
    setGotData(true)
  }

  export default FetchLocationWeather;