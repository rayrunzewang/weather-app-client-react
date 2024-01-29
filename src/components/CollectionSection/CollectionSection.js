import { useState, useEffect } from 'react'
import ToggleButton from './component/ToggleButton'
import CollectionList from './component/CollectionList'
import useToggle from './hook/useToggle.js'
import { getWeatherData } from '../../services/api/weatherApi.js'
import { fetchCityCollection } from './api/fetchCityCollection.js';
import './collectionSection.scss'

const CollectionSection = ({ onCityClick, collectionItems, onDelCollectionItem }) => {
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')
  const [cityCollection, setCityCollection] = useState(null);

  // useToggle custom hook
  const [isCollectionVisible, toggle] = useToggle(true);

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
        onCityClick(cityData)

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
    <div className={`collection-container  ${isCollectionVisible && 'collection-container-show'}`} >
      <CollectionList cityCollection={cityCollection} onCityClick={handleCityClick} onDeleteClick={handleDelete} />

      <div className='toggle-container'>      {/* reuseable toggle button */}
        <ToggleButton isCollectionVisible={isCollectionVisible} onClick={toggle}>Collection</ToggleButton >
      </div>

    </div>
  )
}

export default CollectionSection