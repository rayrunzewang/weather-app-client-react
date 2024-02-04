import React, { useState, useEffect, useRef } from 'react';
import DisplayPanel from './components/DisplayPanel';
import CollectionSection from './components/CollectionSection';
import SearchBar from './components/SearchBar';
import backgroundImage from './backgroundImage'
import Clear from './assets/Clear.jpg';
import { getWeatherData } from './services/api/weatherApi.js'
import { postAddCity } from './services/api/weatherApi.js'
import { FLAG_API, FLAG_IMAGE } from './services/api/flagApi.js'
import { fetchCityCollection } from './components/CollectionSection/api/fetchCityCollection.js';


import './App.scss';
function App() {
  const inputCityRef = useRef(null);
  const inputCountryRef = useRef(null);


  const [cityInfo, setCityInfo] = useState({})



  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState(Clear);
  const [collectionItems, setCollectionItems] = useState([])
  const [cityData, setCityData] = useState(null)
  const [flagImagUrl, setFlagImagUrl] = useState("")

  useEffect(() => {
    if (weatherData) {
      const weather = weatherData.list[0].weather[0].main
      const bgImg = backgroundImage(weather)
      setWeatherImage(bgImg)
    }
  }, [weatherData]) // 获得天气数据，更换天气背景

  useEffect(() => {
    if (weatherData) {
      setFlagImagUrl(FLAG_API + weatherData.city.country + FLAG_IMAGE);
      console.log('更新', weatherData.city.country)
    }
  }, [weatherData]) // 获得天气数据后，立即更新国旗

  useEffect(() => {
    const apiurl = 'http://localhost:3001/api/v1/cities'

    const getCollection = async (url) => {
      try {
        const result = await fetchCityCollection(url);
        setCollectionItems(result);
      } catch (error) {
        console.error(error);
      }
    };

    getCollection(apiurl);
  }, []);

  useEffect(() => {
    if (cityData) {
      let url = "http://localhost:3001/api/v1/city";
      postAddCity(url, cityData);
      // setCollectionItems((prev) => !prev)
    }
  }, [cityData]) // 添加城市数据 Collection

  const handleAddCity = () => {
    console.log("Click", weatherData)
    // Post Logic in api service
    setCityData({
      cityName: weatherData.city.name,
      countryName: weatherData.city.country
    })

    // 获取城市信息
    // fetch 图片
  }

  const handleCityInputChange = (e) => {
    setCityInfo({ ...cityInfo, cityName: e.target.value });
  }; //ok 

  const handleCountryInputChange = (e) => {
    setCityInfo({ ...cityInfo, countryName: e.target.value });
  };  // ok


  const handleSearch = async () => {
    if (cityInfo.cityName !== '' && cityInfo.countryName !== '') {
      try {
        const result = await getWeatherData(cityInfo.cityName, cityInfo.countryName);
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
  const handleCityClick = async (city) => {
    console.log(city)
    if (city.cityName !== '' && city.countryName !== '') {
      try {
        const result = await getWeatherData(city.cityName, city.countryName);
        setWeatherData(result);
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Please input city name')
    }
  }



  const handleDelete = (item) => {
    const id = item._id

    const url = "http://localhost:3001/api/v1/city/" + id
    async function deleteItem(url) {
      try {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })

        if (response.status === 204) {
          console.log("Item deleted")
          // handleUpdateCollectionItem()
        }
      } catch (error) {
        console.error({ error })
      }
    }
    deleteItem(url)
    
  }


  console.log(collectionItems)

  return (
    <div className="home__container" style={{ backgroundImage: `url(${weatherImage})` }}>

      <SearchBar inputCityRef={inputCityRef} inputCountryRef={inputCountryRef} cityInfo={cityInfo} handleCityInputChange={handleCityInputChange} handleCountryInputChange={handleCountryInputChange} onSearch={handleSearch} />

      <div className='main'>

        <CollectionSection onCityClick={handleCityClick} collectionItems={collectionItems}  onCityDelete={handleDelete} ></CollectionSection>

        {weatherData && (
          <DisplayPanel weatherData={weatherData} onAdd={handleAddCity} flagImagUrl={flagImagUrl} />
        )
        }

      </div>
    </div>
  );
}

export default App;
