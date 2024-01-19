import React, { useState, useRef } from 'react';
import InputBar from './InputBar/index.js'
import SearchButton from './InputBar/SearchButton/index.js'
import getWeatherData from '../../services/api/weatherApi.js'
import './search.scss'

const Index = ({ onSearch }) => {
  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')
  const currentDate = new Date().toLocaleString();

  const handleCityInputChange = (e) => {
    console.log('cityName', e.target.value)
    setCityName(e.target.value);
  };
  const handleCountryInputChange = (e) => {
    console.log('countryName', e.target.value)
    setCountryName(e.target.value);
  };
  const handleClick = async () => {
    if (cityName !== '' && countryName !== '') {
      try {
        const weatherData = await getWeatherData(cityName, countryName);
        const cityData = {cityName, countryName}
        
        // const imgUrl = await getImageUrl(cityName, countryName);

        // city name API logic
        // const getImageUrl = async () =>{
        //   const response = await fetch ()
        //   const result = response.json();
        //   console.log(result)
        // }

        onSearch(weatherData, cityData)

      } catch (error) {
        alert(error.message)
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }
  return (
    <div className='home__search'>
      <div>
        <h1 className='home__logo'>Weather</h1>
      </div>
      <div className='home__input-container'>
        <InputBar ref={inputCityRef} value={cityName} onChange={handleCityInputChange} placeHolder={'City Name'}></InputBar>
        <InputBar ref={inputCountryRef} value={countryName} onChange={handleCountryInputChange} placeHolder={'Country Code'}></InputBar>
      </div>
      <div className='home__button-container'>
        <SearchButton onClick={handleClick}></SearchButton>
      </div>
      <div>
        <p className='home__clock'>{currentDate}</p>
      </div>
    </div>
  )
}

export default Index