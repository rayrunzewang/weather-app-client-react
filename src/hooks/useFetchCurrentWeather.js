import { useState } from 'react';
import { getWeather } from '../services/api/weatherApi.js';

export const useFetchCurrentWeather = () => {
  const [currentCity, setCurrentCity] = useState({})
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleCityInputChange = (e) => {
    setCurrentCity({ ...currentCity, cityName: e.target.value });
  };

  const handleCountryInputChange = (e) => {
    setCurrentCity({ ...currentCity, countryName: e.target.value });
  };

  const handleSearch = async () => {
    if (currentCity.cityName !== '' && currentCity.countryName !== '') {
      try {
        const result = await getWeather(currentCity.cityName, currentCity.countryName);
        setCurrentWeather(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }
  console.log(currentWeather)
  return { currentWeather, setCurrentCity, currentCity, handleCityInputChange, handleCountryInputChange, handleSearch }
}