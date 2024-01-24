import React from 'react'
import CityImage from './CityImage'
import CityTemp from './CityTemp'
import './CurrentCity.scss'

const index = ({weatherData, onAddCollectionItem}) => {
  const {city: cityData} = weatherData
  return (
    <div className='Home__current-city'>
      <CityImage cityData={cityData} onAddCollectionItem={onAddCollectionItem}></CityImage>
      <CityTemp weatherData={weatherData}></CityTemp>
    </div>
  )
}

export default index