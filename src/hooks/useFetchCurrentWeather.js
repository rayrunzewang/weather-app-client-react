import { useState } from 'react';
import { getWeather } from '../services/api/weatherApi.js';

export const useFetchCurrentWeather = (location) => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (location) {
      try {
        const result = await getWeather(location);
        setWeather(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }
  return { weather, handleSearch }
}