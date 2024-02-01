import React from 'react'
import CityImage from './CityImage'
import CityTemp from './CityTemp'


import './CurrentCity.scss'
const index = ({ cityData, onClick, weatherData, flagImagUrl }) => {

  return (
    <div className='Home__current-city'>
      <CityImage cityData={cityData} onClick={onClick} flagImagUrl={flagImagUrl}></CityImage>
      <CityTemp weatherData={weatherData}></CityTemp>
    </div>
  )
}

export default index