import React, { useState, useEffect } from 'react'
import ToggleButton from './ToggleButton'
import './collection.scss'
import { getWeatherData } from '../../services/api/weatherApi'

const Index = ({ onSearch, collectionItems, onDelCollectionItem }) => {
  const [isCollectionShow, setIsCollectionShow] = useState(true);
  const [cityCollection, setCityCollection] = useState(null);
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')

  useEffect(() => {
    console.log('collection:', collectionItems);
    const getCollection = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/cities')
        const result = await response.json()
        setCityCollection(result)
      } catch (error) {
        console.error(error)
      }
    }

    getCollection();
  }, [collectionItems]);

  const handleToggleClick = () => {
    setIsCollectionShow(!isCollectionShow);
  }

  const handleCityClick = async (item) => {
    if (item.cityName !== '' && item.countryName !== '') {
      try {
        const weatherData = await getWeatherData(item.cityName, item.countryName);
        setCityName(item.cityName);
        setCountryName(item.countryName)
        const cityData = { cityName, countryName }
        console.log('text', weatherData, cityData)
        onSearch(weatherData, cityData)

      } catch (error) {
        alert(error.message)
        console.error(error)
      }
    } else {
      console.log(item)
      console.log(item.cityName, item.countryName)
      alert('Please input city name')
    }
  }

  const handleDelete = (item) => {
    const id = item._id

    const url = "http://localhost:3001/api/v1/city/" + id
    console.log(url)
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
          onDelCollectionItem()
        }
      } catch (error) {
        console.error({ error })
      }
    }
    deleteItem(url)
  }

  return (
    <div className={`collection-container ${isCollectionShow && 'collection-container-show'}`}>
      <div className='collection-panel'>
        <p className='collection-panel-title'>Collections</p>
        <ul className='collection-ul'>
          {cityCollection &&
            cityCollection.map((item) => {
              return <li className='collection-li' key={item._id} >
                <span className='collection-li-item' onClick={(e) => handleCityClick(item)}>{`${item.cityName.toUpperCase()}, ${item.countryName.toUpperCase()}`}</span>
                <span className='delete-button' onClick={() => handleDelete(item)}>x</span>
              </li>
            })
          }
        </ul>
      </div>
      <div className='toggle-container'>
        <ToggleButton className={`toggle-button ${isCollectionShow && 'button-move-on-container-show'}`} text="Collection" onClick={handleToggleClick} />
      </div>
    </div>
  )
}

export default Index