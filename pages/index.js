import useGeoLocation from "../hooks/useGeoLocation";
import { TextField, Stack, Button, Box, LinearProgress } from "@mui/material";
import Results from "../components/Search/Results";
import Spinner from "../components/Spinner";
import React, { useState, useEffect, useRef } from "react";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
// import CLOUDS from "vanta/dist/vanta.clouds.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default function Home() {
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       CLOUDS({
  //         el: myRef.current,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  const location = useGeoLocation();
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([
    {
      temperature: "",
      appTemp: "",
      sunrise: "",
      sunset: "",
      icon: "",
      description: "",
      windDirection: "",
      prescipitation: "",
      cityName: "",
      timezone: "",
    },
  ]);
  const [gotData, setGotData] = useState(false);

  async function Search() {
    setGotData(false)
    console.log("This is the searched city", city);
    const API_KEY = "8cb9ca89adb9413e84bec37a165b0c9a";
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
    );
    const results = await response.json();
    console.log(results);
    setWeatherData({
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
    });
    setGotData(true);
  }
  console.log("Here is your weather data :" + weatherData);

  async function FetchLocationWeather() {
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
    setGotData(true);
  }
  // fetch("./api/FetchLocationData")
  // .then(res => console.log(res.json()))
  // .then(data => console.log(data))
  console.log(weatherData);

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack
          sx={{
            padding: 4,
            background: "rgba(123, 152, 178,0.8)",
          }}
        >
          <TextField
            id="standard-basic"
            label="Standard"
            variant="filled"
            value={city}
            sx={{
              "&:focus": {
                border: "orange",
              },
            }}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Button
              variant="filled"
              sx={{ width: "50%", color: "#eee", fontWeight: "900" }}
              onClick={() => {
                if (location) {
                  FetchLocationWeather();
                }
              }}
            >
              Use Location Instead
            </Button>
            <Button
              variant="filled"
              sx={{
                width: "50%",
                background: "#ddd",
                color: "rgb(132, 132, 132)",
                fontWeight: "900",
                "&:hover": {
                  background: "#fff",
                },
              }}
              onClick={Search}
            >
              Search
            </Button>
          </div>
        </Stack>
      </form>
      <Box
        sx={{
          height: "60px",
          width: "60px",
          // background: "pink",
          position: "fixed",
          bottom: "0",
          right: "0",
          left: "-80",
          padding: "16px",
        }}
      >
        <Link href="https://github.com/derciomaduna-codes">
          <a target="_blankgit add">
            <GitHub
              sx={{
                height: "100%",
                width: "100%",
              }}
            />
          </a>
        </Link>
      </Box>
      <Box
        sx={{
          background: "rgba(56, 115, 190 , .5)",
          minHeight: "73vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {gotData ? (
          <Results
            temperature_max={weatherData["temperature"]}
            temperature_min={weatherData["appTemp"]}
            weatherLocation={weatherData["timezone"]}
            wind={weatherData["windDirection"]}
            sunset={weatherData["sunset"]}
            sunrise={weatherData["sunrise"]}
            prescipitation={weatherData["prescipitation"]}
            description={weatherData["description"]}
            icon={weatherData["icon"]}
          />
        ) : (
          <Stack>
            <Box sx={{
              // background:'pink',
              height:'10vh',
              width:'100%',
              left:'0',
              position:'absolute',
              top:0,
              zIndex:'1000'
            }}>
              <LinearProgress />
            </Box>
            <Spinner />
          </Stack>
        )}
      </Box>
    </main>
  );
}
