import { useState, useEffect } from 'react'
import ToggleButton from './Button'
import useToggle from './hook/useToggle.js'
import { getWeatherData } from '../../services/api/weatherApi'
import { fetchCityCollection } from './api/fetchCityCollection';

import './collection.scss'

const Collection = ({ onSearch, collectionItems, onDelCollectionItem }) => {
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')
  const [cityCollection, setCityCollection] = useState(null);

  // useToggle custom hook
  const [isCollectionShow, toggle] = useToggle(true);

  useEffect(() => {
    const apiurl = 'http://localhost:3001/api/v1/cities'

    const getCollection = async (url) => {
      try {
        const result = await fetchCityCollection(url);
        setCityCollection(result);
      } catch (error) {
        console.error(error);
      }
    };

    getCollection(apiurl);
  }, [collectionItems]);

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

      {/* reuseable button */}
      <div className='toggle-container'>
        <ToggleButton className={`toggle-button ${isCollectionShow && 'button-move-on-container-show'}`} children="Collection" onClick={toggle} />
      </div>
      {/* --------------- */}

      
    </div>
  )
}

export default Collection