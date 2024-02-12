import { useState, useEffect } from 'react';
import { FLAG_API, FLAG_IMAGE } from '../services/api/flagApi.js'

export const useFetchFlag = (currentWeather) => {
  const [flagImagUrl, setFlagImagUrl] = useState("")

  useEffect(() => {
    if (currentWeather) {
      setFlagImagUrl(FLAG_API + currentWeather.city.country + FLAG_IMAGE);
    }

  }, [currentWeather])

  return { flagImagUrl }
}