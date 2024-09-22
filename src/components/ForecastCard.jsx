import React from 'react';
import useWeatherBackground from '../hooks/useWeatherBackground';

const ForecastCard = ({ day, high, low, icon, condition }) => {
  const background = useWeatherBackground(condition); // Use custom hook for background

  return (
    <div className='forecast-card'>
      <h3>{day}</h3>
      <img src={icon} alt={condition} />
      <p>{condition}</p>
      <p>
        High: {high.toFixed(1)}° Low: {low.toFixed(1)}°
      </p>
    </div>
  );
};

export default ForecastCard;
