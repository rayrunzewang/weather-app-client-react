import React, { useState, useEffect, useRef } from 'react';
import DisplayPanel from './components/DisplayPanel/Dashboard.jsx/index.js';
import CollectionSection from './components/CollectionSection';
import SearchBar from './components/SearchBar';
import backgroundImage from './backgroundImage'
import Clear from './assets/Clear.jpg';
import { getWeatherData } from './services/api/weatherApi.js'
import { addCollectionItem } from './services/api/weatherApi.js'
import { FLAG_API, FLAG_IMAGE } from './services/api/flagApi.js'

import './App.scss';
function App() {
  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')

  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState(Clear);
  const [collectionItems, setCollectionItems] = useState(true)
  const [cityData , setCityData] = useState(null)
  const [flagImagUrl, setFlagImagUrl] = useState("")

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

  const handleUpdateCollectionItem = () => {
    setCollectionItems((prev) => !prev)
  }
  const handleCityClick = async (cityData) => {
    console.log(cityData)
    setFlagImagUrl(FLAG_API + cityData.countryName + FLAG_IMAGE)
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

  const handleAddCollectionItem = () => {
    const { city: cityData } = weatherData
    setFlagImagUrl(FLAG_API + cityData.country + FLAG_IMAGE)
    // Post Logic in api service
    let url = "http://localhost:3001/api/v1/city";
    setCityData({
      cityName: cityData.name,
      countryName: cityData.country
    })
      addCollectionItem(url, cityData);
    setCollectionItems((prev) => !prev)
    // 获取城市信息
    // fetch 图片
  }

  return (
    <div className="home__container" style={{ backgroundImage: `url(${weatherImage})` }}>
      <SearchBar inputCityRef={inputCityRef} inputCountryRef={inputCountryRef} cityName={cityName} countryName={countryName} handleCityInputChange={handleCityInputChange} handleCountryInputChange={handleCountryInputChange} onSearch={handleSearch} />
      <div className='main'>
        <CollectionSection onCityClick={handleCityClick} collectionItems={collectionItems} onDelCollectionItem={handleUpdateCollectionItem} ></CollectionSection>
        {weatherData && (
          <DisplayPanel weatherData={weatherData} onClick={handleAddCollectionItem} flagImagUrl={flagImagUrl} />
        )
        }
      </div>
    </div>
  );
}

export default App;
