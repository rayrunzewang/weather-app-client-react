import React, { useState, useEffect } from 'react';
import Display from './Display';
import Collection from './Collection';
import SearchBar from './SearchBar';
import { postAddCity } from '../../services/api/weatherApi.js'
import { fetchCollection } from '../../services/api/fetchCollection.js';
import { useFetchCurrentWeather } from '../../hooks/useFetchCurrentWeather.js';
// import { useUpdateImage } from '../../hooks/useUpdateImage.js';
import { useFetchFlag } from '../../hooks/useFetchFlag.js';
import deleteCity from '../../services/api/deleteCity.js';
import '../../App.scss';

function WeatherCard() {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('');
  const [isCollectionLoading, setIsCollectionLoading] = useState(false);
  const [collection, setCollection] = useState([]);
  const { weather, isLoading } = useFetchCurrentWeather(location);
  const { flagImagUrl } = useFetchFlag(weather);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // const { weatherImage } = useUpdateImage(currentWeather);
  useEffect(() => {
    const apiurl = 'http://localhost:3001/api/v1/cities'

    // TODO: then
    const getCollection = async (url) => {
      setIsCollectionLoading(true);
      const result = await fetchCollection(url);
      setCollection(result);
      setIsCollectionLoading(false);
    };

    getCollection(apiurl);
  }, []);

  const searchWeather = () => {
    setLocation(inputValue);
    setInputValue('');
  }

  const handleAddLocation = () => {
    // Post Logic in api service
    const addLocation = async () => {
      if (weather.city.name && weather.city.country) {
        let url = "http://localhost:3001/api/v1/cities";
        const response = await postAddCity(url, {
          city: weather.city.name,
          country: weather.city.country
        });
        if (response) {
          const apiurl = 'http://localhost:3001/api/v1/cities'
          const getCollection = async (url) => {
            setIsCollectionLoading(true);
            const result = await fetchCollection(url);
            setCollection(result);
            setIsCollectionLoading(false);
          };

          getCollection(apiurl);
        }
      }
    }

    addLocation()
    // 获取城市信息
    // fetch 图片
  }

  const handleCollectionItemClick = async (city) => {
    setLocation(city.city);
  }

  const handleDelete = async (item) => {
    const id = item._id;
    const url = "http://localhost:3001/api/v1/citys/" + id;

    const Result = await deleteCity(url);

    if (Result.success) {
      const apiurl = 'http://localhost:3001/api/v1/cities'
      const getCollection = async (url) => {
        setIsCollectionLoading(true);
        const result = await fetchCollection(url);
        setCollection(result);
        setIsCollectionLoading(false);
      };

      getCollection(apiurl);
    } else {
      console.error(Result.error);
    }
  }

  return (
    <div>
      <SearchBar
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSearch={searchWeather}
      />
      <div className='main'>
        <Collection
          isLoading={isCollectionLoading}
          onItemClick={handleCollectionItemClick}
          collection={collection}
          onDelete={handleDelete}
        ></Collection>
        <Display
          isLoading={isLoading}
          weather={weather}
          onAdd={handleAddLocation}
          flagImagUrl={flagImagUrl}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
