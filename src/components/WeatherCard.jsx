import React, { useState } from 'react';
import { celsiusToFahrenheit } from '../utils/TempratureConversion';
import useWeatherBackground from '../hooks/useWeatherBackground';

const WeatherCard = ({ city, temp, condition, icon }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const background = useWeatherBackground(condition); // custom hook for background

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  // add color text according weather condition
  const getWeatherInfoStyle = () => {
    switch (condition.toLowerCase()) {
      case 'clear sky':
        return { color: '#FFD700' };
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return { color: '#e7eaed' };
      case 'haze':
        return { color: '#020911' };
      case 'rain' || 'shower rain':
        return { color: '#bcc1c6' };
      case 'thunderstorm':
        return { color: '#FF4500' };
      case 'drizzle':
        return { color: '#4682B4' };
      case 'overcast':
      case 'overcast clouds':
        return { color: '#eff0f6' };
      case 'tornado':
        return { color: '#c8ccd0' };
      case 'sand':
        return { color: '#020911' };
      case 'dust':
        return { color: '#7992af' };
      case 'smoke':
        return { color: '#c8ccd0' };

      case 'fog':
        return { color: '#e3e8ef' };
      case 'mist':
        return { color: '#4682B4' };
      default:
        return { color: '#fff' };
    }
  };

  const renderWeatherInfo = () => {
    switch (condition.toLowerCase()) {
      case 'clear sky':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>It's a sunny day!</p>
          </>
        );

      case 'haze':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Breathe easy today!</p>
          </>
        );
      case 'rain':
      case 'shower rain':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Don't forget your umbrella!</p>
          </>
        );

      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Don't forget your umbrella!</p>
          </>
        );
      case 'snow':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>It's snowing! Stay warm!</p>
          </>
        );
      case 'drizzle':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Light drizzle! Carry a coat!</p>
          </>
        );
      case 'tornado':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Tornado alert! Seek shelter!</p>
          </>
        );
      case 'smoke':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Smoky air! Limit exposure!</p>
          </>
        );
      case 'fog':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Foggy conditions! Stay cautious!</p>
          </>
        );
      case 'mist':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Misty outside! Drive carefully!</p>
          </>
        );
      case 'dust':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Dust in the air! Wear a mask!</p>
          </>
        );
      case 'sand':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Sandy winds! Stay safe!</p>
          </>
        );
      case 'thunderstorm':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>Be careful, it's stormy outside!</p>
          </>
        );

      case 'overcast':
      case 'overcast clouds':
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>It's overcast! A bit gloomy outside.</p>
          </>
        );
      default:
        return (
          <>
            <img src={icon} alt={condition} />
            <span>{condition}</span>
            <p>{condition}</p>
          </>
        );
    }
  };

  return (
    <div
      className='weather-card'
      style={{
        backgroundImage: background,
        backgroundSize: 'cover',
        color: '#fff',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2>{city}</h2>
      <div className='weather-info' style={getWeatherInfoStyle()}>
        {/* Render dynamic weather information */}
        {renderWeatherInfo()}
        <div>
          <h3>
            {isCelsius ? temp : celsiusToFahrenheit(temp)}°{' '}
            {isCelsius ? 'C' : 'F'}
          </h3>
          <button onClick={toggleTemperatureUnit} className='switch-button'>
            Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
