import { useState, useEffect } from 'react';
import { getWeather } from '../services/api/weatherApi.js';

export const useFetchCurrentWeather = (location) => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const search = async () => {
      if (location) {
        try {
          setIsLoading(true)
          const result = await getWeather(location);
          setWeather(result);
          setIsLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
    }
    search()
  }, [location])

  return { weather, isLoading }
}