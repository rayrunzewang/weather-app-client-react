import { useState, useEffect } from 'react'
import ToggleButton from './component/ToggleButton'
import CollectionList from './component/CollectionList'
import useToggle from './hook/useToggle.js'
import { getWeatherData } from '../../services/api/weatherApi.js'
import './collectionSection.scss'

const CollectionSection = ({ onCityClick, collectionItems, onCityDelete }) => {
  // const [cityName, setCityName] = useState('')
  // const [countryName, setCountryName] = useState('')

  // useToggle custom hook
  const [isCollectionVisible, toggle] = useToggle(true);

  

  // const handleCityClick = async (item) => {
  //   if (item.cityName !== '' && item.countryName !== '') {
  //     try {
  //       const weatherData = await getWeatherData(item.cityName, item.countryName);
  //       setCityName(item.cityName);
  //       setCountryName(item.countryName)
  //       const cityData = { cityName, countryName }
  //       onCityClick(cityData)

  //     } catch (error) {
  //       alert(error.message)
  //       console.error(error)
  //     }
  //   } else {
  //     alert('Please input city name')
  //   }
  // }



  return (
    <div className={`collection-container  ${isCollectionVisible && 'collection-container-show'}`} >
      <CollectionList cityCollection={collectionItems} onCityClick={onCityClick} onCityDelete={onCityDelete}  />

      <div className='toggle-container'>      {/* reuseable toggle button */}
        <ToggleButton isCollectionVisible={isCollectionVisible} onClick={toggle}>Collection</ToggleButton >
      </div>

    </div>
  )
}

export default CollectionSection