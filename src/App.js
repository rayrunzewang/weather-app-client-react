import React, { useState, useEffect, useRef } from 'react';
import DisplayPanel from './components/DisplayPanel';
import CollectionSection from './components/CollectionSection';
import SearchBar from './components/SearchBar';
import backgroundImage from './backgroundImage'
import Clear from './assets/Clear.jpg';
import { getWeatherData } from './services/api/weatherApi.js'


import './App.scss';
function App() {
  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')

  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState(Clear);
  const [collectionItems, setCollectionItems] = useState(true)

  useEffect(() => {
    if (weatherData) {
      const weather = weatherData.list[0].weather[0].main
      const bgImg = backgroundImage(weather)
      setWeatherImage(bgImg)
    }
  }, [weatherData])

  const handleCityInputChange = (e) => {
    console.log('cityName', e.target.value)
    setCityName(e.target.value);
  };

  const handleCountryInputChange = (e) => {
    console.log('countryName', e.target.value)
    setCountryName(e.target.value);
  };

  const handleSearch = async () => {
    if (cityName !== '' && countryName !== '') {
      try {
        const result = await getWeatherData(cityName, countryName);
        setWeatherData(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }

  const handleAddCollectionItem = () => {
    setCollectionItems((prev) => !prev)
  }
  const handleCityClick = async (cityData) => {
    console.log(cityData)
    if (cityData.cityName !== '' && cityData.countryName !== '') {
      try {
        const result = await getWeatherData(cityData.cityName, cityData.countryName);
        setWeatherData(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }
  
  return (
    <div className="home__container" style={{ backgroundImage: `url(${weatherImage})` }}>
      <SearchBar inputCityRef={inputCityRef} inputCountryRef={inputCountryRef} cityName={cityName} countryName={countryName} handleCityInputChange={handleCityInputChange} handleCountryInputChange={handleCountryInputChange} onSearch={handleSearch} />
      <div className='main'>
        <CollectionSection onCityClick={handleCityClick} collectionItems={collectionItems} onDelCollectionItem={handleAddCollectionItem} ></CollectionSection>
        <DisplayPanel weatherData={weatherData} onAddCollectionItem={handleAddCollectionItem} />
      </div>
    </div>
  );
}

export default App;
