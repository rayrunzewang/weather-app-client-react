import { useState, useEffect } from 'react';
import { FLAG_API, FLAG_IMAGE } from '../services/api/flagApi.js'

export const useFetchFlag = (weather) => {
  const [flagImagUrl, setFlagImagUrl] = useState("")

  useEffect(() => {
    if (weather) { // statuecode
      setFlagImagUrl(FLAG_API + weather.city.country + FLAG_IMAGE);
    }

  }, [weather])

  return { flagImagUrl }
}