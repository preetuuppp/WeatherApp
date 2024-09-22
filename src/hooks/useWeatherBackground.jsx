import { useEffect, useState } from 'react';

const getBackgroundStyle = condition => {
  switch (condition.toLowerCase()) {
    case 'clear sky':
      return 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)';
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return 'url(https://tse1.mm.bing.net/th?id=OIP.BifOh8kRNMcjUArqwUE3vgHaEo&pid=Api&P=0&h=180)';
    case 'rain':
    case 'shower rain':
      return 'url(https://up.yimg.com/ib/th?id=OIP.pK9etoOYX5fIaFjv11IKiwHaFj&pid=Api&rs=1&c=1&qlt=95&w=165&h=123)';
    case 'haze':
      return 'url(https://up.yimg.com/ib/th?id=OIP.E1YYCthUSv5EjT01qbC3HgHaE8&pid=Api&rs=1&c=1&qlt=95&w=178&h=119)';
    case 'snow':
      return 'url(https://up.yimg.com/ib/th?id=OIP.6p4jLqd4dxIp7Q1dWCypFwHaFj&pid=Api&rs=1&c=1&qlt=95&w=147&h=110)';
    case 'fog':
      return 'url(https://up.yimg.com/ib/th?id=OIP.6p4jLqd4dxIp7Q1dWCypFwHaFj&pid=Api&rs=1&c=1&qlt=95&w=147&h=110)';

    case 'dust':
      return 'url(https://up.yimg.com/ib/th?id=OIP.AHPb2OzxZitmiEywN6aqmAHaEo&pid=Api&rs=1&c=1&qlt=95&w=162&h=101)';

    case 'sand':
      return 'url(https://up.yimg.com/ib/th?id=OIP.FwQnS7-1645K_KFQg46xuAHaE8&pid=Api&rs=1&c=1&qlt=95&w=149&h=99)';

    case 'smoke':
      return 'url(https://sp.yimg.com/ib/th?id=OIP.p2X3eK22a3GaC9M0_4zlXwHaNK&pid=Api&w=148&h=148&c=7&dpr=2&rs=1)';

    case 'tornado':
      return 'url(https://tse4.mm.bing.net/th?id=OIP.sUiTEQ71gAfH9Hf-P2HXdAHaE7&pid=Api&P=0&h=180)';

    case 'overcast':
    case 'overcast clouds':
      return 'url(https://tse1.mm.bing.net/th?id=OIP.ESApUDioyIRFNriM2VDjZAHaEK&pid=Api&P=0&h=180)';

    case 'mist':
      return 'url(https://tse2.mm.bing.net/th?id=OIP.dpj8Pe7AUXXlixSGYojG7AHaJ4&pid=Api&P=0&h=180)';
    case 'thunderstorm':
      return 'url(https://tse1.mm.bing.net/th?id=OIP.5XH0pXr47PW4euUStIb2lwHaEK&pid=Api&P=0&h=180)';
    case 'drizzle':
      return 'url(https://up.yimg.com/ib/th?id=OIP.ZHM0wJc1KuGOk7bV6jy9RgHaE7&pid=Api&rs=1&c=1&qlt=95&w=149&h=99)';
    default:
      return 'url(https://up.yimg.com/ib/th?id=OIP.mahGIuHfyU_R2iXevR08ewAAAA&pid=Api&rs=1&c=1&qlt=95&w=180&h=109)';
  }
};

const useWeatherBackground = condition => {
  const [background, setBackground] = useState('');

  useEffect(() => {
    if (condition) {
      const backgroundStyle = getBackgroundStyle(condition);
      setBackground(backgroundStyle);
    }
  }, [condition]);

  return background;
};

export default useWeatherBackground;
