import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import Searchbar from '../components/Searchbar';
import Map from '../components/Map';

const API_KEY = 'fe4feefa8543e06d4f3c66d92c61b69c';

const Home = () => {
  const [temperature, setTemperature] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('New York');
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.006 });
  const [condition, setCondition] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    // Get user's current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          fetchWeatherByCoordinates(
            position.coords.latitude,
            position.coords.longitude,
          );
        },
        error => {
          console.error('Error getting geolocation:', error);
          fetchWeather(city);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      fetchWeather(city);
    }
  }, []);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeatherByCoordinates = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
      );
      setTemperature(Math.round(response.data.main.temp)); // Rounding temperature
      setCity(response.data.name);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
      );

      const dailyForecasts = processForecastData(forecastResponse.data.list);
      setForecast(dailyForecasts);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchWeather = async city => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
      );
      setTemperature(Math.round(response.data.main.temp)); // Rounding temperature
      setLocation({
        lat: response.data.coord.lat,
        lng: response.data.coord.lon,
      }); // Update location with new coordinates
      setCondition(response.data.weather[0].description);
      setIcon(response.data.weather[0].icon);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`,
      );

      const dailyForecasts = processForecastData(forecastResponse.data.list);
      setForecast(dailyForecasts);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const handleSearch = searchedCity => {
    setCity(searchedCity);
  };

  const processForecastData = data => {
    const dailyData = [];
    const days = {};

    data.forEach(item => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });

      if (!days[day]) {
        days[day] = {
          day,
          high: Math.round(item.main.temp_max), // Rounding high temperature
          low: Math.round(item.main.temp_min), // Rounding low temperature
          icon: item.weather[0].icon,
          condition: item.weather[0].description,
        };
      } else {
        days[day].high = Math.max(
          days[day].high,
          Math.round(item.main.temp_max),
        );
        days[day].low = Math.min(days[day].low, Math.round(item.main.temp_min)); // Rounding before comparison
      }
    });

    for (const key in days) {
      dailyData.push(days[key]);
    }

    return dailyData.slice(0, 5); // Limit to 5 days
  };

  return (
    <div className='home-background'>
      <Searchbar onSearch={handleSearch} />
      <WeatherCard
        city={city}
        temp={temperature}
        condition={condition}
        icon={`http://openweathermap.org/img/wn/${icon}.png`}
      />

      {/* 5-day forecast  */}
      <div className='forecast-container'>
        {forecast.map((day, index) => (
          <ForecastCard
            key={index}
            day={day.day}
            high={day.high}
            low={day.low}
            icon={`http://openweathermap.org/img/wn/${day.icon}.png`}
            condition={day.condition}
          />
        ))}
      </div>

      {/* Google Map with current location */}
      <Map location={location} />
    </div>
  );
};

export default Home;
