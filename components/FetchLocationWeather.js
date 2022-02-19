import useGeoLocation from "../hooks/useGeoLocation";

export default async function FetchLocationWeather() {
  const location = useGeoLocation();
  const latitude = location.coordinates.lat
  const longitude = location.coordinates.lng
    const apiKey = "65d99f12378a869a25e00e76a37cff22";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    const results = await response.json();
    // setWeather(results);
    console.log(results);
  }
