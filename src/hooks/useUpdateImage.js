import { useState, useEffect } from 'react';
import backgroundImage from '../backgroundImage'
import Clear from '../assets/Clear.jpg';

export const useUpdateImage = (currentWeather) => {
  const [weatherImage, setWeatherImage] = useState(Clear);
  useEffect(() => {
  console.log(currentWeather);

    if (currentWeather) {
      const weather = currentWeather.list[0].weather[0].main
      const bgImg = backgroundImage(weather)
      setWeatherImage(bgImg)
    }
  }, [currentWeather])

  return { weatherImage }
}
