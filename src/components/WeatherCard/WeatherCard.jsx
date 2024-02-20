import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Display from './Display';
import Collection from './Collection';
import SearchBar from './SearchBar';
import { postAddCity } from '../../services/api/weatherApi.js'
import { fetchCollection } from '../../services/api/fetchCollection.js';
import { useFetchCurrentWeather } from '../../hooks/useFetchCurrentWeather.js';
import { getWeather } from '../../services/api/weatherApi.js'
import { useUpdateImage } from '../../hooks/useUpdateImage.js'
import { useFetchFlag } from '../../hooks/useFetchFlag.js'
import deleteCity from '../../services/api/deleteCity.js'
import '../../App.scss';

function WeatherCard() {
  const [collectionChange, setCollectionChange] = useState(0)
  const [cityCollection, setCityCollection] = useState([])
  const [cityData, setCityData] = useState(null)
  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);
  const { currentWeather, setCurrentCity, currentCity, handleCityInputChange, handleCountryInputChange, handleSearch } = useFetchCurrentWeather();
  const { weatherImage } = useUpdateImage(currentWeather);
  const { flagImagUrl } = useFetchFlag(currentWeather);

  useEffect(() => {
    const apiurl = 'http://localhost:3001/api/v1/cities'

    const getCollection = async (url) => {
      try {
        const result = await fetchCollection(url);
        setCityCollection(result);
      } catch (error) {
        console.error(error);
      }
    };

    getCollection(apiurl);
  }, [collectionChange]);

  useEffect(() => {
    const addCity = async () => {
      if (cityData) {
        let url = "http://localhost:3001/api/v1/citys";
        const postCityResult = await postAddCity(url, cityData);
        console.log(postCityResult)
        if (postCityResult) {
          setCollectionChange((prev) => prev + 1)
        }
      }
    }
    addCity()
  }, [cityData]) // 添加城市数据 Collection

  const handleAddCity = () => {
    console.log("Click", currentWeather)
    // Post Logic in api service
    setCityData({
      cityName: currentWeather.city.name,
      countryName: currentWeather.city.country
    })
    // 获取城市信息
    // fetch 图片
  }

  const handleCityClick = async (city) => {
    console.log(city)
    if (city.cityName !== '' && city.countryName !== '') {
      try {
        const result = await getWeather(city.cityName, city.countryName);
        setCurrentCity(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }

  const handleDelete = async (item) => {
    const id = item._id
    const url = "http://localhost:3001/api/v1/citys/" + id

    const deleteResult = await deleteCity(url)

    if (deleteResult.success) {
      setCollectionChange((prev) => prev + 1)
    } else {
      console.error(deleteResult.error);
    }
  } // ok

  return (
    <div >
      <SearchBar inputCityRef={inputCityRef} inputCountryRef={inputCountryRef} cityInfo={currentCity} handleCityInputChange={handleCityInputChange} handleCountryInputChange={handleCountryInputChange} onSearch={handleSearch} />
      <div className='main'>
        <Collection onCityClick={handleCityClick} cityCollection={cityCollection} onCityDelete={handleDelete} ></Collection>
        {currentWeather && (
          <Display weatherData={currentWeather} onAdd={handleAddCity} flagImagUrl={flagImagUrl} />
        )}
      </div>
    </div>


  );
}

export default WeatherCard;
