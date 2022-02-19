import useGeoLocation from "../hooks/useGeoLocation";
import { TextField, Stack, Button, Box, LinearProgress } from "@mui/material";
import Results from "../components/Search/Results";
import SearchDisclaimer from "../components/SearchDisclaimer";
import SearchComponent from "../components/SearchComponent";
import Spinner from "../components/Spinner";
import React, { useState, useEffect, useRef } from "react";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
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
    setGotData(false);
    console.log("This is the searched city", city);
    const API_KEY = "8cb9ca89adb9413e84bec37a165b0c9a";
    if (city) {
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
  }
  console.log("Here is your weather data :" + weatherData);

  async function FetchLocationWeather() {
    const latitude = location.coordinates.lat;
    const longitude = location.coordinates.lng;
    const ICON_API_KEY = "8cb9ca89adb9413e84bec37a165b0c9a";
    const WEATHER_API_KEY = "65d99f12378a869a25e00e76a37cff22";
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${ICON_API_KEY}`
    );
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
    const results = await response.json();
    const weatherResults = await weatherResponse.json();
    console.log("here are your results :" + results);
    console.log("here are your weather results :" + weatherResults);
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

            <Button onClick={Search} >
              <SearchDisclaimer />
            </Button>
          </div>
        </Stack>
      </form>
      <Box
        sx={{
          height: "60px",
          width: "60px",
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
            <Box
              sx={{
                // background:'pink',
                height: "10vh",
                width: "100%",
                left: "0",
                position: "absolute",
                top: 0,
                zIndex: "1000",
              }}
            >
              <LinearProgress />
            </Box>
            <Spinner />
          </Stack>
        )}
      </Box>
    </main>
  );
}
