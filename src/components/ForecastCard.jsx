import React from 'react';

const ForecastCard = ({ day, high, low, icon, condition }) => {
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
