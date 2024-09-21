import React, { useState } from 'react';
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} from '../utils/TempratureConversion';

const WeatherCard = ({ city, temp, condition, icon }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    const newTemp = isCelsius
      ? celsiusToFahrenheit(temp)
      : fahrenheitToCelsius(temp);
    setIsCelsius(!isCelsius);
    return newTemp;
  };

  return (
    <div className='weather-card'>
      <h2>{city}</h2>
      <div className='weather-info'>
        <img src={icon} alt={condition} />
        <div>
          <h3>
            {isCelsius ? temp : celsiusToFahrenheit(temp)}°{' '}
            {isCelsius ? 'C' : 'F'}
          </h3>
          <button onClick={toggleTemperatureUnit}>
            Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
          </button>
          <p>{condition}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
