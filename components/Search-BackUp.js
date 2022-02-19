import { useEffect, useState } from "react";
import Search from "./Search-BackUp"
import useGeoLocation from "../hooks/useGeoLocation"

export default function Home() {
  const location = useGeoLocation();
  const [weather , setWeather] = useState({});
  const apiKey = "65d99f12378a869a25e00e76a37cff22";
  let userLocation = {
    coordinates:{
      "lat":"-26.2309",
      "long":"28.0583"
    }
  } 
  
  async function FetchData (useLocation) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.coordinates.lat}&lon=${userLocation.coordinates.long}&appid=${apiKey}`) 
    const results = await response.json()
    setWeather(results)
    console.log(results)
  }

  function useGeoLocationSearch(){
    console.log("clicked use geolocation search")
    useEffect(()=>{
      FetchData()
    },[location])
  }
  return (
   <main>
     <Search />
     <button onClick={useGeoLocationSearch()}>Search</button>
     { 
      location.loaded ? JSON.stringify(location) : "Location data not available yet."
     }
   </main>
    )
}
