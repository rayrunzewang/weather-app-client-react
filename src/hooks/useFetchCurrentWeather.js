import { useState } from 'react';
import { getWeather } from '../services/api/weatherApi.js';

export const useFetchCurrentWeather = (location) => {
  const [Weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (location.city !== '' && location.country !== '') {
      try {
        const result = await getWeather(location.city, location.country);
        setWeather(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }
  return { Weather, handleSearch }
}